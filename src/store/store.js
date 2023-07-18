import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/searchSlice";
import appSlice from "../slices/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
  search: searchSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
