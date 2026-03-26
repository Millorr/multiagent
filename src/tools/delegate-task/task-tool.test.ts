import { describe, expect, test } from "bun:test"
import { createTaskTool } from "./task-tool"

describe("createTaskTool", () => {
  test("creates tool with correct description", () => {
    const tool = createTaskTool()
    expect(tool.description).toContain("category")
    expect(tool.description).toContain("subagent_type")
  })

  test("tool has correct args", () => {
    const tool = createTaskTool()
    expect(tool.args.category).toBeDefined()
    expect(tool.args.subagent_type).toBeDefined()
    expect(tool.args.load_skills).toBeDefined()
    expect(tool.args.run_in_background).toBeDefined()
  })

  test("execute returns error when no category or subagent_type", async () => {
    const taskTool = createTaskTool()
    const result = await taskTool.execute({
      load_skills: [],
      description: "test",
      prompt: "test prompt",
      run_in_background: false,
    } as any, {} as any)
    expect(result).toContain("Error")
  })
})
