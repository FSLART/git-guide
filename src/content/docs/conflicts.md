---
title: 08 · Resolve a conflict
description: Keep the merge conflict simple and fix it carefully.
---

## Create a practice conflict

Use a separate repo for this.

```bash
git init practice-conflict
cd practice-conflict
git checkout -b main
```

Create `notes.txt` with:

```text
Status: ready
```

Commit it. Then create a second branch and edit the same line differently on both branches.

## Merge and fix

```bash
git merge feature-branch
```

Git will stop at the conflict markers.

Open the file and remove:

```text
<<<<<<<
=======
>>>>>>>
```

Then keep the final version you want.

```bash
git add notes.txt
git commit -m "Resolve merge conflict"
```

## Rule of thumb

Read both sides, decide what should win, and keep the result clear.

**Try it:** create one conflict, fix it, and read the final file carefully.
