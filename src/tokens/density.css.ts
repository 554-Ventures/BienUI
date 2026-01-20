import { createTheme } from '@vanilla-extract/css'
import { tokens } from './contract.css'
import { primitives } from './primitives'

const { space } = primitives

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
    xs: space[1],
    sm: space[2],
    md: space[3],
    lg: space[4],
    xl: space[6],
  },
  component: {
    buttonPaddingX: space[3],
    buttonPaddingY: space[1],
    inputPaddingX: space[2],
    inputPaddingY: space[1],
    cardPadding: space[4],
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
