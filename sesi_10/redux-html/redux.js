const { createStore } = Redux

const initialState = {
    title: 'Counter',
    counter: 0
}

/** action
 * {
 *  type: ACTION,
 *  payload: value
 * }
 */

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }  
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }          
        default:
            return state
    }
}


// store
const store = createStore(counterReducer)


// actions
const increment = {
    type: 'INCREMENT'
}

const decrement = {
    type: 'DECREMENT'
}

document.getElementById('title').innerHTML = store.getState().title
const CounterEle = document.getElementById('counter')
CounterEle.innerHTML = store.getState().counter

store.subscribe(() => {
    console.log(store.getState())
    CounterEle.innerHTML = store.getState().counter
})


document.getElementById('increment')
    .addEventListener('click', () => {
        store.dispatch(increment)
    })
    
document.getElementById('decrement')
    .addEventListener('click', () => {
        store.dispatch(decrement)
    })
