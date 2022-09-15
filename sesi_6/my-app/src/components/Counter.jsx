import { useState } from "react"

const useCounter = (initNum) => {
    const [state, setState] = useState({
        num: initNum,
        title: 'Functional Component',
        records: {initNum}
    })
    
    const setNum = (num) => {
        setState({
            ...state,
            num,
        })
    }
    
    const setTitle = (title) => {
        setState({
            ...state,
            title
        })
    }
    
    
    return {
        state,
        setNum,
        setTitle
    }
}

const Counter = ({ initNum }) => {    
    
    const {state, setNum, setTitle} = useCounter(initNum)
    
    const increment = () => {
        setNum(state.num + 1)
    }
    
    const decrement = () => {
        setNum(state.num - 1)
    } 
    
    const changeTitle = () => {
        setTitle('test')
    }
    
    return (
        <div>
            <h1>{state.title}</h1>
            <h2>{state.num}</h2>
            <button onClick={increment}>+</button>
            {'  '}
            <button onClick={decrement}>-</button>
            <div>
                <button onClick={changeTitle}>change title</button>
            </div>
        </div>
    )
}

export default Counter