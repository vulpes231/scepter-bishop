import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  items: [],
};

export const getItem = createAsyncThunk("product/getItem", async () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItem"));
  // console.log(cartItems);
  return cartItems;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = false;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItem.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(getItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.items = [];
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
