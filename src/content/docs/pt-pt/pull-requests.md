---
title: 07 · O primeiro pull request
description: Partilha um ramo, revê-o e integra-o.
---

## Abre um PR

No GitHub:

1. Abre **Pull requests**.
2. Clica em **New pull request**.
3. Define **base** como `main`.
4. Define **compare** como o teu ramo.
5. Clica em **Create pull request**.

Descrição curta:

```text
O que mudou: adicionei objetivos de aprendizagem
Porquê: tornar os próximos passos mais claros
Verificação: revi o README e as diferenças
```

## Revê antes de integrar

Procura:

- edições sem relação
- segredos ou código de debug
- erros em texto ou comandos

## Integra e sincroniza

Depois da revisão:

```bash
git switch main
git pull --ff-only
```

Depois integra no GitHub e elimina o ramo se já não o precisares.

**Experimenta:** integra o ramo e confirma que a alteração está em `main`.
