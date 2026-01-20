import { style } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

export const card = style({
  backgroundColor: tokens.color.surface.base,
  borderRadius: tokens.radius.lg,
  padding: tokens.component.cardPadding,
  border: `1px solid ${tokens.color.border.subtle}`,
  boxShadow: tokens.shadow.sm,
  transition: `box-shadow ${tokens.duration.fast} ${tokens.easing.easeOut}`,

  ':hover': {
    boxShadow: tokens.shadow.md,
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})
