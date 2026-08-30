import React, { useContext, useEffect } from 'react'
import axiox from "axios"
import { MyStore } from '../context/MyContex'
import ProductCard from '../component/ProductCard'
const Home = () => {
  let {ProductDate , setProductDate} = useContext(MyStore)

  // console.log(ProductDate  )

  const getProductData = async() =>{
 let res = await axiox.get("https://fakestoreapi.com/products");

setProductDate(res.data)    
  }


  useEffect(()=>{

   getProductData()

  },[])


  return (
    <div>
{ProductDate.map((val) =>{
  
 return <ProductCard key={val.id} Product={val} />

}
 )}
    </div>
  )
}

export default Home
