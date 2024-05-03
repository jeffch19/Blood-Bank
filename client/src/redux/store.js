import usersSlice from "./usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadersSlice"

const store = configureStore({
  reducer: {
    users: usersSlice,
    loaders: loadersReducer,
  },
});

export default store;