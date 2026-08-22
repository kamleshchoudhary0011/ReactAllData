import React from 'react'
import {createBrowserRouter ,RouterProvider} from "react-router"
import AuthLayout from '../layoutes/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RagistePage'
import MainLayout from '../layoutes/MainLayout'
import ProtectedRoute from './ProtectedRoute'
import PublickRoute from './PublicRoute'
import Navbar from '../component/Navbar'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import Product from '../pages/Product'

const AppRoutes = () => {

  let router =createBrowserRouter([
    {
      path:'/',
      element:<PublickRoute/>,

      children:[
        {
          path:'',
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
        }
      ]
      

    },
    {
      path:'/main',
      element:<ProtectedRoute/>,
      children:[
        {
          path:"",
        element:<MainLayout/>,
        children:[

          {
            path:"",
            element:<HomePage/>
          },
          {
            path:"users",
            element:<UserPage/>


          },
          {
            path:"products",
            element:<Product/>
          }
        ]



        }
        
        
      ]


    }

  ])

  return (

    <RouterProvider router={router}/>
  
  )
}

export default AppRoutes
