const BASE_URL = 'https://dummyjson.com';

// Fetches the list of products from DummyJSON.
export async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error(`Failed to fetch products (status ${response.status})`);
    }
    const data= await response.json();
    return data.products;
}

// Fetches the list of product categories from DummyJSON.
export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error(`Failed to load categories (status ${response.status})`);
  }

  return response.json();
}

export async function getProductsByCategory(category) {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
        throw new Error(`Failed to load category ${category} (status ${response.status})`);
    }
    const data = await response.json();
    return data.products;
}

// Fetches the list of products in a specific category from the Fake Store API.

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to load product ${id} (status ${response.status})`);
  }

  return response.json();
}
