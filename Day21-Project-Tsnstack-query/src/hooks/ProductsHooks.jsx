import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getProductApiData } from "../api/productApi";
export const useProductApi = () =>{

  const [filterProduct ,setFilderProducts] = useState(null)

  console.log(filterProduct);

  let {data ,isPending ,error} = useQuery({

  queryKey:['products'],
  queryFn:getProductApiData,
  // staleTime: Infinity
  staleTime: 5000

})



useEffect(()=>{
  
setFilderProducts(data)

},[data])
return {
  isPending,
  data,
  error,
  filterProducts,
  filterProduct
}
}

export const useProducts = () => {
  
const [productData , setProductData] = useState([]);

const [isLoding ,setIsLoding] = useState(true);

const [filterProduct,setFilderProducts] = useState([]);


let getProduct = async ()=>{

  let data = await getProductApiData();
  setProductData(data);
  setFilderProducts(data);
  setIsLoding(false)

}


let filterProducts = (searchParams) =>{
  let filterData = productData.filter((val)=>val.title.toLowerCase().includes(searchParams.toLowerCase()))

if (filterData) {
  setFilderProducts(filterData)
  
}
}

useEffect(()=>{
getProduct();

},[])
return{
  productData,
  setProductData,
  isLoding,
  setIsLoding,
  filterProduct,
  setFilderProducts,
  filterProducts,
  

}
}