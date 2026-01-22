import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

// Import your design system CSS
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    layout: 'centered',
    a11y: {
      // Run accessibility tests on all stories
      disable: false,
      // Configure axe-core rules
      config: {
        rules: [
          {
            // Disable color contrast testing for decorative elements
            id: 'color-contrast',
            enabled: true,
          },
          {
            // Ensure proper focus management
            id: 'focus-order-semantics',
            enabled: true,
          },
          {
            // Check for proper ARIA usage
            id: 'aria-valid-attr-value',
            enabled: true,
          },
        ],
      },
      // Configure what elements to test
      element: '#storybook-root',
      // Additional axe-core options
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
        },
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
