---
title: 08 · Resolve a conflict
description: Practise a predictable merge conflict in a separate repository.
---

**Your goal:** understand conflict markers and choose the final content. A conflict means Git needs your decision, not that your work is lost.

## Create a separate practice space

From inside `my-first-repo`, move to its parent and create a new repository. Use a fresh folder name if `conflict-practice` already exists.

```bash
cd ..
mkdir conflict-practice
cd conflict-practice
git init -b main
```

Create `plan.txt` in your editor with one line: `Learn Git`. Save it, then run:

```bash
git add plan.txt
git commit -m "Add study plan"
git switch -c morning-plan
```

Change the line to `Learn Git in the morning`, save, and commit:

```bash
git add plan.txt
git commit -m "Plan a morning session"
git switch main
```

On `main`, change that same line to `Learn Git in the evening`, save, and commit:

```bash
git add plan.txt
git commit -m "Plan an evening session"
git merge morning-plan
```

This deliberately produces a content conflict because both branches changed the same line differently.

## Read and resolve

Run `git status`, then open `plan.txt`. You should see:

```text
<<<<<<< HEAD
Learn Git in the evening
=======
Learn Git in the morning
>>>>>>> morning-plan
```

The top section comes from your current branch (`main`); the bottom comes from `morning-plan`. Decide what the file should say. Replace the entire block, including all markers, with:

```text
Learn Git in the morning and practise in the evening
```

Save the file, then complete the merge:

```bash
git add plan.txt
git diff --staged
git commit -m "Combine study plans"
git status
```

You should have a clean working tree. Read the final file to confirm the wording makes sense. In a real project, run its tests too.

## If you want to stop instead

While a merge is still in progress, use `git merge --abort` to abandon that merge. Start merges with a clean working tree: aborting cannot always reconstruct unrelated uncommitted edits. After committing the merge, `--abort` no longer applies.

**Try it:** run `git log --oneline --graph --all`. See how both histories meet at the merge commit. Return to your main practice project with `cd ../my-first-repo` before the next lesson.

Source: [Basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).
