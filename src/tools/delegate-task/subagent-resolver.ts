import { AGENTS, SUBAGENT_TYPES } from "../../constants/agents"

export interface SubagentResolutionResult {
  agentToUse: string
  agentModel: string | undefined
  error?: string
}

export function resolveSubagent(subagentType: string): SubagentResolutionResult {
  if (!SUBAGENT_TYPES.includes(subagentType)) {
    return {
      agentToUse: "",
      agentModel: undefined,
      error: `Unknown subagent type: "${subagentType}". Available: ${SUBAGENT_TYPES.join(", ")}`,
    }
  }

  const agent = AGENTS[subagentType]
  return {
    agentToUse: subagentType,
    agentModel: agent.mode === "primary" ? undefined : "minimax/MiniMax-M2.7",
  }
}