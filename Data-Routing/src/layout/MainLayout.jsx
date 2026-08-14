import React from 'react'
import Navebare from '../compoment/Navebare'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navebare/>
      <Outlet/>
      
    </div>
  )
}

export default MainLayout
