import './App.css'
import axios from "axios"
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useContext, useEffect, useState } from 'react';
import CardScreen from './pages/CardScreen';
import { MyStore} from "./contexts/MyContexts"

function App() {
const [productData , setProductData] = useState([]);
  
let {isCardOpen , setsetIsCardOpen,cardItems , setcardItems} = useContext(MyStore)


  //  console.log()

 const  getProductsData = async () =>{

  try {
    
    let res = await axios.get("https://fakestoreapi.com/products");

    setProductData(res.data)
     

} catch (error) {
    console.log(error)
  }

 } 


 useEffect(()=>{
 getProductsData();

 },[])


 return (
    <>
<Navbar className="h-screen , p-2"/>


<div className=' grid grid-4 gap-3'>

{

isCardOpen?(<div>

  <CardScreen  />
</div>):
<div>
{
  productData.map((elem )=>{

    let isInCard = cardItems.find((val)=>{
val.id ===  elem.id   })


    return <ProductCard setcardItems={setcardItems} key={elem.id} cardItem={elem}  isCardOpen={isInCard}/>
      
  })
}
</div>


}




</div>



    </>
  )
}

export default App
