import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://joao-sintra.github.io',
  base: '/git-guide',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: { en: 'Git Guide', 'pt-PT': 'Guia de Git' },
      description: 'Learn Git, one small step at a time. A practical guide in English and European Portuguese.',
      favicon: '/favicon.svg',
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      defaultLocale: 'root',
      routeMiddleware: './src/route-data.ts',
      locales: {
        root: { label: 'English', lang: 'en' },
        'pt-pt': { label: 'Português', lang: 'pt-PT' },
      },
      components: {
        LanguageSelect: './src/components/LanguageSelect.astro',
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/joao-sintra/git-guide' }],
      sidebar: [
        { label: 'Start here', translations: { 'pt-PT': 'Começa aqui' }, items: [
          { slug: 'introduction' }, { slug: 'installation' }, { slug: 'first-repository' },
        ] },
        { label: 'Your everyday workflow', translations: { 'pt-PT': 'O teu fluxo de trabalho' }, items: [
          { slug: 'commits' }, { slug: 'github' }, { slug: 'github-desktop' }, { slug: 'branches' }, { slug: 'pull-requests' },
        ] },
        { label: 'Build good habits', translations: { 'pt-PT': 'Cria bons hábitos' }, items: [
          { slug: 'conflicts' }, { slug: 'undo' }, { slug: 'best-practices' }, { slug: 'cheat-sheet' },
        ] },
      ],
    }),
  ],
});
