import { createSlice } from "@reduxjs/toolkit";
import usersApi from "../services/usersApi";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNotifications: (state, action) => {
      const { payload } = action;
      if (state.newMessages?.[payload]) {
        state.newMessages[payload] += 1;
      } else {
        state.newMessages[payload] = 1;
      }
    },
    resetNotifications: (state, action) => {
      const isEmpty = Object.getOwnPropertyNames(state).length === 0;
      if (!isEmpty) delete state.newMessages[action.payload];
      // TODO undefined
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.signupUser.matchFulfilled,
      (state, action) => action.payload
    );

    builder.addMatcher(
      usersApi.endpoints.loginUser.matchFulfilled,
      (state, action) => action.payload
    );

    builder.addMatcher(
      usersApi.endpoints.logoutUser.matchFulfilled,
      () => null
    );
  },
});

export const selectUser = (state) => state.user;

export const { addNotifications, resetNotifications } = userSlice.actions;

export default userSlice.reducer;
