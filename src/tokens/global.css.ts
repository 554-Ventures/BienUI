import { globalStyle } from '@vanilla-extract/css'
import { tokens } from './contract.css'

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

globalStyle('*:focus-visible', {
  outline: `2px solid ${tokens.color.border.focus}`,
  outlineOffset: '2px',
})

globalStyle('@media (prefers-reduced-motion: reduce)', {
  animation: 'none !important',
  transition: 'none !important',
})
