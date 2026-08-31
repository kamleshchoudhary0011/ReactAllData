import React from 'react'
import { NavLink } from 'react-router'
import {LogOut} from "lucide-react"


const Navbar = () => {
  return (
    <div className=' flex justify-between  p-4 items-center '>
      <h1>Sky Dark</h1>

      <div className=' flex gap-8 text-xl'>
        <NavLink className={({isActive})=>{
          return  isActive? "text-yellow-500  pl-1 pr-1 border  font-bold " :" "
        }} to={"/main"} end>Home</NavLink>
        <NavLink className={({isActive})=>{
          return  isActive? "text-yellow-500  pl-1 pr-1 border  font-bold " :" "
        }} to={"/main/shop"}>Shop</NavLink>
        <NavLink className={({isActive})=>{
          return  isActive? "text-yellow-500  pl-1 pr-1 border  font-bold " :" "
        }} to={"/main/about"}>About</NavLink>
      </div>

      <div className='flex gap-9 items-center '> 
        <h1 className=' flex gap-1 text-xl'>Hev <strong className='text-red-500 '> Dev</strong></h1>
      <button> Card </button>
      <LogOut className='cursor-pointer' size={10}/>
      </div>
      
    </div>
  )
}

export default Navbar
