---
title: 03 · Your first repository
description: Create a learning journal and save your first commit.
---

## Start the repo

```bash
mkdir my-first-repo
cd my-first-repo
git init
```

## Create a file

```markdown
# My learning journal

- I am learning Git.
- I will make small commits.
```

Save it as `README.md`.

## Check before saving

```bash
git status
git diff
```

- `git status`: what changed
- `git diff`: the exact edits

## Save the change

```bash
git add README.md
git diff --staged
git commit -m "Add learning journal"
```

## Confirm it worked

```bash
git log --oneline -1
git status
```

You should see one commit and a clean working tree.

**Try it:** add a second bullet, review it, and commit again.
