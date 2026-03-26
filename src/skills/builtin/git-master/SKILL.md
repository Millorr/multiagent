---
name: git-master
description: Git workflows, branching strategies, conflict resolution
---
<git-master-skill>
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
- `main`/`master`: production-ready code only
- `develop`: integration branch for features
- `feature/*`: individual feature branches
- `hotfix/*`: emergency production fixes
- `release/*`: release preparation

## Commit Message Format
```
type(scope): subject

body

footer
```

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
</git-master-skill>