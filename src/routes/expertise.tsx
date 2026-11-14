import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { SpaceStage } from "@/components/site/visuals";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Enterprise Architecture, AI & Transformation | EXIOR" },
      {
        name: "description",
        content:
          "How EXIOR joins strategy, organization, process, data, systems, agents and security in one transformation plan.",
      },
    ],
  }),
  component: Expertise,
});

const DISCIPLINES = [
  ["Strategy", "What the company must be able to do in two years, given its real constraints."],
  ["Organization", "Who decides, on what information, and which forum no longer earns its place."],
  ["Process", "Decompose before automating. Formulate a constraint before promising a gain."],
  ["Economics", "A short, sourced reading of demand, prices, financing and labor. Not a proprietary forecast."],
  ["Sector", "Where a delay is dangerous, and where copying the market would be a mistake."],
  ["Agents", "A bounded system: objective, tools, a verifiable output, a person who can stop it."],
  ["Systems", "Keep what should stay. Connect what must connect. Name what not to migrate."],
  ["Security", "Where data lives, who can touch it, what trace remains. A design grid, not a certification."],
] as const;

function Expertise() {
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Kicker>Expertise</Kicker>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          What large firms split, EXIOR holds in one plan.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Strategy, process, data, security and agents. One architecture, yours. Open a layer in the sample.
        </p>
        <div className="mt-10">
          <SpaceStage initial="layers" />
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {DISCIPLINES.map(([title, text]) => (
            <li key={title} className="rounded-2xl border border-line p-5">
              <p className="text-sm font-medium">{title}</p>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">We do not certify your company. We do not publish a proprietary macro forecast. We do not guarantee a margin before seeing your data. We do not deploy systems in the price of the plan.</p>
        <Link to="/offre" className="mt-6 inline-flex text-sm text-fg">See the Transformation Plan</Link>
      </main>
    </Shell>
  );
}
