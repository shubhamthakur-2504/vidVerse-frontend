"use client";

// import { Provider } from "react-redux";
import { Store } from "@lib/store";

// export default function Providers({ children, preloadedState = {} }) {
//   const store = Store(preloadedState); // ✅ Create the store instance properly

//   return (<Provider store={store}>{children}</Provider>);
// }
// store/provider.js

import { Provider } from 'react-redux'
import { useRef } from 'react'

export default function Providers({ children, preloadedState }) {
  const storeRef = useRef()

  if (!storeRef.current) {
    storeRef.current = Store(preloadedState)
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
