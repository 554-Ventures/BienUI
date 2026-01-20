import { createTheme } from '@vanilla-extract/css'
import { tokens } from './contract'
import { primitives } from './primitives'

const { space } = primitives

/**
 * Comfortable density (default)
 * More spacious, better for touch targets
 */
export const comfortableDensity = createTheme(tokens, {
  color: {
    bg: { base: '', subtle: '', muted: '' },
    surface: { base: '', raised: '', overlay: '' },
    text: {
      primary: '',
      secondary: '',
      tertiary: '',
      inverse: '',
      disabled: '',
    },
    border: { base: '', strong: '', subtle: '', focus: '' },
    brand: { base: '', hover: '', active: '', subtle: '', text: '' },
    status: {
      success: '',
      successSubtle: '',
      warning: '',
      warningSubtle: '',
      error: '',
      errorSubtle: '',
      info: '',
      infoSubtle: '',
    },
    interactive: { hover: '', active: '', disabled: '' },
  },
  space: {
    xs: space[2], // 8px
    sm: space[3], // 12px
    md: space[4], // 16px
    lg: space[6], // 24px
    xl: space[8], // 32px
  },
  component: {
    buttonPaddingX: space[4], // 16px
    buttonPaddingY: space[2], // 8px
    inputPaddingX: space[3], // 12px
    inputPaddingY: space[2], // 8px
    cardPadding: space[6], // 24px
  },
  radius: { sm: '', md: '', lg: '', full: '' },
  font: {
    family: { sans: '', mono: '' },
    size: { xs: '', sm: '', md: '', lg: '', xl: '' },
    weight: { normal: '', medium: '', semibold: '', bold: '' },
    lineHeight: { tight: '', normal: '', relaxed: '' },
  },
  shadow: { sm: '', md: '', lg: '' },
  zIndex: { dropdown: '', overlay: '', modal: '', toast: '', tooltip: '' },
  duration: { fast: '', normal: '', slow: '' },
  easing: { ease: '', easeOut: '' },
})

/**
 * Compact density
 * Tighter spacing for information-dense UIs
 */
export const compactDensity = createTheme(tokens, {
  color: {
    bg: { base: '', subtle: '', muted: '' },
    surface: { base: '', raised: '', overlay: '' },
    text: {
      primary: '',
      secondary: '',
      tertiary: '',
      inverse: '',
      disabled: '',
    },
    border: { base: '', strong: '', subtle: '', focus: '' },
    brand: { base: '', hover: '', active: '', subtle: '', text: '' },
    status: {
      success: '',
      successSubtle: '',
      warning: '',
      warningSubtle: '',
      error: '',
      errorSubtle: '',
      info: '',
      infoSubtle: '',
    },
    interactive: { hover: '', active: '', disabled: '' },
  },
  space: {
    xs: space[1], // 4px
    sm: space[2], // 8px
    md: space[3], // 12px
    lg: space[4], // 16px
    xl: space[6], // 24px
  },
  component: {
    buttonPaddingX: space[3], // 12px
    buttonPaddingY: space[1], // 4px
    inputPaddingX: space[2], // 8px
    inputPaddingY: space[1], // 4px
    cardPadding: space[4], // 16px
  },
  radius: { sm: '', md: '', lg: '', full: '' },
  font: {
    family: { sans: '', mono: '' },
    size: { xs: '', sm: '', md: '', lg: '', xl: '' },
    weight: { normal: '', medium: '', semibold: '', bold: '' },
    lineHeight: { tight: '', normal: '', relaxed: '' },
  },
  shadow: { sm: '', md: '', lg: '' },
  zIndex: { dropdown: '', overlay: '', modal: '', toast: '', tooltip: '' },
  duration: { fast: '', normal: '', slow: '' },
  easing: { ease: '', easeOut: '' },
})
