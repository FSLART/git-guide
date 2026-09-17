---
title: 11 · Referência de comandos
description: Uma referência rápida dos comandos Git mais usados.
---

Usa esta página depois de percorreres as lições. Substitui `FILE`, `BRANCH`, `URL` e `COMMIT-ID` por valores reais; não escrevas estes marcadores literalmente.

## Observa antes de alterar

| Comando | O que faz |
| --- | --- |
| `git status` | Mostra o ramo e as alterações pendentes |
| `git diff` | Mostra alterações não preparadas em ficheiros acompanhados |
| `git diff --staged` | Mostra as alterações selecionadas para o próximo commit |
| `git log --oneline -5` | Mostra os cinco commits mais recentes |
| `git log --oneline --graph --all` | Mostra o histórico dos vários ramos |
| `git show COMMIT-ID` | Mostra um commit e as suas alterações |
| `git remote -v` | Lista os nomes e os URLs dos remotos |

Carrega em `q` se o resultado abrir num visualizador com deslocamento.

## Começa e guarda

| Comando | O que faz |
| --- | --- |
| `git init -b main` | Cria um repositório na pasta atual |
| `git clone URL` | Descarrega um repositório existente para uma nova pasta |
| `git add FILE` | Prepara a versão atual de um ficheiro |
| `git commit -m "Clear message"` | Guarda as alterações preparadas |
| `git check-ignore FILE` | Verifica se uma regra ignora um ficheiro |

## Usa ramos e colabora

| Comando | O que faz |
| --- | --- |
| `git switch -c BRANCH` | Cria um ramo e muda para ele |
| `git switch main` | Muda para o ramo principal |
| `git branch --show-current` | Mostra o nome do ramo atual |
| `git fetch origin` | Obtém o histórico remoto sem o integrar |
| `git pull --ff-only` | Atualiza o ramo atual se puder avançar diretamente |
| `git push -u origin BRANCH` | Envia um ramo e define o remoto de acompanhamento |
| `git push` | Envia para o ramo remoto configurado no fluxo deste guia |
| `git merge BRANCH` | Integra esse ramo no ramo atual |
| `git branch -d BRANCH` | Elimina um ramo local apenas se o Git o considerar integrado |

## Desfaz com cuidado

| Comando | Efeito |
| --- | --- |
| `git restore --staged FILE` | Retira da preparação; mantém as edições locais |
| `git restore FILE` | **Descarta** alterações não preparadas num ficheiro acompanhado |
| `git revert COMMIT-ID` | Cria um commit que anula o commit escolhido |
| `git merge --abort` | Cancela uma integração em curso |
| `git revert --abort` | Cancela uma reversão em curso |

Lê [Desfaz alterações com confiança](../undo/) antes de descartares ou reverteres trabalho. Faz commit ou guarda de outra forma segura as alterações pendentes antes de iniciares uma integração.

## A tua rotina diária

```bash
git status
git diff
git add README.md
git diff --staged
git commit -m "Describe the change"
git push
```

O último comando pressupõe que já configuraste o ramo remoto de acompanhamento. Executa as verificações relevantes do projeto antes de fazeres commit e segue o processo de revisão antes de integrares.

**Confirma o que aprendeste:** sabes explicar a diferença entre `fetch`, `pull` e `push`? Fetch obtém o histórico, pull obtém e integra, e push envia os teus commits.

Referência oficial: [manuais dos comandos Git](https://git-scm.com/docs) (em inglês).
