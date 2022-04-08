import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      incrementCount();
    },
    removeFromFavorites: (state, action) => {
      decrementCount();
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
});

export const {
  addFavorites,
  removeFromFavorites,
  incrementCount,
  decrementCount,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
