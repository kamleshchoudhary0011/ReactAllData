import {createAsyncThunk} from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";



export  let loginEmploye = createAsyncThunk("/auth/login",async(credencials , thunkApi)=>{
console.log("ccccccc", credencials)
try {
    let res = await axiosInstance.post("/auth/login" , credencials);
    console.log("........",res);
    return res.data
} catch (error) {
  return new thunkApi.rejectWithValue(error);
}


});





