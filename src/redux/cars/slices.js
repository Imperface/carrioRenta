import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCarsThunk } from "./operations";

const initialState = {
  list: [],
  favorite: [],
  error: "",
  isLoading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorite.unshift(payload);
      // return { ...state, favorite: [payload, ...state.favorite] };
    },
    removeFromFavorite: (state, { payload }) => {
      if (!state.favorite.length) {
        return;
      }

      if (state.favorite.length === 1) {
        state.favorite = [];
        return;
      }
      state.favorite = state.favorite.filter((car) => car.id !== payload);

      // ...state,
      // favorite: state.favorite.filter((car) => car.id !== payload),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
        state.list = payload;
      })
      .addMatcher(isAnyOf(...getRequests("fulfilled")), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests("pending")), handlePending)
      .addMatcher(isAnyOf(...getRequests("rejected")), handleRejected);
  },
});

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = "";
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getAllCarsThunk];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const carsReducer = carsSlice.reducer;

export const { addToFavorite, removeFromFavorite } = carsSlice.actions;
