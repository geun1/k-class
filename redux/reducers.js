import { combineReducers } from "@reduxjs/toolkit";
import classSlice from "./slices/classes";
const rootReducer = combineReducers({
  classes : classSlice.reducer,
})

export default rootReducer;