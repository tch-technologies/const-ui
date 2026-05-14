import type { Preview } from '@storybook/react'
import theme from './theme'
import '@const/ui/dist/index.css' // Import the compiled CSS from the UI package

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
    },
    darkMode: {
      current: 'light',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
  },
}

export default preview
