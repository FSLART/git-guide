---
title: 11 · Command cheat sheet
description: Quick commands for the everyday Git workflow.
---

## Look before you change

```bash
git status
git diff
git log --oneline -5
```

## Start and save

```bash
git init
git add README.md
git commit -m "Add README"
```

## Branch and collaborate

```bash
git switch main
git pull --ff-only
git switch -c feature-name
git push -u origin feature-name
```

## Open a pull request

- push the branch
- open GitHub
- choose **New pull request**
- compare to `main`

## Undo carefully

```bash
git restore --staged FILE
git restore FILE
git revert <commit>
```

## Everyday loop

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Keep it small. Repeat it often.
