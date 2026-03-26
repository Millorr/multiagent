import type { BuiltinSkill } from "../types/skill"

export const BUILTIN_SKILLS: Record<string, BuiltinSkill> = {
  "git-master": {
    name: "git-master",
    description: "Git workflows, branching strategies, conflict resolution",
    content: `<git-master-skill>
# Git Master Skill

## Expertise
- Branching strategies (GitFlow, trunk-based)
- Commit message conventions (Conventional Commits)
- Merge vs rebase decisions
- Conflict resolution strategies
- Interactive rebase
- Stash management
- Submodule handling
- Partial staging (patch)

## Branching Strategy
- \`main\`/\`master\`: production-ready code only
- \`develop\`: integration branch for features
- \`feature/*\`: individual feature branches
- \`hotfix/*\`: emergency production fixes
- \`release/*\`: release preparation

## Commit Message Format
\`\`\`
type(scope): subject

body

footer
\`\`\`

Types: feat, fix, docs, style, refactor, test, chore

## Conflict Resolution
1. Identify conflicting files
2. Understand both changes
3. Determine merge strategy
4. Resolve manually or use tool
5. Test after resolution

## Always
- Run tests after merge/rebase
- Verify CI passes
- Delete merged branches
</git-master-skill>`,
  },

  "frontend-ui-ux": {
    name: "frontend-ui-ux",
    description: "Frontend development, UI/UX best practices",
    content: `<frontend-ui-ux-skill>
# Frontend UI/UX Skill

## Core Principles
- Mobile-first responsive design
- Progressive enhancement
- Accessibility (WCAG 2.1 AA minimum)
- Performance (Core Web Vitals)
- Semantic HTML

## CSS Best Practices
- Use CSS custom properties for design tokens
- Follow BEM or CSS Modules naming
- Mobile: 320px → Tablet: 768px → Desktop: 1024px → Wide: 1440px
- Prefer flexbox/grid over floats
- Userem/em for typography spacing

## Component Guidelines
- Single responsibility principle
- Composition over inheritance
- Prop interface documentation
- State management best practices
- Memoization when appropriate

## Accessibility
- Semantic elements (nav, main, article, etc.)
- ARIA attributes when needed
- Keyboard navigation support
- Color contrast ratios
- Focus indicators

## Performance
- Lazy loading for images/routes
- Code splitting
- Tree shaking
- Image optimization
- Critical CSS inlining
</frontend-ui-ux-skill>`,
  },

  "playwright": {
    name: "playwright",
    description: "End-to-end testing with Playwright",
    content: `<playwright-skill>
# Playwright Skill

## Core Usage
\`\`\`typescript
import { test, expect } from '@playwright/test'

test('description', async ({ page }) => {
  await page.goto('url')
  await expect(page.locator('selector')).toBeVisible()
})
\`\`\`

## Selectors (Priority Order)
1. Role: \`getByRole('button', { name: 'Submit' })\`
2. Label: \`getByLabel('Email')\`
3. Text: \`getByText('Hello')\`
4. Test ID: \`getByTestId('submit-btn')\`
5. CSS: \`locator('css selector')\`

## Best Practices
- Use auto-waiting assertions
- Prefer \`toBeVisible()\` over \`toBeAttached()\`
- Use \`page.waitForLoadState('networkidle')\` for SPAs
- Screenshot on failure
- Group related tests with \`test.describe\`

## Common Patterns
\`\`\`typescript
// Fill form
await page.getByLabel('Email').fill('test@example.com')

// Click button
await page.getByRole('button', { name: 'Submit' }).click()

// Assert visibility
await expect(page.getByText('Success')).toBeVisible()

// Wait for navigation
await expect(page).toHaveURL(/dashboard/)
\`\`\`

## Debugging
- \`page.pause()\` opens Playwright inspector
- \`test.skip('debug', async ({ page }) => { ... })\`
- Screenshots: \`await page.screenshot()\`
</playwright-skill>`,
  },

  "typescript-programmer": {
    name: "typescript-programmer",
    description: "TypeScript patterns and best practices",
    content: `<typescript-programmer-skill>
# TypeScript Programmer Skill

## Type System Mastery
- Use \`unknown\` over \`any\` when type is uncertain
- Prefer \`interface\` over \`type\` for object shapes
- Use discriminated unions for state machines
- Leverage \`infer\` in conditional types

## Generic Constraints
\`\`\`typescript
function process<T extends { id: string }>(items: T[]): T[] {
  return items.filter(item => item.id !== undefined)
}
\`\`\`

## Utility Types
- \`Partial<T>\`, \`Required<T>\`, \`Readonly<T>\`
- \`Pick<T, K>\`, \`Omit<T, K>\`
- \`Record<K, V>\`, \`Map<K, V>\`
- \`ReturnType<F>\`, \`Parameters<F>\`

## Pattern: Null Safety
\`\`\`typescript
// Before
const name = user && user.profile && user.profile.name

// After
const name = user?.profile?.name ?? 'Anonymous'
\`\`\`

## Async Patterns
- Use \`async/await\` over \`.then()\`
- Handle errors with try/catch or .catch()
- Parallel promises with \`Promise.all()\`

## Type Guards
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
\`\`\`
</typescript-programmer-skill>`,
  },

  "architecture-patterns": {
    name: "architecture-patterns",
    description: "Software architecture and design patterns",
    content: `<architecture-patterns-skill>
# Architecture Patterns Skill

## SOLID Principles
- **S**: Single Responsibility - one reason to change
- **O**: Open/Closed - open for extension, closed for modification
- **L**: Liskov Substitution - subtypes must be substitutable
- **I**: Interface Segregation - specific interfaces over general
- **D**: Dependency Inversion - depend on abstractions

## Common Patterns
### Repository Pattern
\`\`\`typescript
interface UserRepository {
  findById(id: string): Promise<User | null>
  save(user: User): Promise<void>
  delete(id: string): Promise<void>
}
\`\`\`

### Factory Pattern
\`\`\`typescript
function createLogger(type: 'console' | 'file'): Logger {
  return type === 'console'
    ? new ConsoleLogger()
    : new FileLogger()
}
\`\`\`

### Strategy Pattern
\`\`\`typescript
interface SortStrategy<T> {
  sort(items: T[]): T[]
}

class QuickSort<T> implements SortStrategy<T> { ... }
class MergeSort<T> implements SortStrategy<T> { ... }
\`\`\`

## Layered Architecture
1. **Presentation**: UI, API endpoints
2. **Application**: Use cases, orchestration
3. **Domain**: Business logic, entities
4. **Infrastructure**: DB, external services

## Event-Driven
- Pub/Sub for loose coupling
- Event sourcing for audit trail
- CQRS for read/write separation
</architecture-patterns-skill>`,
  },
}

export const BUILTIN_SKILL_NAMES = Object.keys(BUILTIN_SKILLS)
