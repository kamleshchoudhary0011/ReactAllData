import React from 'react'

const Card = ({cardItem}) => {
  console.log(cardItem.title);
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border">

      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={cardItem.image}
          alt={cardItem.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
          {cardItem.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-3 line-clamp-2">
          {cardItem.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {cardItem.description}
        </p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-2xl font-bold text-green-600">
            ${cardItem.price}
          </h3>

          <div className="text-yellow-500 font-medium">
            {/* ⭐ {cardItem.rating.rate} */}
            <span className="text-gray-500 text-sm">
              {""}
              {/* ({cardItem.rating.count}) */}
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Add To Cart
        </button>

      </div>
    </div>
  );

}

export default Card
