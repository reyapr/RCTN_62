import { useEffect, useState } from "react"

const useCounter = (initNum) => {
    const [state, setState] = useState({
        num: initNum,
        title: 'Functional Component',
        records: {initNum},
        count: 0
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
    
    const setCount = (count) => {
        setState({
            ...state,
            count
        })
    }
    
    
    return {
        state,
        setNum,
        setTitle,
        setCount
    }
}

const Counter = ({ initNum }) => {    
    
    const {
        state, 
        setNum, 
        setTitle,
        setCount
    } = useCounter(initNum)
    
    const increment = () => {
        setNum(state.num + 1)
    }
    
    const decrement = () => {
        setNum(state.num - 1)
    } 
    
    const changeTitle = () => {
        setTitle('test')
    }
    
    useEffect(() => {
        console.log(`current num state ${state.num}`)
    })
    
    return (
        <div>
            <h1>{state.title}</h1>
            <h2>{state.num}</h2>
            <p>You clicked {state.count} times</p>
            <button onClick={increment}>+</button>
            {'  '}
            <button onClick={decrement}>-</button>
            <br />
            <div>
                <button onClick={changeTitle}>change title</button>
            </div>
        </div>
    )
}

export default Counter