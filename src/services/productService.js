const BASE_URL = "https://dummyjson.com";

// Fetches the list of products from DummyJSON.
export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products?limit=30`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products (status ${response.status})`);
  }
  const data = await response.json();
  return data.products ?? [];
}

// Fetches the list of product categories from DummyJSON.
export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error(`Failed to load categories (status ${response.status})`);
  }

  const data = await response.json();
  return data.map((item) => item.slug);
}

// Fetches a single product by id from DummyJSON.
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to load product ${id} (status ${response.status})`);
  }

  return response.json();
}
