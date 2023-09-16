import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./Article";
import { atRule } from "postcss";

export const store = configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(articleApi.middleware)
    
});