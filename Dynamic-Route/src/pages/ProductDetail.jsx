import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const productDetail = () => {

  const [singalProductdata , setSingalProductdata] = useState({})
  let {id} = useParams();


  console.log(singalProductdata.title)
  let getSingaleProduct = async ()=>{

    try {

      let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      

      setSingalProductdata(res.data)


    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  getSingaleProduct();

},[])
  return (<>
  
  
  </>
    
  )
}

export default productDetail
