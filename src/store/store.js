import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './slices/levelSlice.js';
import inventoryReducer from './slices/inventorySlice.js';
import mapSlice from './slices/mapSlice.js';

const store = configureStore({
    reducer: {
        level: levelReducer,
        inventory: inventoryReducer,
        map: mapSlice
    }
});

export default store;
