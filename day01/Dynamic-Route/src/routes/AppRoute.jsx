import { Route, Routes } from 'react-router'
import React from 'react'
import Home from "../pages/Home"
import Aboute from "../pages/About"
import Prduct from "../pages/Products"
import ProductDetail from '../pages/ProductDetail'
const AppRoute = () => {
 
  return (
    <div>
      <Routes>
  <Route path='/'  element={<Home/>}/>
  <Route path='/aboute'  element={<Aboute/>}/>
  <Route path='/Products'  element={<Prduct/>}/>

 <Route path='/detail/:id'  element={<ProductDetail/>}/>

 </Routes>
    </div>
   )
}

export default AppRoute
