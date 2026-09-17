---
title: 03 · O primeiro repositório
description: Cria um diário de aprendizagem e guarda o teu primeiro commit.
---

## Inicia o repositório

```bash
mkdir my-first-repo
cd my-first-repo
git init
```

## Cria um ficheiro

```markdown
# O meu diário de aprendizagem

- Estou a aprender Git.
- Vou fazer commits pequenos.
```

Guarda-o como `README.md`.

## Confirma antes de guardar

```bash
git status
git diff
```

- `git status`: o que mudou
- `git diff`: as alterações exatas

## Guarda a alteração

```bash
git add README.md
git diff --staged
git commit -m "Add learning journal"
```

## Confirma o resultado

```bash
git log --oneline -1
git status
```

Deves ver um commit e um estado limpo.

**Experimenta:** acrescenta um segundo ponto, revê a alteração e faz outro commit.
