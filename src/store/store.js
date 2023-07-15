import { configureStore } from "@reduxjs/toolkit";
// import postReducer from "./slices/postSlice";

const initialState = {
  postArray: [],
  searchTerm: "",
  isLoading: true,
  category: "popular",
  categoriesArray: ["Popular", "Programming Humor", "Ask Reddit"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST_ARRAY":
      return {
        ...state,
        postArray: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
