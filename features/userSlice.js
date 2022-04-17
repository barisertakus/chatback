import { createSlice } from "@reduxjs/toolkit";
import usersApi from "../services/usersApi";

/*
 // Notification Structure
{
  "room1": [
    { "content": "hello", "from": "Person1" },
    { "content": "hello2", "from": "Person2" }
  ],
  "room2": [
    { "content": "hi", "from": "Person5" },
    { "content": "hi again", "from": "Person5" }
  ]
}

*/

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNotifications: (state, action) => {
      const { payload } = action;
      const { room, content, from } = payload;

      const notification = state.newMessages?.[room];

      if (notification) {
        state.newMessages[room].push({ content, from });
      } else {
        // 0 notification
        state.newMessages[room] = [{ content, from }];
      }

      // if (state.newMessages?.[payload]) {
      //   state.newMessages[payload] += 1;
      // } else {
      //   state.newMessages[payload] = 1;
      // }
    },
    resetNotifications: (state, action) => {
      if(state?.newMessages?.[action.payload]){
        delete state.newMessages[action.payload];
      }
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
