import { useState } from "react";

const NAV = [
  { id: "map", label: "Enterprise Map" },
  { id: "layers", label: "Architecture" },
  { id: "roadmap", label: "Roadmap" },
  { id: "decisions", label: "Decisions" },
] as const;

type View = (typeof NAV)[number]["id"];

const CHAIN = [
  { name: "Commercial", detail: "Quote prepared", system: "CRM", note: "Price stays with a person", constraint: false },
  { name: "Planning", detail: "Capacity checked", system: "ERP", note: "Depends on the floor", constraint: false },
  { name: "Production", detail: "Schedule blocked", system: "Planning", note: "Constraint · 11 days", constraint: true },
  { name: "Fulfillment", detail: "Waiting on release", system: "Warehouse", note: "No link from the floor", constraint: false },
  { name: "Finance", detail: "Invoice on shipment", system: "Ledger", note: "Cash follows delivery", constraint: false },
] as const;

const LAYERS = [
  ["Organization", "Commercial owns the quote. Production owns the schedule. Finance owns the cash."],
  ["Processes", "Order → quote → capacity → release → shipment → invoice."],
  ["Data", "One order. One stock figure. One price. Named owners."],
  ["Systems", "CRM, ERP, warehouse, ledger. What stays. What must connect."],
  ["Agents", "May read status and draft. May not change a price or release a shipment."],
  ["Security", "Access by role. Agent actions logged. Residency stated."],
] as const;

const ROADMAP = [
  ["Days 1–3", "Dossier", "Scope, constraints, open questions"],
  ["Days 4–7", "Current map", "The break between Production and Fulfillment"],
  ["Days 8–11", "Target", "Connected chain, agent boundaries, security"],
  ["Days 12–14", "Blueprint", "Roadmap, decisions, EXIOR Space"],
] as const;

const DECISIONS = [
  ["Read order status", "Agent", "Allowed"],
  ["Draft the quote", "Agent", "Allowed"],
  ["Change the price", "Person", "Refused"],
  ["Release the shipment", "Person", "Refused"],
] as const;

export function SpaceFrame({ initial = "map" }: { initial?: View }) {
  const [view, setView] = useState<View>(initial);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0c0d0e] text-left shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <img src="/visuals/logo.jpg" alt="" className="size-6 object-contain" />
        <p className="text-sm font-medium">EXIOR Space</p>
        <p className="text-xs text-faint">Meridian · Day 14</p>
        <span className="ml-auto rounded-full border border-accent-fill/60 px-2.5 py-1 text-[11px] text-fg">Blueprint</span>
      </div>
      <div className="grid min-h-[28rem] md:grid-cols-[11rem_1fr]">
        <nav className="flex gap-1 overflow-x-auto border-b border-line p-2 md:flex-col md:border-b-0 md:border-r md:p-3">
          {NAV.map((item) => {
            const on = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={
                  on
                    ? "shrink-0 rounded-lg border border-accent-fill/50 px-3 py-2 text-left text-sm text-fg"
                    : "shrink-0 rounded-lg border border-transparent px-3 py-2 text-left text-sm text-muted hover:text-fg"
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 md:p-5">
          {view === "map" ? <MapView /> : null}
          {view === "layers" ? <LayersView /> : null}
          {view === "roadmap" ? <RoadmapView /> : null}
          {view === "decisions" ? <DecisionsView /> : null}
        </div>
      </div>
    </div>
  );
}

function MapView() {
  return (
    <div>
      <p className="text-xs text-faint">One order · five functions</p>
      <ol className="mt-4">
        {CHAIN.map((step, i) => (
          <li key={step.name} className="grid grid-cols-[1.25rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span className={step.constraint ? "mt-4 size-2 rounded-full bg-accent-fill" : "mt-4 size-2 rounded-full bg-line"} />
              {i < CHAIN.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
            </div>
            <div className={step.constraint ? "mb-2 rounded-xl border border-accent-fill/60 p-3" : "mb-2 rounded-xl border border-line p-3"}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium">{step.name}</p>
                <p className="text-xs text-faint">{step.system}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
              <p className="mt-2 text-xs text-muted">{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LayersView() {
  return (
    <div>
      <p className="text-xs text-faint">Six layers · one architecture</p>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
        {LAYERS.map(([name, text], i) => (
          <li key={name} className="grid gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:items-baseline">
            <p className="text-sm font-medium">
              <span className="mr-2 text-xs text-faint">0{i + 1}</span>
              {name}
            </p>
            <p className="text-sm text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoadmapView() {
  return (
    <div>
      <p className="text-xs text-faint">Fourteen days · four outputs</p>
      <ol className="mt-4 space-y-3">
        {ROADMAP.map(([when, title, text], i) => (
          <li key={when} className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-xl border border-line p-3">
            <p className="text-xs text-muted">{when}</p>
            <div>
              <p className="text-sm font-medium">
                <span className="mr-2 text-xs text-faint">0{i + 1}</span>
                {title}
              </p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DecisionsView() {
  return (
    <div>
      <p className="text-xs text-faint">Agent boundary · price and release stay human</p>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
        {DECISIONS.map(([action, owner, verdict]) => (
          <li key={action} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3 text-sm">
            <span>{action}</span>
            <span className="text-xs text-faint">{owner}</span>
            <span className={verdict === "Refused" ? "text-xs text-fg" : "text-xs text-muted"}>{verdict}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
