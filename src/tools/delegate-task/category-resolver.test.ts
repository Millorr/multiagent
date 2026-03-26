import { describe, expect, test } from "bun:test"
import { resolveCategory } from "./category-resolver"

describe("resolveCategory", () => {
  test("resolves valid category quick", () => {
    const result = resolveCategory("quick")
    expect(result.agentToUse).toBe("assistant")
    expect(result.categoryModel).toBe("minimax/MiniMax-M2.7")
    expect(result.categoryPromptAppend).toContain("SMALL/QUICK")
  })

  test("returns error for unknown category", () => {
    const result = resolveCategory("invalid")
    expect(result.error).toContain("Unknown category")
  })

  test("resolves deep category", () => {
    const result = resolveCategory("deep")
    expect(result.agentToUse).toBe("assistant")
    expect(result.categoryModel).toBe("minimax/MiniMax-M2.7")
  })
})
