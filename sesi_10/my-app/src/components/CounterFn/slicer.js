import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    title: 'Counter Function'
}

// reducer
export const counterSliceFn = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        updateCounterFn: (state, action) => {
            state.counter = action.payload
        }
    }
})

// actions
export const { 
    increment: incrementFn, 
    decrement: decrementFn, 
    updateCounterFn
} = counterSliceFn.actions

export default counterSliceFn.reducer

