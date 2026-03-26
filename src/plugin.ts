import type { Plugin, PluginInterface } from "@opencode-ai/plugin"
import { createTaskTool } from "./tools/delegate-task"

export const plugin: Plugin = async (_ctx): Promise<PluginInterface> => {
  const taskTool = createTaskTool()

  return {
    name: "multiagent",
    tool: {
      task: taskTool,
    },
    hooks: {},
  }
}
