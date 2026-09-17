---
title: 10 · Habits worth keeping
description: Keep a clear history, avoid committing secrets, and collaborate thoughtfully.
---

**Your goal:** turn the commands you’ve learned into a dependable routine.

## Before each commit

1. Run `git status` to check your branch and changed files.
2. Read `git diff`. Remove debug output or accidental edits.
3. Stage the files that belong to one logical change.
4. Read `git diff --staged` to review the actual snapshot.
5. Run relevant checks, then write a clear commit message.

Small, coherent commits are easier to review and undo. Avoid mixing a bug fix, formatting every file, and new features in one commit.

## Keep local clutter out of history

Create a file named `.gitignore` at the repository root. For a project that uses environment files and Node dependencies, it might contain:

```text
.env
.env.*
!.env.example
node_modules/
dist/
.DS_Store
```

Only add patterns that fit your project. An `.env.example` should contain made-up values, never working credentials. Commit the `.gitignore` so others share the same rules.

Ignoring a file does not remove it if Git already tracks it. To stop tracking a non-secret generated file while keeping it locally, use `git rm --cached FILE`, then review and commit. Replace `FILE` with its real path. Old copies remain in history.

:::danger If you commit a secret
Revoke or rotate it at the service that issued it first. Deleting the file in a later commit does not remove the earlier version. Follow [GitHub’s sensitive-data removal guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) and coordinate with collaborators before rewriting shared history.
:::

## Work well with others

- Use a short-lived branch for one task, with a name such as `fix/readme-link`.
- Update a clean `main` before starting new work. `git pull --ff-only` refuses accidental merge commits when histories diverge.
- Explain what changed, why, and how you checked it in each PR.
- Follow the team’s merge policy. Avoid force-pushing shared branches.
- Use repository rules to require reviews and checks when appropriate for the team.

## Keep your work recoverable

Commit useful milestones and push finished work regularly. Git only knows content you have recorded; ignored and untracked files are not backed up by a push. Keep normal backups too.

**Try it:** add `.gitignore` to `my-first-repo`, create `.env` with the harmless text `PRACTICE_ONLY=yes`, and run `git check-ignore .env`. It should print `.env`. Review and commit **only** `.gitignore`; the dummy environment file stays local.

Sources: [gitignore](https://git-scm.com/docs/gitignore), [git pull](https://git-scm.com/docs/git-pull).
