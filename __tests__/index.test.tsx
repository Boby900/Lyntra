import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Index from '../app/page'

 
test('Index', () => {
  render(<Index />)
  expect(screen.getByRole('heading', { level: 2, name: 'landing page' })).toBeDefined()
})