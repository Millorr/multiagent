import type { SkillResolutionResult } from "../types/skill"
import { loadBuiltinSkillsFromDisk } from "./builtin-load"

// Cache loaded skills
let cachedSkills: Record<string, { name: string; description: string; content: string }> | null = null

function getBuiltinSkills(): Record<string, { name: string; description: string; content: string }> {
  if (!cachedSkills) {
    const skills = loadBuiltinSkillsFromDisk()
    cachedSkills = {}
    for (const skill of skills) {
      cachedSkills[skill.name] = skill
    }
  }
  return cachedSkills
}

export async function resolveSkillContent(
  skills: string[],
  _options?: { directory?: string }
): Promise<SkillResolutionResult> {
  if (skills.length === 0) {
    return { content: undefined, contents: [], error: null }
  }

  const notFound: string[] = []
  const resolvedContents: string[] = []
  const builtinSkills = getBuiltinSkills()

  for (const skillName of skills) {
    const builtin = builtinSkills[skillName]
    if (builtin) {
      resolvedContents.push(builtin.content)
    } else {
      notFound.push(skillName)
    }
  }

  if (notFound.length > 0) {
    const available = Object.keys(builtinSkills).join(", ")
    return {
      content: undefined,
      contents: [],
      error: `Skills not found: ${notFound.join(", ")}. Available: ${available}`,
    }
  }

  return {
    content: resolvedContents.join("\n\n"),
    contents: resolvedContents,
    error: null,
  }
}