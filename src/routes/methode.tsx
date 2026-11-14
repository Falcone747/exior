import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { Timeline } from "@/components/site/visuals";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "The EXIOR Method | Blueprint in 14 Days" },
      {
        name: "description",
        content:
          "How EXIOR designs your transformation plan: complete intake, current map, target architecture, roadmap and EXIOR Space in 14 days.",
      },
    ],
  }),
  component: Methode,
});

function Methode() {
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Kicker>How it works</Kicker>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          Fourteen days. One architecture. You keep the decision.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          The clock starts when the dossier is complete. You describe how the company actually runs. EXIOR returns the architecture, the priorities and the EXIOR Space. Technical deployment is a separate decision.
        </p>
        <div className="mt-10">
          <Timeline />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line p-5">
            <p className="text-sm font-medium">Included</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Reading of your dossier and scoping questions</li>
              <li>Map, architecture, priorities, roadmap</li>
              <li>Harness specifications for selected uses</li>
              <li>Economic and industry reading limited to the plan</li>
              <li>Personalized EXIOR Space</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line p-5">
            <p className="text-sm font-medium">Not included</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Development, integration, data migration</li>
              <li>Operating agents in production</li>
              <li>Certification audit or legal advice</li>
              <li>General AI training for teams</li>
              <li>Monthly support after delivery</li>
            </ul>
          </div>
        </div>
        <Link to="/offre" className="mt-10 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
          Get My Transformation Plan — $499
        </Link>
      </main>
    </Shell>
  );
}
