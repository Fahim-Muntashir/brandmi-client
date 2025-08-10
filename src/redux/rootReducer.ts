import { combineReducers } from "@reduxjs/toolkit";
import { sellerProfileApi } from "./api/sellerProfileApi";

const rootReducer = combineReducers({
  [sellerProfileApi.reducerPath]: sellerProfileApi.reducer,
  // Add any other slice reducers here, e.g.:
  // user: userReducer,
});

export default rootReducer;
