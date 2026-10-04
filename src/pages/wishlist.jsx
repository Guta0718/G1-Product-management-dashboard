import { Link } from 'react-router-dom'
import { useCartStore } from '../stores/useCartStore.js'
import {
  selectWishlist,
  selectWishlistCount,
  useWishlistStore,
} from '../stores/useWishlistStore.js'

function Wishlist() {
  const wishlist = useWishlistStore(selectWishlist)
  const count = useWishlistStore(selectWishlistCount)
  const removeFromWishlist = useWishlistStore((s) => s.removeFromWishlist)
  const clearWishlist = useWishlistStore((s) => s.clearWishlist)
  const addToCart = useCartStore((s) => s.addToCart)

  if (wishlist.length === 0) {
    return (
      <div className="container-page py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Wishlist</h1>
        <div className="mt-10 rounded-2xl border border-ink/10 bg-white px-6 py-16 text-center">
          <p className="text-ink/60">You have not saved any items yet.</p>
          <Link
            to="/products"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Browse products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-page py-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Wishlist</h1>
          <p className="mt-3 text-ink/60">
            {count} saved {count === 1 ? 'item' : 'items'}.
          </p>
        </div>
        <button
          type="button"
          onClick={clearWishlist}
          className="text-sm font-medium text-ink/60 hover:text-coral"
        >
          Clear wishlist
        </button>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <li
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
          >
            <Link
              to={`/products/${item.id}`}
              className="flex h-44 items-center justify-center bg-sand p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </Link>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-medium capitalize text-cobalt">
                {item.category}
              </span>
              <h2 className="line-clamp-2 text-base font-semibold">
                <Link to={`/products/${item.id}`} className="hover:text-cobalt">
                  {item.title}
                </Link>
              </h2>
              <p className="font-display text-lg font-semibold">
                ${item.price.toFixed(2)}
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-sm font-medium text-ink/50 hover:text-coral"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Wishlist
