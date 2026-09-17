---
title: 02 · Instalar e configurar
description: Instala o Git e configura a tua identidade.
---

## Instala o Git

Escolhe a versão certa para o teu computador:

- Windows: [Git for Windows](https://gitforwindows.org/)
- macOS: `brew install git`
- Linux: `sudo apt install git`

Se quiseres também o fluxo visual, instala o [GitHub Desktop](https://desktop.github.com/).

## Define o teu nome e e-mail

```bash
git config --global user.name "O teu nome"
git config --global user.email "tu@exemplo.com"
```

## Confirma o terminal

```bash
git --version
pwd
ls
```

Se `git --version` funcionar, o Git está instalado.

## Ciclo pequeno para aprender

```bash
git status
git add .
git commit -m "Add my first change"
```

Isso basta para começar.
