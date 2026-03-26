import type { AgentPromptMetadata } from "../types/agent"

export const AGENTS: Record<string, AgentPromptMetadata> = {
  searcher: {
    description: "Fast internal codebase search",
    mode: "subagent",
    cost: "FREE",
    triggers: [
      { domain: "Code Search", trigger: "Find patterns, grep codebase" },
    ],
  },
  librarian: {
    description: "External docs and code research",
    mode: "subagent",
    cost: "CHEAP",
    triggers: [
      { domain: "External Docs", trigger: "Search external references" },
    ],
  },
  architect: {
    description: "Architecture and debugging",
    mode: "subagent",
    cost: "EXPENSIVE",
    triggers: [
      { domain: "Architecture", trigger: "High-level design decisions" },
      { domain: "Debugging", trigger: "Complex debugging sessions" },
    ],
  },
  strategist: {
    description: "Strategic consultation",
    mode: "subagent",
    cost: "EXPENSIVE",
    triggers: [
      { domain: "Strategy", trigger: "Technical strategy and planning" },
    ],
  },
  reviewer: {
    description: "Plan review and evaluation",
    mode: "subagent",
    cost: "CHEAP",
    triggers: [
      { domain: "Review", trigger: "Review plans and proposals" },
    ],
  },
  planner: {
    description: "Work planning",
    mode: "subagent",
    cost: "CHEAP",
    triggers: [
      { domain: "Planning", trigger: "Multi-step work breakdown" },
    ],
  },
  bridge: {
    description: "Session continuation/handoff",
    mode: "subagent",
    cost: "FREE",
    triggers: [
      { domain: "Handoff", trigger: "Continue previous session" },
    ],
  },
  orchestrator: {
    description: "Main orchestrator",
    mode: "primary",
    cost: "EXPENSIVE",
    triggers: [],
  },
  worker: {
    description: "Deep autonomous worker",
    mode: "subagent",
    cost: "EXPENSIVE",
    triggers: [
      { domain: "Implementation", trigger: "Deep autonomous work" },
    ],
  },
}

export const SUBAGENT_TYPES = Object.keys(AGENTS).filter(
  (name) => AGENTS[name].mode === "subagent"
)
