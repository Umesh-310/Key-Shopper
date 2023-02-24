import { configureStore } from "@reduxjs/toolkit";
import cartContext from "./cartContext";
import productsContext from "./productsContext";

export const store = configureStore({
  reducer: { productsContext: productsContext, cartContext: cartContext },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
