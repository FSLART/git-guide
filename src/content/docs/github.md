---
title: 05 · Put your work on GitHub
description: Push your local repository to GitHub and keep it safe online.
---

## Create the remote repo

On GitHub, click **New repository** and create it without a README if you already have one locally.

## Connect and push

```bash
git remote add origin git@github.com:YOUR-USER/YOUR-REPO.git
git branch -M main
git push -u origin main
```

If you prefer HTTPS:

```bash
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## What those commands do

- `origin`: your GitHub remote
- `main`: your default branch
- `-u`: link local and remote branches

## Push later

```bash
git push
```

## Continue on another computer

```bash
git clone https://github.com/YOUR-USER/YOUR-REPO.git
cd YOUR-REPO
git status
```

**Try it:** push your repo to GitHub and confirm it is online.
