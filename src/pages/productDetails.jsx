import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";
import { useCartStore } from "../stores/useCartStore.js";
import WishlistButton from "../components/WishlistButton.jsx";
import {
  selectIsInWishlist,
  useWishlistStore,
} from "../stores/useWishlistStore.js";
import { useProduct } from "../hooks/useProducts.js";
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading, isError } = useProduct(id);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const addToCart = useCartStore((s) => s.addToCart);
  const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
  const saved = useWishlistStore(selectIsInWishlist(id));

  return (
    <div className="container-page py-14">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 text-sm font-medium text-ink/60 hover:text-ink"
      >
        ← Back
      </button>

      {isLoading && <LoadingState message="Loading product..." />}

      {isError && (
        <ErrorState message="Something went wrong. Please try again." />
      )}

      {!isLoading && !isError && product && (
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center rounded-2xl bg-sand p-12">
            <img
              src={
                product.thumbnail ??
                product.images?.[0] ??
                product.image ??
                ""
              }
              alt={product.title}
              className="max-h-96 w-full object-contain mix-blend-multiply"
            />
            <WishlistButton
              saved={saved}
              onClick={() => toggleWishlist(product)}
              className="absolute right-4 top-4"
            />
          </div>

          <div>
            <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-medium capitalize text-cobalt">
              {product.category}
            </span>

            <h1 className="mt-4 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {product.title}
            </h1>

            {product.rating != null && (
              <p className="mt-2 text-sm text-ink/50">
                {product.rating} / 5 · {product.reviews?.length ?? 0} reviews
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
                onClick={() => {
                  addToCart(product);
                  setAddedFeedback(true);
                  window.setTimeout(() => setAddedFeedback(false), 2000);
                }}
              >
                Add to cart
              </button>
              {addedFeedback && (
                <span className="text-sm font-medium text-sage">
                  Added —{" "}
                  <Link to="/cart" className="underline hover:text-ink">
                    View cart
                  </Link>
                </span>
              )}
              <Link
                to="/wishlist"
                className="text-sm font-medium text-ink/70 hover:text-ink"
              >
                View wishlist
              </Link>
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
