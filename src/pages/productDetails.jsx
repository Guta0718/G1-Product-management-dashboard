import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService.js";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | error

  const loadProduct = () => {
    setStatus("loading");
    getProductById(id)
      .then((data) => {
        // Fake Store API returns null (with a 200) for an id that doesn't exist
        if (!data) {
          setStatus("error");
          return;
        }
        setProduct(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(() => {
    loadProduct();
    // Re-run whenever the id in the URL changes (e.g. navigating from one
    // product's page straight to another via browser history).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container-page py-14">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 text-sm font-medium text-ink/60 hover:text-ink"
      >
        ← Back
      </button>

      {status === "loading" && <LoadingState message="Loading product..." />}

      {status === "error" && (
        <ErrorState
          message="Something went wrong. Please try again."
          onRetry={loadProduct}
        />
      )}

      {status === "success" && product && (
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-sand p-12">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 w-full object-contain mix-blend-multiply"
            />
          </div>

          <div>
            <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-medium capitalize text-cobalt">
              {product.category}
            </span>

            <h1 className="mt-4 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {product.title}
            </h1>

            {product.rating && (
              <p className="mt-2 text-sm text-ink/50">
                {product.rating.rate} / 5 · {product.rating.count} reviews
              </p>
            )}

            <p className="mt-6 font-display text-3xl font-semibold text-ink">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
              >
                Add to cart
              </button>
              <Link
                to="/products"
                className="text-sm font-medium text-ink/70 hover:text-ink"
              >
                Continue browsing
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
