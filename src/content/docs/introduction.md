---
title: 01 · What is Git?
description: Understand Git, GitHub, and the three places your changes live.
---

**Your goal:** explain what Git saves and how GitHub fits in. No installation needed yet.

## A history for your project

Imagine keeping `notes-final.txt`, `notes-final-2.txt`, and `notes-really-final.txt`. Git replaces that guessing game with a history of deliberate snapshots. Each snapshot is called a **commit**. You decide what belongs in it and write a short message explaining the change.

A **repository** (or **repo**) is a project whose history Git tracks. It lives in an ordinary folder, with a hidden `.git` directory that stores Git’s information. Leave that directory alone.

## Git and GitHub

| Git | GitHub |
| --- | --- |
| A tool installed on your computer | A service you open in a browser |
| Records and compares local changes | Hosts repositories online |
| Works without an internet connection | Helps people review and share work |

You can use Git without GitHub. A local commit does **not** automatically upload your work. Later, you’ll use `git push` to send commits to GitHub.

## Three places to remember

1. **Working directory:** the files you are editing.
2. **Staging area:** the changes you have selected for your next commit.
3. **Repository history:** the commits you have saved.

```text
Edit files  →  git add  →  git commit
Your work     Select      Save a snapshot
```

Saving a file in your editor and committing it are separate actions. Git does not record every keystroke.

## Your project for this guide

You’ll create `my-first-repo`, a learning journal with a `README.md` file. Markdown (`.md`) is plain text with simple formatting: `#` starts a heading. Any text editor is enough.

:::tip Try it
Explain these words in your own words: repository, commit, staging area. Then ask yourself: “If I make a commit while offline, is it on GitHub?” The answer is no — it stays local until you push.
:::

**Ready to continue?** You know what you’re going to build. Next, install Git and introduce yourself to it.

Further reading: [Git’s introduction to version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control).
