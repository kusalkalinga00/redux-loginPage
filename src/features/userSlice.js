import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const FetchUser = createAsyncThunk("user/fetchUser", async (values) => {
  try {
    const response = await axios.post(url, values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{}
});

export default userSlice.reducer;
