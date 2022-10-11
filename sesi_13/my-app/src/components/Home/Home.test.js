import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import App from '../../App'
import axios from 'axios'

jest.mock('axios', () => ({}))

describe('Home Component Test', () => {
  test('should render testing example', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    const title = screen.getByText('Testing Example')
    expect(title).toBeInTheDocument()
  })
  
  test('should add 1 after click + button', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    const plusButton = screen.getByTestId('plus-button')
    const currentCounter = screen.getByTestId('counter')
    expect(currentCounter.innerHTML).toEqual('0')
    fireEvent.click(plusButton)
    const addedCounter = screen.getByTestId('counter')
    expect(addedCounter.innerHTML).toEqual('1')
  })
  
  test('should minus 1 after click - button', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    const minusButton = screen.getByTestId('minus-button')
    fireEvent.click(minusButton)
    const counterEle = screen.getByTestId('counter')
    expect(counterEle.innerHTML).toEqual('-1')
  })
  
  test('should navigate to users component', async () => {
    const name = 'udin sedunia'
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: 1, name }
      ]
    })
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    
    const goToUserEle = screen.getByRole('go-to-user')
    fireEvent.click(goToUserEle)
    
    await waitFor(() => {
      return screen.getByText(name)
    })
    
    const title = screen.getByText('Back To Home')
    const udinSedunia = screen.getByText(name)
    expect(title).toBeInTheDocument()
    expect(udinSedunia).toBeInTheDocument()
  })
})