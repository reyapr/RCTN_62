import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const initialState = {
    data: [],
    count: 0,
    isLoading: false,
    isError: false,
    login: {
        user: {},
        errorMessage: '',
        isLoading: false
    }
}

const callLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === 'admin@login.com' && password === 'admin') {
                resolve({email})
            } else {
                reject('Invalid Email or Password')
            }
        }, 2000);
    })
}

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const response = await axios.get(USERS_URL)
    return response.data
})

export const authLogin = createAsyncThunk('user/login', async ({email, password}) => {
    try {
        const response = await callLoginApi(email, password)
        return response.email
    } catch (error) {
        throw(error)
    }    
})

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    },
    extraReducers: (builder) => {
        // Fetch Users
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload
            state.count = action.payload.length
            state.isLoading = false
        })
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
        // Login
        builder.addCase(authLogin.pending, (state) => {
            state.login.isLoading = true
            state.login.errorMessage = ''
            state.login.user = {}
        })
        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.login.isLoading = false
            state.login.user.email = action.payload
            state.login.errorMessage = ''
        })
        builder.addCase(authLogin.rejected, (state, action) => {
            state.login.isLoading = false
            state.login.errorMessage = action.error.message
        })
    }
})

export const { increment, decrement } = userReducer.actions
export default userReducer.reducer