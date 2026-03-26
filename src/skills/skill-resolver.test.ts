import { describe, expect, test } from "bun:test"
import { resolveSkillContent } from "./skill-resolver"

describe("resolveSkillContent", () => {
  test("returns empty for empty array", async () => {
    const result = await resolveSkillContent([])
    expect(result.content).toBeUndefined()
    expect(result.contents).toEqual([])
    expect(result.error).toBeNull()
  })

  test("resolves single skill", async () => {
    const result = await resolveSkillContent(["git-master"])
    expect(result.error).toBeNull()
    expect(result.content).toContain("git-master-skill")
    expect(result.contents.length).toBe(1)
  })

  test("resolves multiple skills", async () => {
    const result = await resolveSkillContent(["git-master", "typescript-programmer"])
    expect(result.error).toBeNull()
    expect(result.contents.length).toBe(2)
    expect(result.content).toContain("git-master-skill")
    expect(result.content).toContain("typescript-programmer-skill")
  })

  test("returns error for unknown skill", async () => {
    const result = await resolveSkillContent(["unknown-skill"])
    expect(result.error).toContain("Skills not found")
    expect(result.error).toContain("unknown-skill")
  })

  test("returns error for mixed known/unknown skills", async () => {
    const result = await resolveSkillContent(["git-master", "unknown-skill"])
    expect(result.error).toContain("Skills not found")
    expect(result.error).toContain("unknown-skill")
  })

  test("resolves all builtin skills", async () => {
    const allSkills = ["git-master", "frontend-ui-ux", "playwright", "typescript-programmer", "architecture-patterns"]
    const result = await resolveSkillContent(allSkills)
    expect(result.error).toBeNull()
    expect(result.contents.length).toBe(5)
  })
})
