import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import productReducer from "../features/productSlice";
import orderReducer from "../features/orderSlice";
import contactReducer from "../features/contactSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    order: orderReducer,
    contact: contactReducer,
  },
});

export default store;
