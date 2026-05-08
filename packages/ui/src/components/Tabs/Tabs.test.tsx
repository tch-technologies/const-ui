import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

describe('Tabs Component', () => {
  it('renders and switches tabs correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    // Check initial state
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    // Content 2 should not be visible (Radix hides it, but in DOM it may be present without layout, typically we check text or visibility)
    // Radix UI unmounts or hides inactive content
    const content2 = screen.queryByText('Content 2')
    expect(content2).not.toBeInTheDocument()

    // Click Tab 2
    const tab2Trigger = screen.getByRole('tab', { name: 'Tab 2' })
    await user.click(tab2Trigger)

    // Check new state
    expect(screen.getByText('Content 2')).toBeInTheDocument()
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('respects disabled state on triggers', async () => {
    const user = userEvent.setup()
    
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    // Attempt to click disabled tab
    const tab2Trigger = screen.getByRole('tab', { name: 'Tab 2' })
    await user.click(tab2Trigger)

    // Should remain on Tab 1
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
  })
})
