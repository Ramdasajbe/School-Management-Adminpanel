import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",

  loading: false,
  currentUser: null,
  currentRole: null,
  error: null,
  response: null,
  darkMode: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.status = "loading";
    },
    authSuccess: (state, action) => {
      state.status = "success";
      state.currentUser = action.payload;
      state.currentRole = action.payload.role;

      state.response = null;
      state.error = null;
    },
    authFailed: (state, action) => {
      state.status = "failed";
      state.response = action.payload;
    },
    authError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.currentUser = null;
      state.status = "idle";
      state.error = null;
      state.currentRole = null;
    },
  },
});

export const { authRequest, authSuccess, authFailed, authError, authLogout } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
