import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const homeStyle = {
  width: '450px',
  border: '1px solid',
  borderRadius: '10px',
  padding: '10px',
  margin: 'auto',
  marginTop: '15px',
}


const Home = () => {
  const [number, setNumber] = useState(0)
  const navigate = useNavigate()
  
  const increment = () => setNumber(number + 1)
  const decrement = () => setNumber(number - 1)
  
  return (
    <div style={homeStyle}>
      <b>Testing Example</b>
      <hr />
      <>
        <h1>{number}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
      <>
        <hr />
        <h1>Why do we need Test?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam minus nobis velit eveniet reprehenderit, veniam fuga, tempore ratione cum iure provident. Cumque voluptatibus obcaecati reprehenderit nisi similique necessitatibus incidunt!</p>
        <button onClick={() => navigate('/users')}>Go To User List</button>
      </>
    </div>
  )
}

export default Home