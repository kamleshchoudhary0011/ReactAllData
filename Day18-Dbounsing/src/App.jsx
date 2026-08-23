import axios from "axios"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [searchData , setSearchData] = useState(null);


  const [productData , setProductData ] = useState([]);
  // console.log(productData)

  let getProducts = async() =>{
    let res = await axios.get("https://fakestoreapi.com/products")

    setProductData(res.data);

  }

  let filterData = () =>{
    let result = productData.filter((val)=>{
      return  val.title.toLowerCase().includes(searchData.toLowerCase()) 
    })
    // setProductData(result);
     console.log("//////////////",result);
  }

  /// debouncing result hear 
    useEffect(()=>{
    if (!searchData)  return
   
   let timeOut =  setTimeout(()=>{
    filterData();
    },7000)
    
    return() =>{
      clearTimeout(timeOut);
    }
  }, [searchData])
  
  
  useEffect(()=>{

    
    getProducts();
    
  }, [])
  

  return (
    <>
      hy 
   <p>{searchData}</p>
       <input type="text" name="" id="" placeholder="serch Products" onChange={(e)=>{
            setSearchData(e.target.value);


       }} />

      {
        productData.map((val)=>{
          return <p key={val.id}>{val.title}</p>

        })
      }
    </>
  )
}

export default App
