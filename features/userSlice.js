import { createSlice } from "@reduxjs/toolkit";
import usersApi from "../services/usersApi";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNotifications: (state, action) => {},
    resetNotifications: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.signupUser.matchFulfilled,
      (state, action) => action
    );

    builder.addMatcher(
      usersApi.endpoints.loginUser.matchFulfilled,
      (state, action) => action
    );

    builder.addMatcher(
      usersApi.endpoints.logoutUser.matchFulfilled,
      () => null
    );
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;

export default userSlice.reducer;
