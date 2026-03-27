import type { AgentConfig } from "./types"

export function createBuiltinAgents(): Record<string, AgentConfig> {
  return {
    searcher: {
      name: "searcher",
      description: "Fast internal codebase search",
      mode: "subagent",
    },
    librarian: {
      name: "librarian",
      description: "External docs and code research",
      mode: "subagent",
    },
    architect: {
      name: "architect",
      description: "Architecture and debugging advisor",
      mode: "subagent",
    },
    strategist: {
      name: "strategist",
      description: "Strategic consultation",
      mode: "subagent",
    },
    reviewer: {
      name: "reviewer",
      description: "Plan review and evaluation",
      mode: "subagent",
    },
    planner: {
      name: "planner",
      description: "Work planning agent",
      mode: "subagent",
    },
    bridge: {
      name: "bridge",
      description: "Session continuation/handoff",
      mode: "subagent",
    },
    worker: {
      name: "worker",
      description: "Deep autonomous worker",
      mode: "subagent",
    },
  }
}
