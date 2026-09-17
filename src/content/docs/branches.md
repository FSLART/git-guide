---
title: 06 · Work on a branch
description: Keep one task on its own branch.
---

## Create a branch

```bash
git switch main
git pull --ff-only
git switch -c add-goals
```

A branch gives one task its own space.

## Make the change

Add this to `README.md`:

```markdown
## My goals

- Keep commits small.
- Learn pull requests.
```

Then save and commit:

```bash
git add README.md
git commit -m "Add learning goals"
```

## Compare the branches

```bash
git switch main
git switch add-goals
```

On `main`, the change is gone. On `add-goals`, it is there.

## Push the branch

```bash
git push -u origin add-goals
```

**Try it:** run `git branch --show-current` and confirm it says `add-goals`.
