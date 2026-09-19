import React from 'react'
import { createBrowserRouter, RouterProvider}
 from "react-router"
import AuthLayoute from '../layouts/AuthLayoute'
import DashbordLayot from '../layouts/DashbordLayot'
import Login from '../../features/auth/ui/pages/Login'
import Ragister from '../../features/auth/ui/pages/Ragister'
import Home from '../../features/dashbord/ui/pages/Home'
const appRoter = () => {

  let router = createBrowserRouter([
  {
    path:"/",
    element:<AuthLayoute/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"ragister",
        element:<Ragister/>
      }
    ]
  },

  {
    path:"/home",
    element:<DashbordLayot/>,
  children:[
    {
      path:"",
      element:<Home/>
    }
  ]
  }

  ])

  return <RouterProvider router={router} />
}

export default appRoter
