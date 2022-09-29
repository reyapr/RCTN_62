import { useSelector } from "react-redux"

const CounterFn = () => {
    const state = useSelector((state) => {
        return {
            myCounterFn: state.counterFn.counter,
            myTitleFn: state.counterFn.title
        }
    })
    
    console.log(state, 'state')
    
    return (
        <div>
            <h1>{state.myTitleFn}</h1>
            <h2>{state.myCounterFn}</h2>
            <button>+</button>
            <button>-</button>
            <div>
                <input type="text" />
                <button>submit</button>
            </div>
        </div>
    )    
}

export default CounterFn