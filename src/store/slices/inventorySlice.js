import { createSlice } from '@reduxjs/toolkit';
import data from '../../classes/Data.js';

export const levelSlice = createSlice({
    name: 'level',
    initialState: {
        materials: [
            {
                name: 'coal',
                count: 0
            },
            {
                name: 'copper_ore',
                count: 0
            },
            {
                name: 'iron_ore',
                count: 0
            }
        ],
        tools: [
            {
                name: 'neutronium_pickaxe',
                has: true,
                equiped: true
            },
            {
                name: 'copper_pickaxe',
                has: false,
                equiped: false
            },
            {
                name: 'iron_pickaxe',
                has: false,
                equiped: false
            }
        ],
        skills: [
            {
                name: 'more_efforts',
                has: true
            }
        ]
    },
    reducers: {
        addMaterial: (state, payload) => {
            const { name, count } = payload.payload;

            const material = state.materials.filter((material) => material.name == name);

            if (material) {
                state.materials = state.materials.map((material) => {
                    if (material.name == name)
                        return { name: material.name, count: material.count + count };

                    return material;
                });
                return;
            }

            state.materials.push({ name: name, count: count });
        },
        addTool: (state, payload) => {
            state.tools.push(payload.payload);
        },
        addSkill: (state, payload) => {
            state.skills.push(payload.payload);
        },
        equipTool: (state, payload) => {
            const elem = state.tools.filter((item) => item.name === payload.payload)[0];
            const equipedElem = state.tools.filter((item) => item.equiped === true)[0];

            equipedElem.equiped = false;
            elem.equiped = true;
        },
        changeLevel: (state, padlock) => {
            const { levels } = data.getMergedData();
            const level = data.find(levels, padlock.padlock);

            state.skills.push(...level.new_skills);
            state.tools.push(...level.new_tools);
        }
    }
});

export const { addMaterial, equipTool, changeLevel } = levelSlice.actions;

export default levelSlice.reducer;
