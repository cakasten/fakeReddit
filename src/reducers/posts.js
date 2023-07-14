import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
