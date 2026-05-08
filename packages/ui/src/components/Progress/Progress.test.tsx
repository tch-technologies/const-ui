import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Progress } from './Progress'

describe('Progress Component', () => {
  it('renders standard bar progress', () => {
    render(<Progress data-testid="progress-bar" value={50} />)
    const progress = screen.getByTestId('progress-bar')
    expect(progress).toBeInTheDocument()
  })

  it('renders circle progress', () => {
    const { container } = render(<Progress variant="circle" value={50} />)
    // Should render an SVG for circle
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders box progress', () => {
    const { container } = render(<Progress variant="box" value={50} boxCount={10} />)
    // Box variant renders divs inside the root
    // Radix progress renders a div with data-state
    const root = container.firstChild
    // 10 boxes inside
    expect((root as HTMLElement).children.length).toBe(10)
  })
})
