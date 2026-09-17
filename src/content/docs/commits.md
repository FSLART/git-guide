---
title: 04 · Make useful commits
description: Review changes, stage deliberately, and write clear commit messages.
---

**Your goal:** build the everyday habit of editing, reviewing, and committing. Work inside `my-first-repo` from the previous lesson.

## Make one small change

Add a new section to `README.md` in your editor and save it:

```markdown
## What I have learned

- A commit records a snapshot of my work.
```

Inspect what changed before selecting anything:

```bash
git status
git diff
```

In the diff, lines starting with `+` were added and lines starting with `-` were removed. The `+++` and `---` lines identify files, not edits. Press `q` if a viewer opens.

## Prepare exactly what you mean

```bash
git add README.md
git diff --staged
git commit -m "Document what a commit does"
```

Prefer specific file names while learning. `git add .` can include unrelated files or secrets you did not intend to publish.

:::note Staging is a snapshot too
If you edit the file again after `git add`, the newer edit is not automatically staged. Run `git diff` to see unstaged edits and `git diff --staged` to see what is ready to commit. Stage again if you want the new edit included.
:::

## Write a message your future self can use

| Less useful | More useful |
| --- | --- |
| `stuff` | `Add learning journal` |
| `fix` | `Correct setup command in README` |
| `changes` | `Document what a commit does` |

Use a short, specific summary of one logical change. If a change needs explanation, describe why in a longer commit message. A prefix such as `docs:` is optional unless your team has agreed to use it.

## Check your history

```bash
git log --oneline -5
git status
```

You should see the new commit above your first one and a clean working tree.

**Try it:** add a second learning point to the README, review both diffs at the right stages, and save a separate commit with a descriptive message. You choose the wording.

Source: [Recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository).
