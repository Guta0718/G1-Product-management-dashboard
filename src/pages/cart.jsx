import { Link } from 'react-router-dom'
import {
  selectCart,
  selectSubtotal,
  selectTotalItems,
  useCartStore,
} from '../stores/useCartStore.js'

function Cart() {
  const cart = useCartStore(selectCart)
  const totalItems = useCartStore(selectTotalItems)
  const subtotal = useCartStore(selectSubtotal)
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const increaseQuantity = useCartStore((s) => s.increaseQuantity)
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity)
  const clearCart = useCartStore((s) => s.clearCart)

  if (cart.length === 0) {
    return (
      <div className="container-page py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
        <div className="mt-10 rounded-2xl border border-ink/10 bg-white px-6 py-16 text-center">
          <p className="text-ink/60">Your cart is empty.</p>
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

  const estimatedShipping = subtotal >= 50 ? 0 : 5.99
  const total = subtotal + estimatedShipping

  return (
    <div className="container-page py-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
          <p className="mt-3 text-ink/60">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} ready for checkout.
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-ink/60 hover:text-coral"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="flex flex-col gap-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 sm:flex-row sm:items-center"
            >
              <Link
                to={`/products/${item.id}`}
                className="flex h-24 w-full shrink-0 items-center justify-center rounded-xl bg-sand p-4 sm:h-28 sm:w-28"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium capitalize text-cobalt">
                  {item.category}
                </span>
                <h2 className="mt-1 line-clamp-2 text-base font-semibold text-ink">
                  <Link to={`/products/${item.id}`} className="hover:text-cobalt">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-2 font-display text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:flex-col sm:items-end">
                <div className="flex items-center rounded-full border border-ink/15">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <span className="min-w-[2rem] text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="text-sm font-medium text-ink">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm font-medium text-ink/50 hover:text-coral"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-ink/10 bg-white p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-ink/70">
              <dt>Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-ink/70">
              <dt>Shipping</dt>
              <dd>
                {estimatedShipping === 0
                  ? 'Free'
                  : `$${estimatedShipping.toFixed(2)}`}
              </dd>
            </div>
            {subtotal < 50 && (
              <p className="text-xs text-ink/50">
                Free shipping on orders over $50.
              </p>
            )}
            <div className="flex justify-between border-t border-ink/10 pt-3 text-base font-semibold text-ink">
              <dt>Total</dt>
              <dd>${total.toFixed(2)}</dd>
            </div>
          </dl>
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Proceed to checkout
          </button>
          <Link
            to="/products"
            className="mt-4 block text-center text-sm font-medium text-ink/70 hover:text-ink"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}

export default Cart
