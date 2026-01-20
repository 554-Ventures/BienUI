import { createThemeContract } from '@vanilla-extract/css'

/**
 * Theme contract defines the shape of our theme tokens
 * This allows type-safe theming across light/dark modes
 */
export const tokens = createThemeContract({
  color: {
    // Background layers
    bg: {
      base: null,
      subtle: null,
      muted: null,
    },

    // Surface (cards, panels)
    surface: {
      base: null,
      raised: null,
      overlay: null,
    },

    // Text
    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
      disabled: null,
    },

    // Border
    border: {
      base: null,
      strong: null,
      subtle: null,
      focus: null,
    },

    // Brand/Accent
    brand: {
      base: null,
      hover: null,
      active: null,
      subtle: null,
      text: null,
    },

    // Status
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

    // Interactive states
    interactive: {
      hover: null,
      active: null,
      disabled: null,
    },
  },

  // Spacing (comfortable/compact density)
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },

  // Component-specific spacing
  component: {
    buttonPaddingX: null,
    buttonPaddingY: null,
    inputPaddingX: null,
    inputPaddingY: null,
    cardPadding: null,
  },

  // Radii
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },

  // Typography
  font: {
    family: {
      sans: null,
      mono: null,
    },
    size: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
    weight: {
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
    },
    lineHeight: {
      tight: null,
      normal: null,
      relaxed: null,
    },
  },

  // Shadows
  shadow: {
    sm: null,
    md: null,
    lg: null,
  },

  // Z-index
  zIndex: {
    dropdown: null,
    overlay: null,
    modal: null,
    toast: null,
    tooltip: null,
  },

  // Motion
  duration: {
    fast: null,
    normal: null,
    slow: null,
  },

  easing: {
    ease: null,
    easeOut: null,
  },
})
