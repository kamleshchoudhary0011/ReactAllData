import React, { useContext } from 'react'
import { MyStore } from '../contexts/MyContexts'

const CardCard = () => {

  let {cardItems} = useContext(MyStore)
// cardItems={cardItems}
  return (
    <div>


        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">

      {/* cardItems Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={cardItems.image}
          alt={cardItems.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* cardItems Details */}
      <div className="p-4">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full capitalize">
          {cardItems.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {cardItems.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {cardItems.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">⭐</span>
          {/* <span className="ml-1 font-medium">{cardItems.rating.rate}</span> */}
          {/* <span className="text-gray-400 ml-2">
            ({cardItems.rating.count} Reviews)
          </span> */}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${cardItems.price}
          </h3>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            Add Cart
          </button>
        </div>

      </div>
    </div>      


    </div>
  )
}

export default CardCard
