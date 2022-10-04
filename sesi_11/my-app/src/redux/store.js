import userReducer from '../components/User/slicer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        users: userReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})