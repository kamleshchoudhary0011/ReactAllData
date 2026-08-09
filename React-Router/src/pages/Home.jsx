import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
Home
Home
{/* CHILD ROUT KO EXEPT KRNE KE LEYE AIK CONTAINER BNANA PDTA HAI JESE <Outlet/> NESTEDT CHAILD COMPONENT   */}
<Outlet/>
    </div>
  )
}

export default Home
