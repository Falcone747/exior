import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";
import { SpaceStage } from "@/components/site/visuals";

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
  { id: "org", name: "Organization", line: "Define who owns each capability, decision, and handoff.", detail: "Target functions, accountabilities, interfaces and decision cadence." },
  { id: "proc", name: "Processes", line: "Redesign how work flows from demand to delivery.", detail: "Inputs, exceptions, bottlenecks, rules and target workflows." },
  { id: "data", name: "Data", line: "Give critical business information a reliable structure.", detail: "Authoritative sources, business objects, ownership and data flows." },
  { id: "sys", name: "Systems", line: "Connect the technology your operations depend on.", detail: "Applications to retain, integrate, modernize or retire." },
  { id: "ai", name: "AI Agents", line: "Specify intelligent capabilities where they make operational sense.", detail: "Selected use cases, authorized tools, verification and human approval." },
  { id: "sec", name: "Security", line: "Build control and traceability into the design.", detail: "Permissions, residency requirements, activity logs and intervention rules." },
] as const;

const DELIVERABLES = [
  { t: "Enterprise analysis", d: "How the business actually runs.", span: "md:col-span-7" },
  { t: "Target architecture", d: "Organization, processes, data, systems and AI in one design.", span: "md:col-span-5" },
  { t: "Process priorities", d: "The constraints that matter first." },
  { t: "Data ownership", d: "One source of truth per object." },
  { t: "Roadmap", d: "Order, prerequisites, human gates." },
  { t: "Security requirements", d: "Permissions, audit, intervention." },
  { t: "Context", d: "Economic and industry intelligence relevant to the decision." },
] as const;

function Home() {
  const [layer, setLayer] = useState(0);
  const [side, setSide] = useState<"current" | "target">("current");
  const L = LAYERS[layer];

  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:pt-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs tracking-[0.16em] text-muted">EXIOR / ENTERPRISE TRANSFORMATION</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">Transform your enterprise. Start with the blueprint.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              EXIOR designs the next version of your business — its organization, processes, systems, data, and AI capabilities — as one connected architecture. Get a personalized plan showing exactly what to change, how it fits together, and where to begin.
            </p>
            <p className="mt-4 text-sm text-muted">Make your next technology and transformation decisions with a clear architecture behind them.</p>
            <p className="mt-5 text-sm">$499 · Personalized plan · Delivered in 14 days after complete intake</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
              <a href="#espace" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">
                Explore a Sample Blueprint
              </a>
            </div>
            <p className="mt-4 text-xs text-faint">Business analysis · Target architecture · Prioritized roadmap · EXIOR Space</p>
          </div>
          <div id="espace">
            <p className="mb-2 text-xs text-faint">Inside EXIOR Space · Meridian — Illustrative Example</p>
            <SpaceStage />
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">THE COST OF DISCONNECTED DECISIONS</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Every new tool changes the business around it.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A new platform affects how people work. A new automation changes a process. An AI agent relies on data, permissions, and decisions that may not be ready. When these changes happen independently, complexity grows faster than the business becomes stronger.
            </p>
            <p className="mt-3 text-sm">The advantage comes from designing how everything works together.</p>
            <div className="mt-6 flex gap-2 md:hidden">
              <button type="button" onClick={() => setSide("current")} className={side === "current" ? "rounded-full border border-accent-fill/60 px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>Current</button>
              <button type="button" onClick={() => setSide("target")} className={side === "target" ? "rounded-full border border-accent-fill/60 px-3 py-1 text-sm" : "rounded-full border border-line px-3 py-1 text-sm text-muted"}>Target</button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className={side === "target" ? "hidden rounded-2xl border border-line p-5 md:block" : "rounded-2xl border border-line p-5"}>
                <p className="text-xs text-faint">CURRENT ENTERPRISE</p>
                <h3 className="mt-3 text-lg">Disconnected operations. Delayed decisions.</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Customer promises made before capacity is visible.</li>
                  <li>Critical data distributed across systems.</li>
                  <li>Manual handoffs slow execution.</li>
                </ul>
                <p className="mt-4 text-xs text-faint">Today: fragmented responsibilities, late signals, manual handoffs.</p>
              </article>
              <article className={side === "current" ? "hidden rounded-2xl border border-accent-fill/40 p-5 md:block" : "rounded-2xl border border-accent-fill/40 p-5"}>
                <p className="text-xs text-faint">TARGET ARCHITECTURE</p>
                <h3 className="mt-3 text-lg">Connected information. Clear decision rights.</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Capacity informs customer commitments.</li>
                  <li>Business objects have defined owners and sources.</li>
                  <li>People, systems and agents operate within shared rules.</li>
                </ul>
                <p className="mt-4 text-xs text-faint">Target: connected processes, clear ownership, governed intelligence.</p>
              </article>
            </div>
            <p className="mt-4 text-xs text-faint">Illustrative operating model: Meridian</p>
            <a href="#architecture" className="mt-4 inline-flex text-sm">See the target architecture</a>
          </div>
        </section>

        <section id="architecture" className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.38fr_0.62fr] md:py-24">
            <div>
              <p className="text-xs tracking-[0.16em] text-muted">FROM STRATEGY TO EXECUTION</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Design the whole enterprise, not isolated improvements.</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Your future operating model, processes, information, applications, AI agents, and controls are interdependent. EXIOR defines the relationships so each planned change strengthens the architecture rather than creating another exception.
              </p>
              <ul className="mt-6 space-y-2">
                {LAYERS.map((l, i) => (
                  <li key={l.id}>
                    <button type="button" onClick={() => setLayer(i)} className={i === layer ? "w-full rounded-xl border border-accent-fill/60 px-3 py-2 text-left text-sm" : "w-full rounded-xl border border-line px-3 py-2 text-left text-sm text-muted"}>
                      0{i + 1} {l.name}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm">Know what stays. What connects. What changes first.</p>
              <Link to="/method" className="mt-4 inline-flex text-sm">Explore How It Works</Link>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <p className="text-xs text-faint">0{layer + 1}</p>
              <h3 className="mt-2 text-2xl">{L.name}</h3>
              <p className="mt-4 text-lg">{L.line}</p>
              <p className="mt-3 text-muted">{L.detail}</p>
              <p className="mt-6 text-sm">A coherent operating architecture. A practical basis for transformation.</p>
            </div>
          </div>
        </section>

        <section id="deliverables" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">SEE WHAT YOU'RE BUYING</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Your company's future architecture. Made visible.</h2>
            <p className="mt-5 max-w-2xl text-muted">
              Open your EXIOR Space and see the enterprise map, target architecture, implementation priorities and open decisions in one place.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-12">
              {DELIVERABLES.map((d) => (
                <article key={d.t} className={`rounded-2xl border border-line p-5 ${"span" in d ? d.span : "md:col-span-4"}`}>
                  <h3 className="text-lg">{d.t}</h3>
                  <p className="mt-2 text-sm text-muted">{d.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-xs tracking-[0.16em] text-muted">THE PLAN</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">One plan. One price. A clear next step.</h2>
              <p className="mt-5 text-muted">The plan is designed. The systems are not deployed for $499.</p>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <p className="text-4xl font-medium">$499</p>
              <p className="mt-2 text-sm text-muted">One-time · Delivered in 14 days after your complete dossier</p>
              <Link to="/offre" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
              <p className="mt-4 text-xs text-faint">Software implementation, migration and running agents are a separate engagement.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">Start with the architecture that connects the decisions, systems, and capabilities behind your transformation.</h2>
          <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
            Get My Transformation Plan — $499
          </Link>
          <p className="mt-4 text-sm text-muted">Your plan. Your priorities. Your decision.</p>
        </section>
      </main>
    </Shell>
  );
}
