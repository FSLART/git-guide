---
title: 02 · Install & set up
description: Install Git and configure your identity.
---

## Install Git

Choose the version for your computer:

- Windows: [Git for Windows](https://gitforwindows.org/)
- macOS: `brew install git`
- Linux: `sudo apt install git`

If you want the visual workflow too, install [GitHub Desktop](https://desktop.github.com/).

## Set your name and email

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Check the terminal

```bash
git --version
pwd
ls
```

If `git --version` works, Git is installed.

## Small loop to learn

```bash
git status
git add .
git commit -m "Add my first change"
```

That is enough to begin.
