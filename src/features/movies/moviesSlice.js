import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  query: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    modifySearchQuery: (state, action) => {
      state.query = action.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { modifySearchQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
