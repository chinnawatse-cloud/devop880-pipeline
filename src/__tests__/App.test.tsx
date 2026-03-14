import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders count button', () => {
    const { getByText } = render(<App />)
    expect(getByText(/count/i)).toBeTruthy()
  })
})
