# Git Guide / Guia de Git

A beginner-friendly Git guide in **English** and **European Portuguese (pt-PT)**, built with Astro and Starlight. Eleven chapters per language, practical exercises, search, dark/light themes, and flag links that keep the current lesson.

Created by **[João Sintra](https://github.com/joao-sintra)**. The Git logo by Jason Long is used unchanged under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/); see the [original logo downloads](https://git-scm.com/community/logos).

Configured publication address: **https://joao-sintra.github.io/git-guide/**. This address becomes live after GitHub Pages is enabled and the first deployment succeeds.

## Run locally

Use **Node.js 22.19 or newer** (Node 22 is specified in `.nvmrc`).

```bash
nvm use
npm ci
npm run dev
```

Open **http://localhost:4321/git-guide/**. If you do not use nvm, install Node 22 directly before running the npm commands.

Search is generated during a production build. To test the full site:

```bash
npm test
npm run check
npm run build
npm run verify
npm run preview
```

## Publish on GitHub Pages

1. Commit these project files, including `package-lock.json` and `.github/workflows/deploy.yml`, and push them to the repository's `main` branch.
2. On GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Open **Actions → Check and deploy Git Guide**. If needed, select **Run workflow** on `main` after enabling Pages.
4. Wait for the build and deploy jobs to finish. The deployment links to the published site.

Every later push to `main` rebuilds and publishes the site. Pull requests run validation without deploying. GitHub Pages must be available for your repository visibility and account plan.

The site uses static output: GitHub Pages does not need a Node server. Node is used only to build it. CSS, search files, images, and language links include the `/git-guide/` prefix.

If you rename the repository, change `base` in `astro.config.mjs` and `BASE` in `scripts/verify-build.mjs`. For a different owner, update `site` and the GitHub social link. For a `username.github.io` repository or custom domain hosted at the domain root, use `base: '/'` and adjust `site` to the full origin.

## Edit the guide

- English: `src/content/docs/*.md`.
- Portuguese: matching filenames in `src/content/docs/pt-pt/`.
- Portuguese interface labels: `src/content/i18n/pt-PT.json`.
- Chapter order: `sidebar` in `astro.config.mjs`.
- Visual theme: `src/styles/custom.css`.
- Language buttons: `src/components/LanguageSelect.astro`.

Keep the same slug in both languages. A lesson named `commits.md` must exist in both folders. Relative lesson links preserve the language and work under the repository prefix. Write Portuguese content for Portugal; Git commands and branch names remain unchanged.

`npm run verify` checks built local links/assets and the language links for every chapter. Run it after `npm run build` whenever adding or translating a page.

## Publicar e editar em português

Este guia inclui português de Portugal. Para o publicar, envia os ficheiros para o ramo `main` e seleciona **GitHub Actions** em **Settings → Pages** no GitHub. O fluxo de trabalho compila e publica o site automaticamente.

Para editar uma lição, altera o ficheiro em `src/content/docs/pt-pt/`. Mantém o mesmo nome do ficheiro inglês e confirma as duas versões com `npm run build` e `npm run verify`. Para pré-visualizar, executa `npm run preview` e abre **http://localhost:4321/git-guide/pt-pt/**.

## References

Lessons link to the official [Git documentation](https://git-scm.com/docs) and [GitHub documentation](https://docs.github.com/). Framework setup follows [Starlight internationalization](https://starlight.astro.build/guides/i18n/) and [Astro's GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).
