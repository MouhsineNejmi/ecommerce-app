import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
