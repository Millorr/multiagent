export type AgentMode = "primary" | "subagent" | "all"
export type AgentCost = "FREE" | "CHEAP" | "EXPENSIVE"

export interface AgentPromptMetadata {
  description: string
  mode: AgentMode
  cost: AgentCost
  triggers: Array<{ domain: string; trigger: string }>
}
