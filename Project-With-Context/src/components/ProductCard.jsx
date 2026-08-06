import React, { useContext } from 'react'
import { MyStore } from '../contexts/MyContexts';

const ProductCard = ({cardItem,isInCard}) => {

  let {setcardItems} = useContext(MyStore)


  const addToCard = () =>{

   setcardItems((prev)=> [...prev ,cardItem])
   alert("product added into card")
}

  return(

  
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={cardItem.image}
          alt={cardItem.title}
          className="h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full capitalize">
          {cardItem.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {cardItem.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {cardItem.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{cardItem.rating.rate}</span>
            <span className="text-gray-400">
              ({cardItem.rating.count})
            </span>
          </div>

          <h3 className="text-2xl font-bold text-green-600">
            ${cardItem.price}
          </h3>
        </div>

        {/* Button */}
       {
        isInCard?<button><span>1xvcvx</span></button>: <button onClick={addToCard} className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition">
          Add to Cart
        </button>
       }

      </div>
    </div>
     

    
  );
};

export default ProductCard