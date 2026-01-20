import { style, keyframes } from '@vanilla-extract/css'
import { tokens } from '@bien/tokens'

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const contentShow = keyframes({
  from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
  to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const drawerShowLeft = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
})

const drawerShowRight = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
})

export const overlay = style({
  backgroundColor: tokens.color.surface.overlay,
  position: 'fixed',
  inset: 0,
  zIndex: tokens.zIndex.overlay,
  animation: `${overlayShow} ${tokens.duration.normal} ${tokens.easing.easeOut}`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const content = style({
  backgroundColor: tokens.color.surface.base,
  borderRadius: tokens.radius.lg,
  boxShadow: tokens.shadow.xl,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: tokens.space.lg,
  zIndex: tokens.zIndex.modal,
  animation: `${contentShow} ${tokens.duration.normal} ${tokens.easing.easeOut}`,

  ':focus': {
    outline: 'none',
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const drawerContent = style({
  backgroundColor: tokens.color.surface.base,
  boxShadow: tokens.shadow.xl,
  position: 'fixed',
  zIndex: tokens.zIndex.modal,
  padding: tokens.space.lg,
  maxWidth: '400px',
  height: '100vh',
  overflow: 'auto',

  ':focus': {
    outline: 'none',
  },
})

export const drawerLeft = style({
  top: 0,
  left: 0,
  animation: `${drawerShowLeft} ${tokens.duration.normal} ${tokens.easing.easeOut}`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const drawerRight = style({
  top: 0,
  right: 0,
  animation: `${drawerShowRight} ${tokens.duration.normal} ${tokens.easing.easeOut}`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const header = style({
  marginBottom: tokens.space.md,
})

export const title = style({
  fontSize: tokens.font.size.xl,
  fontWeight: tokens.font.weight.semibold,
  color: tokens.color.text.primary,
  margin: 0,
  marginBottom: tokens.space.xs,
})

export const description = style({
  fontSize: tokens.font.size.sm,
  color: tokens.color.text.secondary,
  margin: 0,
})

export const closeButton = style({
  position: 'absolute',
  top: tokens.space.md,
  right: tokens.space.md,
  width: '32px',
  height: '32px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.radius.md,
  border: 'none',
  backgroundColor: 'transparent',
  color: tokens.color.text.secondary,
  cursor: 'pointer',
  transition: `background-color ${tokens.duration.fast} ${tokens.easing.easeOut}`,

  ':hover': {
    backgroundColor: tokens.color.interactive.hover,
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.color.border.focus}`,
    outlineOffset: '2px',
  },
})
