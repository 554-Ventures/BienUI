import { useEffect, useState } from 'react'
import { Breakpoint, mediaDown, breakpoints } from '../breakpoints'

function getMatches(query: string | null | undefined): boolean {
  if (!query || typeof window === 'undefined' || !window.matchMedia) {
    return false
  }
  return window.matchMedia(query).matches
}

/**
 * Track a CSS media query. Returns `false` when the query is null/undefined
 * or when running without a DOM (SSR).
 *
 * @example
 * const isNarrow = useMediaQuery(mediaDown('md'))
 */
export function useMediaQuery(query: string | null | undefined): boolean {
  const [matches, setMatches] = useState(() => getMatches(query))
  const [prevQuery, setPrevQuery] = useState(query)

  // Re-evaluate synchronously when the query itself changes (render-time
  // reconciliation, so the effect only manages the listener)
  if (query !== prevQuery) {
    setPrevQuery(query)
    setMatches(getMatches(query))
  }

  useEffect(() => {
    if (!query || typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mql = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Safari < 14 only supports the deprecated addListener API
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange)
      return () => mql.removeEventListener('change', handleChange)
    }

    mql.addListener(handleChange)
    return () => mql.removeListener(handleChange)
  }, [query])

  return matches
}

/**
 * True when the viewport is at or below the given breakpoint.
 * Defaults to `'md'` (768px), the cutoff most component CSS treats as mobile.
 */
export function useIsMobile(breakpoint: Breakpoint | number = 'md'): boolean {
  return useMediaQuery(mediaDown(breakpoint))
}

/**
 * The tier the current viewport falls into: `'xs'` (≤480), `'sm'` (≤640),
 * `'md'` (≤768), `'lg'` (≤1024), or `'xl'` (wider). Returns `'xl'` during SSR.
 */
export function useBreakpoint(): Breakpoint | 'xl' {
  const isXs = useMediaQuery(mediaDown(breakpoints.xs))
  const isSm = useMediaQuery(mediaDown(breakpoints.sm))
  const isMd = useMediaQuery(mediaDown(breakpoints.md))
  const isLg = useMediaQuery(mediaDown(breakpoints.lg))

  if (isXs) return 'xs'
  if (isSm) return 'sm'
  if (isMd) return 'md'
  if (isLg) return 'lg'
  return 'xl'
}
