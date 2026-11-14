import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { Film } from "@/components/site/films";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "The EXIOR Method | Your Transformation Blueprint in 14 Days" },
      {
        name: "description",
        content:
          "Discover how EXIOR analyzes your business, designs its target architecture, and delivers a prioritized implementation roadmap.",
      },
    ],
  }),
  component: Methode,
});

const PHASES = [
  {
    when: "Days 1–3",
    title: "Understand the enterprise.",
    text: "We review your business dossier, clarify critical information, and establish the scope, objectives, and constraints of the transformation.",
    outputs: [
      "Business profile validation",
      "Initial enterprise model",
      "Scope and constraints",
      "Information requirements",
      "Open questions",
    ],
  },
  {
    when: "Days 4–7",
    title: "Map the operating system.",
    text: "We model the current organization, value chain, critical processes, software landscape, and information dependencies. Relevant industry and economic conditions inform the analysis.",
    outputs: [
      "Current-state enterprise map",
      "Critical process analysis",
      "Operational constraints",
      "Data and systems inventory",
      "Strategic considerations",
    ],
  },
  {
    when: "Days 8–11",
    title: "Design the target architecture.",
    text: "We define the future organizational and digital structures, relevant AI capabilities, data flows, security requirements, and transformation priorities.",
    outputs: [
      "Target operating model",
      "Digital architecture",
      "AI agent specifications",
      "Data and security controls",
      "Prioritized transformation initiatives",
    ],
  },
  {
    when: "Days 12–14",
    title: "Deliver the transformation roadmap.",
    text: "We connect the architecture to an actionable sequence of implementation stages, dependencies, and decisions. Your personalized EXIOR Space organizes the complete plan.",
    outputs: [
      "Transformation roadmap",
      "Implementation dependencies",
      "Decision milestones",
      "Assumptions and supporting sources",
      "Personalized EXIOR Space",
    ],
  },
] as const;

const LAYERS = [
  ["Organization", "Functions, responsibilities, interfaces, and decision structures."],
  ["Processes", "Operational workflows, activities, constraints, and control points."],
  ["Data", "Business objects, authoritative sources, information flows, and governance."],
  ["Systems", "Applications, integrations, technical dependencies, and modernization priorities."],
  ["Agents", "Agent responsibilities, authorized tools, context, memory requirements, and human oversight."],
  ["Security", "Data access, sovereignty, audit requirements, and operational controls."],
] as const;

function Methode() {
  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>THE EXIOR METHOD</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            A complete enterprise blueprint. A focused 14-day process.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            EXIOR follows a structured methodology connecting business analysis, organizational design, technology architecture, AI opportunities, and transformation planning. Your complete business dossier starts the 14-day delivery period.
          </p>
          <div className="mt-10 max-w-4xl">
            <Film name="roadmap" />
          </div>
        </section>
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl divide-y divide-line px-5">
            {PHASES.map((phase) => (
              <article key={phase.when} className="grid gap-8 py-12 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-sm text-muted">{phase.when}</p>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">{phase.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted">{phase.text}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-widest text-faint">Outputs</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {phase.outputs.map((line) => (
                      <li key={line} className="border-t border-line pt-3">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">Architecture Studio</h2>
            <p className="mt-4 max-w-2xl text-muted">Explore every layer of your future enterprise.</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {LAYERS.map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-line p-6">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
            <Link to="/offre" className="mt-10 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
              Get Your Transformation Plan — $499
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
