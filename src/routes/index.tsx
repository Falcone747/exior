import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";
import { QuoteHarness, SpaceStage } from "@/components/site/visuals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXIOR | Enterprise Transformation Plan — $499" },
      {
        name: "description",
        content:
          "A personalized enterprise transformation plan, target architecture, implementation roadmap and EXIOR Space. $499. Delivered in 14 days after complete intake. Technical deployment is separate.",
      },
    ],
  }),
  component: Home,
});

const LAYERS = [
  { id: "org", name: "Organization", line: "Define who owns each capability, decision, and handoff.", detail: "Target functions, accountabilities, interfaces and decision cadence.", ex: "Meridian: Commercial owns the quote. Production owns the schedule." },
  { id: "proc", name: "Processes", line: "Redesign how work flows from demand to delivery.", detail: "Inputs, exceptions, bottlenecks, rules and target workflows.", ex: "Meridian: capacity is checked before a delivery date is promised." },
  { id: "data", name: "Data", line: "Give critical business information a reliable structure.", detail: "Authoritative sources, business objects, ownership and data flows.", ex: "Meridian: one owner each for order, stock and price." },
  { id: "sys", name: "Systems", line: "Connect the technology your operations depend on.", detail: "Applications to retain, integrate, modernize or retire.", ex: "Meridian: CRM, ERP, warehouse and ledger stay. The missing piece is a capacity signal." },
  { id: "ai", name: "AI Agents", line: "Specify intelligent capabilities where they make operational sense.", detail: "Selected use cases, authorized tools, verification and human approval.", ex: "Meridian: a quote-draft agent reads. A person sets the price." },
  { id: "sec", name: "Security", line: "Build control and traceability into the design.", detail: "Permissions, residency requirements, activity logs and intervention rules.", ex: "Meridian: least privilege, a log, a stop, and a named place for the data." },
] as const;

const INCLUDED = ["Enterprise analysis", "Target architecture", "Process priorities", "Agent specifications", "Security requirements", "Prioritized roadmap", "Personalized EXIOR Space"];
const SEPARATE = ["Software development", "System integration", "Data migration", "Live agent deployment", "Ongoing operations", "Certification or legal advice"];

function Home() {
  const [layer, setLayer] = useState(4);
  const [side, setSide] = useState<"current" | "target">("current");
  const L = LAYERS[layer];

  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-12 pt-8 lg:grid-cols-[0.84fr_1.16fr] lg:pt-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">EXIOR / ENTERPRISE TRANSFORMATION</p>
            <h1 className="mt-3 text-[2rem] font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl">Transform your enterprise. Start with the blueprint.</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              EXIOR designs the next version of your business — its organization, processes, systems, data, and AI capabilities — as one connected architecture. Get a personalized plan showing exactly what to change, how it fits together, and where to begin.
            </p>
            <p className="mt-4 text-sm">$499 · Personalized plan · Delivered in 14 days after complete intake</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
              <a href="#espace" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">
                Explore a Sample Blueprint
              </a>
            </div>
            <p className="mt-3 text-xs text-faint">Business analysis · Target architecture · Prioritized roadmap · EXIOR Space</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-faint">Meridian — Illustrative Example</p>
            <SpaceStage compact />
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">THE COST OF DISCONNECTED DECISIONS</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Every new tool changes the business around it.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A new platform affects how people work. A new automation changes a process. An AI agent relies on data, permissions, and decisions that may not be ready. When these changes happen independently, complexity grows faster than the business becomes stronger.
            </p>
            <p className="mt-3 text-sm">The advantage comes from designing how everything works together.</p>
            <div className="mt-6 flex gap-2 md:hidden">
              <button type="button" onClick={() => setSide("current")} className={side === "current" ? "rounded-full border border-accent-fill px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>Current</button>
              <button type="button" onClick={() => setSide("target")} className={side === "target" ? "rounded-full border border-accent-fill px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>Target</button>
            </div>
            <div className="mt-6 grid gap-px bg-line md:grid-cols-2">
              <article className={side === "target" ? "hidden bg-bg p-6 md:block" : "bg-bg p-6"}>
                <p className="text-[11px] uppercase tracking-[0.16em] text-faint">Current enterprise</p>
                <h3 className="mt-3 text-xl">Disconnected operations. Delayed decisions.</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Customer promises made before capacity is visible.</li>
                  <li>Critical data distributed across systems.</li>
                  <li>Manual handoffs slow execution.</li>
                </ul>
                <p className="mt-4 text-xs text-faint">Today: fragmented responsibilities, late signals, manual handoffs.</p>
              </article>
              <article className={side === "current" ? "hidden bg-bg p-6 md:block" : "bg-bg p-6"}>
                <p className="text-[11px] uppercase tracking-[0.16em] text-faint">Target architecture</p>
                <h3 className="mt-3 text-xl">Connected information. Clear decision rights.</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Capacity informs customer commitments.</li>
                  <li>Business objects have defined owners and sources.</li>
                  <li>People, systems and agents operate within shared rules.</li>
                </ul>
                <p className="mt-4 text-xs text-faint">Target: shared processes, clear ownership, governed intelligence.</p>
              </article>
            </div>
            <p className="mt-4 text-xs text-faint">Illustrative operating model: Meridian</p>
            <a href="#architecture" className="mt-4 inline-flex text-sm">See the target architecture</a>
          </div>
        </section>

        <section id="architecture" className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.36fr_0.64fr] md:py-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">FROM STRATEGY TO EXECUTION</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Design the whole enterprise, not isolated improvements.</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Your future operating model, processes, information, applications, AI agents, and controls are interdependent. EXIOR defines the relationships so each planned change strengthens the architecture rather than creating another exception.
              </p>
              <ul className="mt-6 space-y-2">
                {LAYERS.map((l, i) => (
                  <li key={l.id}>
                    <button type="button" onClick={() => setLayer(i)} className={i === layer ? "w-full rounded-xl border border-accent-fill px-3 py-2 text-left text-sm" : "w-full rounded-xl border border-line px-3 py-2 text-left text-sm text-muted"}>
                      0{i + 1} {l.name}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm">Know what stays. What connects. What changes first.</p>
              <Link to="/method" className="mt-4 inline-flex text-sm">Explore How It Works</Link>
            </div>
            <div className="rounded-2xl border border-line bg-bg-2 p-6">
              <p className="text-xs text-faint">0{layer + 1} · Meridian — Illustrative Example</p>
              <h3 className="mt-2 text-2xl">{L.name}</h3>
              <p className="mt-4 text-lg">{L.line}</p>
              <p className="mt-3 text-muted">{L.detail}</p>
              <p className="mt-4 text-sm">{L.ex}</p>
              {L.id === "ai" ? <div className="mt-6"><QuoteHarness /></div> : null}
            </div>
          </div>
        </section>

        <section id="espace" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">YOUR EXIOR SPACE</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">See the entire transformation. Understand every decision.</h2>
            <p className="mt-5 max-w-2xl text-muted">Your EXIOR Space brings the enterprise map, target architecture, implementation priorities and open decisions together.</p>
            <div className="mt-8">
              <SpaceStage />
            </div>
          </div>
        </section>

        <section id="deliverables" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">SEE WHAT YOU'RE BUYING</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Your company's future architecture. Made visible.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-12">
              <article className="rounded-2xl border border-line p-5 md:col-span-7">
                <h3 className="text-lg">Enterprise analysis</h3>
                <p className="mt-2 text-sm text-muted">How the company actually runs. Meridian — Illustrative Example: quotes leave before capacity is known.</p>
              </article>
              <article className="rounded-2xl border border-line p-5 md:col-span-5">
                <h3 className="text-lg">Target architecture</h3>
                <p className="mt-2 text-sm text-muted">Organization, processes, data, systems and AI in one design.</p>
              </article>
              <article className="rounded-2xl border border-line p-5 md:col-span-4"><h3>Process priorities</h3><p className="mt-2 text-sm text-muted">The 11-day scheduling constraint, before any new platform.</p></article>
              <article className="rounded-2xl border border-line p-5 md:col-span-4"><h3>Data ownership</h3><p className="mt-2 text-sm text-muted">One source for order, stock, price and cash.</p></article>
              <article className="rounded-2xl border border-line p-5 md:col-span-4"><h3>Roadmap</h3><p className="mt-2 text-sm text-muted">Foundation, connect, govern, then a human gate before any pilot.</p></article>
              <article className="rounded-2xl border border-line p-5 md:col-span-7">
                <h3 className="text-lg">Agent specifications</h3>
                <div className="mt-4"><QuoteHarness compact /></div>
              </article>
              <article className="rounded-2xl border border-line p-5 md:col-span-5">
                <h3 className="text-lg">Security requirements</h3>
                <p className="mt-2 text-sm text-muted">Least privilege, residency, an activity log, and a stop if the agent tries to write.</p>
                <h3 className="mt-6 text-lg">EXIOR Space</h3>
                <p className="mt-2 text-sm text-muted">The plan, in one place your team can reopen.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-b border-line">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">THE PLAN</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">One plan. One price. A clear next step.</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-faint">Included</p>
                  <ul className="mt-3 space-y-2 text-sm">{INCLUDED.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-faint">Separate</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">{SEPARATE.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-bg-2 p-6">
              <p className="text-5xl font-medium tracking-tight">$499</p>
              <p className="mt-2 text-sm text-muted">One-time · Delivered in 14 days after your complete dossier</p>
              <Link to="/offre" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
              <p className="mt-4 text-sm">The plan is designed. The systems are not deployed for $499.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">Start with the architecture that connects the decisions, systems, and capabilities behind your transformation.</h2>
          <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
            Get My Transformation Plan — $499
          </Link>
          <p className="mt-4 text-sm text-muted">Your plan. Your priorities. Your decision.</p>
        </section>
      </main>
    </Shell>
  );
}
