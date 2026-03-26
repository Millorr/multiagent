import { resolve } from "path"
import { existsSync, readFileSync } from "fs"

const SKILL_DIR = resolve(__dirname, "builtin")

export interface SkillInfo {
  name: string
  description: string
  content: string
}

const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/

function parseFrontmatter(content: string): { name: string; description: string; content: string } {
  const match = content.match(frontmatterRegex)
  if (!match) {
    return { name: "", description: "", content }
  }

  const frontmatter = match[1]
  const body = match[2]

  let name = ""
  let description = ""

  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":")
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim()
      const value = line.slice(colonIdx + 1).trim()
      if (key === "name") name = value
      if (key === "description") description = value
    }
  }

  return { name, description, content: body }
}

export function loadBuiltinSkillsFromDisk(): SkillInfo[] {
  const skills: SkillInfo[] = []

  const skillDirs = ["git-master", "frontend-ui-ux", "playwright", "typescript-programmer", "architecture-patterns"]

  for (const skillDir of skillDirs) {
    const skillPath = resolve(SKILL_DIR, skillDir, "SKILL.md")
    if (existsSync(skillPath)) {
      const content = readFileSync(skillPath, "utf8")
      const parsed = parseFrontmatter(content)
      skills.push({
        name: parsed.name || skillDir,
        description: parsed.description,
        content: parsed.content
      })
    }
  }

  return skills
}