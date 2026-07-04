# CLAUDE.md — `packages/`

## ⚠️ This is NOT the shipping library

`packages/` is an **experimental, incomplete monorepo rewrite** of BienUI. It is **not
published and not consumed** by anything (Workarc uses `@bienui/core`, which is built from
[`src/`](../src)). Before working here, confirm that's actually intended — most requests
about "BienUI components" mean `src/`, not this directory.

## What's here

A pnpm workspace (`pnpm-workspace.yaml` → `packages/*`) with two packages at v0.1.0:

- **`packages/tokens/` (`@bien/tokens`)** — design tokens built with
  [vanilla-extract](https://vanilla-extract.style/) (`primitives.ts`, `contract.ts`,
  `themes.ts`, `density.ts`, `global.css.ts`). Built with `tsup`.
- **`packages/ui/` (`@bien/ui`)** — a Radix + vanilla-extract component set. Only 8
  components exist (Button, Card, Input, Modal, Tabs, Text, Toast, Tooltip), each as
  `<Name>.tsx` + `<Name>.css.ts`. Depends on `@bien/tokens` via `workspace:*`. Built with
  `tsup`.

## How it differs from `src/`

| Aspect        | `src/` (`@bienui/core`, active) | `packages/` (`@bien/*`, experimental) |
| ------------- | ------------------------------- | ------------------------------------- |
| Styling       | Hand-written CSS (`bien-*`)     | vanilla-extract (`*.css.ts`)          |
| Build         | Vite library mode               | tsup                                  |
| Version       | 1.0.21 (published)              | 0.1.0 (unpublished)                   |
| Scope / name  | `@bienui/core`                  | `@bien/tokens`, `@bien/ui`            |
| Coverage      | Full component set              | 8 components                          |

`STRUCTURE.txt` at the repo root describes *this* monorepo's intended shape (including an
`apps/storybook/`), but that layout was never fully realized — the real Storybook and
component library live in `src/`.

## Commands (per package)

```bash
pnpm --filter @bien/tokens build   # or `pnpm build` inside the package dir
pnpm --filter @bien/ui build       # tsup build
```

Each package also has a `dev` script (`tsup --watch`).
