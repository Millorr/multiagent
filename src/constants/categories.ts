import type { CategoryConfig } from "../types/category"

export const CATEGORIES: Record<string, CategoryConfig> = {
  quick: {
    model: "minimax/MiniMax-M2.7",
    description: "Trivial single-file changes",
    promptAppend: `<Category_Context>
You are working on SMALL/QUICK tasks.
Efficient execution mindset: fast, focused, minimal overhead.
Simple solutions for simple problems.
</Category_Context>`,
  },
  deep: {
    model: "minimax/MiniMax-M2.7",
    description: "Goal-oriented autonomous problem-solving",
    promptAppend: `<Category_Context>
You are working on GOAL-ORIENTED AUTONOMOUS tasks.
You are NOT an interactive assistant. You are an autonomous problem-solver.
Figure out HOW to achieve the goal yourself. Thorough research before any action.
Work independently without frequent check-ins.
</Category_Context>`,
  },
  complex: {
    model: "minimax/MiniMax-M2.7",
    description: "Hard logic, architecture decisions",
    promptAppend: `<Category_Context>
You are working on DEEP LOGICAL REASONING / COMPLEX ARCHITECTURE tasks.
Strategic advisor mindset: bias toward simplicity, leverage existing patterns.
Prioritize developer experience and maintainability.
</Category_Context>`,
  },
  visual: {
    model: "minimax/MiniMax-M2.7",
    description: "Frontend, UI/UX, design, styling",
    promptAppend: `<Category_Context>
You are working on VISUAL/UI tasks.
Design-first mindset: bold aesthetic choices, distinctive typography.
Build with design tokens, not hardcoded values.
</Category_Context>`,
  },
  creative: {
    model: "minimax/MiniMax-M2.7",
    description: "Unconventional, creative approaches",
    promptAppend: `<Category_Context>
You are working on HIGHLY CREATIVE / ARTISTIC tasks.
Push far beyond conventional boundaries. Explore radical directions.
Embrace ambiguity and wild experimentation.
</Category_Context>`,
  },
  writing: {
    model: "minimax/MiniMax-M2.7",
    description: "Documentation, prose, technical writing",
    promptAppend: `<Category_Context>
You are working on WRITING / PROSE tasks.
Clear, flowing prose. Appropriate tone and voice.
Engaging and readable. Proper structure and organization.
</Category_Context>`,
  },
  general: {
    model: "minimax/MiniMax-M2.7",
    description: "Unclassified, substantial effort",
    promptAppend: `<Category_Context>
You are working on GENERAL tasks that don't fit specific categories.
Apply appropriate depth and rigor based on task requirements.
</Category_Context>`,
  },
}

export const CATEGORY_NAMES = Object.keys(CATEGORIES)
