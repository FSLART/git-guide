---
title: 09 · Desfaz alterações com confiança
description: Retira da preparação, restaura ou reverte com segurança.
---

## Escolhe a ação certa

Usa o comando certo para o problema certo:

- `git restore --staged FILE` — retira da preparação, mantém as alterações
- `git restore FILE` — descarta uma edição local
- `git revert <commit>` — anula um commit sem apagar o histórico

## Retira da preparação sem perder trabalho

```bash
git add README.md
git restore --staged README.md
```

## Descarta uma edição local

```bash
git restore README.md
```

## Reverte um commit

```bash
git log --oneline
git revert <commit-sha>
```

Isto cria um novo commit que anula o anterior.

**Experimenta:** retira da preparação um ficheiro, restaura uma edição e reverte um commit só quando estiveres pronto.
