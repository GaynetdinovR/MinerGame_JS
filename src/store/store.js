import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './slices/levelSlice.js';
import inventoryReducer from './slices/inventorySlice.js';
import mapSlice from './slices/mapSlice.js';
import skillsSlice from './slices/skillsSlice.js';

const store = configureStore({
    reducer: {
        level: levelReducer,
        inventory: inventoryReducer,
        map: mapSlice,
        skills: skillsSlice
    }
});

export default store;
