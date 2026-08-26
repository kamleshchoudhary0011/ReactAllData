import { createAction, createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
  name :"counter",
  // this is state
  initialState:{
    count:0 ,

  },
  // heare is the actions for updating state
  reducers:{

    increment:(state, action)=>{

      state.count++;

      
    } ,
    decrement :(state,action)=>{
 
      state.count--;

    }


  }

});


export const {
  increment, decrement
} = counterSlice.actions;

export default counterSlice.reducer