import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Enterprise Architecture & AI Resources | EXIOR" },
      { name: "description", content: "Economic research, enterprise architecture methods, AI standards and security frameworks used to inform an EXIOR transformation plan." },
    ],
  }),
  component: Resources,
});

const PILLARS = [
  { k: "Strategy", h: "Build around the capabilities that determine competitiveness.", p: "A tool decision is a strategy decision when it changes who can promise, produce, or get paid.", c: "Sequence the change that protects the constraint, not the tool that is newest." },
  { k: "Operations", h: "Connect accountability to the work that creates value.", p: "Handoffs fail between functions, not inside a job description.", c: "Name the owner of the promise before automating the promise." },
  { k: "Data", h: "Make information dependable across the enterprise.", p: "Two stock figures produce two decisions. One source of truth is a design choice.", c: "Assign an owner to order, stock, price and cash before an agent reads them." },
  { k: "AI", h: "Give AI a precise role in your operating model.", p: "An agent that can draft is useful. An agent that can commit a date is a control failure.", c: "Specify read, draft, stop and the human who still decides." },
  { k: "Governance", h: "Make the rules visible before technology scales.", p: "Least privilege, classification, a log and a human approval belong in the architecture, not in a later policy deck.", c: "The blueprint names the controls. It does not issue a certification." },
] as const;

const CASES = {
  Manufacturing: { current: "Customer commitments are disconnected from available production capacity.", target: "Connect order and capacity information before quotation approval.", ai: "Draft status summaries and proposed quotation text.", human: "Approve price and lead time." },
  Distribution: { current: "Stock and purchasing data disagree across channels.", target: "Define one authoritative inventory source and priority integrations.", ai: "Flag exceptions for review.", human: "Approve purchase commitments." },
  Services: { current: "Client information moves through email and document handoffs.", target: "Create a governed intake, validation and review flow.", ai: "Classify authorized documents and prepare drafts.", human: "Approve deliverables." },
  Logistics: { current: "Dispatch and service promises lack a consistent capacity picture.", target: "Connect routing, scheduling and operations status.", ai: "Summarize exceptions.", human: "Approve commitments and escalations." },
} as const;

const SOURCES = [
  { name: "IMF", purpose: "Macroeconomic outlook", relevance: "Context when an investment holds in only one scenario", limit: "Not a forecast of your results", url: "https://www.imf.org/" },
  { name: "World Bank", purpose: "Development, trade and sector series", relevance: "A public check on a market assumption", limit: "Not company-specific", url: "https://www.worldbank.org/" },
  { name: "OECD", purpose: "Comparable indicators and policy notes", relevance: "Operating-environment context", limit: "Not a recommendation for one firm", url: "https://www.oecd.org/" },
  { name: "NIST AI RMF", purpose: "AI risk management", relevance: "How a specified agent use is governed", limit: "Does not confer certification", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  { name: "NIST CSF", purpose: "Cybersecurity framework", relevance: "Access, detection and response in the design", limit: "Does not confer certification", url: "https://www.nist.gov/cyberframework" },
  { name: "Stanford HAI", purpose: "Measured state of AI", relevance: "Whether a use case is useful or only fashionable", limit: "Critically assessed. Not a vendor score", url: "https://hai.stanford.edu/" },
  { name: "OWASP", purpose: "Application security patterns", relevance: "Threats to name before a tool is connected", limit: "Not a project result", url: "https://owasp.org/" },
  { name: "Model Context Protocol", purpose: "A protocol for tools and context", relevance: "How a specified agent is given named sources", limit: "A protocol, not a product EXIOR sells", url: "https://modelcontextprotocol.io/" },
] as const;

const GLOSSARY = [
  ["Enterprise Architecture", "The design of how functions, processes, data and systems fit together."],
  ["Target Operating Model", "The future arrangement of capabilities, decisions, people and operational workflows."],
  ["Business Capability", "A repeatable outcome your business needs to deliver, separate from any specific tool."],
  ["Source of Truth", "The agreed authoritative record or owner for a critical data object."],
  ["Agent Harness", "The explicit objectives, context, permissions, verification and stop rules around an AI agent."],
  ["Model Context Protocol", "An open protocol that supports connecting AI applications to tools and context sources."],
  ["Operations Research", "Methods for modeling and improving decisions under constraints."],
  ["Least Privilege", "Granting only the access needed for an authorized responsibility."],
  ["Decision Gate", "A point where a designated person must verify or authorize a consequential step."],
  ["Data Residency", "Where information is stored, processed and accessed."],
] as const;

function Resources() {
  const [filter, setFilter] = useState<keyof typeof CASES>("Manufacturing");
  const [open, setOpen] = useState(0);
  const c = CASES[filter];
  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">RESOURCES</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">Enterprise transformation demands a wider perspective.</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">Economic research, architecture methods, AI standards and security frameworks inform the plan. None of them replace the analysis of your business.</p>
          </div>
          <img src="/visuals/case-direction.jpg" alt="" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[14rem_1fr] md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">How evidence is used</p>
            <ul className="divide-y divide-line border-y border-line">
              {PILLARS.map((item) => (
                <li key={item.k} className="grid gap-3 py-6 md:grid-cols-[9rem_1fr]">
                  <p className="text-xs uppercase tracking-widest text-faint">{item.k}</p>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">{item.h}</h2>
                    <p className="mt-2 text-sm text-muted">{item.p}</p>
                    <p className="mt-2 text-sm">{item.c}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">APPLIED TO YOUR BUSINESS</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Different industries. Different constraints. One coherent design method.</h2>
            <p className="mt-5 max-w-2xl text-muted">A manufacturing bottleneck, a distribution stock issue, a document-heavy service process and a logistics promise require different architectures. The method starts with the value chain.</p>
            <div className="mt-6 flex flex-wrap gap-2" role="tablist">
              {(Object.keys(CASES) as (keyof typeof CASES)[]).map((k) => (
                <button key={k} type="button" role="tab" aria-selected={k === filter} onClick={() => setFilter(k)} className={k === filter ? "rounded-full border border-accent-fill px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>{k}</button>
              ))}
            </div>
            <dl className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">Current friction</dt><dd className="mt-2 text-sm">{c.current}</dd></div>
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">Target architecture</dt><dd className="mt-2 text-sm">{c.target}</dd></div>
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">AI opportunity</dt><dd className="mt-2 text-sm">{c.ai}</dd></div>
              <div className="rounded-2xl border border-accent-fill p-5"><dt className="text-xs text-faint">Human decision</dt><dd className="mt-2 text-sm">{c.human}</dd></div>
            </dl>
            <p className="mt-3 text-xs text-faint">Illustrative patterns, not client results. Meridian — Illustrative Example is the manufacturing case.</p>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">SOURCES</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Use evidence that changes a decision.</h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {SOURCES.map((s) => (
                <li key={s.name} className="rounded-2xl border border-line p-5 text-sm">
                  <p className="text-xs text-faint">SOURCE</p>
                  <p className="mt-1 font-medium">{s.name}</p>
                  <p className="mt-3 text-xs text-faint">PURPOSE</p>
                  <p>{s.purpose}</p>
                  <p className="mt-3 text-xs text-faint">RELEVANCE</p>
                  <p>{s.relevance}</p>
                  <p className="mt-3 text-xs text-faint">LIMITATION</p>
                  <p>{s.limit}</p>
                  <a href={s.url} className="mt-3 inline-flex text-sm text-muted" target="_blank" rel="noreferrer">{s.url}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">The concepts behind a connected enterprise.</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {GLOSSARY.map(([t, d], i) => (
                <li key={t}>
                  <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between py-4 text-left text-sm">{t}<span className="text-faint">{open === i ? "−" : "+"}</span></button>
                  {open === i ? <p className="pb-4 text-sm text-muted">{d}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">THE ARCHITECTURE BEHIND YOUR NEXT MOVE</p>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Turn enterprise complexity into a clear direction.</h2>
          <p className="mt-5 text-muted">EXIOR brings the analysis, design and prioritization together in one plan tailored to your business.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/offre" className="inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">Get My Transformation Plan — $499</Link>
            <Link to="/method" className="text-sm text-muted">See the Method</Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
