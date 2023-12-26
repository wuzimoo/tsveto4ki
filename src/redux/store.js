import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {flowerReducer} from "./slices/flowersSlice";


const rootReducer = combineReducers({
    flowerReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}