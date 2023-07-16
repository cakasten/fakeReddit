import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/searchSlice";
import postSlice from "../components/post/postSlice";
import appSlice from "../slices/appSlice";

// const initialState = {
//   postArray: [],
//   isLoading: true,
//   category: "popular",
//   categoriesArray: ["Popular", "Programming Humor", "Ask Reddit"],
// };

const rootReducer = combineReducers({
  search: searchSlice,
  post: postSlice,
  app: appSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
