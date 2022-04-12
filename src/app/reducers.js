import { combineReducers } from "@reduxjs/toolkit";

// ------ Reducers
import collectionsReducer from "./features/collections/collectionsSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import cartReducer from "./features/cart/cartSlice";

const rootReducer = combineReducers({
  collections: collectionsReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export default rootReducer;
