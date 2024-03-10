import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import productReducer from "../features/productSlice";
import orderReducer from "../features/orderSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    order: orderReducer,
  },
});

export default store;
