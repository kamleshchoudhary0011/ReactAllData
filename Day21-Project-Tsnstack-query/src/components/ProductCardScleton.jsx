import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">

      {/* Image Skeleton */}
      <div className="relative h-64 bg-gray-800 flex items-center justify-center p-6">

        {/* Discount Skeleton */}
        <div className="absolute top-4 left-4 w-14 h-6 bg-gray-700 rounded-full"></div>

        {/* Stock Skeleton */}
        <div className="absolute top-4 right-4 w-20 h-6 bg-gray-700 rounded-full"></div>

        {/* Image */}
        <div className="w-40 h-48 bg-gray-700 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <div className="w-16 h-4 bg-gray-700 rounded"></div>

        {/* Title */}
        <div className="mt-3 space-y-2">
          <div className="w-full h-5 bg-gray-700 rounded"></div>
          <div className="w-3/4 h-5 bg-gray-700 rounded"></div>
        </div>

        {/* Brand */}
        <div className="mt-3 w-32 h-4 bg-gray-700 rounded"></div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-5">
          <div className="w-5 h-5 bg-gray-700 rounded"></div>
          <div className="w-10 h-4 bg-gray-700 rounded"></div>
          <div className="w-20 h-4 bg-gray-700 rounded"></div>
        </div>

        {/* Price + Quantity */}
        <div className="flex items-center justify-between mt-5">

          {/* Price */}
          <div>
            <div className="w-10 h-3 bg-gray-700 rounded mb-2"></div>
            <div className="w-20 h-7 bg-gray-700 rounded"></div>
          </div>

          {/* Quantity */}
          <div>
            <div className="w-16 h-3 bg-gray-700 rounded mb-2"></div>

            <div className="flex border border-gray-700 rounded-lg overflow-hidden">
              <div className="w-9 h-9 bg-gray-800"></div>
              <div className="w-10 h-9 bg-gray-700"></div>
              <div className="w-9 h-9 bg-gray-800"></div>
            </div>
          </div>

        </div>

        {/* Shipping */}
        <div className="mt-4 w-48 h-4 bg-gray-700 rounded"></div>

        {/* Add Cart Button */}
        <div className="w-full h-12 bg-gray-700 rounded-xl mt-5"></div>

      </div>
    </div>
  );
};

export default ProductCardSkeleton;