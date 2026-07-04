# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

**BienUI** (`@bienui/core`) is a production-ready, accessibility-first React component
library by 554 Ventures. It's the design-system source of truth consumed by the Workarc
app (imported there as `@bienui/core`). Components are TypeScript + React 18, styled with
plain CSS (custom-property tokens), documented in Storybook with a11y testing.

## ⚠️ Two parallel systems — know which one you're in

This repo contains **two component systems**. Almost all real work happens in the first:

1. **`src/` — the ACTIVE, published library** (`@bienui/core`, currently v1.0.21).
   Plain `.tsx` components styled with hand-written CSS classes (`bien-*`). This is what
   ships to npm and what Workarc uses. **Default here unless told otherwise.**

2. **`packages/` — an experimental/incomplete rewrite** (`@bien/ui` + `@bien/tokens`,
   v0.1.0). A pnpm-workspace monorepo using vanilla-extract (`*.css.ts`) + Radix. Only 8
   components exist and it is **not published or consumed**. See [packages/CLAUDE.md](packages/CLAUDE.md).

`STRUCTURE.txt` describes the `packages/` monorepo *vision* (apps/storybook, etc.) — it
does **not** match the actual shipping layout in `src/`. Trust the code, not STRUCTURE.txt.

## Tech stack (active `src/` library)

- **React 18 + TypeScript**, built with **Vite** in library mode.
- **Styling**: plain CSS files under `src/styles/ui/`, one per component, using CSS custom
  properties for tokens/theming. **No CSS-in-JS, no Tailwind classes in components.**
- **Radix UI** primitives underpin the interactive/accessible components (dialog, select,
  tooltip, etc.) — declared as deps and externalized at build time.
- **Icons**: `lucide-react` plus custom icons in `src/components/Icons/`.
- **Docs/tests**: Storybook 8 (`.storybook/`), with the a11y addon and Storybook-driven
  Vitest browser tests. There are **no standalone `*.test.tsx` unit tests** in `src/`.

## Commands

```bash
yarn storybook       # Storybook dev server on :6006 (primary dev loop)
yarn build:lib       # Build the library: vite (ESM+CJS) then tsc declarations → dist/
yarn build-storybook # Static Storybook build (deployed to GitHub Pages)
yarn lint            # ESLint (--max-warnings 100 — warnings are tolerated)
yarn lint:fix        # ESLint with --fix
yarn format          # Prettier write; format:check to verify
yarn dev             # Vite dev server (src/app playground)
```

- **Package manager is ambiguous**: scripts and README use `yarn`, but a
  `pnpm-lock.yaml` + `pnpm-workspace.yaml` also exist (for the `packages/` monorepo).
  For the root/`src` library, follow the README and use **yarn**.
- **Husky pre-commit** runs `lint-staged` (Prettier on staged files). There is no active
  commit-msg hook.
- Publishing is automated via `.github/workflows/publish-npm.yml`; `prepublishOnly` runs
  `build:lib`. See `PUBLISHING.md`.

## Repository layout

| Path                 | What lives there                                                |
| -------------------- | -------------------------------------------------------------- |
| `src/components/`    | The components, grouped by category (see components/CLAUDE.md) |
| `src/styles/`        | Tokens, theme, fonts, and per-component CSS in `styles/ui/`    |
| `src/stories/`       | Storybook stories (one `*.stories.tsx` per component)          |
| `src/types/`         | Shared type exports (`Theme`, `Density`, variants, sizes)      |
| `src/index.ts`       | **Public API barrel** — every export the package ships         |
| `src/app/`           | Local Vite playground app (not published)                      |
| `packages/`          | Experimental monorepo rewrite — NOT shipped (see its CLAUDE.md)|
| `guidelines/`        | `Guidelines.md` design guidance                                |
| `docs/*.md` (root)   | `GET_STARTED.md`, `BienUI-Color-Palette.md`, `PUBLISHING.md`   |

## Conventions & gotchas

- **Path alias**: `@/` → `src/` (see `vite.config.lib.ts`).
- **Styling = CSS classes, not inline/CSS-in-JS.** Components compose `bien-<name>` and
  `bien-<name>--<modifier>` class strings (see `src/components/Interactive/Button.tsx`).
  The matching stylesheet lives in `src/styles/ui/<name>.css` and must be `@import`ed in
  `src/styles/index.css`.
- **Theming**: `BienProvider` sets `data-theme` (`light`/`dark`) and `data-density`
  (`comfortable`/`compact`) on `<html>`; CSS custom properties in `src/styles/theme.css`
  respond to those attributes. **BienUI itself supports dark mode** (unlike the Workarc
  app, which is light-only).
- **Every new export must be added to `src/index.ts`** — that barrel is the package's
  public surface. Also re-export from the category `index.ts`.
- **Accessibility is a first-class requirement** — prefer Radix primitives, wire up ARIA,
  and check the Storybook a11y addon before considering a component done.
- **Two names**: the project/npm scope is `@bienui/core`; the experimental packages use
  the `@bien/*` scope. Don't confuse them.

## Doing work here

- Run `yarn lint` and `yarn build:lib` before considering a change done.
- Match the style of surrounding components (they're plain, class-based, `forwardRef`ed).
- Don't commit or push unless asked. `main` is the default/publish branch.
