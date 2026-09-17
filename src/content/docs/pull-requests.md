---
title: 07 · Your first pull request
description: Propose a change, review it, merge it, and update your local repository.
---

**Before you start:** push the `add-goals` branch from the previous lesson.

## Ask to bring a change into main

A **pull request** (PR) is a proposal to merge one branch into another. It gives people a place to read the diff, discuss decisions, and run automated checks before merging. A PR is a GitHub feature; `git pull` is a different operation that updates your local branch.

On your repository’s GitHub page:

1. Open **Pull requests → New pull request**.
2. Set **base** to `main` and **compare** to `add-goals`.
3. Read the diff and choose **Create pull request**.
4. Use a title such as `Add learning goals` and explain the change.

Try this description:

```text
What changed: Added two goals to the learning journal.
Why: To make the next learning steps clear.
Checked: Previewed the README and reviewed the diff.
```

## Review before merging

Open **Files changed**. Look for unexpected files, private information, mistakes, and unrelated edits. In a team, request a reviewer and follow the repository’s rules. For your own practice repository, you can review and merge your own PR when allowed; you cannot approve your own PR as a reviewer.

To revise your PR, edit locally on `add-goals`, commit, and run `git push`. The same PR updates automatically.

## Merge and sync

For this exercise, choose **Create a merge commit** from GitHub’s merge options, then confirm. This keeps the branch’s commits in the history. A team may instead use squash or rebase merging; follow its convention.

Back in your terminal:

```bash
git switch main
git pull --ff-only
git log --oneline --graph -5
```

Your local README should now contain your goals. Once you have confirmed the merge, remove the local branch:

```bash
git branch -d add-goals
```

If Git refuses, stop and check that your work was integrated. Squash merging creates a different commit, so Git may not recognize the original branch as merged. Don’t replace `-d` with `-D` without understanding what you would delete.

**Try it:** check that the PR is marked **Merged** on GitHub and that `git status` is clean locally. You have completed a collaboration workflow.

Source: [Creating a pull request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).
