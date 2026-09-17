---
title: 08 · Resolve um conflito
description: Mantém o conflito simples e resolve-o com atenção.
---

## Cria um conflito de prática

Usa um repositório separado para isto.

```bash
git init practice-conflict
cd practice-conflict
git checkout -b main
```

Cria `notes.txt` com:

```text
Status: ready
```

Faz commit. Depois cria um segundo ramo e altera a mesma linha de forma diferente nos dois ramos.

## Faz o merge e corrige

```bash
git merge feature-branch
```

O Git para nos marcadores de conflito.

Abre o ficheiro e remove:

```text
<<<<<<<
=======
>>>>>>>
```

Depois mantém a versão final que queres.

```bash
git add notes.txt
git commit -m "Resolve merge conflict"
```

## Regra geral

Lê os dois lados, decide o que deve vencer e mantém o resultado claro.

**Experimenta:** cria um conflito, corrige-o e lê o ficheiro final com atenção.
