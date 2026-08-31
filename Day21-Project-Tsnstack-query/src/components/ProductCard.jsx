import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-700 transition-all duration-300">

      {/* Image Section */}
      <div className="relative h-64 bg-gray-800 flex items-center justify-center p-6">

        {/* Discount */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          -{product.discountPercentage}%
        </span>

        {/* Stock */}
        <span className="absolute top-4 right-4 bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
          {product.availabilityStatus}
        </span>

        {/* Image */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-purple-400 font-semibold capitalize">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-400 mt-2">
          Brand:{" "}
          <span className="text-gray-200 font-medium">
            {product.brand}
          </span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-yellow-400 text-lg">★</span>

          <span className="text-white font-semibold">
            {product.rating}
          </span>

          <span className="text-gray-500 text-sm">
            ({product.reviews.length} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Price
            </p>

            <h3 className="text-2xl font-bold text-white">
              ${product.price}
            </h3>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-xs text-gray-500 mb-1 text-center">
              Quantity
            </p>

            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">

              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="w-9 h-9 bg-gray-800 text-white hover:bg-gray-700 text-lg"
              >
                −
              </button>

              <span className="w-10 text-center text-white font-semibold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-9 h-9 bg-gray-800 text-white hover:bg-gray-700 text-lg"
              >
                +
              </button>

            </div>
          </div>
        </div>

        {/* Shipping */}
        <p className="text-sm text-gray-400 mt-4">
          🚚 {product.shippingInformation}
        </p>

        {/* Add To Cart */}
        <button
          className="w-full mt-5 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;