import { useState } from "react"

const Counter = ({ initNum }) => {    
    const [state, setState] = useState({
        num: initNum,
        title: 'Functional Component',
        records: {initNum}
    }) 
    
    const increment = () => {
        setState((prev) => ({
            ...state,
            num: prev.num + 1,
            records: {
                ...state.records,
                prevNum: prev.num
            }
        }))
    }
    
    const decrement = () => {
        setState({
            ...state,
            num: state.num - 1
        })
    } 
    
    console.log(state)
    
    return (
        <div>
            <h1>{state.title}</h1>
            <h2>{state.num}</h2>
            <button onClick={increment}>+</button>
            {'  '}
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter