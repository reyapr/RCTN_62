const initialState = {
    title: 'Counter Class',
    counter: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const UPDATE_COUNTER = 'UPDATE_COUNTER'
// action
export const incrementClass = {
    type: INCREMENT
}

export const decrementClass = {
    type: DECREMENT
}

export const updateCounter = (num) => ({
    type: UPDATE_COUNTER,
    payload: num
})

// reducer
const counterReducerClass = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case UPDATE_COUNTER:
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
}

export default counterReducerClass