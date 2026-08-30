function ProductCard({ product , setCardItems}) {
  return (
    <div className="bg-white  rounded-xl shadow-md hover:shadow-xl transition-all  duration-300 overflow-hidden border">

      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex  items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">

        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="text-lg font-semibold mt-3 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            ⭐
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button onClick={()=> setCardItems((prev) => [...prev , product] )} className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;