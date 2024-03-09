import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import productReducer from "../features/productSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
  },
});

export default store;
