import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

  const {user} = useSelector((store)=>store.auth)

  console.log("././././././." , user)

  if (!user) {
    <Navigate to={"/"} />
  }




  return ( <Outlet/>


  )
}

export default MainProtected
