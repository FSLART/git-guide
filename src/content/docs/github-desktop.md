---
title: GitHub Desktop · Start without the terminal
description: Create a repository, make a first commit, and publish it to GitHub with the desktop app.
---

GitHub Desktop gives you a visual Git workflow. It is useful when you want to create a repository, review changes, commit, and push without typing every command.

## Start with the official flow

The recommended beginner path is simple:

1. Install GitHub Desktop
2. Sign in to GitHub
3. Create a new repository or start the tutorial
4. Make a small change
5. Commit and push
6. Open a pull request

## 1) Install and sign in

Install GitHub Desktop from the official page and sign in with the same GitHub account you use for your projects.

If you do not have any repos yet, you will see the “Let’s get started!” screen.

![Screenshot of the “Let’s get started!” view in GitHub Desktop](https://docs.github.com/assets/images/help/desktop/lets-get-started.png)

## 2) Create a repository

You can choose between:

- **Create a Tutorial Repository...**
- **Create a New Repository on your Hard Drive...**

If you want a quick first exercise, choose the tutorial. It walks through the basics: branch, edit, commit, push, and pull request.

If you create a new repository manually, fill in:

- name
- optional description
- local path
- whether to initialize with a README
- gitignore and license options if needed

Then click **Create repository**.

## 3) Explore the app

After the repository opens, you will see the repository bar at the top.

![Screenshot of the GitHub Desktop repository bar](https://docs.github.com/assets/images/help/desktop/explore-github-desktop.png)

The main parts are:

- **Current repository**
- **Current branch**
- **Publish repository** when the repo is still local only
- the **Changes** and **History** views in the sidebar

## 4) Make a change and commit it

Open your editor from the app, edit the `README.md`, then save it.

Back in GitHub Desktop, switch to the **Changes** view.

![Screenshot of the Changes view with a README file and commit box](https://docs.github.com/assets/images/help/desktop/viewing-changes.png)

Write a short commit summary such as:

```text
Add project purpose
```

Then click **Commit to BRANCH NAME**.

![Screenshot of the commit message area in GitHub Desktop](https://docs.github.com/assets/images/help/desktop/commit-message.png)

## 5) Publish to GitHub

When the repository is ready, click **Publish repository**.

![Screenshot of the Publish repository button](https://docs.github.com/assets/images/help/desktop/publish-repository.png)

Then choose the remote settings and click **Publish Repository**.

## 6) Push your commit

After the first commit, click **Push origin**.

![Screenshot of the Push origin button](https://docs.github.com/assets/images/help/desktop/push-to-origin.png)

This sends your local commit to the repository on GitHub.

## 7) Open a pull request

When your branch is ready, use the GitHub Desktop flow to start a pull request, review the changes, and then merge them on GitHub.

You can also see the repository on GitHub with **View on GitHub**.

![Screenshot of the repository suggestions and View on GitHub action](https://docs.github.com/assets/images/help/desktop/available-actions.png)

## Why this is useful

GitHub Desktop is good for:

- beginners who want a visual workflow
- small repos and learning exercises
- reviewing diffs before committing
- keeping the Git flow simple

**Try it:** create a small repo in GitHub Desktop, add a short README line, commit it, and push it to GitHub.
