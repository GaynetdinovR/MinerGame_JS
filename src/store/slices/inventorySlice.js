import { createSlice } from '@reduxjs/toolkit';
import data from '../../classes/Data.js';

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        materials: [
            {
                name: 'coins',
                count: 0
            },
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
                name: 'wood_pickaxe',
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
                has: false
            }
        ]
    },
    reducers: {
        unlockItem: (state, { payload }) => {
            const name = payload;

            state.tools = state.tools.map((tool) => {
                if (tool.name == name) return { ...tool, has: true };

                return tool;
            });

            state.skills = state.skills.map((skill) => {
                if (skill.name == name) return { ...skill, has: true };

                return skill;
            });
        },
        removeMaterials: (state, { payload }) => {
            for (let i = 0; i < payload.length; i++) {
                for (let k = 0; k < state.materials.length; k++) {
                    if (payload[i][0] == state.materials[k].name) {
                        state.materials[k].count -= payload[i][1];
                    }
                }
            }
        },
        removeMaterial: (state, { payload }) => {
            const { name, count } = payload;

            state.materials = state.materials.map((material) => {
                if (material.name == name)
                    return { name: material.name, count: material.count - count };

                return material;
            });
        },
        addMaterials: (state, { payload }) => {
            for (let i = 0; i < payload.length; i++) {
                for (let k = 0; k < state.materials.length; k++) {
                    if (payload[i].name == state.materials[k].name) {
                        state.materials[k].count += payload[i].count;
                    }
                }
            }
        },
        addMaterial: (state, { payload }) => {
            const { name, count } = payload;

            state.materials = state.materials.map((material) => {
                if (material.name == name)
                    return { name: material.name, count: material.count + count };

                return material;
            });
        },
        equipTool: (state, { payload }) => {
            const elem = state.tools.filter((item) => item.name === payload)[0];
            const equipedElem = state.tools.filter((item) => item.equiped === true)[0];

            equipedElem.equiped = false;
            elem.equiped = true;
        },
        changeInventoryLevel: (state, { payload }) => {
            const { levels } = data.getMergedData();
            const level = data.find(levels, payload);

            const getArray = (array, defaultData) => {
                const res = [];

                array.forEach((elem) => {
                    const obj = Object.assign({ name: elem }, defaultData);

                    res.push(obj);
                });

                return res;
            };

            state.materials.push(...getArray(level.new_materials, { count: 0 }));
            state.skills.push(...getArray(level.new_skills, { has: false }));
            state.tools.push(...getArray(level.new_tools, { has: false, equiped: false }));
        }
    }
});

export const {
    addMaterial,
    addMaterials,
    equipTool,
    changeInventoryLevel,
    unlockItem,
    removeMaterials,
    removeMaterial
} = inventorySlice.actions;

export default inventorySlice.reducer;
