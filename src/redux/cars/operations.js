import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://656920d8de53105b0dd6ba92.mockapi.io",
});

export const getAllCarsThunk = createAsyncThunk(
  "cars/getAllCars",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get("/carrioRenta");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
