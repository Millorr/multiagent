export const ASSISTANT_AGENT = "assistant"

export const SUBAGENT_TYPES_LIST = [
  "searcher",
  "librarian",
  "architect",
  "strategist",
  "reviewer",
  "planner",
  "bridge",
  "worker",
] as const

export type SubagentType = typeof SUBAGENT_TYPES_LIST[number]
