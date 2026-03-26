---
name: typescript-programmer
description: TypeScript patterns and best practices
---
<typescript-programmer-skill>
# TypeScript Programmer Skill

## Type System Mastery
- Use `unknown` over `any` when type is uncertain
- Prefer `interface` over `type` for object shapes
- Use discriminated unions for state machines
- Leverage `infer` in conditional types

## Generic Constraints
```typescript
function process<T extends { id: string }>(items: T[]): T[] {
  return items.filter(item => item.id !== undefined)
}
```

## Utility Types
- `Partial<T>`, `Required<T>`, `Readonly<T>`
- `Pick<T, K>`, `Omit<T, K>`
- `Record<K, V>`, `Map<K, V>`
- `ReturnType<F>`, `Parameters<F>`

## Pattern: Null Safety
```typescript
// Before
const name = user && user.profile && user.profile.name

// After
const name = user?.profile?.name ?? 'Anonymous'
```

## Async Patterns
- Use `async/await` over `.then()`
- Handle errors with try/catch or .catch()
- Parallel promises with `Promise.all()`

## Type Guards
```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
```
</typescript-programmer-skill>