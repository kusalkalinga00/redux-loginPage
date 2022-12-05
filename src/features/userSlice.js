import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url =
  "https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login";

const initialState = {
  loading: false,
  dashboard: {},
  error: "",
};

export const FetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ values }) => {
    console.log(values);
    try {
      const response = await axios.post(url, values);
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchUser.pending, (state) => {
      state.loading = true;
      state.dashboard = {};
    });
    builder.addCase(FetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboard = action.payload;
      state.error = "";
    });
    builder.addCase(FetchUser.rejected, (state, action) => {
      state.loading = false;
      state.dashboard = {};
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
