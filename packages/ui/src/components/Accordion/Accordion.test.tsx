import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

describe('Accordion Component', () => {
  it('renders and expands correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Trigger 1')
    expect(trigger).toBeInTheDocument()

    // By default for accordion it sets `hidden` attribute when closed or removes from DOM
    const content = screen.queryByText('Content 1')
    expect(content).not.toBeInTheDocument()

    // Click to open
    await user.click(trigger)
    expect(screen.getByText('Content 1')).toBeInTheDocument()

    // Click to close
    await user.click(trigger)
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })
})
