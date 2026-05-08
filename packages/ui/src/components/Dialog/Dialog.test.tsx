import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog'

describe('Dialog Component', () => {
  it('opens and closes correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <Dialog>
        <DialogTrigger data-testid="trigger">Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal Title</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    // Trigger should be there
    const trigger = screen.getByTestId('trigger')
    expect(trigger).toBeInTheDocument()

    // Title should not be there initially
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument()

    // Click to open
    await user.click(trigger)
    
    // Title should be visible
    expect(screen.getByText('Modal Title')).toBeInTheDocument()
  })
})
