import type { Plugin } from "@opencode-ai/plugin"
import { createTaskTool } from "./tools/delegate-task"
import { loadBuiltinCommands } from "./commands"
import { createBuiltinAgents } from "./agents"
import type { CommandDefinition } from "./commands/types"
import { resolve } from "path"

export const plugin: Plugin = async (_ctx) => {
  const taskTool = createTaskTool()
  const builtinCommands = loadBuiltinCommands()
  const builtinAgents = createBuiltinAgents()
  const skillsDir = resolve(__dirname, "skills", "builtin")

  return {
    tool: {
      task: taskTool,
    },
    config: async (config) => {
      // Wire up builtin commands
      ;(config as unknown as { command?: Record<string, CommandDefinition> }).command = {
        ...builtinCommands,
        ...((config as unknown as { command?: Record<string, CommandDefinition> }).command ?? {}),
      }

      // Wire up skills directory for OpenCode discovery
      const cfg = config as unknown as { skills?: { paths?: string[] } }
      cfg.skills = cfg.skills ?? {}
      cfg.skills.paths = cfg.skills.paths ?? []
      if (!cfg.skills.paths.includes(skillsDir)) {
        cfg.skills.paths.push(skillsDir)
      }

      // Wire up agents for OpenCode UI
      const agentCfg = config as unknown as { agent?: Record<string, unknown> }
      agentCfg.agent = agentCfg.agent ?? {}
      // Only add agents that aren't already defined
      for (const [name, agent] of Object.entries(builtinAgents)) {
        if (!(name in agentCfg.agent)) {
          agentCfg.agent[name] = agent
        }
      }
    },
  }
}
