import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Enterprise Architecture & AI Resources | EXIOR" },
      { name: "description", content: "Explore the economic research, enterprise architecture methods, AI standards, and security frameworks informing EXIOR transformation plans." },
    ],
  }),
  component: Resources,
});

const CASES = {
  Manufacturing: { current: "Customer commitments are disconnected from available production capacity.", target: "Connect order and capacity information before quotation approval.", ai: "Draft status summaries and proposed quotation text.", human: "Approve price and lead time." },
  Distribution: { current: "Stock and purchasing data disagree across channels.", target: "Define one authoritative inventory source and priority integrations.", ai: "Flag exceptions for review.", human: "Approve purchase commitments." },
  Services: { current: "Client information moves through email and document handoffs.", target: "Create a governed intake, validation and review flow.", ai: "Classify authorized documents and prepare drafts.", human: "Approve deliverables." },
  Logistics: { current: "Dispatch and service promises lack a consistent capacity picture.", target: "Connect routing, scheduling and operations status.", ai: "Summarize exceptions.", human: "Approve commitments and escalations." },
} as const;

const SOURCES = [
  { name: "IMF", purpose: "Macroeconomic outlook", relevance: "Context for capacity and investment decisions", limit: "Not a forecast of your results", url: "https://www.imf.org/" },
  { name: "World Bank", purpose: "Development and industry data", relevance: "Sector context", limit: "Not company-specific", url: "https://www.worldbank.org/" },
  { name: "OECD", purpose: "Policy and productivity research", relevance: "Operating environment", limit: "Not a recommendation", url: "https://www.oecd.org/" },
  { name: "NIST AI RMF", purpose: "AI risk management", relevance: "Governance design", limit: "Does not confer certification", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  { name: "NIST CSF", purpose: "Cybersecurity framework", relevance: "Control design", limit: "Does not confer certification", url: "https://www.nist.gov/cyberframework" },
  { name: "Stanford HAI", purpose: "AI research", relevance: "Capability context", limit: "Critically assessed", url: "https://hai.stanford.edu/" },
  { name: "OWASP", purpose: "Application security", relevance: "Threat patterns", limit: "Not a project result", url: "https://owasp.org/" },
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
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs tracking-[0.16em] text-muted">RESOURCES</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">Enterprise transformation demands a wider perspective.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">Economic research, enterprise architecture methods, AI standards and security frameworks inform the plan. None of them replace the analysis of your business.</p>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">APPLIED TO YOUR BUSINESS</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Different industries. Different constraints. One coherent design method.</h2>
            <p className="mt-5 max-w-2xl text-muted">A manufacturing bottleneck, a distribution stock issue, a document-heavy service process and a finance review workflow require different architectures. EXIOR starts with the actual value chain and defines the transformations that fit it.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(Object.keys(CASES) as (keyof typeof CASES)[]).map((k) => (
                <button key={k} type="button" onClick={() => setFilter(k)} className={k === filter ? "rounded-full border border-accent-fill/60 px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>{k}</button>
              ))}
            </div>
            <dl className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">Current friction</dt><dd className="mt-2 text-sm">{c.current}</dd></div>
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">Target architecture</dt><dd className="mt-2 text-sm">{c.target}</dd></div>
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">AI opportunity</dt><dd className="mt-2 text-sm">{c.ai}</dd></div>
              <div className="rounded-2xl border border-line p-5"><dt className="text-xs text-faint">Human decision</dt><dd className="mt-2 text-sm">{c.human}</dd></div>
            </dl>
            <p className="mt-3 text-xs text-faint">Illustrative patterns, not client results.</p>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">SOURCES</p>
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
                  <button type="button" onClick={() => setOpen(i)} className="flex w-full items-center justify-between py-4 text-left text-sm">{t}<span className="text-faint">{open === i ? "−" : "+"}</span></button>
                  {open === i ? <p className="pb-4 text-sm text-muted">{d}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <p className="text-xs tracking-[0.16em] text-muted">THE ARCHITECTURE BEHIND YOUR NEXT MOVE</p>
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
