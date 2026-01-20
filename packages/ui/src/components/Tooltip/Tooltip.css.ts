import { style, keyframes } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const tooltipContent = style({
  backgroundColor: tokens.color.text.primary,
  color: tokens.color.text.inverse,
  borderRadius: tokens.radius.md,
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  fontSize: tokens.font.size.sm,
  lineHeight: tokens.font.lineHeight.normal,
  boxShadow: tokens.shadow.lg,
  userSelect: 'none',
  zIndex: tokens.zIndex.tooltip,
  maxWidth: '250px',

  selectors: {
    '&[data-state="delayed-open"]': {
      animation: `${fadeIn} ${tokens.duration.fast} ${tokens.easing.easeOut}`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} ${tokens.duration.fast} ${tokens.easing.easeOut}`,
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const tooltipArrow = style({
  fill: tokens.color.text.primary,
})
