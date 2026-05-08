import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'

import { ButtonGroup } from './ButtonGroup'
import { Button } from './Button'

describe('ButtonGroup Component', () => {
  it('renders buttons correctly', () => {
    render(
      <ButtonGroup data-testid="group">
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    )

    expect(screen.getByTestId('group')).toBeInTheDocument()
    expect(screen.getByText('Btn 1')).toBeInTheDocument()
    expect(screen.getByText('Btn 2')).toBeInTheDocument()
  })
})
