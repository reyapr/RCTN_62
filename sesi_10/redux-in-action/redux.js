import { createStore } from 'redux';

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

console.log(store.getState(), 'init')

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(increment)
store.dispatch(increment)
store.dispatch(decrement)