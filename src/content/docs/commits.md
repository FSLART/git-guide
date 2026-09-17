---
title: 04 · Make useful commits
description: Review changes, then commit one clear change at a time.
---

## Keep each commit focused

A commit should answer one simple question:

> What changed and why?

Good rule: one idea, one commit, one message.

## Make a small change

Edit `README.md` and add:

```markdown
## What I learned

- A commit records a snapshot of my work.
```

Review it first:

```bash
git status
git diff
```

## Stage only the relevant files

```bash
git add README.md
git diff --staged
```

## Write a real message

```bash
git commit -m "Document what a commit does"
```

Strong examples:

- `Add learning journal`
- `Fix setup command`
- `Update onboarding notes`
- `Fix boot timeout on cold start`
- `Guard motor relay during sensor fault`

A good message tells the reader what changed and why it was needed.

## Example with firmware code

Imagine a small firmware fix in a device driver:

```c
// before
if (temp > 80) {
  heater_off();
}

// after
if (temp > 80 && !fault_active) {
  heater_off();
}
```

The git command and message could be:

```bash
git add src/firmware/temperature.c
git commit -m "Guard heater shutdown on sensor fault"
```

This is a clear commit because it says:

- what changed: the heater shutdown guard
- why: avoid shutting down during a sensor fault
- scope: one focused firmware fix

## Check the history

```bash
git log --oneline -5
git status
```

A clean status means there is nothing left to commit.

**Try it:** make a second small change and save it in a separate commit.
