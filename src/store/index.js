import { configureStore } from "@reduxjs/toolkit";

import authenticationSlice from "./authenticationSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export default store;
