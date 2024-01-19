import { createSlice } from '@reduxjs/toolkit';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        name: 'cave_1',
        depth: 9
    },
    reducers: {
        changeLevel: (state, payload) => {
            state.name = payload.payload;
        },
        changeDepth: (state) => {
            state.depth += 1;

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

export const { changeLevel, changeDepth } = levelSlice.actions;

export default levelSlice.reducer;
