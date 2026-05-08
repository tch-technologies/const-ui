import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { RadioGroup, RadioGroupItem } from './RadioGroup'

describe('RadioGroup Component', () => {
  it('renders and selects options correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <RadioGroup defaultValue="opt1">
        <RadioGroupItem value="opt1" data-testid="radio-1" />
        <RadioGroupItem value="opt2" data-testid="radio-2" />
      </RadioGroup>
    )

    const radio1 = screen.getByTestId('radio-1')
    const radio2 = screen.getByTestId('radio-2')

    // Initial state
    expect(radio1).toBeChecked()
    expect(radio2).not.toBeChecked()

    // Click option 2
    await user.click(radio2)

    // New state
    expect(radio1).not.toBeChecked()
    expect(radio2).toBeChecked()
  })
})
