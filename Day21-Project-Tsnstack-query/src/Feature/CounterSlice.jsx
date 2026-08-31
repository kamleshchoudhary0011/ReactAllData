import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name:"counter",
  initialState:{
    count:0
  },
  reducers:{
   increment:(state, action)=>{

    state.count++;

   },
   dcrement:(state , action)=>{
    state.count--;

   },
   incrementByValue:(state , action)=>{
    state.count += Number(action.payload)   
  },
  

  }
})


export const {increment,dcrement,incrementByValue} = counterSlice.actions


export default counterSlice.reducer;
