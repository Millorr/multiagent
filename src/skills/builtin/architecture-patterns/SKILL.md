---
name: architecture-patterns
description: Software architecture and design patterns
---
<architecture-patterns-skill>
# Architecture Patterns Skill

## SOLID Principles
- **S**: Single Responsibility - one reason to change
- **O**: Open/Closed - open for extension, closed for modification
- **L**: Liskov Substitution - subtypes must be substitutable
- **I**: Interface Segregation - specific interfaces over general
- **D**: Dependency Inversion - depend on abstractions

## Common Patterns
### Repository Pattern
```typescript
interface UserRepository {
  findById(id: string): Promise<User | null>
  save(user: User): Promise<void>
  delete(id: string): Promise<void>
}
```

### Factory Pattern
```typescript
function createLogger(type: 'console' | 'file'): Logger {
  return type === 'console'
    ? new ConsoleLogger()
    : new FileLogger()
}
```

### Strategy Pattern
```typescript
interface SortStrategy<T> {
  sort(items: T[]): T[]
}

class QuickSort<T> implements SortStrategy<T> { ... }
class MergeSort<T> implements SortStrategy<T> { ... }
```

## Layered Architecture
1. **Presentation**: UI, API endpoints
2. **Application**: Use cases, orchestration
3. **Domain**: Business logic, entities
4. **Infrastructure**: DB, external services

## Event-Driven
- Pub/Sub for loose coupling
- Event sourcing for audit trail
- CQRS for read/write separation
</architecture-patterns-skill>