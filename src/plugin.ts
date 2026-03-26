import type { Plugin } from "@opencode-ai/plugin"
import { createTaskTool } from "./tools/delegate-task"
import { loadBuiltinCommands } from "./commands"
import type { CommandDefinition } from "./commands/types"
import { resolve } from "path"

export const plugin: Plugin = async (_ctx) => {
  const taskTool = createTaskTool()
  const builtinCommands = loadBuiltinCommands()
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
    },
  }
}