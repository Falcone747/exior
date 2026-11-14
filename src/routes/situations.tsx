import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { SITUATIONS } from "@/components/site/visuals";

export const Route = createFileRoute("/situations")({
  head: () => ({
    meta: [
      { title: "Business Transformation Use Cases | EXIOR" },
      {
        name: "description",
        content:
          "Illustrative operating situations for manufacturing, distribution, services, logistics, retail, finance and document work. Not deployed client cases.",
      },
    ],
  }),
  component: SituationsPage,
});

function SituationsPage() {
  const [id, setId] = useState<(typeof SITUATIONS)[number]["id"]>("mfg");
  const item = SITUATIONS.find((s) => s.id === id) ?? SITUATIONS[0];
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Kicker>Use cases</Kicker>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          The same architecture, applied to a real operating pattern.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Illustrative situations, consistent with the Meridian sample. EXIOR has not deployed these as client cases.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {SITUATIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setId(s.id)}
              className={s.id === id ? "rounded-full border border-accent-fill/60 px-3 py-1.5 text-sm" : "rounded-full border border-line px-3 py-1.5 text-sm text-muted"}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            ["Operational friction", item.friction],
            ["Target architecture", item.target],
            ["Agent opportunity", item.agent],
            ["Human decision", item.human],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-line p-5">
              <p className="text-xs text-faint">{k}</p>
              <p className="mt-2 text-sm">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">First design priority · {item.first}</p>
        <Link to="/offre" className="mt-8 inline-flex text-sm text-fg">See the Transformation Plan</Link>
      </main>
    </Shell>
  );
}
