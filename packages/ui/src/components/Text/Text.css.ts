import { recipe } from '@vanilla-extract/recipes'
import { tokens } from '@bien/tokens'

export const text = recipe({
  base: {
    fontFamily: tokens.font.family.sans,
    margin: 0,
    color: tokens.color.text.primary,
  },

  variants: {
    size: {
      xs: {
        fontSize: tokens.font.size.xs,
        lineHeight: tokens.font.lineHeight.normal,
      },
      sm: {
        fontSize: tokens.font.size.sm,
        lineHeight: tokens.font.lineHeight.normal,
      },
      md: {
        fontSize: tokens.font.size.md,
        lineHeight: tokens.font.lineHeight.normal,
      },
      lg: {
        fontSize: tokens.font.size.lg,
        lineHeight: tokens.font.lineHeight.relaxed,
      },
      xl: {
        fontSize: tokens.font.size.xl,
        lineHeight: tokens.font.lineHeight.relaxed,
      },
    },

    weight: {
      normal: {
        fontWeight: tokens.font.weight.normal,
      },
      medium: {
        fontWeight: tokens.font.weight.medium,
      },
      semibold: {
        fontWeight: tokens.font.weight.semibold,
      },
      bold: {
        fontWeight: tokens.font.weight.bold,
      },
    },

    tone: {
      primary: {
        color: tokens.color.text.primary,
      },
      secondary: {
        color: tokens.color.text.secondary,
      },
      tertiary: {
        color: tokens.color.text.tertiary,
      },
      inverse: {
        color: tokens.color.text.inverse,
      },
      brand: {
        color: tokens.color.brand.base,
      },
      success: {
        color: tokens.color.status.success,
      },
      error: {
        color: tokens.color.status.error,
      },
      warning: {
        color: tokens.color.status.warning,
      },
    },

    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },

    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'normal',
    tone: 'primary',
  },
})
