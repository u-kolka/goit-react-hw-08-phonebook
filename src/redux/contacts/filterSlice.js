import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      return state = action.payload; 
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;