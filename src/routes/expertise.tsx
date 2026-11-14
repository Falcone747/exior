import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { Still } from "@/components/site/media";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Enterprise Architecture, AI & Business Transformation | EXIOR" },
      {
        name: "description",
        content:
          "Explore EXIOR's expertise in business strategy, organizational architecture, process optimization, data systems, AI agents, and cybersecurity.",
      },
    ],
  }),
  component: Expertise,
});

const DISCIPLINES = [
  {
    title: "Strategy & Economics",
    lead: "Design for the business you need to become.",
    text: "Enterprise transformation begins with your economic reality: customers, market position, operating margins, resources, and competitive constraints. EXIOR connects strategic priorities to the operational capabilities your company needs to develop.",
    items: [
      "Business model and value chain analysis",
      "Competitive positioning",
      "Margin and capacity constraints",
      "Strategic trade-offs",
      "Transformation priorities",
    ],
  },
  {
    title: "Organizational Architecture",
    lead: "Make every function work as one enterprise.",
    text: "Define responsibilities, decision rights, coordination mechanisms, and the interactions between teams. EXIOR designs an organizational structure that supports execution across the entire value chain.",
    items: [
      "Current-state organizational mapping",
      "Target operating model",
      "Responsibilities and decision rights",
      "Cross-functional interfaces",
      "Decision and coordination processes",
    ],
  },
  {
    title: "Process Intelligence",
    lead: "Understand the process. Optimize the system.",
    text: "Critical business processes are decomposed into activities, information, rules, dependencies, and exceptions. Where appropriate, EXIOR applies operations research and optimization methods to identify better ways to allocate resources, manage constraints, and coordinate work.",
    items: [
      "End-to-end workflow analysis",
      "Process decomposition",
      "Bottleneck identification",
      "Constraint modeling",
      "Target process design",
      "Optimization opportunities",
    ],
  },
  {
    title: "Macroeconomic Intelligence",
    lead: "Connect enterprise decisions to the economic environment.",
    text: "Interest rates, input prices, labor conditions, and market demand influence how businesses invest and transform. EXIOR incorporates relevant, sourced economic indicators into the prioritization and sequencing of your transformation roadmap.",
    items: [
      "Economic conditions and financing constraints",
      "Demand and cost scenarios",
      "Labor and capacity considerations",
      "Decision-relevant economic indicators",
      "Scenario-sensitive implementation planning",
    ],
  },
  {
    title: "Industry Intelligence",
    lead: "Understand the standards shaping your market.",
    text: "EXIOR evaluates the operational and competitive dynamics relevant to your business. Industry practices, market developments, and observable performance indicators help identify which capabilities matter most.",
    items: [
      "Industry-specific operating models",
      "Competitive benchmarks where available",
      "Service levels and operational standards",
      "Customer acquisition and retention dynamics",
      "Sector-specific transformation opportunities",
    ],
  },
  {
    title: "Artificial Intelligence",
    lead: "Put intelligent agents to work where they create value.",
    text: "EXIOR identifies business activities suited to AI agents and designs the operating boundaries required for reliable use. Each selected agent is specified with a defined objective, authorized tools, required context, verification mechanisms, and human controls.",
    items: [
      "Agent use-case identification",
      "Multi-agent workflow architecture",
      "Agent harness specifications",
      "Tool access and context requirements",
      "Human approval mechanisms",
      "Operational safeguards",
    ],
  },
  {
    title: "Data & Digital Systems",
    lead: "Connect the systems your enterprise depends on.",
    text: "EXIOR maps your existing software, information sources, business objects, and integration requirements. The target architecture defines how information should move between systems and where consistent data definitions are essential.",
    items: [
      "Application landscape mapping",
      "Business data models",
      "System ownership",
      "Data flow architecture",
      "Integration priorities",
      "Technology retention and replacement decisions",
    ],
  },
  {
    title: "Cybersecurity & Sovereignty",
    lead: "Build security into the architecture.",
    text: "Data access, system permissions, traceability, residency, and human accountability are integrated into the target design. EXIOR uses established security principles and recognized frameworks to specify appropriate controls.",
    items: [
      "Data classification",
      "Access and permission architecture",
      "Agent activity logging",
      "Human intervention and approval",
      "Data residency requirements",
      "Security and governance controls",
    ],
  },
] as const;

function Expertise() {
  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>ENTERPRISE TRANSFORMATION EXPERTISE</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            Every discipline. One connected architecture.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Strategy, organizational design, process optimization, economics, data architecture, AI agents, and cybersecurity belong to the same transformation. EXIOR combines these disciplines into a coherent enterprise blueprint.
          </p>
          <div className="mt-10 max-w-4xl">
            <Still src="/media/layers.jpg" alt="Stacked layers of the target architecture" />
          </div>
        </section>
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl divide-y divide-line px-5">
            {DISCIPLINES.map((item) => (
              <article key={item.title} className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-7">
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{item.title}</h2>
                  <p className="mt-3 text-lg">{item.lead}</p>
                  <p className="mt-4 leading-relaxed text-muted">{item.text}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-widest text-faint">Core capabilities</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {item.items.map((line) => (
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
          <div className="mx-auto max-w-6xl px-5 py-16">
            <Link to="/offre" className="inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
              Get Your Transformation Plan — $499
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
