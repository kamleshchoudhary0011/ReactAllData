import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import PublicProtected from './Protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../feature/auth/ui/pages/LoginPage'
import RagisterPage from '../feature/auth/ui/pages/RagisterPage'
import MainProted from './Protected/MainProted'
import HomePage from '../shared/ui/pages/HomePage'
import MainLayout from '../app/layout/MainLayout'
import ProductPage from '../feature/products/ui/pages/ProductPage'
import CardPage from '../feature/card/ui/pages/CardPage'
import OrderPage from '../feature/order/ui/pages/OrderPage'

function AppRoute() {

  let router = createBrowserRouter([

    {
      path:'/',
      element:<PublicProtected/>,
      children:[
        {
          path:"",
          element:<AuthLayout/>,
          children:[
             {
               path:"",
               element:<LoginPage/>
             }  ,{
              path:"register",
              element:<RagisterPage/>
             }         
         ]
        }
      ]
    },
    {
      path:"/main",
      element:<MainProted/>,
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
              path:"product",
              element:<ProductPage/>
            },
            {
              path:"cart",
              element:<CardPage/>
            },
            {
              path:"ordar",
              element:<OrderPage/>
            },
            

        
          ]        
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoute
