import { useState } from "react";
import { compareHeads, compareRows, harnesses, processes } from "@/lib/library";

export function ProcessLab() {
  const [pid, setPid] = useState<(typeof processes)[number]["id"]>(processes[0].id);
  const [step, setStep] = useState(0);
  const current = processes.find((item) => item.id === pid) ?? processes[0];
  const row = current.steps[step] ?? current.steps[0];

  function choose(id: (typeof processes)[number]["id"]) {
    setPid(id);
    setStep(0);
  }

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {processes.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === current.id}
            onClick={() => choose(item.id)}
            className={
              item.id === current.id
                ? "shrink-0 rounded-full bg-fg px-4 py-2 text-sm text-bg"
                : "shrink-0 rounded-full border border-line px-4 py-2 text-sm text-muted"
            }
          >
            {item.title}
          </button>
        ))}
      </div>
      <p className="text-xs uppercase tracking-widest text-faint">{current.setting}</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{current.why}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <div className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
          {current.steps.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={index === step}
              onClick={() => setStep(index)}
              className={
                index === step
                  ? "min-h-11 shrink-0 rounded-md border border-accent bg-surface px-4 py-3 text-left text-sm lg:w-full"
                  : "min-h-11 shrink-0 rounded-md border border-line px-4 py-3 text-left text-sm lg:w-full"
              }
            >
              <span className="text-xs text-accent">0{index + 1}</span>
              <span className="mt-1 block font-medium">{item.name}</span>
            </button>
          ))}
        </div>
        <div key={`${current.id}-${step}`} className="panel-in rounded-lg border border-line bg-bg p-6 lg:col-span-8">
          <h3 className="text-2xl font-semibold">{row.name}</h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Entrée", row.input],
              ["Sortie", row.output],
              ["Exception", row.exception],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-faint">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <dl className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {[
          ["Objectif", current.objective],
          ["Variables", current.variables],
          ["Contraintes", current.constraints],
          ["Reste humain", current.human],
        ].map(([k, v]) => (
          <div key={k} className="bg-bg-2 p-4">
            <dt className="text-xs uppercase tracking-widest text-accent">{k}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function HarnessBench() {
  const [id, setId] = useState<(typeof harnesses)[number]["id"]>(harnesses[0].id);
  const current = harnesses.find((item) => item.id === id) ?? harnesses[0];
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
        {harnesses.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === current.id}
            onClick={() => setId(item.id)}
            className={
              item.id === current.id
                ? "min-h-11 shrink-0 rounded-md border border-accent bg-surface px-4 py-3 text-left lg:w-full"
                : "min-h-11 shrink-0 rounded-md border border-line px-4 py-3 text-left lg:w-full"
            }
          >
            <span className="block text-sm font-medium">{item.title}</span>
            <span className="mt-1 hidden text-xs text-muted lg:block">{item.when}</span>
          </button>
        ))}
      </div>
      <article key={current.id} className="panel-in rounded-lg border border-line bg-surface p-6 lg:col-span-8">
        <h3 className="text-2xl font-semibold">{current.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{current.role}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-faint">Outils autorisés</p>
            <ul className="mt-2 space-y-2 text-sm">
              {current.tools.map((tool) => (
                <li key={tool} className="border-t border-line pt-2">{tool}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p><span className="text-faint">Sortie. </span>{current.output}</p>
            <p><span className="text-faint">Porte humaine. </span>{current.gate}</p>
            <p><span className="text-faint">Arrêt. </span>{current.stop}</p>
            <p><span className="text-faint">Trace. </span>{current.trace}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-bg-2">
            <th className="px-4 py-3 font-medium text-faint"> </th>
            {compareHeads.map((head) => (
              <th key={head} className={head === "EXIOR" ? "px-4 py-3 font-semibold text-accent" : "px-4 py-3 font-medium"}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row) => (
            <tr key={row.topic} className="border-b border-line last:border-0">
              <th className="px-4 py-3 font-medium">{row.topic}</th>
              {row.cells.map((cell, index) => (
                <td key={cell} className={index === 0 ? "px-4 py-3 text-fg" : "px-4 py-3 text-muted"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
