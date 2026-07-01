# personal-website-2025

## Stack

- **Runtime**: Bun (lockfile is `bun.lockb`, use `bun` not `npm`)
- **Framework**: Astro 6.4 + TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 (`@import "tailwindcss"` syntax, no `tailwind.config`)
- **Content**: Astro content collections — blog, projects, philosophical/technical experience nuggets (md/mdx)

## Commands

| Command                | What                                 |
| ---------------------- | ------------------------------------ |
| `bun install`          | install deps                         |
| `bun run dev`          | dev server                           |
| `bun run build`        | production build → `dist/`           |
| `bun run preview`      | preview production build             |
| `bun run lint`         | run ESLint across the project        |
| `bun run check`        | run Astro type checking              |
| `bun run typecheck`    | run `tsc --noEmit`                   |
| `bun run format`       | format all files with Prettier       |
| `bun run format:check` | check formatting without writing     |
| `bun run spell`        | spell-check source files with cspell |

## Content

- Blog posts use `isDraft: true` in frontmatter to hide from `/blog` listing.
- Blog sorted by `pubDate` descending. Projects sorted by numeric filename prefix (see `src/utils/sortByFilePath.ts`).
- Collection schemas defined in `src/content.config.ts`.

## Gotchas

- Generated types live in `.astro/` (gitignored). Run `bun run dev`, `bun run build`, or `bun run check` to regenerate after content changes.
- Custom Inconsolata font served from `public/fonts/`.
- VS Code recommended extensions: `astro-build.astro-vscode`, `unifiedjs.vscode-mdx`, `dbaeumer.vscode-eslint`, `esbenp.prettier-vscode`.
- `.vscode/settings.json` configures format-on-save with Prettier and auto-fix for ESLint.
- No CI/CD workflow present.
