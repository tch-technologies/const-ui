import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Popover, PopoverTrigger, PopoverContent } from './Popover'

describe('Popover Component', () => {
  it('opens and closes correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <Popover>
        <PopoverTrigger data-testid="trigger">Open</PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Popover Content</div>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('trigger')
    expect(trigger).toBeInTheDocument()

    // Content should not be there initially
    expect(screen.queryByTestId('content')).not.toBeInTheDocument()

    // Click to open
    await user.click(trigger)
    
    // Content should be visible
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
