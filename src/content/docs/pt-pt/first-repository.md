---
title: 03 · O primeiro repositório
description: Cria um diário de aprendizagem e guarda o teu primeiro commit.
---

**Antes de começar:** termina a lição de instalação. Abre um terminal numa pasta onde guardas os teus projetos, fora de qualquer repositório Git existente.

## Cria uma pasta para o projeto

```bash
mkdir my-first-repo
cd my-first-repo
git init -b main
```

`mkdir` cria uma pasta, `cd` entra nessa pasta e `git init` cria aí um repositório. A opção `-b main` dá o nome `main` ao primeiro ramo. Executa `git init` uma vez ao criar o repositório, não sempre que trabalhas nele.

## Adiciona o primeiro ficheiro

No teu editor de texto, cria um ficheiro chamado **README.md** dentro de `my-first-repo`. Guarda este texto:

```markdown
# O meu diário de aprendizagem

Estou a aprender Git, um passo de cada vez.
```

Confirma que o nome é `README.md`, e não `README.md.txt`. Agora observa o estado do repositório:

```bash
git status
```

O resultado deve indicar `README.md` como **untracked** (não acompanhado). O Git vê o ficheiro, mas este ainda não faz parte de um commit.

## Escolhe, revê e guarda

```bash
git add README.md
git diff --staged
git commit -m "Add learning journal"
```

- `add` seleciona o conteúdo atual do ficheiro para o próximo commit.
- `diff --staged` mostra exatamente o que esse commit vai incluir.
- `commit -m` guarda as alterações com uma mensagem.

Se a comparação abrir num visualizador com deslocamento, carrega em `q` para regressares ao terminal. O resultado do commit inclui um identificador curto, como `a1b2c3d`; o teu será diferente. As mensagens de exemplo estão em inglês para manter o mesmo histórico nas duas versões do guia.

## Confirma o resultado

```bash
git status
git log --oneline
```

Deves ter um diretório de trabalho limpo e um commit chamado `Add learning journal`. «Limpo» significa que não há alterações pendentes; os ficheiros continuam na pasta.

:::tip Experimenta
Fecha o terminal, volta a abri-lo e regressa a `my-first-repo` com `cd`. Executa `git log --oneline`. O commit continua lá — o histórico pertence à pasta, não à sessão do terminal.
:::

Se aparecer «not a git repository», usa `pwd` para confirmares onde estás e entra em `my-first-repo` com `cd`.

Fonte: [criar um repositório Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) (em inglês).
