import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Aboute from './component/Aboute'

function App() {

  const [count ,setCount] = useState(0);

  const [user , setUser] = useState({name:"raghav" , id:787});



  let great = useCallback(() =>{
    console.log("hy grid is riders this ");
    
  },[]);
  
  

  return (
    <>

    <h1>{count}</h1>
    <h2>{user.name}</h2>

    <button onClick={()=>setCount(count + 1)}>
      increment
    </button>

   <button onClick={()=>setUser({...user , name:"okokoko"})}>
    chabge Name
   </button>

      
      
      <Home  user={user}  />
      <Aboute great={great}/>
    </>
  )
}

export default App
