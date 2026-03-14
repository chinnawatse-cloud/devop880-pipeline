import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeTruthy()
  })

  it('renders count button', () => {
    render(<App />)
    expect(screen.getByText(/count/i)).toBeTruthy()
  })
})
