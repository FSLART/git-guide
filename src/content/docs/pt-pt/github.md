---
title: 05 · Publica no GitHub
description: Envia o teu repositório local para o GitHub e guarda-o online.
---

## Cria o repositório remoto

No GitHub, clica em **New repository** e cria um repositório sem README se já tens um localmente.

## Liga e envia

```bash
git remote add origin git@github.com:SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

Se preferires HTTPS:

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## O que estes comandos fazem

- `origin`: o teu remoto do GitHub
- `main`: o teu ramo principal
- `-u`: liga os ramos locais e remotos

## Envia mais tarde

```bash
git push
```

## Continua noutro computador

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
git status
```

**Experimenta:** envia o teu repositório para o GitHub e confirma que está online.
