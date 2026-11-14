import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { SOURCES } from "@/components/site/visuals";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Research, Standards & Enterprise Intelligence | EXIOR" },
      {
        name: "description",
        content:
          "The public sources that inform an EXIOR plan: Federal Reserve, BLS, IMF, World Bank, OECD, NIST, Stanford HAI, HELM, MIT and the Model Context Protocol.",
      },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Kicker>Sources</Kicker>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          References a serious decision can be checked against.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          These are reference sources, not partners. Each one can move a priority. None of them is a certification we issue, and none is a forecast for your firm.
        </p>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {SOURCES.map((s) => (
            <li key={s.name} className="rounded-2xl border border-line p-5">
              <a href={s.url} className="text-sm font-medium text-fg" target="_blank" rel="noreferrer">{s.name}</a>
              <p className="mt-3 text-sm text-muted">{s.use}</p>
              <p className="mt-2 text-xs text-faint">Limit · {s.limit}</p>
              <p className="mt-2 text-xs text-muted">Informs · {s.decision}</p>
            </li>
          ))}
        </ul>
        <Link to="/offre" className="mt-10 inline-flex text-sm text-fg">See the Transformation Plan</Link>
      </main>
    </Shell>
  );
}
