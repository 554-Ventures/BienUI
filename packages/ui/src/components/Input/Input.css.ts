import { style } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

export const formField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xs,
})

export const label = style({
  fontSize: tokens.font.size.sm,
  fontWeight: tokens.font.weight.medium,
  color: tokens.color.text.primary,
  display: 'flex',
  alignItems: 'center',
  gap: tokens.space.xs,
})

export const requiredIndicator = style({
  color: tokens.color.status.error,
})

export const input = style({
  fontFamily: tokens.font.family.sans,
  fontSize: tokens.font.size.md,
  lineHeight: tokens.font.lineHeight.normal,
  color: tokens.color.text.primary,
  backgroundColor: tokens.color.surface.base,
  border: `1px solid ${tokens.color.border.base}`,
  borderRadius: tokens.radius.md,
  paddingLeft: tokens.component.inputPaddingX,
  paddingRight: tokens.component.inputPaddingX,
  paddingTop: tokens.component.inputPaddingY,
  paddingBottom: tokens.component.inputPaddingY,
  height: '40px',
  transition: `border-color ${tokens.duration.fast} ${tokens.easing.easeOut}`,

  ':hover:not(:disabled)': {
    borderColor: tokens.color.border.strong,
  },

  ':focus': {
    outline: 'none',
    borderColor: tokens.color.border.focus,
    boxShadow: `0 0 0 1px ${tokens.color.border.focus}`,
  },

  ':disabled': {
    backgroundColor: tokens.color.interactive.disabled,
    cursor: 'not-allowed',
    color: tokens.color.text.disabled,
  },

  '::placeholder': {
    color: tokens.color.text.tertiary,
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})

export const inputError = style({
  borderColor: tokens.color.status.error,

  ':focus': {
    borderColor: tokens.color.status.error,
    boxShadow: `0 0 0 1px ${tokens.color.status.error}`,
  },
})

export const hint = style({
  fontSize: tokens.font.size.sm,
  color: tokens.color.text.secondary,
})

export const errorMessage = style({
  fontSize: tokens.font.size.sm,
  color: tokens.color.status.error,
  display: 'flex',
  alignItems: 'center',
  gap: tokens.space.xs,
})
