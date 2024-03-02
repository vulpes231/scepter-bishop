import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
});

export default loginSlice.reducer;
