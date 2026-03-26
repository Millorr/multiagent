import type { Plugin } from "@opencode-ai/plugin"
import { createTaskTool } from "./tools/delegate-task"

export const plugin: Plugin = async (_ctx) => {
  const taskTool = createTaskTool()

  return {
    tool: {
      task: taskTool,
    },
  }
}
