import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { NavLink, Route, Router, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav className='w-screen p-3 mb-4 bg-gray-500  flex justify-between '>
  <h1>logo</h1>
  <div className=' flex justify-center gap-15'>
    <NavLink to={"/"} >Home</NavLink>
    <NavLink to={"/contact"} >About</NavLink>
    <NavLink to={"/aboute"} >Contact</NavLink>
  </div>
  <button>Login</button>
</nav>



<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>
}/>

     <Route path='/aboute' element={<About/>}/>

</Routes>


    </>
  )
}

export default App
