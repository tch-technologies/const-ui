import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Switch } from './Switch'

describe('Switch Component', () => {
  it('toggles when clicked', async () => {
    const user = userEvent.setup()
    
    render(<Switch data-testid="switch" />)
    
    const switchEl = screen.getByTestId('switch')
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')

    await user.click(switchEl)
    expect(switchEl).toHaveAttribute('data-state', 'checked')

    await user.click(switchEl)
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')
  })

  it('respects disabled state', async () => {
    const user = userEvent.setup()
    
    render(<Switch data-testid="switch" disabled />)
    
    const switchEl = screen.getByTestId('switch')
    expect(switchEl).toBeDisabled()
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')

    await user.click(switchEl)
    
    // Should still be unchecked
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')
  })
})
