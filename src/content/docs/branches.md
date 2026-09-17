---
title: 06 · Work on a branch
description: Make a separate branch for a small change and share it for review.
---

**Before you start:** your practice repository should be on GitHub. Finish or save any pending changes and check `git status` before switching branches.

## Give an idea its own space

A **branch** is a named line of work. It lets you develop an idea while leaving `main` at its existing commit. Branches share history; creating one does not copy your whole project into another folder.

Start from an up-to-date `main`:

```bash
git switch main
git pull --ff-only
git switch -c add-goals
```

`--ff-only` updates the branch only if it can move forward without creating a merge commit. If Git reports diverging branches, stop and inspect the history rather than force-pushing. `switch -c` creates a branch and moves you onto it.

## Make a focused change

Add this section to `README.md` and save:

```markdown
## My goals

- Make small, clear commits.
- Learn to collaborate through pull requests.
```

```bash
git diff
git add README.md
git diff --staged
git commit -m "Add learning goals"
```

## See the difference

```bash
git switch main
```

Open the README: your new goals are absent on `main`. They are safe in the commit on `add-goals`.

```bash
git switch add-goals
git log --oneline --graph --all -5
```

Your goals are back. The history view shows branch labels beside their latest commits.

:::caution Commit before you switch
Uncommitted changes are not safely stored on a branch. Git may carry them to another branch or refuse to switch if files would be overwritten. Check your status and commit finished work first.
:::

## Publish the branch

```bash
git push -u origin add-goals
```

This uploads the branch; it does not merge it into `main`. In the next lesson you’ll open a pull request.

**Try it:** run `git branch --show-current`. It should print `add-goals`. On GitHub, use the branch selector to find your goals on that branch.

Source: [Git branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell).
