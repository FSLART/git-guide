---
title: 10 · Hábitos a manter
description: Mantém o fluxo simples, claro e fácil de rever.
---

## Rotina simples

Um fluxo saudável em Git é curto e repetível:

- uma tarefa = um ramo
- uma ideia = um commit
- um PR = uma alteração

## Boas mensagens de commit

Usa um assunto claro no modo imperativo.

Boas:

- `Add onboarding checklist`
- `Fix broken install link`
- `Update release notes`

Fracas:

- `update`
- `fix stuff`
- `wip`

## Antes de cada commit

1. Executa `git status`.
2. Lê `git diff`.
3. Prepara só os ficheiros relevantes.
4. Lê `git diff --staged`.
5. Faz commit com uma mensagem clara.

## Mantém o repositório limpo

Cria `.gitignore` para ficheiros gerados ou segredos.

```text
.env
.env.*
node_modules/
dist/
```

Nunca faças commit de credenciais reais.

## Colabora bem com outras pessoas

- atualiza `main` antes de começares trabalho novo
- usa nomes curtos de ramo
- envia o ramo antes de abrir um PR
- explica o que mudou e porquê

**Experimenta:** revisa um commit antigo e escreve uma mensagem melhor.
