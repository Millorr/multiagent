import { CATEGORIES, CATEGORY_NAMES } from "../../constants/categories"
import { ASSISTANT_AGENT } from "./constants"

export interface CategoryResolutionResult {
  agentToUse: string
  categoryModel: string | undefined
  categoryPromptAppend: string | undefined
  error?: string
}

export function resolveCategory(
  categoryName: string
): CategoryResolutionResult {
  if (!CATEGORY_NAMES.includes(categoryName)) {
    return {
      agentToUse: "",
      categoryModel: undefined,
      categoryPromptAppend: undefined,
      error: `Unknown category: "${categoryName}". Available: ${CATEGORY_NAMES.join(", ")}`,
    }
  }

  const category = CATEGORIES[categoryName]
  return {
    agentToUse: ASSISTANT_AGENT,
    categoryModel: category.model,
    categoryPromptAppend: category.promptAppend,
  }
}
