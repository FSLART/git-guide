---
title: 03 · Your first repository
description: Create a learning journal and save your first Git commit.
---

**Before you start:** finish the installation lesson. Open a terminal in a folder where you keep your projects, outside any existing Git repository.

## Create a home for your project

```bash
mkdir my-first-repo
cd my-first-repo
git init -b main
```

`mkdir` creates a folder, `cd` enters it, and `git init` creates a repository there. The `-b main` option names the first branch `main`. Run `git init` once when creating a new repository, not every time you work.

## Add your first file

In your text editor, create a file called **README.md** inside `my-first-repo`. Save this text:

```markdown
# My learning journal

I am learning Git, one step at a time.
```

Make sure it is named `README.md`, not `README.md.txt`. Now inspect the repository:

```bash
git status
```

The output should list `README.md` as **untracked**. Git can see it, but it is not part of a commit yet.

## Select, inspect, save

```bash
git add README.md
git diff --staged
git commit -m "Add learning journal"
```

- `add` selects this file’s current contents for the next commit.
- `diff --staged` shows exactly what that commit will contain.
- `commit -m` saves it with a message.

If the diff opens in a scrolling viewer, press `q` to return to the prompt. The commit output includes a short identifier such as `a1b2c3d`; your identifier will be different.

## Check the result

```bash
git status
git log --oneline
```

You should have a clean working tree and one commit called `Add learning journal`. “Clean” means there are no pending changes; it does not mean the files disappeared.

:::tip Try it
Close the terminal, open it again, and return to `my-first-repo` using `cd`. Run `git log --oneline`. Your commit is still there — the history belongs to the folder, not the terminal session.
:::

If you see “not a git repository”, use `pwd` to check where you are and `cd` into `my-first-repo`.

Source: [Getting a Git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository).
