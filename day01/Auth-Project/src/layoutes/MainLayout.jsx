import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      Hay main system
      <Outlet/>
    </div>
  )
}

export default MainLayout
