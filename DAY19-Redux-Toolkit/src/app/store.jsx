import {configureStore} from "@reduxjs/toolkit"
import counterReducers from "../Feature/counterSlice"


export const store = configureStore({
  reducer:{
    counter:counterReducers
  
  },
})








//FRIST 1 STEP OF 

// import {configureStore} from "@reduxjs/toolkit"


// export const store = configureStore({
//   reducer:{
    
//   },
// })