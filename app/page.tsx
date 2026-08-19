const experiments = [
  {
    title: "Next.js",
    description: "Routing, server components, layouts and rendering.",
    href: "#",
  },
  {
    title: "APIs",
    description: "Build route handlers and connect frontend to backend.",
    href: "#",
  },
  {
    title: "Authentication",
    description: "Learn sessions, protected routes and user accounts.",
    href: "#",
  },
  {
    title: "PostgreSQL",
    description: "Store and query application data.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            pocplayground.com
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
            POC Playground
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A sandbox for learning full-stack development by building small,
            deployable experiments.
          </p>
        </section>

        <section>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Experiments</h2>
              <p className="mt-2 text-zinc-500">
                Pick an area and start building.
              </p>
            </div>

            <span className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-500">
              {experiments.length} projects
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {experiments.map((experiment) => (
              <a
                key={experiment.title}
                href={experiment.href}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-medium">
                    {experiment.title}
                  </h3>

                  <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-3 leading-7 text-zinc-500">
                  {experiment.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-900 pt-8 text-sm text-zinc-600">
          Built with Next.js · Hosted on Vercel
        </footer>
      </div>
    </main>
  );
}