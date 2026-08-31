import {configureStore} from "@reduxjs/toolkit"
import counterReducers from "../Feature/CounterSlice"
import AuthReducers from "../Feature/AuthSlice"

export const store = configureStore({
  reducer:{
   counter :counterReducers,
   auth:AuthReducers
  },
});


