import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  sucess: false,
};

export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (formData) => {
    const url = "";
    try {
      const response = axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      if (error.response) {
        const errorMsg = error.response.data.message;
        throw new Error(errorMsg);
      } else {
        throw error;
      }
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = false;
      state.sucess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.sucess = true;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.sucess = false;
      });
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
