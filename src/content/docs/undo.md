---
title: 09 · Undo with confidence
description: Unstage, restore, or revert safely.
---

## Choose the right undo

Use the right command for the job:

- `git restore --staged FILE` — unstage, keep the edits
- `git restore FILE` — discard a local edit
- `git revert <commit>` — undo a commit while keeping history

## Unstage without losing work

```bash
git add README.md
git restore --staged README.md
```

## Discard a local edit

```bash
git restore README.md
```

## Revert a commit

```bash
git log --oneline
git revert <commit-sha>
```

This creates a new commit that undoes the old one.

**Try it:** unstage one file, restore one edit, and revert a commit only when you are ready.
