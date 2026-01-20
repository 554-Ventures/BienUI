import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { tokens } from '@bien/tokens'

/**
 * Base button styles
 */
export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: tokens.font.family.sans,
  fontWeight: tokens.font.weight.medium,
  borderRadius: tokens.radius.md,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${tokens.duration.fast} ${tokens.easing.easeOut}`,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  userSelect: 'none',

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.color.border.focus}`,
    outlineOffset: '2px',
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})

/**
 * Loading spinner
 */
export const spinner = style({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  border: '2px solid currentColor',
  borderRightColor: 'transparent',
  borderRadius: '50%',
  animation: 'spin 0.6s linear infinite',
  marginRight: tokens.space.xs,

  '@keyframes': {
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  },
})

/**
 * Button recipe with variants
 */
export const button = recipe({
  base: buttonBase,

  variants: {
    variant: {
      primary: {
        backgroundColor: tokens.color.brand.base,
        color: tokens.color.brand.text,

        ':hover:not(:disabled)': {
          backgroundColor: tokens.color.brand.hover,
        },

        ':active:not(:disabled)': {
          backgroundColor: tokens.color.brand.active,
        },
      },

      secondary: {
        backgroundColor: tokens.color.bg.subtle,
        color: tokens.color.text.primary,
        border: `1px solid ${tokens.color.border.base}`,

        ':hover:not(:disabled)': {
          backgroundColor: tokens.color.interactive.hover,
          borderColor: tokens.color.border.strong,
        },

        ':active:not(:disabled)': {
          backgroundColor: tokens.color.interactive.active,
        },
      },

      ghost: {
        backgroundColor: 'transparent',
        color: tokens.color.text.primary,

        ':hover:not(:disabled)': {
          backgroundColor: tokens.color.interactive.hover,
        },

        ':active:not(:disabled)': {
          backgroundColor: tokens.color.interactive.active,
        },
      },

      danger: {
        backgroundColor: tokens.color.status.error,
        color: '#ffffff',

        ':hover:not(:disabled)': {
          opacity: 0.9,
        },

        ':active:not(:disabled)': {
          opacity: 0.8,
        },
      },
    },

    size: {
      sm: {
        fontSize: tokens.font.size.sm,
        paddingLeft: tokens.space.sm,
        paddingRight: tokens.space.sm,
        paddingTop: tokens.space.xs,
        paddingBottom: tokens.space.xs,
        height: '32px',
      },

      md: {
        fontSize: tokens.font.size.md,
        paddingLeft: tokens.component.buttonPaddingX,
        paddingRight: tokens.component.buttonPaddingX,
        paddingTop: tokens.component.buttonPaddingY,
        paddingBottom: tokens.component.buttonPaddingY,
        height: '40px',
      },

      lg: {
        fontSize: tokens.font.size.lg,
        paddingLeft: tokens.space.lg,
        paddingRight: tokens.space.lg,
        paddingTop: tokens.space.sm,
        paddingBottom: tokens.space.sm,
        height: '48px',
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
