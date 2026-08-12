import React from 'react'
import { NavLink } from 'react-router'

const Navebar = () => {
  return (
    <div>
       <nav className='w-screen p-3 mb-4 bg-gray-500  flex justify-between '>
  <h1>logo</h1>
  <div className=' flex justify-center gap-15'>
    <NavLink to={"/"} >Home</NavLink>
    <NavLink to={"/aboute"} >About</NavLink>
  
    <NavLink to={"/Products"} >product</NavLink>
  </div>
  <button>Login</button>
</nav>
    </div>
  )
}

export default Navebar
