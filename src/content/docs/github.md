---
title: 05 · Put your work on GitHub
description: Connect your local repository to GitHub, authenticate, and push your commits.
---

**Before you start:** you need a [GitHub account](https://github.com/signup) and at least one local commit in `my-first-repo`.

## Create an empty remote repository

On GitHub, choose **New repository**. Name it `my-first-repo` and choose whether it should be public or private. For this exercise, leave the README, `.gitignore`, and license options unselected: you already have local history.

A **remote** is a named connection to another copy of a repository. `origin` is the usual name; it is a convention, not a special server.

## Sign in securely

For HTTPS, use [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or the [GitHub CLI](https://cli.github.com/) to sign in through your browser. Git for Windows includes Git Credential Manager as an installer option. If you use the GitHub CLI, install it first, then run:

```bash
gh auth login
```

Choose GitHub.com, HTTPS, browser authentication, and agree to authenticate Git. `gh` is a separate tool, not part of Git. A normal GitHub account password cannot authenticate Git operations over HTTPS. Never put an access token into a remote URL or a committed file.

## Connect and push

Copy the HTTPS URL from your new repository. Replace `YOUR-USERNAME` below with your actual username before running the command:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-repo.git
git remote -v
git push -u origin main
```

Check the remote URL before pushing. `-u` links your local branch with the remote branch so future pushes can use `git push`.

Refresh the repository page. Your README and commits should appear.

## Bring work to another computer

From a parent folder that does not already contain `my-first-repo`, use your real URL:

```bash
git clone https://github.com/YOUR-USERNAME/my-first-repo.git
cd my-first-repo
```

Cloning downloads the repository and configures `origin`; do not run `git init` or add `origin` again in the clone.

## If something goes wrong

- **Remote origin already exists:** inspect `git remote -v`. If the URL is wrong, correct it with `git remote set-url origin YOUR-CORRECT-URL`.
- **Repository not found:** check the owner, repository spelling, and your account’s access.
- **Push rejected:** do not force-push. The remote may contain work your local branch does not have. Fetch and inspect before integrating it.

**Try it:** find your latest commit on GitHub and compare its message with `git log --oneline -1` locally.

Source: [Authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).
