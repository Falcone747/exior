import { useState } from "react";

export const MERIDIAN = {
  name: "Meridian",
  label: "Illustrative example",
  constraint: "Production scheduling — 11-day constraint",
  rule: "Do not commit to delivery under 10 business days until the scheduling rule and the capacity signal are validated.",
} as const;

const TABS = [
  { id: "map", label: "Enterprise Map" },
  { id: "layers", label: "Architecture" },
  { id: "roadmap", label: "Roadmap" },
  { id: "decisions", label: "Decisions" },
  { id: "systems", label: "Systems" },
  { id: "agents", label: "Agents" },
] as const;

type Tab = (typeof TABS)[number]["id"];

const NODES = [
  {
    id: "demand",
    name: "Customer demand",
    owner: "Commercial",
    system: "CRM",
    status: "Open",
    issue: "Quote can be issued before capacity is known.",
    inputs: "Customer, requested date, product",
    truth: "CRM customer record",
    target: "Quote waits on the capacity signal.",
  },
  {
    id: "quote",
    name: "Quote",
    owner: "Commercial",
    system: "CRM",
    status: "Prepared",
    issue: "Price is set without a scheduling rule.",
    inputs: "Price list, requested lead time",
    truth: "Price owned by Commercial",
    target: "Price stays human. Lead time comes from capacity.",
  },
  {
    id: "capacity",
    name: "Capacity check",
    owner: "Planning",
    system: "ERP",
    status: "Late",
    issue: "The floor signal arrives after the quote.",
    inputs: "Load, calendar, stock",
    truth: "ERP capacity",
    target: "CRM reads a capacity signal before commit.",
  },
  {
    id: "production",
    name: "Production",
    owner: "Production",
    system: "Planning",
    status: "Blocked",
    issue: "Scheduling is the 11-day constraint.",
    inputs: "Released order, capacity",
    truth: "Schedule owned by Production",
    target: "Release only when the rule is validated.",
    constraint: true,
  },
  {
    id: "fulfill",
    name: "Fulfillment",
    owner: "Warehouse",
    system: "WMS",
    status: "Waiting",
    issue: "Shipment release is blocked. Stock is not one number.",
    inputs: "Finished goods, order",
    truth: "Warehouse stock",
    target: "One stock figure. Human releases the shipment.",
  },
  {
    id: "cash",
    name: "Invoice / cash",
    owner: "Finance",
    system: "Ledger",
    status: "After ship",
    issue: "Cash follows a shipment that may not match the quote.",
    inputs: "Shipment, price",
    truth: "Ledger",
    target: "Invoice follows the released shipment and the approved price.",
  },
] as const;

const LAYERS = [
  { id: "org", name: "Organization", text: "Commercial owns the quote. Production owns the schedule. Finance owns cash.", change: "Name the owner of each decision.", risk: "A quote with no owner of capacity." },
  { id: "proc", name: "Processes", text: "Demand → quote → capacity → production → fulfillment → cash.", change: "Capacity before commit.", risk: "Promising under 10 days on an unvalidated rule." },
  { id: "data", name: "Data", text: "Order, stock, customer, price. One definition each.", change: "One stock figure. One price.", risk: "Two stock numbers, two prices." },
  { id: "sys", name: "Systems", text: "CRM, ERP, warehouse, ledger. Keep them. Connect them.", change: "CRM ↔ ERP capacity signal.", risk: "A new platform before the signal exists." },
  { id: "agent", name: "AI agents", text: "Read status. Draft a quote. Never set price or release a shipment.", change: "Harness before any connection.", risk: "An agent that can change a price." },
  { id: "sec", name: "Security", text: "Role access, audit, residency, human override.", change: "Least privilege before the first agent.", risk: "An agent with a general mandate." },
] as const;

const WAVES = [
  { id: "foundation", name: "Foundation", text: "Name owners of order, stock, price and cash. One definition each.", gate: "Owners named", risk: "Connecting systems before the objects are defined." },
  { id: "connect", name: "Connect", text: "CRM reads the ERP capacity signal before a quote is committed.", gate: "Signal visible in CRM", risk: "Automating quotes on a late signal." },
  { id: "govern", name: "Govern", text: "Roles, permissions, trace and a stop condition.", gate: "Access model accepted", risk: "An agent connected before controls exist." },
  { id: "pilot", name: "Pilot", text: "An agent reads order status and drafts a quote. A person approves the price.", gate: "Human approval on price", risk: "Treating the pilot as a production runtime." },
  { id: "scale", name: "Scale", text: "Expand only after the process is observed. Prospective. Not a delivered outcome.", gate: "Process validated", risk: "Scaling an unobserved pilot." },
] as const;

const ALLOWED = [
  ["Read order status", "CRM, read"],
  ["Reconcile inputs", "Order, stock, capacity"],
  ["Draft a quote", "Price list, requested date"],
] as const;

const HUMAN = [
  ["Set the price", "Commercial"],
  ["Promise a lead time", "Planning"],
  ["Release the shipment", "Warehouse"],
] as const;

const OBJECTS = [
  { name: "Customer", owner: "Commercial", system: "CRM", state: "Defined" },
  { name: "Order", owner: "Planning", system: "ERP", state: "Split" },
  { name: "Stock", owner: "Warehouse", system: "WMS", state: "Two figures" },
  { name: "Price", owner: "Commercial", system: "CRM", state: "Human" },
  { name: "Cash", owner: "Finance", system: "Ledger", state: "After ship" },
] as const;

const DECISIONS = [
  {
    title: "The 10-day promise",
    kind: "Operational constraint",
    known: "Scheduling is the 11-day constraint. Quotes can be issued first.",
    open: "The scheduling rule and the capacity signal are not validated.",
    owner: "COO",
    next: "Do not commit under 10 business days until both are validated.",
  },
  {
    title: "CRM ↔ ERP signal",
    kind: "Architectural dependency",
    known: "Capacity lives in ERP. Quotes live in CRM.",
    open: "No shared signal today.",
    owner: "Head of Operations",
    next: "Connect the signal before any quote automation.",
  },
  {
    title: "Price and release",
    kind: "Human approval",
    known: "An agent can read status and draft.",
    open: "Who may change a price, and who releases a shipment.",
    owner: "Commercial / Warehouse",
    next: "Keep both decisions with a person.",
  },
  {
    title: "What not to migrate",
    kind: "Open question",
    known: "CRM, ERP, warehouse and ledger stay.",
    open: "Which interfaces are debt, and which are enough.",
    owner: "CIO",
    next: "Name retained systems before any replacement.",
  },
] as const;

export function SpaceStage({ initial = "map" as Tab }: { initial?: Tab }) {
  const [tab, setTab] = useState<Tab>(initial);
  const [mode, setMode] = useState<"current" | "target">("current");

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0c0d0e] text-left shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
      <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
        <img src="/visuals/logo-transparent.png" alt="" className="size-6 object-contain" />
        <p className="text-sm font-medium">EXIOR Space</p>
        <p className="text-xs text-faint">Meridian · Illustrative example · Day 14</p>
        <div className="ml-auto flex rounded-full border border-line p-0.5 text-xs">
          {(["current", "target"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={mode === m ? "rounded-full bg-surface px-3 py-1 text-fg" : "rounded-full px-3 py-1 text-muted"}
            >
              {m === "current" ? "Current" : "Target"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid min-h-[32rem] md:grid-cols-[12rem_1fr]">
        <nav className="flex gap-1 overflow-x-auto border-b border-line p-2 md:flex-col md:border-b-0 md:border-r md:p-3" aria-label="EXIOR Space">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={
                tab === item.id
                  ? "shrink-0 rounded-lg border border-accent-fill/50 px-3 py-2 text-left text-sm text-fg"
                  : "shrink-0 rounded-lg border border-transparent px-3 py-2 text-left text-sm text-muted hover:text-fg"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 md:p-5">
          {tab === "map" ? <MapView mode={mode} /> : null}
          {tab === "layers" ? <LayersView mode={mode} /> : null}
          {tab === "roadmap" ? <RoadmapView /> : null}
          {tab === "decisions" ? <DecisionsView /> : null}
          {tab === "systems" ? <SystemsView /> : null}
          {tab === "agents" ? <AgentsView /> : null}
        </div>
      </div>
      <p className="border-t border-line px-4 py-2 text-xs text-faint">Sample output · Meridian is an illustrative company, not a client.</p>
    </div>
  );
}

function MapView({ mode }: { mode: "current" | "target" }) {
  const [open, setOpen] = useState<string>("production");
  const node = NODES.find((n) => n.id === open) ?? NODES[3];
  return (
    <div>
      <p className="text-xs text-faint">{mode === "current" ? "The path breaks at production." : "Target architecture. Not a completed transformation."}</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {NODES.map((n) => (
          <li key={n.id}>
            <button
              type="button"
              onClick={() => setOpen(n.id)}
              className={
                n.id === open
                  ? "w-full rounded-xl border border-accent-fill/60 p-3 text-left"
                  : "w-full rounded-xl border border-line p-3 text-left hover:border-line"
              }
            >
              <p className="text-sm font-medium">{n.name}</p>
              <p className="mt-1 text-xs text-muted">{n.owner}</p>
              <p className="mt-2 text-xs text-faint">{mode === "current" ? n.status : "Connected"}</p>
            </button>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-medium">{node.name}</p>
        <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <div><dt className="text-xs text-faint">Inputs</dt><dd className="mt-1">{node.inputs}</dd></div>
          <div><dt className="text-xs text-faint">Source of truth</dt><dd className="mt-1">{node.truth}</dd></div>
          <div><dt className="text-xs text-faint">{mode === "current" ? "Issue" : "Target change"}</dt><dd className="mt-1 text-muted">{mode === "current" ? node.issue : node.target}</dd></div>
          <div><dt className="text-xs text-faint">System</dt><dd className="mt-1">{node.system}</dd></div>
        </dl>
      </div>
    </div>
  );
}

function LayersView({ mode }: { mode: "current" | "target" }) {
  const [id, setId] = useState("agent");
  const layer = LAYERS.find((l) => l.id === id) ?? LAYERS[0];
  return (
    <div>
      <p className="text-xs text-faint">Six layers · one architecture · {mode}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {LAYERS.map((l, i) => (
          <li key={l.id}>
            <button
              type="button"
              onClick={() => setId(l.id)}
              className={l.id === id ? "w-full rounded-xl border border-accent-fill/60 p-3 text-left" : "w-full rounded-xl border border-line p-3 text-left"}
            >
              <p className="text-xs text-faint">0{i + 1}</p>
              <p className="mt-1 text-sm font-medium">{l.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-xl border border-line p-4 text-sm">
        <p>{layer.text}</p>
        <p className="mt-3 text-muted">{mode === "current" ? layer.risk : layer.change}</p>
      </div>
    </div>
  );
}

function RoadmapView() {
  return (
    <div>
      <p className="text-xs text-faint">Prospective roadmap · not a guaranteed operating outcome</p>
      <ol className="mt-4 space-y-2">
        {WAVES.map((w, i) => (
          <li key={w.id} className="rounded-xl border border-line p-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium"><span className="mr-2 text-xs text-faint">0{i + 1}</span>{w.name}</p>
              <p className="text-xs text-faint">Gate · {w.gate}</p>
            </div>
            <p className="mt-2 text-sm text-muted">{w.text}</p>
            <p className="mt-2 text-xs text-faint">Out of sequence: {w.risk}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DecisionsView() {
  const [i, setI] = useState(0);
  const d = DECISIONS[i];
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {DECISIONS.map((item, idx) => (
          <button key={item.title} type="button" onClick={() => setI(idx)} className={idx === i ? "rounded-full border border-accent-fill/60 px-3 py-1 text-xs" : "rounded-full border border-line px-3 py-1 text-xs text-muted"}>
            {item.kind}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-medium">{d.title}</p>
        <dl className="mt-3 space-y-2 text-sm">
          <div><dt className="text-xs text-faint">Known</dt><dd>{d.known}</dd></div>
          <div><dt className="text-xs text-faint">Unresolved</dt><dd className="text-muted">{d.open}</dd></div>
          <div><dt className="text-xs text-faint">Owner</dt><dd>{d.owner}</dd></div>
          <div><dt className="text-xs text-faint">Next</dt><dd>{d.next}</dd></div>
        </dl>
      </div>
    </div>
  );
}

function SystemsView() {
  return (
    <div>
      <p className="text-xs text-faint">Existing systems kept · one owner per object</p>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
        {OBJECTS.map((o) => (
          <li key={o.name} className="grid grid-cols-2 gap-2 px-4 py-3 text-sm sm:grid-cols-4">
            <span className="font-medium">{o.name}</span>
            <span className="text-muted">{o.owner}</span>
            <span className="text-muted">{o.system}</span>
            <span className="text-xs text-faint">{o.state}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">Proposed: CRM reads ERP capacity. Restricted: an agent may not write price or release a shipment.</p>
    </div>
  );
}

function AgentsView() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-line p-4">
        <p className="text-sm font-medium">Agent can</p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {ALLOWED.map(([a, b]) => <li key={a}>{a} · {b}</li>)}
        </ul>
      </div>
      <div className="rounded-xl border border-accent-fill/50 p-4">
        <p className="text-sm font-medium">Human approves</p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {HUMAN.map(([a, b]) => <li key={a}>{a} · {b}</li>)}
        </ul>
      </div>
      <p className="md:col-span-2 text-xs text-faint">Stop condition: any price change or shipment release ends the agent turn. This is a specification, not a deployed runtime.</p>
    </div>
  );
}

export const PHASES = [
  ["Day 0", "Dossier accepted", "The clock starts only when the intake is complete."],
  ["Days 1–3", "Scope", "Constraints, open questions, what is in and out."],
  ["Days 4–7", "Map", "Organization, process, systems, the break."],
  ["Days 8–11", "Target", "Architecture, selected agents, priorities."],
  ["Days 12–14", "Delivery", "Roadmap and the personalized EXIOR Space."],
] as const;

export function Timeline() {
  return (
    <ol className="grid gap-3 md:grid-cols-5">
      {PHASES.map(([when, title, text]) => (
        <li key={when} className="rounded-2xl border border-line p-4">
          <p className="text-xs text-faint">{when}</p>
          <p className="mt-2 text-sm font-medium">{title}</p>
          <p className="mt-2 text-sm text-muted">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export const SITUATIONS = [
  { id: "mfg", name: "Manufacturing", friction: "Quotes issued before capacity is known.", target: "Capacity signal before commit.", agent: "Draft the quote.", human: "Set price and lead time.", first: "Name the scheduling rule." },
  { id: "dist", name: "Distribution", friction: "Two stock figures. Shipment waits.", target: "One stock figure, one owner.", agent: "Read availability.", human: "Release the shipment.", first: "Reconcile stock." },
  { id: "svc", name: "Professional services", friction: "Utilization known after the proposal.", target: "Capacity before the proposal.", agent: "Draft the scope.", human: "Set the fee.", first: "Name who owns utilization." },
  { id: "log", name: "Logistics", friction: "Promise made before the route is feasible.", target: "Feasibility before commit.", agent: "Read status.", human: "Confirm the window.", first: "One definition of on-time." },
  { id: "ret", name: "Retail & e-commerce", friction: "Price and stock disagree at checkout.", target: "One price, one stock.", agent: "Prepare the exception.", human: "Approve the exception.", first: "Name the source of price." },
  { id: "fin", name: "Finance operations", friction: "Close waits on shipments that do not match quotes.", target: "Invoice follows the released shipment.", agent: "Reconcile inputs.", human: "Approve the close.", first: "Match order to shipment." },
  { id: "cs", name: "Customer service", friction: "Status is assembled by hand.", target: "One status, one source.", agent: "Read and explain status.", human: "Change a commitment.", first: "Stop the agent at the commitment." },
  { id: "doc", name: "Document operations", friction: "Files prepared, decisions still oral.", target: "A prepared file, a named approver.", agent: "Prepare the file.", human: "Approve it.", first: "Name the approver." },
] as const;

export const SOURCES = [
  { name: "U.S. Federal Reserve", use: "Rates, credit, demand.", limit: "Not a forecast for one firm.", decision: "When financing or demand changes the sequence.", url: "https://www.federalreserve.gov/" },
  { name: "U.S. Bureau of Labor Statistics", use: "Prices, employment, productivity.", limit: "National series, not your plant.", decision: "When labor or input cost moves a priority.", url: "https://www.bls.gov/" },
  { name: "IMF", use: "World outlook, cross-country conditions.", limit: "Scenario, not a plan.", decision: "When an investment holds in only one scenario.", url: "https://www.imf.org/" },
  { name: "World Bank", use: "Development, trade, sector data.", limit: "Not a competitor ranking.", decision: "When a market assumption needs a public series.", url: "https://www.worldbank.org/" },
  { name: "OECD", use: "Comparable indicators, AI policy notes.", limit: "A global body, not a regional default.", decision: "When a peer comparison is needed.", url: "https://www.oecd.org/" },
  { name: "NIST AI RMF", use: "How to govern an AI use.", limit: "A framework, not a certification we issue.", decision: "Before an agent is specified.", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  { name: "NIST Cybersecurity Framework", use: "Identify, protect, detect, respond, recover.", limit: "Design grid, not an audit.", decision: "When access and residency are set.", url: "https://www.nist.gov/cyberframework" },
  { name: "Stanford HAI", use: "State of AI, measured.", limit: "Not a vendor score.", decision: "When a use case is fashionable rather than useful.", url: "https://hai.stanford.edu/" },
  { name: "Stanford HELM", use: "Public model evaluations and their methods.", limit: "A benchmark is not your process.", decision: "When a model choice needs a cited limit.", url: "https://crfm.stanford.edu/helm/" },
  { name: "MIT", use: "Operations research and systems work.", limit: "Method, not a solver that replaces judgment.", decision: "When a constraint can be formulated.", url: "https://www.mit.edu/" },
  { name: "Model Context Protocol", use: "Explicit tool and data connection.", limit: "A protocol, not a product we sell.", decision: "When an agent is given tools.", url: "https://modelcontextprotocol.io/" },
] as const;
