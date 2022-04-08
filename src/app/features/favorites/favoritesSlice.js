import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      return [
        ...state.filter(
          (product) => product.productName !== action.payload.productName,
        ),
        action.payload,
      ];
    },
    removeFromFavorites: (state, action) => {
      return [
        ...state.filter(
          (product) => product.productName !== action.payload.productName,
        ),
      ];
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
