# Bilingual beginner Git guide

Approved in conversation: Astro + Starlight, for complete beginners, with English and European Portuguese and flag links that keep the current lesson.

## Site and content

English is the root locale; Portuguese uses `/pt-pt/`. Both contain the same ordered lessons: concepts, installation, first repository, commits, GitHub, branches, pull requests, conflicts, recovery, best practices, and a cheat sheet. A `my-first-repo` practice project connects the lessons. Commands remain Git syntax; surrounding explanations and exercises are translated into European Portuguese.

## Interface

Use Starlight's accessible responsive documentation shell, search, theme control, copyable code, table of contents, and previous/next navigation. Add a custom landing hero and restrained green styling. Replace the language picker with flag links and explicit language names. Use local SVG flags so they render consistently across operating systems. Links work without JavaScript and retain the lesson path under the GitHub Pages base path.

## Deployment and verification

Static output at `https://joao-sintra.github.io/git-guide/`. A GitHub Actions workflow validates and publishes pushes to main; pull requests validate only. The user enables Pages with GitHub Actions and publishes the repository. No external service or backend is required.

Verify language URL behavior, translation completeness, production build, internal links and assets, and browser behavior at desktop and mobile sizes. Check examples against official Git and GitHub documentation. Provide local preview and publishing instructions.
