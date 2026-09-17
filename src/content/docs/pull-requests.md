---
title: 07 · Your first pull request
description: Share a branch, review it, and merge it.
---

## Open a PR

On GitHub:

1. Open **Pull requests**.
2. Click **New pull request**.
3. Set **base** to `main`.
4. Set **compare** to your branch.
5. Click **Create pull request**.

Short description:

```text
What changed: added learning goals
Why: make the next steps clearer
Checked: reviewed the README and diff
```

## Review before merging

Check for:

- unrelated edits
- secrets or debug code
- mistakes in wording or commands

## Merge and sync

After review:

```bash
git switch main
git pull --ff-only
```

Then merge on GitHub and delete the branch if you no longer need it.

**Try it:** merge the branch and confirm the change is on `main`.
