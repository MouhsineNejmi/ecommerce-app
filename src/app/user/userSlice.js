import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      return {
        isLoggedIn: action.payload,
      };
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
