import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='p-2 min-h-screen bg-black text-white'>
      MainLayout

<Navbar/>

<div>

<Outlet className="p-4"/>
</div>

    </div>
  )
}

export default MainLayout
