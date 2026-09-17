---
title: 05 · Publica no GitHub
description: Liga o repositório local ao GitHub, autentica-te e envia os teus commits.
---

**Antes de começar:** precisas de uma [conta no GitHub](https://github.com/signup) e de pelo menos um commit local em `my-first-repo`.

## Cria um repositório remoto vazio

No GitHub, escolhe **New repository**. Dá-lhe o nome `my-first-repo` e escolhe se deve ser público ou privado. Neste exercício, deixa as opções de README, `.gitignore` e licença por selecionar: já tens um histórico local.

Um **remoto** é uma ligação com nome a outra cópia do repositório. `origin` é o nome habitual; é uma convenção, não um servidor especial.

## Autentica-te de forma segura

Para HTTPS, usa o [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) ou a [linha de comandos do GitHub](https://cli.github.com/) para iniciares sessão através do navegador. O Git for Windows inclui o Git Credential Manager como opção de instalação. Se escolheres o GitHub CLI, instala-o primeiro e executa:

```bash
gh auth login
```

Escolhe GitHub.com, HTTPS e autenticação pelo navegador, e aceita autenticar o Git. `gh` é uma ferramenta separada, não faz parte do Git. A palavra-passe normal do GitHub não serve para autenticar operações Git por HTTPS. Nunca coloques um token de acesso num URL remoto ou num ficheiro incluído num commit.

## Liga e envia

Copia o URL HTTPS do novo repositório. Substitui `YOUR-USERNAME` pelo teu nome de utilizador antes de executares:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-repo.git
git remote -v
git push -u origin main
```

Confirma o URL remoto antes de enviares o trabalho. `-u` associa o ramo local ao ramo remoto para que, nos próximos envios, baste usar `git push`.

Atualiza a página do repositório. O README e os commits devem aparecer.

## Leva o trabalho para outro computador

A partir de uma pasta que ainda não contenha `my-first-repo`, usa o teu URL real:

```bash
git clone https://github.com/YOUR-USERNAME/my-first-repo.git
cd my-first-repo
```

Clonar descarrega o repositório e configura `origin`; não voltes a executar `git init` nem a adicionar `origin` na cópia.

## Se algo correr mal

- **Remote origin already exists:** consulta `git remote -v`. Se o URL estiver errado, corrige-o com `git remote set-url origin URL-CORRETO`.
- **Repository not found:** confirma o proprietário, o nome do repositório e as permissões da tua conta.
- **Envio rejeitado:** não forces o envio. O remoto pode ter trabalho que ainda não existe no teu ramo local. Obtém e revê as alterações antes de as integrares.

**Experimenta:** encontra o último commit no GitHub e compara a mensagem com o resultado local de `git log --oneline -1`.

Fonte: [autenticação no GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github) (em inglês).
