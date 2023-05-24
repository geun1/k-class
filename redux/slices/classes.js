import { createSlice } from "@reduxjs/toolkit";


const classSlice = createSlice({
  name : "classes",
  initialState : [],
  reducers : {
    addResult(state,action){
      return [...state,...action.payload];
    },
    clearResult(state){
      return []
    }
  }
});
export const {addResult,clearResult} = classSlice.actions
export default classSlice;