const CHAIN = [
  { name: "Demand", owns: "Who asks", system: "Customer record", constraint: false },
  { name: "Commit", owns: "Who may say yes", system: "Quote, kept by a person", constraint: false },
  { name: "Produce", owns: "What the floor can do", system: "Capacity and schedule", constraint: true },
  { name: "Deliver", owns: "What leaves", system: "Stock and shipment", constraint: false },
  { name: "Collect", owns: "What is owed", system: "Invoice and cash", constraint: false },
] as const;

const LAYERS = [
  ["Organization", "Who decides, and with whom"],
  ["Processes", "The order, from ask to cash"],
  ["Data", "One definition for order, stock, price"],
  ["Systems", "What stays, what connects"],
  ["Agents", "What may be prepared, never approved"],
  ["Security", "Who can see, and where it lives"],
] as const;

export function EnterpriseModel({ mode = "target" }: { mode?: "today" | "target" }) {
  const broken = mode === "today";
  return (
    <div className="rounded-2xl border border-line bg-[#101113] p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm text-fg">{broken ? "The company today" : "The company, modeled"}</p>
        <p className="text-xs text-faint">{broken ? "The path breaks" : "One order"}</p>
      </div>
      <ol className="mt-6 grid gap-3 sm:grid-cols-5">
        {CHAIN.map((step, i) => (
          <li
            key={step.name}
            className={
              step.constraint
                ? "rounded-xl border border-accent-fill/70 bg-surface p-3"
                : "rounded-xl border border-line p-3"
            }
          >
            <p className="text-[11px] text-faint">0{i + 1}</p>
            <p className="mt-2 text-sm font-medium">{step.name}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{step.owns}</p>
            <p className="mt-3 border-t border-line pt-3 text-xs text-fg">{step.system}</p>
            {step.constraint ? <p className="mt-2 text-[11px] text-muted">Constraint</p> : null}
            {broken && i === 2 ? <p className="mt-2 text-[11px] text-faint">No link to delivery</p> : null}
          </li>
        ))}
      </ol>
      {!broken ? (
        <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {LAYERS.map(([name, text]) => (
            <div key={name} className="bg-[#101113] px-3 py-3">
              <dt className="text-xs text-fg">{name}</dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
