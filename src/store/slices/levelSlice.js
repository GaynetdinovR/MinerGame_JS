import { createSlice } from '@reduxjs/toolkit';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        name: 'cave_1',
        depth: 19
    },
    reducers: {
        increaseDepth: (state) => {
            state.depth++;
        },
        setLevel: (state, { payload }) => {
            state.name = payload;
        }
    }
});

export const { setLevel, increaseDepth } = levelSlice.actions;

export default levelSlice.reducer;
