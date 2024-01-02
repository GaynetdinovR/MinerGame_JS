import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './slices/levelSlice.js';

const store = configureStore({
    reducer: {
        level: levelReducer
    }
});

export default store;