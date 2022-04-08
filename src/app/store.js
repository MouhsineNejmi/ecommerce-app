import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import collectionsReducer from "./features/collections/collectionsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    collections: collectionsReducer,
  },
});
