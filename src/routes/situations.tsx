import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { Still } from "@/components/site/media";

export const Route = createFileRoute("/situations")({
  head: () => ({
    meta: [
      { title: "Business Transformation Use Cases | EXIOR" },
      {
        name: "description",
        content:
          "Discover enterprise transformation opportunities across sales, manufacturing, distribution, services, finance, logistics, and regulated operations.",
      },
    ],
  }),
  component: SituationsPage,
});

const CASES = [
  {
    title: "Sales & Revenue Operations",
    lead: "Connect demand to execution.",
    text: "Coordinate customer information, sales qualification, quotations, commercial approvals, and fulfillment readiness.",
    focus: "A connected process from customer demand to a reliable commercial commitment.",
    items: [
      "Lead qualification and enrichment",
      "Quote preparation",
      "Commercial handoffs",
      "Pricing approval workflows",
      "Revenue and capacity visibility",
    ],
  },
  {
    title: "Manufacturing & Production",
    lead: "Align production with real operating capacity.",
    text: "Connect order demand, production planning, resource availability, operational constraints, and delivery commitments.",
    focus: "A coordinated manufacturing value chain with explicit dependencies and decision rules.",
    items: [
      "Production scheduling",
      "Capacity allocation",
      "Work order preparation",
      "Bottleneck identification",
      "Operational exception handling",
    ],
  },
  {
    title: "Distribution & Inventory",
    lead: "Connect inventory, purchasing, and customer commitments.",
    text: "Design workflows linking stock availability, supplier information, purchasing decisions, order fulfillment, and customer service.",
    focus: "Reliable information and coordinated decisions across inventory and distribution operations.",
    items: [
      "Stock visibility",
      "Replenishment planning",
      "Supplier follow-up",
      "Order validation",
      "Inventory exception detection",
    ],
  },
  {
    title: "Professional Services",
    lead: "Turn knowledge-intensive work into structured execution.",
    text: "Connect client intake, document preparation, internal coordination, approvals, and service delivery.",
    focus: "Structured information flows with clearly defined human decisions.",
    items: [
      "Client onboarding",
      "Information collection",
      "Document assembly",
      "Knowledge retrieval",
      "Workflow coordination",
      "Quality checks",
    ],
  },
  {
    title: "Customer Operations",
    lead: "Build more responsive service workflows.",
    text: "Connect incoming requests, customer records, internal expertise, and operational systems.",
    focus: "Faster access to relevant information, clear responsibilities, and controlled automation.",
    items: ["Request classification", "Information retrieval", "Ticket preparation", "Case routing", "Escalation workflows"],
  },
  {
    title: "Finance & Administration",
    lead: "Connect information, controls, and decisions.",
    text: "Organize administrative workflows around consistent data, documented approvals, and reliable information exchange.",
    focus: "Traceable workflows with financial and approval decisions retained by authorized people.",
    items: [
      "Invoice verification",
      "Document reconciliation",
      "Reporting preparation",
      "Exception detection",
      "Administrative coordination",
    ],
  },
  {
    title: "Logistics & Field Operations",
    lead: "Coordinate resources across time, distance, and capacity.",
    text: "Connect demand, scheduling, routes, availability, operational constraints, and service requirements.",
    focus: "Resource allocation aligned with real-world constraints.",
    items: [
      "Resource assignment",
      "Route planning",
      "Scheduling coordination",
      "Capacity analysis",
      "Operational status reporting",
    ],
  },
  {
    title: "Regulated & Document-Intensive Operations",
    lead: "Make complex information easier to review and act on.",
    text: "Structure documents, access permissions, evidence collection, validation steps, and decision workflows.",
    focus: "Controlled information processing with explicit human authorization.",
    items: [
      "Document classification",
      "Case preparation",
      "Missing-information detection",
      "Review workflows",
      "Audit trail requirements",
    ],
  },
] as const;

function SituationsPage() {
  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>ENTERPRISE USE CASES</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            Built around how your business actually works.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Every industry has its own processes, constraints, operating rhythms, and sources of value. EXIOR identifies where your business can improve coordination, reduce operational friction, and introduce intelligent capabilities.
          </p>
          <div className="mt-10 max-w-4xl">
            <Still src="/media/floor.jpg" alt="Office, shop and dock in one operating flow" />
          </div>
          <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
            Explore Use Cases
          </Link>
        </section>
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2 md:py-16">
            {CASES.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line p-6">
                <h2 className="text-2xl font-medium tracking-tight">{item.title}</h2>
                <p className="mt-3 text-lg">{item.lead}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                <p className="mt-6 text-xs uppercase tracking-widest text-faint">Transformation opportunities</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-6 text-xs uppercase tracking-widest text-faint">Architecture focus</p>
                <p className="mt-2 text-sm leading-relaxed">{item.focus}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
