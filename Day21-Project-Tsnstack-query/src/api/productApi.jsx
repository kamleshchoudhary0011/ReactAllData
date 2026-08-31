import { axiosInstance } from "../config/axiosInstans";

export let getProductApiData = async()=>{

  try {
    let res = await axiosInstance.get('/products');
   
       return res.data.products
  // console.log(res.data.products);
      
    
  } catch (error) {
    console.log("error in product api ", error)
  } 


}
///// only api colling functions 