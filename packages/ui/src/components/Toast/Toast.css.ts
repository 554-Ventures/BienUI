import { style, keyframes } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 24px))' },
  to: { transform: 'translateX(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(calc(100% + 24px))' },
})

export const toastViewport = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: tokens.space.lg,
  gap: tokens.space.md,
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: tokens.zIndex.toast,
  outline: 'none',
})

export const toastRoot = style({
  backgroundColor: tokens.color.surface.raised,
  borderRadius: tokens.radius.lg,
  boxShadow: tokens.shadow.xl,
  padding: tokens.space.md,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: tokens.space.md,
  alignItems: 'center',
  border: `1px solid ${tokens.color.border.base}`,

  selectors: {
    '&[data-state="open"]': {
      animation: `${slideIn} ${tokens.duration.normal} ${tokens.easing.easeOut}`,
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} ${tokens.duration.normal} ${tokens.easing.easeOut}`,
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const toastTitle = style({
  gridArea: 'title',
  fontSize: tokens.font.size.md,
  fontWeight: tokens.font.weight.semibold,
  color: tokens.color.text.primary,
  marginBottom: tokens.space.xs,
})

export const toastDescription = style({
  gridArea: 'description',
  fontSize: tokens.font.size.sm,
  color: tokens.color.text.secondary,
  margin: 0,
})

export const toastAction = style({
  gridArea: 'action',
})

export const toastClose = style({
  all: 'unset',
  width: '20px',
  height: '20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.radius.sm,
  color: tokens.color.text.secondary,
  cursor: 'pointer',

  ':hover': {
    backgroundColor: tokens.color.interactive.hover,
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.color.border.focus}`,
    outlineOffset: '2px',
  },
})

// Variant styles
export const toastSuccess = style({
  borderLeftColor: tokens.color.status.success,
  borderLeftWidth: '4px',
})

export const toastError = style({
  borderLeftColor: tokens.color.status.error,
  borderLeftWidth: '4px',
})

export const toastWarning = style({
  borderLeftColor: tokens.color.status.warning,
  borderLeftWidth: '4px',
})

export const toastInfo = style({
  borderLeftColor: tokens.color.status.info,
  borderLeftWidth: '4px',
})
