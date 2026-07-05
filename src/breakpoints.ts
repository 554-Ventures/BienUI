/**
 * Canonical viewport breakpoints for Bien UI.
 *
 * Single source of truth for responsive behavior in JS (hooks and responsive
 * component props). CSS media queries cannot read custom properties, so the
 * pixel literals in `src/styles/ui/*.css` must stay on this scale — the values
 * are mirrored as informational `--breakpoint-*` custom properties in
 * `theme.css`.
 *
 * Convention: a viewport is "at or below" a breakpoint when
 * `width <= value`, matching the `@media (max-width: ...)` rules shipped in
 * the component CSS.
 */
export const breakpoints = {
  /** Small phones */
  xs: 480,
  /** Large phones */
  sm: 640,
  /** Tablets — the de-facto "mobile" cutoff used by most component CSS */
  md: 768,
  /** Landscape tablets / small laptops */
  lg: 1024,
} as const

export type Breakpoint = keyof typeof breakpoints

/** Resolve a named breakpoint or raw pixel value to pixels. */
export function resolveBreakpoint(value: Breakpoint | number): number {
  return typeof value === 'number' ? value : breakpoints[value]
}

/** Media query matching viewports at or below the breakpoint (inclusive). */
export function mediaDown(value: Breakpoint | number): string {
  return `(max-width: ${resolveBreakpoint(value)}px)`
}

/** Media query matching viewports strictly above the breakpoint. */
export function mediaUp(value: Breakpoint | number): string {
  return `(min-width: ${resolveBreakpoint(value) + 1}px)`
}
