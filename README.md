# MultiAgent

Minimal OpenCode plugin providing task delegation via categories and subagent types.

## Categories

| Category | Use Case |
|----------|----------|
| `quick` | Trivial single-file changes |
| `deep` | Goal-oriented autonomous problem-solving |
| `complex` | Hard logic, architecture decisions |
| `visual` | Frontend, UI/UX, design, styling |
| `creative` | Unconventional, creative approaches |
| `writing` | Documentation, prose, technical writing |
| `general` | Unclassified, substantial effort |

## Subagent Types

| Type | Purpose |
|------|---------|
| `searcher` | Fast internal codebase search |
| `librarian` | External docs and code research |
| `architect` | Architecture and debugging |
| `strategist` | Strategic consultation |
| `reviewer` | Plan review and evaluation |
| `planner` | Work planning |
| `bridge` | Session continuation/handoff |
| `worker` | Deep autonomous worker |

## Work Command

The `work` command activates a self-referential development loop that runs until verified completion.

```bash
/work "Build user authentication system"
```

Work mode enforces:
- **Mandatory exploration** before any implementation
- **Planner agent** for all non-trivial tasks
- **Parallel delegation** via categories and subagents
- **Verification** before claiming completion

## Usage

```typescript
// Using category
task(category="quick", load_skills=[], description="Fix typo", prompt="...", run_in_background=false)

// Using subagent type
task(subagent_type="searcher", load_skills=[], description="Find patterns", prompt="...", run_in_background=true)

// Using planner
task(subagent_type="planner", load_skills=[], prompt="Create a plan for the user request...")
```
