import { createSlice } from '@reduxjs/toolkit';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        tools: [
            {
                name: 'wood_pickaxe',
                has: true,
                equiped: true,
            },
            {
                name: 'copper_pickaxe',
                has: false,
                equiped: false,
            },
            {
                name: 'iron_pickaxe',
                has: false,
                equiped: false,
            },
        ],
        skills: [
            {
                name: 'more_efforts',
                has: true
            },
        ]
    },
    reducers: {
        addTool: (state, payload) => {
            state.tools.push(payload.payload)
        },
        addSkill: (state, payload) => {
            state.skills.push(payload.payload)
        },
        equipTool: (state, payload) => {
            const elem = state.tools.filter(item => item.name === payload.payload)[0];
            const equipedElem = state.tools.filter(item => item.equiped === true)[0];

            equipedElem.equiped = false;
            elem.equiped = true;
        }
    }
});

export const { addTool, addSkill, equipTool } = levelSlice.actions;

export default levelSlice.reducer;