import React from 'react'
import { NavLink, useLocation } from 'react-router'

const Navbar = () => {
  // const data = useLocation();   

  
  return (
    <div className='border-r border-gray-500 p-5 flex flex-col gap-10'>
     <h1 className='text-2xl'>E-Com</h1>
     <div className='flex flex-col gap-7 ml-5'>
      <NavLink className={({isActive})=> isActive ? "border-b border-gray-500 font-semibold text-red-400 " : "text-black border-b border-gray-500"} to={"/main"}
      end
        
        >Home</NavLink>
      <NavLink  
      className={({isActive})=> isActive
       ? "border-b border-gray-500 font-semibold text-red-400 " 
       :"text-black border-b border-gray-500"}  
       to={"/main/users"}
              
        >User</NavLink>
      <NavLink  className={({isActive})=> isActive ? "border-b border-gray-500 font-semibold text-red-400 " : "text-black border-b border-gray-500"}  to={"/main/products"}>Product</NavLink>
      
      </div>
    </div>
  )
}

export default Navbar
