import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "../services/productService.js";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    enabled: Boolean(id),
  });
}
