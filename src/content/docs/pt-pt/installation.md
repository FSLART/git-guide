---
title: 02 · Instalar e configurar
description: Instala o Git no Windows, macOS ou Linux e configura a tua identidade.
---

**Objetivo:** executar o Git num terminal e definir a identidade dos teus commits.

## Instala o Git

- **Windows:** usa o instalador do [Git for Windows](https://gitforwindows.org/). Depois da instalação, abre o **Git Bash**; os exemplos deste guia funcionam aí.
- **macOS:** abre o **Terminal** e executa `git --version`. Se aparecer um pedido para instalar as ferramentas de desenvolvimento de linha de comandos, segue as instruções. Encontras outras opções na [página de instalação do Git](https://git-scm.com/install/).
- **Ubuntu / Debian:** abre o terminal e executa os comandos abaixo. Noutras distribuições, usa o respetivo gestor de pacotes.

```bash
sudo apt update
sudo apt install git
```

Fecha e volta a abrir o terminal. Confirma a instalação:

```bash
git --version
```

Deves ver `git version` seguido de um número de versão. Usa o Git **2.28 ou mais recente** para todos os exemplos deste guia.

## Configura a tua identidade

Substitui o nome e o endereço de exemplo pelos teus. Estes dados ficam associados aos novos commits; não são as credenciais de acesso ao GitHub.

```bash
git config --global user.name "O Teu Nome"
git config --global user.email "tu@exemplo.pt"
git config --global init.defaultBranch main
```

`--global` significa «usar esta definição para o meu utilizador neste computador». Dentro de um repositório, omite `--global` para alterar a definição apenas nesse projeto.

:::note Protege o teu endereço de email
Antes de publicares commits, podes escolher o endereço `noreply` fornecido pelo GitHub em **GitHub → Settings → Emails**. Copia o endereço exato que aparece nessa página.
:::

## Habitua-te ao terminal

Executa um comando de cada vez e carrega em Enter. Se vires um `$` no início de um comando noutro tutorial, não o escrevas: normalmente representa o indicador do terminal.

| Comando | Significado |
| --- | --- |
| `pwd` | Mostra a pasta atual |
| `ls` | Lista os ficheiros e as pastas |
| `cd nome-da-pasta` | Entra numa pasta |
| `cd ..` | Sobe uma pasta |

Estes exemplos usam o Git Bash no Windows ou um terminal normal no macOS/Linux.

## Confirma a configuração

```bash
git config --get user.name
git config --get user.email
git config --get init.defaultBranch
```

**Experimenta:** confirma que aparecem o teu nome, o endereço que escolheste e `main`. Se o comando `git` não for encontrado, volta a abrir o terminal ou consulta as instruções de instalação do teu sistema operativo.

Fontes: [configuração do Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup), [email dos commits no GitHub](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) (em inglês).
