import React, { useContext } from 'react'
import { MyStore } from '../contexts/MyContexts'

const Navbar = () => {
let {setIsCardOpen} = useContext(MyStore)

  return (
    <div className='bg-amber-300 rouded p-5 flex items-center justify-between'>
      <div className=' '> Logo</div>
      <div className='flex flex-wrap font-bold gap-5 p-1'>
        <p onClick={()=>setIsCardOpen(false)} className='cursor-pointer'> Home </p>
        <p onClick={()=>setIsCardOpen(true)}>Card</p>
      </div>
      <div>Login</div>
    </div>
  )
}

export default Navbar
