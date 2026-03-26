export interface CategoryConfig {
  model: string
  description: string
  promptAppend: string
  variant?: string
}

export interface CategoryDefinition {
  name: string
  config: CategoryConfig
}
