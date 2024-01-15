import { createSlice } from '@reduxjs/toolkit';
import generation from '../../classes/Generation.js';
import data from '../../classes/Data.js';

export const mapSlice = createSlice({
    name: 'map',
    initialState: { blocks: generation.generateMap(data.getMergedData()) },
    reducers: {
        setMap: (state, payload) => {
            return payload.payload;
        },
        setBlock: (state, { payload }) => {
            return {
                blocks: state.blocks.map((row, y) => {
                    return row.map((block, x) => {
                        if (x == payload.x && y == payload.y) return { ...block, ...payload };

                        return block;
                    });
                })
            };
        }
    }
});

export const { setMap, setBlock } = mapSlice.actions;

export default mapSlice.reducer;
