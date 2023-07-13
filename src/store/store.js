import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  postArray: [],
  searchTerm: "",
  isLoading: true,
  category: "popular",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Set_POST_ARRAY":
      return {
        ...state,
        postArray: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        postArray: action.payload,
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
