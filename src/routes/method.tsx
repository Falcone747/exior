import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";
import { QuoteHarness, SpaceStage, Timeline } from "@/components/site/visuals";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "The EXIOR Method | Blueprint in 14 Days" },
      { name: "description", content: "How EXIOR designs your transformation plan: complete intake, current map, target architecture, agent harness, roadmap and EXIOR Space in 14 days." },
    ],
  }),
  component: Method,
});

const INTAKE = [
  { t: "Business Model", d: "Your offer, customers, economics, market position, and growth priorities." },
  { t: "Organization", d: "Functions, key responsibilities, decision makers, and dependencies on specific people." },
  { t: "Systems & Data", d: "Applications, critical spreadsheets, information sources, integrations, and known gaps." },
  { t: "Objectives & Constraints", d: "Desired capabilities, non-negotiable obligations, operating limits, and investment boundaries." },
] as const;

const FAQ = [
  ["Why can the plan be delivered in 14 days?", "The engagement has a defined design scope and begins with a complete business dossier. The deliverable is the enterprise architecture and roadmap, not the implementation of the systems."],
  ["How is the plan tailored to our company?", "Recommendations are based on your business model, operating processes, systems, constraints, objectives and available information. The plan identifies where assumptions or further validation remain necessary."],
  ["Does this include AI agents?", "It includes specifications for relevant agent opportunities and their operating controls. Production deployment is not included."],
  ["Will we need to replace our software?", "Not necessarily. EXIOR assesses what should be kept, connected, modernized or replaced as part of the target design."],
  ["Can our IT team implement it?", "The deliverable identifies the target design, components, dependencies and priorities. Detailed build plans and implementation work are separate."],
  ["Do we have to use EXIOR for deployment?", "No. The implementation decision belongs to you."],
] as const;

function Method() {
  const [open, setOpen] = useState(0);
  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 md:grid-cols-[1.4fr_0.6fr] md:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">THE EXIOR METHOD</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">A rigorous method. A blueprint built around your business.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              The most consequential transformation decisions happen before implementation. EXIOR connects business analysis, organizational design, systems architecture, and AI planning into one structured engagement — so every initiative has a purpose, a dependency, and a defined place in your future enterprise.
            </p>
            <p className="mt-4 text-sm">An actual business dossier. An integrated target architecture. A prioritized execution roadmap.</p>
            <Link to="/offre" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">Get My Transformation Plan — $499</Link>
            <p className="mt-3 text-xs text-faint">Delivered in 14 days after your complete dossier is received.</p>
          </div>
          <ol className="divide-y divide-line border-y border-line text-sm">
            <li className="py-4">1 · Dossier</li>
            <li className="py-4">2 · Map the break</li>
            <li className="py-4">3 · Specify the agent boundary</li>
            <li className="py-4">4 · Sequence the decisions</li>
          </ol>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">START WITH THE BUSINESS</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-4xl">The better the starting picture, the stronger the architecture.</h2>
            <p className="mt-5 max-w-2xl text-muted">Every company has a different operating model, different constraints, and different sources of value. We start by understanding yours. The process defines what to preserve, what must change, and what information is still missing.</p>
            <ul className="mt-8 grid gap-3 md:grid-cols-4">
              {INTAKE.map((c, i) => (
                <li key={c.t} className="rounded-2xl border border-line p-5">
                  <p className="text-xs text-faint">0{i + 1}</p>
                  <h3 className="mt-2 text-lg">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted">{c.d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">A complete dossier starts the 14-day clock. Missing information is clarified before design begins.</p>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">UNDERSTAND THE WHOLE SYSTEM</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Find the constraints hiding between functions.</h2>
            <p className="mt-5 max-w-2xl text-muted">A report can describe a department. The plan has to show where the promise breaks. On Meridian, the quote leaves Sales before Planning has a capacity signal. Production is an 11-day constraint. Stock is not one number.</p>
            <p className="mt-3 text-xs text-faint">Meridian — Illustrative Example</p>
            <img src="/visuals/process.jpg" alt="Current process versus target process. The quote waits on capacity. A person sets price and date." className="mt-6 w-full rounded-2xl border border-line object-contain" />
            <div className="mt-8"><SpaceStage initial="map" /></div>
          </div>
        </section>

        <section className="border-b border-line bg-bg-2">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">AGENT BOUNDARY</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-4xl">Specify the agent before anyone connects it.</h2>
            <p className="mt-5 max-w-2xl text-muted">This is why the plan is not a generated report. The quote agent has a name, a read list, a stop, and a person who still sets the price.</p>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-black">
              <img src="/visuals/harness-schema.jpg" alt="Quote draft agent: reader, drafter, human approver. May read. Draft only. May not set price or release a shipment." className="w-full object-contain" />
            </figure>
            <div className="mt-8"><QuoteHarness /></div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">ORDER OF DECISIONS</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">The order of decisions changes the outcome.</h2>
            <p className="mt-5 max-w-2xl text-muted">Foundation, then the capacity signal, then controls, then a pilot with a human gate. Scale is prospective. It is not a delivered result.</p>
            <img src="/visuals/roadmap-schema.jpg" alt="Foundation, Connect, Govern, Pilot with a human gate, Scale as prospective." className="mt-8 w-full rounded-2xl border border-line object-contain" />
            <div className="mt-8"><SpaceStage initial="roadmap" /></div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">FOURTEEN DAYS</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">From a complete dossier to a clear transformation plan.</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">The clock does not start at payment. It starts when the dossier is complete. The 14 days produce the architecture, not a deployed system.</p>
            <div className="mt-8"><Timeline /></div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">The architecture is the deliverable. The next move is yours.</h2>
            <p className="mt-4 max-w-2xl text-muted">You receive the design and priorities needed to plan the transformation. You keep control of whether and how implementation proceeds.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-line p-5">
                <p className="text-xs text-faint">INCLUDED</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Enterprise analysis", "Target organizational architecture", "Digital and data design", "Process priorities", "Selected AI agent specifications", "Security and governance requirements", "Prioritized roadmap", "Personalized EXIOR Space"].map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-line p-5">
                <p className="text-xs text-faint">SEPARATE</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {["Software development", "System integration", "Data migration", "Live agent deployment", "Ongoing operations", "Formal certification or legal services"].map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm">The plan is designed. The systems are not deployed for $499.</p>
            <a href="/#pricing" className="mt-4 inline-flex text-sm">Explore the Plan</a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="text-3xl font-medium tracking-[-0.03em]">Questions to resolve before you begin.</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {FAQ.map(([q, a], i) => (
              <li key={q}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between py-4 text-left text-sm">
                  {q}<span className="text-faint">{open === i ? "−" : "+"}</span>
                </button>
                {open === i ? <p className="pb-4 text-sm text-muted">{a}</p> : null}
              </li>
            ))}
          </ul>
          <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">Get My Transformation Plan — $499</Link>
        </section>
      </main>
    </Shell>
  );
}
