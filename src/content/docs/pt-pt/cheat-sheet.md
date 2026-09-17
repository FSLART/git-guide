---
title: 11 · Referência de comandos
description: Comandos rápidos para o dia a dia do Git.
---

## Observa antes de alterar

```bash
git status
git diff
git log --oneline -5
```

## Começa e guarda

```bash
git init
git add README.md
git commit -m "Add README"
```

## Usa ramos e colabora

```bash
git switch main
git pull --ff-only
git switch -c feature-name
git push -u origin feature-name
```

## Abre um pull request

- envia o ramo
- abre o GitHub
- escolhe **New pull request**
- compara com `main`

## Desfaz com cuidado

```bash
git restore --staged FILE
git restore FILE
git revert <commit>
```

## Rotina diária

```bash
git status
git add .
git commit -m "Descreve a alteração"
git push
```

Mantém tudo pequeno. Repete muitas vezes.
