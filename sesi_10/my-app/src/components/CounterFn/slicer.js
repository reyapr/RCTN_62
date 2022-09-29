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
        updateCounterFn: (state, payload) => {
            state.counter = payload
        }
    }
})

// actions
export const { increment, decrement, updateCounterFn } = counterSliceFn.actions

export default counterSliceFn.reducer

