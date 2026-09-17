---
title: 06 · Trabalha num ramo
description: Cria um ramo para uma pequena alteração e partilha-o para revisão.
---

**Antes de começar:** o repositório de prática já deve estar no GitHub. Termina ou guarda as alterações pendentes e consulta `git status` antes de mudares de ramo.

## Dá espaço a uma ideia

Um **ramo** (branch) é uma linha de trabalho com nome. Permite desenvolver uma ideia enquanto `main` se mantém no commit atual. Os ramos partilham o histórico; criar um ramo não copia todo o projeto para outra pasta.

Começa com `main` atualizado:

```bash
git switch main
git pull --ff-only
git switch -c add-goals
```

`--ff-only` atualiza o ramo apenas se conseguir avançar sem criar um commit de integração. Se o Git indicar que os ramos divergiram, para e analisa o histórico em vez de forçares o envio. `switch -c` cria um ramo e muda para ele.

## Faz uma alteração com um objetivo

Acrescenta esta secção ao `README.md` e guarda:

```markdown
## Os meus objetivos

- Fazer commits pequenos e claros.
- Aprender a colaborar através de pull requests.
```

```bash
git diff
git add README.md
git diff --staged
git commit -m "Add learning goals"
```

## Observa a diferença

```bash
git switch main
```

Abre o README: os novos objetivos não aparecem em `main`. Estão guardados no commit de `add-goals`.

```bash
git switch add-goals
git log --oneline --graph --all -5
```

Os objetivos voltaram. A vista do histórico mostra os nomes dos ramos junto dos respetivos commits mais recentes.

:::caution Faz commit antes de mudares de ramo
As alterações sem commit não ficam guardadas de forma segura num ramo. O Git pode levá-las para outro ramo ou recusar a mudança se houver ficheiros que seriam substituídos. Confirma o estado e faz commit do trabalho concluído primeiro.
:::

## Publica o ramo

```bash
git push -u origin add-goals
```

Isto envia o ramo; não o integra em `main`. Na próxima lição vais abrir um pull request.

**Experimenta:** executa `git branch --show-current`. Deve aparecer `add-goals`. No GitHub, usa o seletor de ramos para encontrares os teus objetivos nesse ramo.

Fonte: [ramos no Git](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) (em inglês).
