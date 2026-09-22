import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService.js";
import ProductCard from "../components/ProductCard.jsx";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";

function Home() {
  const [featured, setFeatured] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadFeatured = () => {
    setStatus("loading");
    getAllProducts()
      .then((data) => {
        setFeatured(data.slice(0, 4));
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(() => {
    loadFeatured();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Electronics, jewelry, and clothing — all in one place, all in
              stock.
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/60">
              Nexus Store brings together electronics, jewelry and clothing in
              one simple dashboard browse, search and filter functionalities.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/products"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
              >
                Browse products
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-ink/70 hover:text-ink"
              >
                Our story
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-cobalt/5" />
            <div className="grid grid-cols-2 gap-4">
              {featured.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-sand p-6"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
              {status !== "success" &&
                Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square animate-pulse rounded-2xl bg-sand"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured products
          </h2>
          <Link
            to="/products"
            className="text-sm font-medium text-cobalt hover:underline"
          >
            View all
          </Link>
        </div>

        {status === "loading" && (
          <LoadingState message="Loading featured products..." />
        )}
        {status === "error" && (
          <ErrorState
            message="Something went wrong. Please try again."
            onRetry={loadFeatured}
          />
        )}
        {status === "success" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
