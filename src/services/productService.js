const BASE_URL = 'https://fakestoreapi.com';


// Fetches the list of products from the Fake Store API.
export async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error(`Failed to fetch products (status ${response.status})`);
    }
    return response.json();
}


// Fetches the list of product categories from the Fake Store API.

export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`)

  if (!response.ok) {
    throw new Error(`Failed to load categories (status ${response.status})`)
  }

  return response.json()
}


// Fetches the list of products in a specific category from the Fake Store API.

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to load product ${id} (status ${response.status})`)
  }

  return response.json()
}