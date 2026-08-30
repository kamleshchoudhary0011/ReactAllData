import React, { useContext } from 'react'
import { Outlet ,Navigate} from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {

  const {loggedUser} = useContext(Auth);

  if (!loggedUser) {
    
    return <Navigate to={"/"}/>
    
  }
  return (
    <div>
      <Outlet/>
      
    </div>
  )
}

export default ProtectedRoute
