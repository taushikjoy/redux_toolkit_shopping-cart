import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const cart = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default cart;
