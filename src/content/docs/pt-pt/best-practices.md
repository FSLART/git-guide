---
title: 10 · Hábitos a manter
description: Mantém um histórico claro, evita publicar segredos e colabora com cuidado.
---

**Objetivo:** transformar os comandos que aprendeste numa rotina de confiança.

## Antes de cada commit

1. Executa `git status` para confirmares o ramo e os ficheiros alterados.
2. Lê `git diff`. Remove mensagens de depuração ou edições acidentais.
3. Prepara os ficheiros que pertencem a uma alteração com um único objetivo.
4. Lê `git diff --staged` para reveres exatamente o que vais guardar.
5. Executa as verificações relevantes e escreve uma mensagem clara.

Commits pequenos e coerentes são mais fáceis de rever e desfazer. Evita misturar uma correção, a formatação de todos os ficheiros e novas funcionalidades no mesmo commit.

## Mantém os ficheiros locais fora do histórico

Cria um ficheiro chamado `.gitignore` na raiz do repositório. Num projeto com ficheiros de ambiente e dependências Node, pode conter:

```text
.env
.env.*
!.env.example
node_modules/
dist/
.DS_Store
```

Acrescenta apenas padrões adequados ao projeto. Um `.env.example` deve conter valores fictícios, nunca credenciais reais. Inclui o `.gitignore` num commit para partilhares as regras com a equipa.

Ignorar um ficheiro não o remove se o Git já o acompanhar. Para deixar de acompanhar um ficheiro gerado sem dados confidenciais, mantendo a cópia local, usa `git rm --cached FILE`, revê e faz commit. Substitui `FILE` pelo caminho real. As versões anteriores continuam no histórico.

:::danger Se incluíres um segredo num commit
Primeiro revoga ou substitui a credencial no serviço que a emitiu. Eliminar o ficheiro num commit posterior não remove a versão anterior. Segue o [guia do GitHub para remover dados confidenciais](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) e coordena com a equipa antes de reescreveres o histórico partilhado.
:::

## Colabora bem com outras pessoas

- Usa um ramo de curta duração para cada tarefa, com um nome como `fix/readme-link`.
- Atualiza `main`, sem alterações pendentes, antes de começares. `git pull --ff-only` recusa commits de integração acidentais se os históricos divergirem.
- Explica o que mudou, porquê e como verificaste a alteração em cada PR.
- Segue a política de integração da equipa. Evita envios forçados para ramos partilhados.
- Usa regras do repositório para exigir revisões e verificações quando forem adequadas à equipa.

## Mantém o trabalho recuperável

Guarda etapas úteis em commits e envia regularmente o trabalho concluído. O Git só conhece o conteúdo que registaste; um push não cria cópias de segurança dos ficheiros ignorados ou não acompanhados. Mantém também cópias de segurança normais.

**Experimenta:** acrescenta `.gitignore` a `my-first-repo`, cria `.env` com o texto inofensivo `PRACTICE_ONLY=yes` e executa `git check-ignore .env`. Deve aparecer `.env`. Revê e faz commit **apenas** de `.gitignore`; o ficheiro de ambiente fictício fica local.

Fontes: [gitignore](https://git-scm.com/docs/gitignore), [git pull](https://git-scm.com/docs/git-pull) (em inglês).
