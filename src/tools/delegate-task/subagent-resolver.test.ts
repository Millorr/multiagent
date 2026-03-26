import { describe, expect, test } from "bun:test"
import { resolveSubagent } from "./subagent-resolver"

describe("resolveSubagent", () => {
  test("resolves valid subagent searcher", () => {
    const result = resolveSubagent("searcher")
    expect(result.agentToUse).toBe("searcher")
    expect(result.agentModel).toBe("minimax/MiniMax-M2.7")
  })

  test("returns error for unknown subagent", () => {
    const result = resolveSubagent("invalid")
    expect(result.error).toContain("Unknown subagent type")
  })

  test("resolves architect subagent", () => {
    const result = resolveSubagent("architect")
    expect(result.agentToUse).toBe("architect")
    expect(result.agentModel).toBe("minimax/MiniMax-M2.7")
  })
})