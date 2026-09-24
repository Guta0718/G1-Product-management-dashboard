import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-semibold">Nexus Store</span>
          <p className="mt-3 max-w-xs text-sm text-paper/60">
            A small store for the everyday and the unexpected — electronics,
            jewelry and clothing, all in one place.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper/80">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-paper/60">
            <li><Link to="/products" className="hover:text-paper">Products</Link></li>
            <li><Link to="/about" className="hover:text-paper">About</Link></li>
            <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper/80">Data source</h3>
          <p className="mt-3 text-sm text-paper/60">
            Product data is provided by the{' '}
            <a
              href="https://fakestoreapi.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-paper/30 underline-offset-4 hover:text-paper"
            >
              Fake Store API
            </a>
            , used here for demo purposes only.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/10 py-5">
        <p className="container-page text-xs text-paper/50">
          © {year} Nexus Store. Built for the Nexus Academy React group assignment.
        </p>
      </div>
    </footer>
  )
}

export default Footer
