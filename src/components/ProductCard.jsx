function ProductCard({ product }) {
  return (
    <div className=" p-5 shadow-sm bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="font-semibold text-lg">
        {product.title}
      </h2>
      <p className="text-lg font-bold mt-2">
        {product.price} ETB
      </p>
      <p className="text-sm text-gray-500 mt-1">
        ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
      </p>
      <p className="text-sm text-gray-600 mt-2">
        {product.description}
      </p>
      <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded">
        View Details
      </button>
    </div>
  );
}
export default ProductCard;