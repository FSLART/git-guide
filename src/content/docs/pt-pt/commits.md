---
title: 04 · Cria commits úteis
description: Revê as alterações e guarda uma mudança clara de cada vez.
---

## Mantém cada commit focado

Um commit deve responder a uma pergunta simples:

> O que mudou e porquê?

Regra simples: uma ideia, um commit, uma mensagem.

## Faz uma alteração pequena

Edita o `README.md` e acrescenta:

```markdown
## O que aprendi

- Um commit guarda uma fotografia do meu trabalho.
```

Revê primeiro:

```bash
git status
git diff
```

## Prepara apenas os ficheiros relevantes

```bash
git add README.md
git diff --staged
```

## Escreve uma mensagem real

```bash
git commit -m "Document what a commit does"
```

Exemplos fortes:

- `Add learning journal`
- `Fix setup command`
- `Update onboarding notes`
- `Fix boot timeout on cold start`
- `Guard motor relay during sensor fault`

Uma boa mensagem diz ao leitor o que mudou e porquê.

## Exemplo com código de firmware

Imagina uma correção pequena num driver de um dispositivo:

```c
// antes
if (temp > 80) {
  heater_off();
}

// depois
if (temp > 80 && !fault_active) {
  heater_off();
}
```

O comando e a mensagem poderiam ser:

```bash
git add src/firmware/temperature.c
git commit -m "Guard heater shutdown on sensor fault"
```

Este commit é claro porque diz:

- o que mudou: a proteção do desligar do aquecedor
- porquê: evitar o desligamento durante uma falha do sensor
- alcance: uma correção focada de firmware

## Confirma o histórico

```bash
git log --oneline -5
git status
```

Um estado limpo significa que não há nada por guardar.

**Experimenta:** faz uma segunda alteração pequena e guarda-a num commit separado.
