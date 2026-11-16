import { useEffect, useState } from "react";

const STEPS = [
  { id: "demand", name: "Demand", note: "Customer request" },
  { id: "capacity", name: "Capacity", note: "Signal first" },
  { id: "quote", name: "Quote", note: "Draft only" },
  { id: "human", name: "Human", note: "Price and date" },
  { id: "production", name: "Production", note: "11-day constraint" },
  { id: "cash", name: "Cash", note: "After shipment" },
] as const;

const GROUPS = {
  ERP: [
    { name: "SAP", logo: "/logos/sap.svg", sits: "capacity", role: "Capacity and the schedule live here." },
    { name: "Oracle", logo: "/logos/oracle.svg", sits: "capacity", role: "Order and capacity source." },
    { name: "Dynamics", logo: "/logos/dynamics.svg", sits: "capacity", role: "ERP of record for planning." },
    { name: "NetSuite", logo: "/logos/netsuite.svg", sits: "capacity", role: "Order, stock and finance in one ledger." },
    { name: "Odoo", logo: "/logos/odoo.svg", sits: "capacity", role: "Operations suite kept and connected." },
    { name: "Sage", logo: "/logos/sage.svg", sits: "cash", role: "Finance and cash after shipment." },
  ],
  CRM: [
    { name: "Salesforce", logo: "/logos/salesforce.svg", sits: "quote", role: "The quote is drafted here. Price stays human." },
    { name: "HubSpot", logo: "/logos/hubspot.svg", sits: "demand", role: "Demand and customer record." },
  ],
  Orchestrators: [
    { name: "LangGraph", logo: "/logos/langgraph.svg", sits: "quote", role: "Specifies the agent graph. Not deployed for $499." },
    { name: "CrewAI", logo: "/logos/crewai.svg", sits: "quote", role: "Role split: reader, drafter. Human still approves." },
    { name: "n8n", logo: "/logos/n8n.svg", sits: "capacity", role: "Moves the capacity signal into the CRM." },
    { name: "Temporal", logo: "/logos/temporal.svg", sits: "production", role: "Durable steps with a stop condition." },
    { name: "Zapier", logo: "/logos/zapier.svg", sits: "demand", role: "Light handoffs. Not the source of truth." },
    { name: "Make", logo: "/logos/make.svg", sits: "demand", role: "Connects tools. Does not own the decision." },
  ],
  Harness: [
    { name: "MCP", logo: "/logos/mcp.svg", sits: "quote", role: "Named sources only: order, capacity, stock, price." },
    { name: "Claude", logo: "/logos/claude.svg", sits: "quote", role: "Drafts the quote. No write tools." },
    { name: "OpenAI", logo: "/logos/openai.svg", sits: "quote", role: "Drafts the quote. Stop if capacity is missing." },
    { name: "LangChain", logo: "/logos/langchain.svg", sits: "quote", role: "Tool boundary around the draft." },
    { name: "Anthropic", logo: "/logos/anthropic.svg", sits: "quote", role: "Model behind the draft. A person sets the price." },
  ],
} as const;

type Group = keyof typeof GROUPS;

export function FlowBoard() {
  const [group, setGroup] = useState<Group>("ERP");
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const tool = GROUPS[group][active];

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % STEPS.length), 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-[#0c0d0e] p-4 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="mr-2 text-xs text-faint">Meridian — Illustrative Example</p>
        {(Object.keys(GROUPS) as Group[]).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => { setGroup(g); setActive(0); }}
            className={g === group ? "rounded-full border border-accent-fill px-3 py-1 text-xs" : "rounded-full border border-line px-3 py-1 text-xs text-muted"}
          >
            {g}
          </button>
        ))}
      </div>

      <ol className="mt-5 grid grid-cols-3 gap-2 md:grid-cols-6">
        {STEPS.map((s, i) => {
          const on = s.id === tool.sits || i === step;
          return (
            <li key={s.id} className={on ? "rounded-xl border border-accent-fill p-3" : "rounded-xl border border-line p-3"}>
              <p className="text-[11px] text-faint">0{i + 1}</p>
              <p className="mt-1 text-sm font-medium">{s.name}</p>
              <p className="mt-1 text-[11px] text-muted">{s.note}</p>
            </li>
          );
        })}
      </ol>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
        <div className="h-full bg-accent-fill transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {GROUPS[group].map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActive(i)}
            className={i === active ? "flex items-center gap-3 rounded-xl border border-accent-fill bg-bg-2 px-3 py-3 text-left" : "flex items-center gap-3 rounded-xl border border-line px-3 py-3 text-left"}
          >
            <img src={item.logo} alt="" className="h-5 w-16 object-contain object-left" />
            <span className="text-xs text-muted">{item.name}</span>
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm">{tool.name} · {tool.role}</p>
      <p className="mt-1 text-xs text-faint">Specified in the blueprint. Not deployed for $499. Logos mark the systems a plan can name. Not partnerships.</p>
    </div>
  );
}
