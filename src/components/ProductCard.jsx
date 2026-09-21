function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
    </div>
  );
}
export default ProductCard;