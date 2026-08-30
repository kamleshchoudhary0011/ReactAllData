import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({Product}) => {
let navigate = useNavigate()

return (
   
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      
      {/* Product Image */}
      <div onClick={()=>navigate(`/detail/:${Product.id}`)
      } className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={Product.image}
          alt={Product.title}
          className="h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full capitalize">
          {Product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {Product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {Product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{Product.rating.rate}</span>
            <span className="text-gray-400">
              ({Product.rating.count})
            </span>
          </div>

          <h3 className="text-2xl font-bold text-green-600">
            ${Product.price}
          </h3>
        </div>

        {/* Button */}
       
        <button><span>1xvcvx</span></button>: <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition">
          Add to Cart
        </button>
       

      </div>
    </div>
     
  )
}

export default ProductCard
