"use client";
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
import { makeStore } from "@lib/store";
import { useMemo } from 'react';
export default function Providers({ children }) {
  const store = useMemo(()=>(makeStore()),[])
  const persistor = useMemo(()=>(persistStore(store)),[store])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
