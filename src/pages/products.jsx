import { useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { useProducts } from "../hooks/useProducts.js";

function Products() {
  const { data, isLoading, isError } = useProducts();
  const products = data ?? [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Products
          </h1>
          <p className="mt-2 text-ink/60">Browse all available products.</p>
        </div>
        <LoadingState message="Loading products..." />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Products
          </h1>
          <p className="mt-2 text-ink/60">Browse all available products.</p>
        </div>
        <ErrorState message="Failed to load products." />
      </main>
    );
  }

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
      <div className="mb-8">
        <h1 className="font-display text-4xl font-semibold text-ink">
          Products
        </h1>
        <p className="mt-2 text-ink/60">Browse all available products.</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter
          category={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {products.length === 0 && (
        <p className="py-16 text-center text-ink/60">No products found.</p>
      )}

      {products.length > 0 && filteredProducts.length === 0 && (
        <p className="py-16 text-center text-ink/60">
          No products match your search or category.
        </p>
      )}

      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Products;
