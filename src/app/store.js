import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import collectionsReducer from "./features/collections/collectionsSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    collections: collectionsReducer,
    favorites: favoritesReducer,
  },
});
