import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementFn, decrementFn, updateCounterFn } from './slicer'

const CounterFn = () => {
    const state = useSelector((state) => {
        return {
            myCounterFn: state.counterFn.counter,
            myTitleFn: state.counterFn.title
        }
    })
    
    const [inputCounter, setInputCounter] = useState(0)
    
    const handleChange = (e) => {
        setInputCounter(Number(e.target.value))
    }
    
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>{state.myTitleFn}</h1>
            <h2>{state.myCounterFn}</h2>
            <button onClick={() => dispatch(incrementFn())}>+</button>
            <button onClick={() => dispatch(decrementFn())}>-</button>
            <div>
                <input type="text" onChange={handleChange} />
                <button onClick={() => dispatch(updateCounterFn(inputCounter))}>submit</button>
            </div>
        </div>
    )    
}

export default CounterFn