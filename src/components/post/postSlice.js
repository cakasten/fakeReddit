import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  votes: 0,
  title: "",
  author: "",
  subreddit: "",
  video: null,
  bodyImg: null,
  postData: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.votes = action.payload.votes;
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.subreddit = action.payload.subreddit;
      state.video = action.payload.video;
      state.bodyImg = action.payload.bodyImg;
      state.postData = action.payload.postData;
    },
    incrementVotes: (state) => {
      state.votes += 1;
    },
    decrementVotes: (state) => {
      state.votes -= 1;
    },
  },
});

export const { setPostData, incrementVotes, decrementVotes } =
  postSlice.actions;

export default postSlice.reducer;
