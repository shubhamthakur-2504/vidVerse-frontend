// import { configureStore } from "@reduxjs/toolkit";
// import sidebarReducer from "./features/sidebarSlice";
// export const Store = configureStore({
//     reducer: {
//         Sidebar: sidebarReducer,
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice"; // Import the sidebar reducer

export function Store(preloadedState = {}) {
  return configureStore({
    reducer: {
      Sidebar: sidebarReducer,
    },
    preloadedState, // Allows SSR hydration
  });
}