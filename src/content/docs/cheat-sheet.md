---
title: 11 · Command cheat sheet
description: A quick reference for the Git commands you use most often.
---

Use this page after working through the lessons. Replace names such as `FILE`, `BRANCH`, `URL`, and `COMMIT-ID` with real values; don’t type the placeholders literally.

## Look before changing anything

| Command | What it does |
| --- | --- |
| `git status` | Shows the branch and pending changes |
| `git diff` | Shows unstaged changes to tracked files |
| `git diff --staged` | Shows the changes selected for the next commit |
| `git log --oneline -5` | Shows the five latest commits |
| `git log --oneline --graph --all` | Shows history across branches |
| `git show COMMIT-ID` | Shows a commit and its changes |
| `git remote -v` | Lists remote names and URLs |

Press `q` if output opens in a scrolling viewer.

## Start and save

| Command | What it does |
| --- | --- |
| `git init -b main` | Starts a repository in the current folder |
| `git clone URL` | Downloads an existing repository into a new folder |
| `git add FILE` | Stages the current version of a file |
| `git commit -m "Clear message"` | Saves the staged changes |
| `git check-ignore FILE` | Checks whether an ignore rule matches a file |

## Branch and collaborate

| Command | What it does |
| --- | --- |
| `git switch -c BRANCH` | Creates and switches to a branch |
| `git switch main` | Switches to the main branch |
| `git branch --show-current` | Prints your current branch name |
| `git fetch origin` | Downloads remote history without merging it |
| `git pull --ff-only` | Updates the current branch if it can fast-forward |
| `git push -u origin BRANCH` | Pushes a branch and sets its upstream |
| `git push` | Pushes to the configured upstream in the guide’s workflow |
| `git merge BRANCH` | Integrates that branch into the current one |
| `git branch -d BRANCH` | Deletes a local branch only if Git considers it merged |

## Undo carefully

| Command | Effect |
| --- | --- |
| `git restore --staged FILE` | Unstages a file; keeps working edits |
| `git restore FILE` | **Discards** unstaged changes to a tracked file |
| `git revert COMMIT-ID` | Creates a new commit reversing the selected commit |
| `git merge --abort` | Cancels an in-progress merge |
| `git revert --abort` | Cancels an in-progress revert |

Read [Undo with confidence](../undo/) before discarding or reverting work. Commit or otherwise safely save pending work before starting a merge.

## Your everyday loop

```bash
git status
git diff
git add README.md
git diff --staged
git commit -m "Describe the change"
git push
```

The last command assumes you already set an upstream. Run the project’s relevant checks before committing, and follow its review process before merging.

**Checkpoint:** can you explain the difference between `fetch`, `pull`, and `push`? Fetch downloads history, pull downloads and integrates, and push uploads your commits.

Official reference: [Git command manuals](https://git-scm.com/docs).
