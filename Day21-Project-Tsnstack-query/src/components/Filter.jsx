import React from 'react'
import { useProductApi } from '../hooks/ProductsHooks'

const Filter = ({filterProducts}) => {

  // let {filterProducts} = useProductApi()


  return (
   <div className='p-3 gap-8 border flex  items-center'>
     <div className='flex gap-8'>
      <input
      onChange={(e)=>filterProducts(e.target.value)} className='p-2 outline-0 border border-2 rounded-md' type="text" placeholder='Search Products..' />
      <button  className='pl-5 pr-5 bg-white text-black rounded border-0'>Search</button>
      
    </div>

    <div className=' flex  gap-3 justify-center items-center '>

        <span className='font-bold p-3  text-white text-3xl'>Select categry</span>
      <select  className='text-2xl font-bold text-green-400 border border-2 rounded-2xl p-1 border-yellow-500' >
        <option className='text-black'value="groceries">-----</option> 
        <option className='text-black'value="groceries">Groceries</option>
        <option className='text-black'value="beauty">Beauty</option>
        <option className='text-black'value="furniture">Furniture</option>
      </select>
    </div>
   </div>

  )
}

export default Filter
