import { createSlice } from '@reduxjs/toolkit';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        name: 'cave_1',
        depth: 9
    },
    reducers: {
        increaseDepth: (state) => {
            state.depth++;
        },
        changeLevel: (state) => {
            const levels = {
                200: 'cave_2',
                600: 'cave_3',
                1000: 'cave_4',
                1800: 'cave_5'
            };

            if (levels.hasOwnProperty(state.depth)) state.name = levels[state.depth];
        }
    }
});

export const { changeLevel, increaseDepth } = levelSlice.actions;

export default levelSlice.reducer;
