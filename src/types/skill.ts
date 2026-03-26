export interface BuiltinSkill {
  name: string
  description: string
  content: string
}

export interface AvailableSkill {
  name: string
  description: string
  location: "user" | "project" | "plugin"
}

export interface SkillResolutionResult {
  content: string | undefined
  contents: string[]
  error: string | null
}
