---
title: 06 · Trabalha num ramo
description: Mantém cada tarefa no seu próprio ramo.
---

## Cria um ramo

```bash
git switch main
git pull --ff-only
git switch -c add-goals
```

Um ramo dá a cada tarefa o seu espaço.

## Faz a alteração

Acrescenta isto ao `README.md`:

```markdown
## Os meus objetivos

- Fazer commits pequenos.
- Aprender pull requests.
```

Depois guarda e faz commit:

```bash
git add README.md
git commit -m "Add learning goals"
```

## Compara os ramos

```bash
git switch main
git switch add-goals
```

Em `main`, a alteração desaparece. Em `add-goals`, aparece.

## Envia o ramo

```bash
git push -u origin add-goals
```

**Experimenta:** executa `git branch --show-current` e confirma que diz `add-goals`.
