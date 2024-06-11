import { createSlice } from '@reduxjs/toolkit';

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        isMoreEfforts: false,
        isLucky: false
    },
    reducers: {
        setMoreEfforts: (state, { payload }) => {
            state.isMoreEfforts = payload;
        },
        setLucky: (state, { payload }) => {
            state.isLucky = payload;
        }
    }
});

export const { setMoreEfforts, setLucky } = skillsSlice.actions;

export default skillsSlice.reducer;
