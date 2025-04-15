"use client";

import { Provider } from "react-redux";
import { Store } from "@lib/store";

export default function Providers({ children, preloadedState = {} }) {
  const store = Store(preloadedState); // ✅ Create the store instance properly

  return (<Provider store={store}>{children}</Provider>);
}
