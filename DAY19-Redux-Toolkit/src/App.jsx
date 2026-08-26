import { useState } from 'react'
import './App.css'
import { useDispatch,useSelector } from 'react-redux' 
import { increment, decrement} from "./Feature/counterSlice"



function App() {
   
 let dispatch =  useDispatch();
  const {count  } = useSelector((store)=> store.counter);

  console.log(count)

  return (
    <>
    <h1> my count is {count}</h1>

   <button onClick={()=>dispatch(increment())
    
   }> ++</button>
   <button onClick={()=> dispatch(decrement())
    
   }> -- </button>
    </>
  )
}

export default App
