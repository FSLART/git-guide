---
title: 08 · Resolve um conflito
description: Pratica um conflito de integração previsível num repositório separado.
---

**Objetivo:** perceber os marcadores de conflito e escolher o conteúdo final. Um conflito significa que o Git precisa da tua decisão, não que perdeste o trabalho.

## Cria um espaço de prática separado

A partir de `my-first-repo`, sobe para a pasta anterior e cria um novo repositório. Se `conflict-practice` já existir, escolhe outro nome.

```bash
cd ..
mkdir conflict-practice
cd conflict-practice
git init -b main
```

Cria `plan.txt` no editor com uma linha: `Aprender Git`. Guarda e executa:

```bash
git add plan.txt
git commit -m "Add study plan"
git switch -c morning-plan
```

Altera a linha para `Aprender Git de manhã`, guarda e faz commit:

```bash
git add plan.txt
git commit -m "Plan a morning session"
git switch main
```

Em `main`, altera a mesma linha para `Aprender Git à noite`, guarda e faz commit:

```bash
git add plan.txt
git commit -m "Plan an evening session"
git merge morning-plan
```

Isto cria um conflito de propósito, porque os dois ramos alteraram a mesma linha de formas diferentes.

## Lê e resolve

Executa `git status` e abre `plan.txt`. Deves ver:

```text
<<<<<<< HEAD
Aprender Git à noite
=======
Aprender Git de manhã
>>>>>>> morning-plan
```

A parte de cima vem do ramo atual (`main`); a de baixo vem de `morning-plan`. Decide o que o ficheiro deve dizer. Substitui o bloco inteiro, incluindo todos os marcadores, por:

```text
Aprender Git de manhã e praticar à noite
```

Guarda o ficheiro e conclui a integração:

```bash
git add plan.txt
git diff --staged
git commit -m "Combine study plans"
git status
```

O diretório de trabalho deve estar limpo. Lê o ficheiro final para confirmares que o texto faz sentido. Num projeto real, executa também os testes.

## Se preferires parar

Enquanto a integração estiver em curso, usa `git merge --abort` para a cancelar. Começa as integrações com o diretório de trabalho limpo: o cancelamento nem sempre consegue reconstruir outras alterações sem commit. Depois de guardares o commit de integração, `--abort` já não se aplica.

**Experimenta:** executa `git log --oneline --graph --all`. Observa como os dois históricos se encontram no commit de integração. Regressa ao projeto principal com `cd ../my-first-repo` antes da próxima lição.

Fonte: [ramos e integrações](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) (em inglês).
