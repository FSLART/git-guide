---
title: 07 · O primeiro pull request
description: Propõe uma alteração, revê-a, integra-a e atualiza o repositório local.
---

**Antes de começar:** envia o ramo `add-goals` da lição anterior para o GitHub.

## Propõe uma alteração a main

Um **pull request** (PR) é uma proposta para integrar um ramo noutro. Oferece um espaço para ler as diferenças, discutir decisões e executar verificações automáticas antes da integração. Um PR é uma funcionalidade do GitHub; `git pull` é uma operação diferente que atualiza o ramo local.

Na página do repositório no GitHub:

1. Abre **Pull requests → New pull request**.
2. Define **base** como `main` e **compare** como `add-goals`.
3. Lê as diferenças e escolhe **Create pull request**.
4. Usa um título como `Add learning goals` e explica a alteração.

Experimenta esta descrição:

```text
O que mudou: Acrescentei dois objetivos ao diário de aprendizagem.
Porquê: Para tornar claros os próximos passos.
Verificação: Pré-visualizei o README e revi as diferenças.
```

## Revê antes de integrar

Abre **Files changed**. Procura ficheiros inesperados, informação privada, erros e alterações sem relação com o objetivo. Numa equipa, pede uma revisão e segue as regras do repositório. No teu repositório de prática, podes rever e integrar o teu próprio PR se as regras o permitirem; não podes aprovar formalmente o teu próprio PR como revisor.

Para corrigir o PR, edita localmente em `add-goals`, faz commit e executa `git push`. O mesmo PR é atualizado automaticamente.

## Integra e sincroniza

Neste exercício, escolhe **Create a merge commit** nas opções de integração do GitHub e confirma. Isto mantém os commits do ramo no histórico. Uma equipa pode preferir squash ou rebase; segue a convenção acordada.

De volta ao terminal:

```bash
git switch main
git pull --ff-only
git log --oneline --graph -5
```

O README local já deve incluir os objetivos. Depois de confirmares a integração, elimina o ramo local:

```bash
git branch -d add-goals
```

Se o Git recusar, para e confirma se o trabalho foi integrado. Uma integração por squash cria um commit diferente, pelo que o Git pode não reconhecer o ramo original como integrado. Não substituas `-d` por `-D` sem perceberes o que vais eliminar.

**Experimenta:** confirma que o PR aparece como **Merged** no GitHub e que `git status` indica um estado limpo no teu computador. Completaste um fluxo de colaboração.

Fonte: [criar um pull request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) (em inglês).
