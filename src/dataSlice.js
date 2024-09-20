// src/features/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUsers, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;
