import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    postArray: [],
    category: "popular",
    categoriesArray: ["Popular", "Programming Humor", "Ask Reddit"],
    isLoading: true,
  },
  reducers: {
    setPostArray: (state, action) => {
      state.postArray = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPostArray, setCategory, setIsLoading } = appSlice.actions;

export default appSlice.reducer;
