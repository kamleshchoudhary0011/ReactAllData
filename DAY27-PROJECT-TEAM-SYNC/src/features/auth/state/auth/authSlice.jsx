import { createSlice } from "@reduxjs/toolkit";

let authSclice  = createSlice({

  name:"auth",

initialState:{
  employes:null,
  isLoding:false
},
reducers:{

  addEmployee:(state , action)=>{

    state.employes = action.payload,
    state.isLoding = false

  },

  removeEmploye:(state) => {

    state.employes = null;
    state.isLoding = false;

  }
}


})

export let {addEmployee , removeEmploye} = authSclice.actions


export default authSclice.reducer;

