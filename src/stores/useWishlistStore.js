import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      addToWishlist: (product) =>
        set((state) => {
          const alreadySaved = state.wishlist.some(
            (item) => item.id === product.id,
          )
          if (alreadySaved) return state
          return { wishlist: [...state.wishlist, product] }
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),

      toggleWishlist: (product) => {
        const isSaved = get().wishlist.some((item) => item.id === product.id)
        if (isSaved) {
          get().removeFromWishlist(product.id)
        } else {
          get().addToWishlist(product)
        }
      },

      clearWishlist: () => set({ wishlist: [] }),
    }),
    { name: 'nexus-wishlist' },
  ),
)

export const selectWishlist = (state) => state.wishlist

export const selectWishlistCount = (state) => state.wishlist.length

export const selectIsInWishlist = (id) => (state) =>
  state.wishlist.some((item) => String(item.id) === String(id))
