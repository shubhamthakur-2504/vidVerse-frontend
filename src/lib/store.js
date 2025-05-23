import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidebarReducer from "./features/sidebarSlice";
import userDataReducer from "./features/userDataSlice";

const vidReducer = combineReducers({
  sidebar: sidebarReducer,
  userData: userDataReducer,
})

const persistConfig = {
  key: "vidVerse",
  storage,
  whitelist: ['sidebar', 'userData'] ,
}


export function makeStore(preloadedState) {
  const isServer = typeof window === "undefined"
  const persistedReducer = isServer? vidReducer :persistReducer(persistConfig, vidReducer)
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these redux-persist action types
          ignoredActions: [
            "persist/PERSIST",
            "persist/REHYDRATE",
            "persist/PAUSE",
            "persist/FLUSH",
            "persist/PURGE",
            "persist/REGISTER",
          ],
        },
      }),
  })
}