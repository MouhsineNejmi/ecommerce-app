import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data/products";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      return products;
    },
    getProductsByCollection: (state, action) => {
      return products[action.payload];
    },
  },
});

export const { getProducts, getProductsByCollection, getProductsShopPage } =
  productsSlice.actions;

export default productsSlice.reducer;
