import { globalStyle } from '@vanilla-extract/css'
import { tokens } from './contract'

/**
 * Global base styles
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  fontFamily: tokens.font.family.sans,
  fontSize: tokens.font.size.md,
  lineHeight: tokens.font.lineHeight.normal,
  color: tokens.color.text.primary,
  backgroundColor: tokens.color.bg.base,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

/**
 * Focus-visible styles
 */
globalStyle('*:focus-visible', {
  outline: `2px solid ${tokens.color.border.focus}`,
  outlineOffset: '2px',
})

/**
 * Reduced motion support
 */
globalStyle('@media (prefers-reduced-motion: reduce)', {
  animation: 'none !important',
  transition: 'none !important',
})
