import { Link } from 'react-router-dom'
import useAuthStore from '../stores/authStore.js'

function Dashboard() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="container-page py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-3 text-ink/60">
        You are signed in. This page is only visible after login.
      </p>

      <div className="mt-10 max-w-md rounded-2xl border border-ink/10 bg-white p-6">
        <h2 className="text-lg font-semibold">Account</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-ink/50">Name</dt>
            <dd className="font-medium">{user?.name}</dd>
          </div>
          <div>
            <dt className="text-ink/50">Email</dt>
            <dd className="font-medium">{user?.email}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={logout}
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Log out
          </button>
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-medium text-ink/70 hover:text-ink"
          >
            Browse products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
