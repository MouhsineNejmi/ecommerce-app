import { combineReducers } from "@reduxjs/toolkit";

// ------ Reducers
import collectionsReducer from "./collections/collectionsSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  collections: collectionsReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
