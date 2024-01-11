import { createSlice } from '@reduxjs/toolkit';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        name: 'cave_4',
    },
    reducers: {
        changeLevel: (state, payload) => {
            state.name = payload.payload 
        }
    }
});

export const { changeLevel } = levelSlice.actions;

export default levelSlice.reducer;