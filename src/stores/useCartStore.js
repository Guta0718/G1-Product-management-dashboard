import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "nexus-cart",
      version: 1,
      migrate: (persisted) => {
        if (!persisted) return persisted;
        if (Array.isArray(persisted.items) && !persisted.cart) {
          const { items, ...rest } = persisted;
          return { ...rest, cart: items };
        }
        return persisted;
      },
    },
  ),
);

export const selectCart = (state) => state.cart;

export const selectTotalItems = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectSubtotal = (state) =>
  state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
