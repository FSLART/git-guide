---
title: 01 · O que é o Git?
description: Percebe o que são o Git e o GitHub e onde ficam as tuas alterações.
---

**Objetivo:** explicar o que o Git guarda e para que serve o GitHub. Ainda não precisas de instalar nada.

## Um histórico para o teu projeto

Imagina teres `notas-final.txt`, `notas-final-2.txt` e `notas-mesmo-final.txt`. O Git substitui essa confusão por um histórico de versões que guardas de forma intencional. Cada registo chama-se **commit**. Escolhes o que deve incluir e escreves uma mensagem curta a explicar a alteração.

Um **repositório** (ou **repo**) é um projeto cujo histórico é acompanhado pelo Git. É uma pasta normal, com uma pasta oculta chamada `.git`, onde o Git guarda a sua informação. Não alteres essa pasta manualmente.

## Git e GitHub

| Git | GitHub |
| --- | --- |
| Uma ferramenta instalada no teu computador | Um serviço que abres no navegador |
| Regista e compara alterações locais | Aloja repositórios na Internet |
| Funciona sem ligação à Internet | Ajuda as pessoas a rever e partilhar trabalho |

Podes usar Git sem GitHub. Um commit local **não** envia automaticamente o teu trabalho para a Internet. Mais à frente, vais usar `git push` para enviar commits para o GitHub.

## Três sítios a lembrar

1. **Diretório de trabalho:** os ficheiros que estás a editar.
2. **Área de preparação (staging):** as alterações que escolheste para o próximo commit.
3. **Histórico do repositório:** os commits que já guardaste.

```text
Editar ficheiros  →  git add  →  git commit
O teu trabalho      Escolher    Guardar uma versão
```

Guardar um ficheiro no editor e fazer um commit são ações diferentes. O Git não regista cada tecla que carregas.

## O projeto deste guia

Vais criar o `my-first-repo`, um diário de aprendizagem com um ficheiro `README.md`. Markdown (`.md`) é texto simples com alguma formatação: `#` inicia um título. Basta um editor de texto.

:::tip Experimenta
Explica por palavras tuas: repositório, commit e área de preparação. Depois pergunta: «Se fizer um commit sem Internet, fica no GitHub?» Não — fica no teu computador até o enviares.
:::

**Pronto para continuar?** Já sabes o que vais criar. A seguir, instala o Git e configura a tua identidade.

Leitura adicional: [introdução ao controlo de versões](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) (em inglês).
