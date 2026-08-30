import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import Home from '../pages/Home'
import Aboute from '../pages/Aboute'
import Services from '../pages/Services'
import MainLayout from '../layout/MainLayout'

const AppRoute = () => {

  let router = createBrowserRouter([
    {
      path : "/",
      element:<MainLayout/>,
   children :[
      {

      path:"",
      element:<Home/>

    },

     {

      path:"aboute",
      element:<Aboute/>

    },
    {
      path:"services",
      element:<Services/>

    },

   ]

    }
    

  ])




  return <RouterProvider router={router} />
}

export default AppRoute
