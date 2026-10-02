import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const account = [
  { to: "/login", label: "Log in" },
  { to: "/contact", label: "Help & support" },
];

function Footer() {
  const linkClass =
    "text-sm text-paper/70 transition-colors hover:text-paper";

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <NavLink to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-sm font-semibold text-ink">
                N
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Nexus Store
              </span>
            </NavLink>
            <p className="mt-4 max-w-xs text-sm text-paper/60">
              Quality products, simply organized. Browse, compare and find
              what you need.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-paper/50">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-paper/50">
              Account
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {account.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.to} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Nexus Store. All rights reserved.</p>
          <p>Built by Nexus Academy · Group 1</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
