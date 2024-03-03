import loginReducer from "../features/loginSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
