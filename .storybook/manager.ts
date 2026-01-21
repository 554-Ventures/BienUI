import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

// Create a custom dark theme that matches your brand
const bienDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Bien UI',
  brandUrl: '/',
  brandTarget: '_self',

  // UI Colors
  colorPrimary: '#1d75bc', // Your blue brand color
  colorSecondary: '#028c86', // Your teal brand color

  // Toolbar default and active colors
  barTextColor: '#d1d5db',
  barSelectedColor: '#1d75bc',
  barBg: '#1f2937',

  // Form colors
  inputBg: '#374151',
  inputBorder: '#4b5563',
  inputTextColor: '#f9fafb',
  inputBorderRadius: 6,
})

addons.setConfig({
  theme: bienDarkTheme,
})
