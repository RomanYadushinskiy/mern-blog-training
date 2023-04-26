import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../../utils/axios';

const initialState = {
    post: [],
    popularPosts: [],
    loading: false,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default postSlice.reducer