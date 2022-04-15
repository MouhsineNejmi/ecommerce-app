import { createSlice } from "@reduxjs/toolkit";
import { collections } from "../../data/collections";

const initialState = [];

const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    getCollections: (state) => {
      return collections;
    },
  },
});

export const { getCollections } = collectionSlice.actions;

export default collectionSlice.reducer;
