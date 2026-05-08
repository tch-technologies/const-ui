import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select'

describe('Select Component', () => {
  it('opens and selects an option', async () => {
    const user = userEvent.setup()
    
    render(
      <Select>
        <SelectTrigger data-testid="trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="opt1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('trigger')
    expect(trigger).toHaveTextContent('Select an option')

    // Content should not be there
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()

    // Click to open
    await user.click(trigger)

    // Content should be visible
    const option = screen.getByText('Option 1')
    expect(option).toBeInTheDocument()
  })
})
