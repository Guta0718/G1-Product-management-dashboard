/*
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

*/

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, price, image, category, description } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg hover:shadow-ink/5">
      <Link
        to={`/products/${id}`}
        className="flex h-48 items-center justify-center bg-sand p-6"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-medium text-cobalt">
          {category}
        </span>

        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-ink">
          <Link to={`/products/${id}`} className="hover:text-cobalt">
            {title}
          </Link>
        </h3>

        <p className="line-clamp-2 text-sm text-ink/60">{description}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-lg font-semibold text-ink">
            ${price.toFixed(2)}
          </span>
          <Link
            to={`/products/${id}`}
            className="rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
