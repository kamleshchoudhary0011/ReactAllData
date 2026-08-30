import React from 'react'

const Navbar = ({setIsCardOpen}) => {
  return (
    <div className=" flex justify-between bg-amber-200 p-5 ">
      
      <div> logo</div>
       <div className=' flex gap-10 text'>
        <p onClick={()=>{ setIsCardOpen(false)}} className='cursor-pointer'>Home</p>
        <p onClick={()=>{ setIsCardOpen(true)}} className='cursor-pointer'>Card</p>
       </div>
       <button>Logim</button>
    </div>
  )
}

export default Navbar
