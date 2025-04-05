import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
export const Store = configureStore({
    reducer: {
        Sidebar: sidebarReducer,
    },
})