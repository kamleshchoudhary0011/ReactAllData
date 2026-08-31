// import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard"
import ProductCardSkeleton from '../components/ProductCardScleton';
import { useProductApi, useProducts } from "../hooks/ProductsHooks";


const Shop =  () => {
//   const [rerendar , setRerendor] = useState(true);
 
// let {isPending ,data, error ,filterProduct } = useProductApi();


// if (error)return <h1>{error.message}</h1>'


const { productData,
  setProductData,
  isLoding,
  setIsLoding,
  filterProduct,
  setFilderProducts,
  filterProducts,
} = useProducts();

  return(<>
  {/* <Filter setRerendor={setRerendor}/> */}
  <Filter className="" filterProducts={filterProducts} />
    {isLoding ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 30 }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {filterProduct?.map((product) => (
      <ProductCard key={product.id} product={product} 
      />
    ))}
  </div>
)}
</>
  )
}

export default Shop
