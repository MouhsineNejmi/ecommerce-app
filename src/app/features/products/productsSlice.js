import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data/products";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return products[action.payload];
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
