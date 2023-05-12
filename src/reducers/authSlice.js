import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.isLoggedIn = false;
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginError, logout } = authSlice.actions;

export default authSlice.reducer;
