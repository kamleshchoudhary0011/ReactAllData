import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav className='p-4'>
        navbar
      </nav>,

      <Outlet/>
    </div>
  )
}

export default MainLayout
