import { tool, type ToolDefinition } from "@opencode-ai/plugin"
import type { DelegateTaskArgs } from "./types"
import { CATEGORY_NAMES } from "../../constants/categories"
import { SUBAGENT_TYPES_LIST } from "./constants"
import { resolveCategory } from "./category-resolver"
import { resolveSubagent } from "./subagent-resolver"
import { buildSystemContent, buildTaskPrompt } from "./prompt-builder"

export function createTaskTool(): ToolDefinition {
  const categoryList = CATEGORY_NAMES.map((name) => `  - ${name}`).join("\n")

  const description = `Spawn agent task with category-based or direct agent selection.

  REQUIRED: Provide ONE of:
  - category: For task delegation (uses Assistant with category-optimized model)
  - subagent_type: For direct agent invocation

  Available categories:
  ${categoryList}

  Available subagent_types: ${SUBAGENT_TYPES_LIST.join(", ")}

  - load_skills: ALWAYS REQUIRED. Pass [] if no skills needed.
  - run_in_background: true=async (returns task_id), false=sync (waits)
  - session_id: Existing session to continue`

  return tool({
    description,
    args: {
      load_skills: tool.schema
        .array(tool.schema.string())
        .describe("Skill names to inject. REQUIRED - pass [] if no skills needed."),
      description: tool.schema
        .string()
        .describe("Short task description (3-5 words)"),
      prompt: tool.schema.string().describe("Full detailed prompt for the agent"),
      run_in_background: tool.schema
        .boolean()
        .describe("true=async, false=sync"),
      category: tool.schema.string().optional(),
      subagent_type: tool.schema.string().optional(),
      session_id: tool.schema.string().optional(),
    },
    async execute(args: DelegateTaskArgs, _toolContext) {
      if (!args.category && !args.subagent_type) {
        return "Error: Must provide either category or subagent_type"
      }

      let agentToUse: string
      let systemContent: string

      if (args.category) {
        const resolution = resolveCategory(args.category)
        if (resolution.error) {
          return resolution.error
        }
        agentToUse = resolution.agentToUse
        systemContent = buildSystemContent({
          categoryPromptAppend: resolution.categoryPromptAppend,
        })
      } else {
        const resolution = resolveSubagent(args.subagent_type!)
        if (resolution.error) {
          return resolution.error
        }
        agentToUse = resolution.agentToUse
        systemContent = ""
      }

      const executionMode = args.run_in_background ? "background" : "sync"
      const prompt = buildTaskPrompt(args.prompt, agentToUse)

      return `[Would execute ${executionMode} task]
Agent: ${agentToUse}
Description: ${args.description}
Prompt: ${prompt.slice(0, 100)}...
System: ${systemContent.slice(0, 50) || "(none)"}...`
    },
  })
}
