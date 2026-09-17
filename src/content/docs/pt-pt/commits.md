---
title: 04 · Cria commits úteis
description: Revê alterações, prepara os ficheiros certos e escreve mensagens claras.
---

**Objetivo:** ganhar o hábito de editar, rever e guardar commits. Trabalha dentro de `my-first-repo`, criado na lição anterior.

## Faz uma pequena alteração

Acrescenta esta secção ao `README.md` no teu editor e guarda o ficheiro:

```markdown
## O que já aprendi

- Um commit regista uma versão do meu trabalho.
```

Vê o que mudou antes de preparares as alterações:

```bash
git status
git diff
```

Na comparação, as linhas que começam por `+` foram adicionadas e as que começam por `-` foram removidas. As linhas `+++` e `---` identificam ficheiros, não alterações. Carrega em `q` se abrir um visualizador.

## Prepara apenas o que pretendes

```bash
git add README.md
git diff --staged
git commit -m "Document what a commit does"
```

Enquanto aprendes, prefere indicar os nomes dos ficheiros. `git add .` pode incluir ficheiros sem relação com a alteração ou dados confidenciais que não querias publicar.

:::note A preparação também regista um estado
Se voltares a editar o ficheiro depois de `git add`, a nova alteração não fica automaticamente preparada. Usa `git diff` para ver as alterações por preparar e `git diff --staged` para ver as que vão entrar no commit. Executa `git add` novamente se quiseres incluir a nova edição.
:::

## Escreve mensagens úteis para o futuro

| Menos útil | Mais útil |
| --- | --- |
| `coisas` | `Add learning journal` |
| `correção` | `Correct setup command in README` |
| `alterações` | `Document what a commit does` |

Usa um resumo curto e específico para uma alteração com um único objetivo. Se precisares de explicar a decisão, acrescenta o motivo numa mensagem mais longa. Um prefixo como `docs:` é opcional, salvo se a equipa tiver acordado usá-lo.

## Confirma o histórico

```bash
git log --oneline -5
git status
```

Deves ver o novo commit acima do primeiro e um diretório de trabalho limpo.

**Experimenta:** acrescenta uma segunda aprendizagem ao README, revê as comparações antes e depois da preparação e guarda um commit separado com uma mensagem descritiva. Escolhe tu a mensagem.

Fonte: [registar alterações](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) (em inglês).
