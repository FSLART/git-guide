---
title: 10 · Habits worth keeping
description: Keep the workflow small, clear, and reviewable.
---

## Simple routine

A healthy Git workflow is short and repeatable:

- one task = one branch
- one idea = one commit
- one PR = one change

## Good commit messages

Use a clear subject in the imperative mood.

Good:

- `Add onboarding checklist`
- `Fix broken install link`
- `Update release notes`

Weak:

- `update`
- `fix stuff`
- `wip`

## Before each commit

1. Run `git status`.
2. Read `git diff`.
3. Stage only the relevant files.
4. Read `git diff --staged`.
5. Commit with a clear message.

## Keep the repo clean

Create `.gitignore` for generated files or secrets.

```text
.env
.env.*
node_modules/
dist/
```

Never commit real credentials.

## Work well with others

- update `main` before starting new work
- use short branch names
- push before opening a PR
- explain what changed and why

**Try it:** review an old commit and write a better message.
