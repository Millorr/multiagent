interface BuildSystemContentInput {
  skillContent?: string
  categoryPromptAppend?: string
  agentName?: string
}

export function buildSystemContent(input: BuildSystemContentInput): string {
  const parts: string[] = []

  if (input.categoryPromptAppend) {
    parts.push(input.categoryPromptAppend)
  }

  if (input.skillContent) {
    parts.push(input.skillContent)
  }

  return parts.join("\n\n")
}

export function buildTaskPrompt(prompt: string, _agentName?: string): string {
  return prompt
}
