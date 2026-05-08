import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ButtonGroup } from './ButtonGroup'
import { Button } from './Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const Primary: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="default">Save</Button>
      <Button variant="default">Publish</Button>
    </ButtonGroup>
  ),
}
