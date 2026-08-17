import React from 'react'
import {createBrowserRouter ,RouterProvider} from "react-router"
import AuthLayout from '../layoutes/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RagistePage'
import MainLayout from '../layoutes/MainLayout'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {

  let router =createBrowserRouter([
    {
      path:'/',
      element : <AuthLayout/>,
      children:[
        {
          path:"",
          element:<LoginPage/>
        },
        {
          path:"register",
          element:<RegisterPage/>
        }
      ]

    },
    {
      path:'/main',
      element:<ProtectedRoute/>,
      children:[
        {
          path:"",
        element:<MainLayout/>
        }
      ]
    }

  ])

  return (

    <RouterProvider router={router}/>
  
  )
}

export default AppRoutes
