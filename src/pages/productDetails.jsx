import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { getProductById } from "../services/productService";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProductById(id);
      setProduct(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        if (!cancelled) {
          setProduct(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError("Failed to load product.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <LoadingState message="Loading product..." />;
  }

  if (error) {
    return (
      <main className="container-page py-10">
        <ErrorState message={error} onRetry={loadProduct} />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="container-page py-10">
        <p className="text-center text-ink/60">
          Product not found.
        </p>
      </main>
    );
  }

  return (
    <main className="container-page py-10">
      <Link
        to="/products"
        className="mb-8 inline-block rounded-full border border-ink px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        ← Back to Products
      </Link>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-sand p-10">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 w-full object-contain mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-medium text-cobalt">
            {product.category}
          </span>

          <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
            {product.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-ink">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-4 text-ink/60">
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </p>

          <p className="mt-6 leading-7 text-ink/70">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;