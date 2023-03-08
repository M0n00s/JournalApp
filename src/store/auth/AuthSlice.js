import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", //cheking, not-authenticated, authenticated
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "[auth]",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logout: (state, { payload }) => {},
    chekingCredentials: (state, { payload }) => {
      state.status = "cheking";
    },
  },
});

export const { login, logout, chekingCredentials } = authSlice.actions;
