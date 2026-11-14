import { createFileRoute } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Research, Standards & Enterprise Intelligence | EXIOR" },
      {
        name: "description",
        content:
          "Explore the economic research, enterprise architecture methods, AI standards, and security frameworks informing EXIOR transformation plans.",
      },
    ],
  }),
  component: SourcesPage,
});

const GROUPS = [
  {
    title: "Economics & Markets",
    items: [
      ["European Central Bank", "Monetary conditions and financing context."],
      ["INSEE", "French economic activity, employment, prices, and sector indicators."],
      ["Eurostat", "Comparable European economic and industry statistics."],
      ["International Monetary Fund", "International economic conditions and scenarios."],
      ["OECD", "Economic analysis, productivity research, and technology adoption."],
      ["Banque de France", "Business financing conditions and French economic surveys."],
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      ["Model Context Protocol", "Explicit integration patterns for connecting AI agents to tools and external systems."],
      ["Stanford HAI — AI Index", "Research on AI development, capabilities, and adoption."],
      ["Stanford CRFM — HELM", "Public model evaluations and methodological comparisons."],
      ["OECD.AI", "Policy research and comparative analysis of AI adoption."],
    ],
  },
  {
    title: "Security & Governance",
    items: [
      ["ANSSI", "Cybersecurity recommendations and architectural safeguards."],
      ["CNIL", "Data protection guidance and privacy requirements."],
      ["NIST", "Security controls and AI risk-management frameworks."],
      ["ISO/IEC 27001 Principles", "Information security management concepts and control structures."],
    ],
  },
  {
    title: "Enterprise Architecture & Optimization",
    items: [
      ["Enterprise Architecture", "Business capabilities, organizational functions, applications, information, and technology dependencies."],
      ["Operations Research", "Constraint optimization, scheduling, assignment, routing, and simulation techniques."],
      ["Industry Research", "Sector data, professional associations, market analysis, and relevant operating benchmarks."],
    ],
  },
] as const;

const CONCEPTS = [
  ["Enterprise Architecture", "See the enterprise as one system.", "Enterprise architecture defines how organizational functions, processes, information, applications, and technology work together. It provides the structure for coordinated transformation across the business."],
  ["Business Capabilities", "Define what your enterprise needs to do.", "A business capability describes an outcome your organization must consistently deliver. Examples include preparing accurate quotations, coordinating production, managing inventory, or fulfilling customer commitments. The architecture links these capabilities to the resources and systems that enable them."],
  ["AI Agent Architecture", "Give every agent a clear role.", "An enterprise AI agent requires an explicit responsibility, an operating context, authorized tools, defined outputs, and appropriate controls. EXIOR specifies these requirements within the overall business architecture."],
  ["Agent Harness", "Define how an agent operates.", "An agent harness establishes the context, tools, permissions, validation mechanisms, and operational boundaries surrounding an AI agent. It determines what the agent can do, what it cannot do, and when human intervention is required."],
  ["Model Context Protocol", "Connect agents to the right tools.", "MCP provides a standardized approach for connecting AI applications to external capabilities. In an enterprise architecture, tool access is specified according to the agent's role and operational requirements."],
  ["Skills", "Make capabilities reusable.", "Skills define focused, reusable operations such as extracting information, classifying requests, preparing documents, or validating structured outputs. They support reliable agent workflows when combined with appropriate tools and controls."],
  ["Data Architecture", "Give business information a consistent structure.", "Data architecture defines the information objects, sources, relationships, ownership, and exchange requirements that support your enterprise. Reliable data structures enable better coordination across teams, systems, and AI applications."],
  ["Operations Research", "Improve decisions through explicit constraints.", "Optimization methods model business problems using objectives, variables, and constraints. They can support scheduling, routing, allocation, inventory management, and capacity planning when the underlying information is sufficiently reliable."],
  ["Security by Design", "Build control into every layer.", "Access restrictions, data classification, auditability, system separation, and human approval are architectural requirements. They shape how applications, people, and AI agents interact with your enterprise."],
] as const;

function SourcesPage() {
  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>EVIDENCE-BASED TRANSFORMATION</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            Better decisions start with better information.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            EXIOR combines your business information with relevant public research, industry data, technical standards, and recognized architectural principles. Each source has a defined purpose: inform a decision, evaluate a constraint, or support a transformation priority.
          </p>
        </section>
        {GROUPS.map((group) => (
          <section key={group.title} className="border-t border-line">
            <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
              <h2 className="text-2xl font-medium tracking-tight">{group.title}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {group.items.map(([name, text]) => (
                  <article key={name} className="rounded-2xl border border-line p-5">
                    <h3 className="font-medium">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-2xl font-medium tracking-tight">Our research principle</h2>
            <p className="mt-4 text-lg">Every source should improve a decision.</p>
            <p className="mt-4 leading-relaxed text-muted">
              EXIOR uses external information to support transformation priorities and architectural choices. Sources are identified, assumptions are distinguished from established facts, and recommendations are linked to the business conditions they address.
            </p>
          </div>
        </section>
        <section id="architecture" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Kicker>ENTERPRISE ARCHITECTURE RESOURCES</Kicker>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Understand the systems behind transformation.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              Explore the concepts, methods, and technologies used to design connected, adaptable enterprises.
            </p>
            <div className="mt-12 space-y-10">
              {CONCEPTS.map(([title, lead, text]) => (
                <article key={title} className="border-t border-line pt-8">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-2">{lead}</p>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
