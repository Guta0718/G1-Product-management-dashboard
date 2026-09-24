import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { getAllProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();

        if (!cancelled) {
          setProducts(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError("Failed to load products.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl font-semibold text-ink">
          Products
        </h1>

        <p className="mt-2 text-ink/60">
          Browse all available products.
        </p>
      </div>

      {/* Search + Category Filter */}
      {!loading && !error && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <CategoryFilter
            category={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      )}

      {/* Loading */}
      {loading && (
        <LoadingState message="Loading products..." />
      )}

      {/* Error */}
      {!loading && error && (
        <ErrorState
          message={error}
          onRetry={loadProducts}
        />
      )}

      {/* No products */}
      {!loading && !error && products.length === 0 && (
        <p className="py-16 text-center text-ink/60">
          No products found.
        </p>
      )}

      {/* No matching products */}
      {!loading &&
        !error &&
        products.length > 0 &&
        filteredProducts.length === 0 && (
          <p className="py-16 text-center text-ink/60">
            No products match your search or category.
          </p>
        )}

      {/* Products */}
      {!loading &&
        !error &&
        filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
    </main>
  );
}

export default Products;
