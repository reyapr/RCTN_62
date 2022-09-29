import { configureStore } from '@reduxjs/toolkit'
import counterReducerClass from '../components/CounterClass/reducer'
import counterReducerFn from '../components/CounterFn/slicer'

export const store = configureStore({
    reducer: {
        counterClass: counterReducerClass,
        counterFn: counterReducerFn
    }
})