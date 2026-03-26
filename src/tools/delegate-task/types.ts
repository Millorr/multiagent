export interface DelegateTaskArgs {
  description: string
  prompt: string
  category?: string
  subagent_type?: string
  run_in_background: boolean
  session_id?: string
  load_skills: string[]
}

export interface ToolContext {
  sessionID: string
  messageID: string
  abort: AbortSignal
}
