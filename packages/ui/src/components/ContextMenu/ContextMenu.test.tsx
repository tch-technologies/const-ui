import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from './ContextMenu'

describe('ContextMenu Component', () => {
  it('renders trigger and shows content on right click', async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Right Click Me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByTestId('trigger')
    expect(trigger).toBeInTheDocument()

    // Context menu should not be visible initially
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    // Right click
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    // Now it should be visible
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })
})
