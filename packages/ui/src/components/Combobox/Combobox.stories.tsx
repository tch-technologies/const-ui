import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Combobox } from './Combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Combobox>

const options = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = React.useState('')
    return (
      <Combobox
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
        emptyText="No framework found."
      />
    )
  },
}
