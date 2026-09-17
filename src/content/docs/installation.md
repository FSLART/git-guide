---
title: 02 · Install & set up
description: Install Git on Windows, macOS, or Linux and configure your identity.
---

**Your goal:** run Git in a terminal and set the identity for your commits.

## Install Git

- **Windows:** use the installer from [Git for Windows](https://gitforwindows.org/). Open **Git Bash** after installation; the guide’s terminal examples work there.
- **macOS:** open **Terminal** and run `git --version`. If prompted to install command line developer tools, follow the prompt. Other installers are listed on the [Git installation page](https://git-scm.com/install/).
- **Ubuntu / Debian:** open your terminal and run the following commands. For other distributions, use their package manager.

```bash
sudo apt update
sudo apt install git
```

Close and reopen your terminal, then check:

```bash
git --version
```

You should see `git version` followed by a version number. Use Git **2.28 or newer** for all examples in this guide.

## Introduce yourself

Replace the sample name and email with your own. These details are attached to new commits; they are not your GitHub login.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

`--global` means “use this setting for my user account on this computer.” Inside a repository, omit `--global` to override a setting for that project only.

:::note Keep your email private
Before making public commits, you can choose the GitHub-provided `noreply` address shown in **GitHub → Settings → Emails**. Copy your exact address from there rather than guessing it.
:::

## Get comfortable in the terminal

Run one command at a time and press Enter. Don’t type a leading `$` if you see one in another tutorial: it usually represents the terminal prompt.

| Command | Meaning |
| --- | --- |
| `pwd` | Show your current folder |
| `ls` | List files and folders |
| `cd folder-name` | Enter a folder |
| `cd ..` | Go up one folder |

These examples use Git Bash on Windows or a standard macOS/Linux shell.

## Check your setup

```bash
git config --get user.name
git config --get user.email
git config --get init.defaultBranch
```

**Try it:** check that the output shows your name, your chosen email, and `main`. If `git` is not found, reopen the terminal or revisit the installation instructions for your operating system.

Sources: [Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup), [GitHub commit email](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
