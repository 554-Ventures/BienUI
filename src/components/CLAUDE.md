# CLAUDE.md — `src/components/`

This is the heart of the active `@bienui/core` library. See the root
[CLAUDE.md](../../CLAUDE.md) for repo-wide context (including the `src/` vs `packages/`
distinction — you are in `src/`, the shipping code).

## Category structure

Components are grouped into category folders, each with a barrel `index.ts`:

| Folder         | Contents (examples)                                                    |
| -------------- | --------------------------------------------------------------------- |
| `Display/`     | Text, MarkdownText, Card, Badge, Avatar, Table, List, Timeline, Meter |
| `Feedback/`    | Modal, Accordion, Tabs, Banner, Callout, Loading, EmptyState, AIChatbox, Stepper |
| `Forms/`       | Input, Textarea, Select, MultiSelect, Checkbox, Radio, Switch, Slider, DatePicker, Typeahead |
| `Interactive/` | Button, Tooltip, Menu, Drawer, Panel, FileDrop, DraggableList, Hotspot |
| `Layout/`      | Container, Grid, Stack (VStack/HStack), Section, Spacer, Divider, SplitPanel |
| `Navigation/`  | Link, Breadcrumb, Header, Sidenav, Pagination                         |
| `Providers/`   | BienProvider, ToastProvider, TooltipProvider                          |
| `Icons/`       | `icons.tsx` (custom icons) — components otherwise use `lucide-react`  |
| `Utils/`       | ThinkingText, Toast                                                    |

## Component conventions

Look at [Interactive/Button.tsx](Interactive/Button.tsx) as the canonical example.

- **`forwardRef`** to the underlying DOM element, and set `Component.displayName`.
- **Props** extend the relevant native element props (e.g.
  `React.ButtonHTMLAttributes<HTMLButtonElement>`) and export a named `XxxProps` interface.
- **Styling is class-based**: build the class list from `bien-<name>` plus
  `bien-<name>--<variant>` / `--<size>` / boolean modifiers, filter falsy, join with
  spaces. Always spread the caller's `className` last. **No inline style objects for
  theming, no CSS-in-JS.**
- Sensible prop defaults (`variant = 'primary'`, `size = 'md'`, …).
- **Accessibility**: wire ARIA attributes (`aria-busy`, `aria-label`, etc.); reach for a
  Radix primitive for anything with focus/keyboard/overlay behavior.
- Shared types (`Theme`, `Density`, `ComponentVariant`, `ComponentSize`) come from
  `src/types`.

## Adding a new component (checklist)

1. Create `src/components/<Category>/<Name>.tsx` following the conventions above.
2. Create the stylesheet `src/styles/ui/<name>.css` (kebab-case) and add an `@import` for
   it in `src/styles/index.css`.
3. Export the component from `src/components/<Category>/index.ts`.
4. Re-export it (and any public types) from `src/index.ts` — this is the package's public
   API; nothing ships unless it's here.
5. Add `src/stories/<Name>.stories.tsx` (title `"<Category>/<Name>"`, `tags:
   ['autodocs']`, argTypes for controls). Verify it in `yarn storybook`, including the
   a11y tab.
6. Run `yarn lint` and `yarn build:lib`.

## Providers

`BienProvider` (theme + density) wraps an app and sets `data-theme` / `data-density` on
`<html>`. `ToastProvider` exposes the `useToast` hook. `TooltipProvider` wraps Radix's
tooltip provider. All three are exported from the top-level barrel.
