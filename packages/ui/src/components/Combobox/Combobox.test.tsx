import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Combobox } from './Combobox'

describe('Combobox Component', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ]

  it('renders and selects an option', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    
    render(
      <Combobox
        options={options}
        value=""
        onChange={onChange}
        placeholder="Select fruit..."
      />
    )

    // Trigger should have placeholder text
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveTextContent('Select fruit...')

    // Click to open
    await user.click(trigger)
    
    // Options should be visible
    const appleOption = screen.getByText('Apple')
    expect(appleOption).toBeInTheDocument()

    // Click option
    await user.click(appleOption)

    // OnChange should be called
    expect(onChange).toHaveBeenCalledWith('apple')
  })
})
