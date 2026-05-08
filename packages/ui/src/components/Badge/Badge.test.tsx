import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Badge } from './Badge'

describe('Badge Component', () => {
  it('renders correctly', () => {
    render(<Badge data-testid="badge">Test Badge</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent('Test Badge')
  })

  it('applies variant classes', () => {
    render(<Badge data-testid="badge" variant="destructive">Test Badge</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('bg-destructive')
  })
})
