import { useState } from "react"

const Counter = ({ initNum }) => {    
    const [num, setNum] = useState(initNum)
    
    const increment = () => {
        setNum((prev) => prev + 1)
    }
    
    const decrement = () => {
        setNum(num - 1)
    } 
    
    return (
        <div>
            <h2>{num}</h2>
            <button onClick={increment}>+</button>
            {'  '}
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter