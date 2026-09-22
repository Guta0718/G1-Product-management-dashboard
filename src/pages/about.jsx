function About() {
  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          About Nexus Store
        </h1>
        <p className="mt-4 text-ink/60">
          Nexus Store started as a simple idea: a store doesn't need a thousand
          categories to be useful, it just needs the right things, easy to find.
          We built this dashboard to make browsing electronics, jewelry and
          clothing feel like one coherent shop instead of three different
          departments.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-ink/10 bg-white p-8">
          <h2 className="font-display text-xl font-semibold">Our mission</h2>
          <p className="mt-3 text-sm text-ink/60">
            Make it fast and painless to find a specific product, whether
            someone knows exactly what they want or is just browsing by
            category.
          </p>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white p-8">
          <h2 className="font-display text-xl font-semibold">Our vision</h2>
          <p className="mt-3 text-sm text-ink/60">
            A small-store shopping experience that stays simple as it grows
            search, filters, and clear product details, without the clutter.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-8 text-paper">
        <h2 className="font-display text-xl font-semibold">The team</h2>
        <p className="mt-3 max-w-2xl text-sm text-paper/70">
          This project is built and maintained by a small group of students as
          part of the Nexus Academy React curriculum, practicing the same
          branch-review-merge workflow used by real product teams.
        </p>
      </div>
    </div>
  );
}

export default About;
