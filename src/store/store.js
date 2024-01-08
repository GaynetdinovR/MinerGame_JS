import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './slices/levelSlice.js';
import inventoryReducer from './slices/inventorySlice.js';

const store = configureStore({
    reducer: {
        level: levelReducer,
        inventory: inventoryReducer,
    }
});

export default store;