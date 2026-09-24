import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore.js";

function Login() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const [form, setForm] = useState({ email: "", password: "" });
  //const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form.email);
    navigate("/dashboard");

    //setMessage(`Welcome back — logging in as ${form.email}.`)
  };

  return (
    <div className="container-page flex justify-center py-16">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Log in</h1>
        <p className="mt-3 text-ink/60">Access your Nexus Store account.</p>

        {/* {message && (
          <div className="mt-6 rounded-xl border border-sage/30 bg-sage/10 px-5 py-4 text-sm font-medium text-sage">
            {message}
          </div>
        )} */}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-ink/70"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="joabera@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-ink/70"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
