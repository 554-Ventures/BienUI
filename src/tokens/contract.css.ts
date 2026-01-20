import { createThemeContract } from '@vanilla-extract/css'

export const tokens = createThemeContract({
  color: {
    bg: { base: null, subtle: null, muted: null },
    surface: { base: null, raised: null, overlay: null },
    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
      disabled: null,
    },
    border: { base: null, strong: null, subtle: null, focus: null },
    brand: { base: null, hover: null, active: null, subtle: null, text: null },
    status: {
      success: null,
      successSubtle: null,
      warning: null,
      warningSubtle: null,
      error: null,
      errorSubtle: null,
      info: null,
      infoSubtle: null,
    },
    interactive: { hover: null, active: null, disabled: null },
  },
  space: { xs: null, sm: null, md: null, lg: null, xl: null },
  component: {
    buttonPaddingX: null,
    buttonPaddingY: null,
    inputPaddingX: null,
    inputPaddingY: null,
    cardPadding: null,
  },
  radius: { sm: null, md: null, lg: null, full: null },
  font: {
    family: { sans: null, mono: null },
    size: { xs: null, sm: null, md: null, lg: null, xl: null },
    weight: { normal: null, medium: null, semibold: null, bold: null },
    lineHeight: { tight: null, normal: null, relaxed: null },
  },
  shadow: { sm: null, md: null, lg: null },
  zIndex: {
    dropdown: null,
    overlay: null,
    modal: null,
    toast: null,
    tooltip: null,
  },
  duration: { fast: null, normal: null, slow: null },
  easing: { ease: null, easeOut: null },
})
