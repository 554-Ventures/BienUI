import { createTheme } from '@vanilla-extract/css'
import { tokens } from './contract'
import { primitives } from './primitives'

const {
  colors,
  space,
  radius,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  shadow,
  zIndex,
  duration,
  easing,
} = primitives

/**
 * Light theme
 */
export const lightTheme = createTheme(tokens, {
  color: {
    bg: {
      base: colors.neutral[50],
      subtle: colors.neutral[100],
      muted: colors.neutral[200],
    },
    surface: {
      base: '#ffffff',
      raised: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
      tertiary: colors.neutral[500],
      inverse: '#ffffff',
      disabled: colors.neutral[400],
    },
    border: {
      base: colors.neutral[300],
      strong: colors.neutral[400],
      subtle: colors.neutral[200],
      focus: colors.blue[500],
    },
    brand: {
      base: colors.blue[600],
      hover: colors.blue[700],
      active: colors.blue[800],
      subtle: colors.blue[100],
      text: '#ffffff',
    },
    status: {
      success: colors.green[600],
      successSubtle: colors.green[100],
      warning: colors.yellow[600],
      warningSubtle: colors.yellow[100],
      error: colors.red[600],
      errorSubtle: colors.red[100],
      info: colors.blue[600],
      infoSubtle: colors.blue[100],
    },
    interactive: {
      hover: colors.neutral[100],
      active: colors.neutral[200],
      disabled: colors.neutral[100],
    },
  },
  space: {
    xs: space[2],
    sm: space[3],
    md: space[4],
    lg: space[6],
    xl: space[8],
  },
  component: {
    buttonPaddingX: space[4],
    buttonPaddingY: space[2],
    inputPaddingX: space[3],
    inputPaddingY: space[2],
    cardPadding: space[6],
  },
  radius: {
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
    full: radius.full,
  },
  font: {
    family: {
      sans: fontFamily.sans,
      mono: fontFamily.mono,
    },
    size: {
      xs: fontSize.xs,
      sm: fontSize.sm,
      md: fontSize.base,
      lg: fontSize.lg,
      xl: fontSize.xl,
    },
    weight: {
      normal: fontWeight.normal,
      medium: fontWeight.medium,
      semibold: fontWeight.semibold,
      bold: fontWeight.bold,
    },
    lineHeight: {
      tight: lineHeight.tight,
      normal: lineHeight.normal,
      relaxed: lineHeight.relaxed,
    },
  },
  shadow: {
    sm: shadow.sm,
    md: shadow.md,
    lg: shadow.lg,
  },
  zIndex: {
    dropdown: zIndex.dropdown,
    overlay: zIndex.overlay,
    modal: zIndex.modal,
    toast: zIndex.toast,
    tooltip: zIndex.tooltip,
  },
  duration: {
    fast: duration.fast,
    normal: duration.normal,
    slow: duration.slow,
  },
  easing: {
    ease: easing.ease,
    easeOut: easing.easeOut,
  },
})

/**
 * Dark theme
 */
export const darkTheme = createTheme(tokens, {
  color: {
    bg: {
      base: colors.neutral[950],
      subtle: colors.neutral[900],
      muted: colors.neutral[800],
    },
    surface: {
      base: colors.neutral[900],
      raised: colors.neutral[800],
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[300],
      tertiary: colors.neutral[400],
      inverse: colors.neutral[900],
      disabled: colors.neutral[600],
    },
    border: {
      base: colors.neutral[700],
      strong: colors.neutral[600],
      subtle: colors.neutral[800],
      focus: colors.blue[400],
    },
    brand: {
      base: colors.blue[500],
      hover: colors.blue[400],
      active: colors.blue[300],
      subtle: colors.blue[900],
      text: '#ffffff',
    },
    status: {
      success: colors.green[500],
      successSubtle: colors.green[900],
      warning: colors.yellow[500],
      warningSubtle: colors.yellow[900],
      error: colors.red[500],
      errorSubtle: colors.red[900],
      info: colors.blue[500],
      infoSubtle: colors.blue[900],
    },
    interactive: {
      hover: colors.neutral[800],
      active: colors.neutral[700],
      disabled: colors.neutral[800],
    },
  },
  space: {
    xs: space[2],
    sm: space[3],
    md: space[4],
    lg: space[6],
    xl: space[8],
  },
  component: {
    buttonPaddingX: space[4],
    buttonPaddingY: space[2],
    inputPaddingX: space[3],
    inputPaddingY: space[2],
    cardPadding: space[6],
  },
  radius: {
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
    full: radius.full,
  },
  font: {
    family: {
      sans: fontFamily.sans,
      mono: fontFamily.mono,
    },
    size: {
      xs: fontSize.xs,
      sm: fontSize.sm,
      md: fontSize.base,
      lg: fontSize.lg,
      xl: fontSize.xl,
    },
    weight: {
      normal: fontWeight.normal,
      medium: fontWeight.medium,
      semibold: fontWeight.semibold,
      bold: fontWeight.bold,
    },
    lineHeight: {
      tight: lineHeight.tight,
      normal: lineHeight.normal,
      relaxed: lineHeight.relaxed,
    },
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
  },
  zIndex: {
    dropdown: zIndex.dropdown,
    overlay: zIndex.overlay,
    modal: zIndex.modal,
    toast: zIndex.toast,
    tooltip: zIndex.tooltip,
  },
  duration: {
    fast: duration.fast,
    normal: duration.normal,
    slow: duration.slow,
  },
  easing: {
    ease: easing.ease,
    easeOut: easing.easeOut,
  },
})
