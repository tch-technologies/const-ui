import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { RadioGroup, RadioGroupItem } from './RadioGroup'
import { Button } from '../Button'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-sm">Default</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-sm">Comfortable</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-sm">Compact</label>
      </div>
    </RadioGroup>
  ),
}

export const ButtonStyle: Story = {
  render: () => {
    const [value, setValue] = React.useState('cpu')
    return (
      <RadioGroup value={value} onValueChange={setValue} className="flex gap-4">
        <RadioGroupPrimitive.Item value="cpu" asChild>
          <Button variant={value === 'cpu' ? 'default' : 'outline'}>CPU</Button>
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item value="gpu" asChild>
          <Button variant={value === 'gpu' ? 'default' : 'outline'}>GPU</Button>
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item value="ram" asChild>
          <Button variant={value === 'ram' ? 'default' : 'outline'}>RAM</Button>
        </RadioGroupPrimitive.Item>
      </RadioGroup>
    )
  },
}
