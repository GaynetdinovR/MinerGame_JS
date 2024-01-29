import { createSlice } from '@reduxjs/toolkit';
import generation from '../../classes/Generation.js';
import data from '../../classes/Data.js';

export const mapSlice = createSlice({
    name: 'map',
    initialState: generation.generateMap(data.getMergedData()),
    reducers: {
        setMap: (state, { payload }) => {
            return payload;
        },
        setBlock: (state, { payload }) => {
            const { x, y } = payload;

            state[y][x] = { ...state[y][x], ...payload };
        },
        setBlocksFromArray: (state, { payload }) => {
            for (const block of payload) {
                const { x, y } = block;

                state[y][x] = { ...state[y][x], ...block };
            }
        }
    }
});

export const { setMap, setBlock, setBlocksFromArray } = mapSlice.actions;

export default mapSlice.reducer;
