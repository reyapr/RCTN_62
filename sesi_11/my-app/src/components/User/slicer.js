import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typiasdadscode.com/users'
const initialState = {
    data: [],
    count: 0,
    isLoading: false,
    isError: false
}

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const response = await axios.get(USERS_URL)
    return response.data
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
    }
})

export const { increment, decrement } = userReducer.actions
export default userReducer.reducer