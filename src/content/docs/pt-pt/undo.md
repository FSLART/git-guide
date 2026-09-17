---
title: 09 · Desfaz alterações com confiança
description: Distingue retirar da preparação, descartar uma edição e reverter um commit.
---

**Antes de começar:** regressa a `my-first-repo`. Consulta sempre `git status` e `git diff` antes de desfazeres alterações.

## Escolhe a operação certa

| Situação | Ferramenta | Mantém as edições? |
| --- | --- | --- |
| Preparaste o ficheiro errado | `git restore --staged README.md` | Sim, no ficheiro de trabalho |
| Queres descartar uma edição não preparada | `git restore README.md` | Não, essa edição perde-se |
| Queres anular um commit publicado | `git revert COMMIT-ID` | Cria um commit que anula a alteração |

`COMMIT-ID` é um marcador de exemplo. Substitui-o por um identificador real de `git log` e revê o commit antes de o reverteres.

## Retira da preparação sem perder trabalho

Acrescenta uma frase temporária ao `README.md`, guarda e experimenta:

```bash
git add README.md
git restore --staged README.md
git status
git diff
```

A frase continua no ficheiro, mas já não está selecionada para o próximo commit. Este exercício pressupõe que o repositório já tem um commit.

## Descarta apenas o que não precisas

:::danger Esta operação descarta alterações não preparadas
`git restore README.md` substitui o ficheiro de trabalho pela versão preparada. Se não houver alterações preparadas, é normalmente a última versão guardada num commit. O Git pode não conseguir recuperar uma edição que nunca tenha sido incluída num commit. Copia primeiro para outro local o que quiseres manter.
:::

Para a frase temporária acima, revê a alteração e descarta-a apenas quando tiveres a certeza:

```bash
git diff -- README.md
git restore README.md
git status
```

## Anula um commit sem apagar o histórico

Pratica num novo ramo local, com o diretório de trabalho limpo:

```bash
git switch -c practise-undo
```

Cria `temporary-note.txt` com o texto `Esta é uma nota de prática` e executa:

```bash
git add temporary-note.txt
git commit -m "Add temporary practice note"
git show --stat HEAD
git revert --no-edit HEAD
git log --oneline -3
```

`HEAD` representa o commit atual. Aqui, é o commit de prática que acabaste de criar. Revert acrescenta um commit que remove a nota; o commit original continua no histórico. No fim, regressa a `main` com `git switch main`.

Num projeto real, escolhe o commit pretendido pelo identificador. Reverter alterações antigas pode criar conflitos; consulta `git status`, resolve-os e usa `git revert --continue`, ou cancela com `git revert --abort`. Reverter commits de integração exige escolhas adicionais e fica fora deste exercício inicial.

**Bom hábito:** em ramos partilhados, prefere um commit de correção ou revert a reescrever o histórico com hard reset e envio forçado.

Fontes: [git restore](https://git-scm.com/docs/git-restore), [git revert](https://git-scm.com/docs/git-revert) (em inglês).
