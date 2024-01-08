import { createSlice } from '@reduxjs/toolkit';
import other from '../../classes/Other.js';
import game_data from '../../static/data/game_data.js';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        level: 'cave_1',
        basement: 'stone',
        materials: ['iron_block', 'copper_block', 'coal_block'],
        newSkills: ['more_efforts'],
        newTools: ['iron_pickaxe', 'copper_pickaxe']
    },
    reducers: {
        changeLevel: (state, payload) => {
            const level = other.find(game_data.levels, payload.payload);

            state.level = payload.payload 
            state.basement = level.basement
            state.materials = level.materials.map(material => {
                return `${material.split('_')[0]}_block` ;
            })
            state.newSkills = level.newSkills
            state.newTools = level.newTools
        }
    }
});

export const { changeLevel } = levelSlice.actions;

export default levelSlice.reducer;