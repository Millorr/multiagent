import type { SkillResolutionResult } from "../types/skill"
import { BUILTIN_SKILLS } from "./builtin-skills"

export async function resolveSkillContent(
  skills: string[],
  _options?: { directory?: string }
): Promise<SkillResolutionResult> {
  if (skills.length === 0) {
    return { content: undefined, contents: [], error: null }
  }

  const notFound: string[] = []
  const resolvedContents: string[] = []

  for (const skillName of skills) {
    const builtin = BUILTIN_SKILLS[skillName]
    if (builtin) {
      resolvedContents.push(builtin.content)
    } else {
      notFound.push(skillName)
    }
  }

  if (notFound.length > 0) {
    const available = Object.keys(BUILTIN_SKILLS).join(", ")
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
