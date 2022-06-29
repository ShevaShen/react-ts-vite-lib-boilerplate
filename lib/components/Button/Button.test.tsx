import { render, screen } from '@lib/utils/test-utils'
import Button from './index'

describe('Button', () => {
  it('renders text in the button', () => {
    render(<Button>button text</Button>)
    const btnText = screen.getByText('button text')
    screen.debug(btnText)
    screen.getByText('button text')
  })
})
