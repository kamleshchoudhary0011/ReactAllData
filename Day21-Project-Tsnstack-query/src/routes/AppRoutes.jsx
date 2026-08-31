import React, { useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RagisterPage from '../pages/RagisterPage'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../Feature/AuthSlice'
import PublicProtected from './Protected/PublicProtected'
import MainProtected from './Protected/MainProtected'
import Shop from '../pages/Shop'
import About from '../pages/About'

const AppRoutes = () => {

  const Dispatch = useDispatch();


  const hydretUser  = () =>{


    console.log("hydration Processd...")

    const  logdinUser  = JSON.parse(localStorage.getItem("logdInUser"));

    if (!logdinUser) {
      toast.error("UnAuthorize user");

      return;

      
    }
    Dispatch(addUser(logdinUser))



  };

  useEffect(()=>{
hydretUser();

  }, [])




  let router = createBrowserRouter([
    {
      path:"/", 
      element:<PublicProtected/>,
      children:[
        {
          path:"",
       element:<AuthLayout/>,
      children:[
      {
        path:"",
        element:<LoginPage/>
      },
      {
        path:"register",
        element: <RagisterPage/>
      }

      ]

        }
      ]
     
    },
    {
      path:"/main",
      element:<MainProtected/>,
      children:[
        {
          path:"",
           element:<MainLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"shop",
          element:<Shop/>

        },
        {
          path:"about",
          element:<About/>

        },
        {

        }
      ]
        }
        
      ]

     
    }
  ])



  return <RouterProvider router={router} />
}

export default AppRoutes
