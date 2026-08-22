import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen flex   p-2 grid
    grid-cols-[1fr_8fr]'> 
      <Navbar />

   <div>
      <Outlet/>
  
  </div>    
  
  </div>
  )
}

export default MainLayout
