---
title: 09 · Undo with confidence
description: Choose between unstaging, discarding a local edit, and reverting a commit.
---

**Before you start:** return to `my-first-repo`. Always inspect `git status` and `git diff` before undoing anything.

## Choose the right kind of undo

| Situation | Tool | Keeps your edits? |
| --- | --- | --- |
| Staged the wrong file | `git restore --staged README.md` | Yes, in the working file |
| Want to discard an unstaged edit | `git restore README.md` | No, the unstaged edit is lost |
| Want to reverse a published commit | `git revert COMMIT-ID` | Creates a new commit reversing it |

`COMMIT-ID` is a placeholder. Replace it with an actual identifier from `git log`, and inspect the commit before reverting it.

## Unstage without losing work

Add a temporary sentence to `README.md`, save it, and try:

```bash
git add README.md
git restore --staged README.md
git status
git diff
```

Your sentence is still in the file, but it is no longer selected for a commit. This exercise assumes the repository already has a commit.

## Discard only an edit you don’t need

:::danger This discards unstaged changes
`git restore README.md` replaces the working file with its staged version. If nothing is staged, that is usually the last committed version. Git may not be able to recover an edit that was never committed. Copy anything you want to keep elsewhere first.
:::

For the temporary sentence above, inspect it and discard it only when you are certain:

```bash
git diff -- README.md
git restore README.md
git status
```

## Reverse a commit while preserving history

Practise on a new local branch with a clean working tree:

```bash
git switch -c practise-undo
```

Create `temporary-note.txt` containing `This is a practice note`, then run:

```bash
git add temporary-note.txt
git commit -m "Add temporary practice note"
git show --stat HEAD
git revert --no-edit HEAD
git log --oneline -3
```

`HEAD` means the current commit. Here it refers to the practice commit you just created. Revert adds a new commit that removes the note; the original commit remains in history. Return to `main` with `git switch main` afterwards.

In real work, select the intended commit by its ID. Reverting older changes can produce conflicts; inspect `git status`, resolve and use `git revert --continue`, or cancel with `git revert --abort`. Reverting merge commits needs extra choices and is outside this beginner exercise.

**Good habit:** on shared branches, prefer a corrective commit or revert over rewriting history with a hard reset and force-push.

Sources: [git restore](https://git-scm.com/docs/git-restore), [git revert](https://git-scm.com/docs/git-revert).
