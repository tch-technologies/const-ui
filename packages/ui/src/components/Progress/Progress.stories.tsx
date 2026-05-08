import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Bar: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
  },
}

export const Circle: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(82), 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress variant="circle" value={progress} />
  },
}

export const Box: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(75), 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress variant="box" value={progress} className="w-[300px]" />
  },
}
