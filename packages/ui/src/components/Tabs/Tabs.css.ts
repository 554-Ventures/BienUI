import { style } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

export const tabsRoot = style({
  display: 'flex',
  flexDirection: 'column',
})

export const tabsList = style({
  display: 'flex',
  borderBottom: `1px solid ${tokens.color.border.base}`,
  gap: tokens.space.xs,
})

export const tabsTrigger = style({
  all: 'unset',
  fontFamily: tokens.font.family.sans,
  fontSize: tokens.font.size.md,
  fontWeight: tokens.font.weight.medium,
  padding: `${tokens.space.sm} ${tokens.space.md}`,
  color: tokens.color.text.secondary,
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: '2px solid transparent',
  transition: `all ${tokens.duration.fast} ${tokens.easing.easeOut}`,

  ':hover': {
    color: tokens.color.text.primary,
    backgroundColor: tokens.color.interactive.hover,
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.color.border.focus}`,
    outlineOffset: '2px',
  },

  selectors: {
    '&[data-state="active"]': {
      color: tokens.color.brand.base,
      borderBottomColor: tokens.color.brand.base,
    },

    '&[data-disabled]': {
      color: tokens.color.text.disabled,
      cursor: 'not-allowed',
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})

export const tabsContent = style({
  padding: tokens.space.md,
  paddingTop: tokens.space.lg,
  outline: 'none',
})
