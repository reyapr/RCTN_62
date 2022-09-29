import { configureStore } from '@reduxjs/toolkit'
import counterReducerClass from '../components/CounterClass/reducer'

export const store = configureStore({
    reducer: {
        counterClass: counterReducerClass        
    }
})