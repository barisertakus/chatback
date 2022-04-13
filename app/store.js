import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import usersApi from "../services/usersApi";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const usersReducerPath = usersApi.reducerPath;

const reducer = combineReducers({
  user: userSlice,
  [usersReducerPath]: usersApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [usersReducerPath],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, usersApi.middleware],
});

export default store;