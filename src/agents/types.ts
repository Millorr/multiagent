export type AgentMode = "primary" | "subagent" | "all"

export interface AgentConfig {
  name: string
  description: string
  model?: string
  prompt?: string
  mode: AgentMode
  tools?: string[]
}
