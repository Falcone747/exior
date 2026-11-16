import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/chrome";
import { QuoteHarness, SpaceStage } from "@/components/site/visuals";
import { FlowBoard } from "@/components/site/flows";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXIOR | Enterprise Transformation Plan — $499" },
      { name: "description", content: "A personalized enterprise transformation plan, target architecture, implementation roadmap and EXIOR Space. $499. Delivered in 14 days after complete intake." },
    ],
  }),
  component: Home,
});

const ICONS = [
  { name: "SAP", src: "/logos/sap.svg" },
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "n8n", src: "/logos/n8n.svg" },
  { name: "MCP", src: "/logos/mcp.svg" },
];

const CASES = [
  { img: "/visuals/case-finance.jpg", title: "Finance", text: "Name the owner of cash. Invoice follows the released shipment, not a quote that may not match." },
  { img: "/visuals/case-ops.jpg", title: "Operations", text: "Capacity is checked before a date is promised. Production is the 11-day constraint." },
  { img: "/visuals/case-sales.jpg", title: "Sales", text: "The quote is drafted from named sources. A person still sets the price and the lead time." },
  { img: "/visuals/case-direction.jpg", title: "Leadership", text: "One architecture for organization, process, data, systems and agents. You decide what to execute." },
];

function Home() {
  const [open, setOpen] = useState(0);
  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">EXIOR / ENTERPRISE TRANSFORMATION</p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">Transform your enterprise. Start with the blueprint.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">EXIOR designs the next version of your business — its organization, processes, systems, data, and AI capabilities — as one connected architecture.</p>
            <p className="mt-4 text-sm">$499 · Personalized plan · Delivered in 14 days after complete intake</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm font-medium text-white">Get My Transformation Plan — $499</Link>
              <a href="#espace" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">Explore a Sample Blueprint</a>
            </div>
            <p className="mt-4 text-xs text-faint">Confidential · Built around your business · The plan is designed. The systems are not deployed for $499.</p>
          </div>
          <img src="/visuals/hero-exec.jpg" alt="A conversation about the operating model" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
            <img src="/visuals/laptop.jpg" alt="EXIOR Space on a laptop" className="w-full rounded-3xl object-cover" />
            <div className="rounded-3xl border border-line bg-bg-2 p-6">
              <h2 className="text-3xl font-medium tracking-tight">See the plan before you buy the build.</h2>
              <p className="mt-3 text-muted">Map, architecture, roadmap and the decisions still open. Meridian is an illustrative example, not a client.</p>
              <ul className="mt-6 divide-y divide-line border-y border-line text-sm">
                {["Enterprise analysis", "Target architecture", "Agent specifications", "Prioritized roadmap"].map((t) => (
                  <li key={t} className="py-3">{t}</li>
                ))}
              </ul>
              <Link to="/offre" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm font-medium text-white">Get My Transformation Plan — $499</Link>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-3">
            {[["Understand", "How the company actually runs."], ["Specify", "Who owns the decision, and what an agent may not do."], ["Sequence", "What changes first, and what waits."]].map(([t, d]) => (
              <article key={t} className="border-t border-line pt-5">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl bg-[linear-gradient(135deg,#f3d7c4,#e7d4f2_55%,#c9d4ff)] px-6 py-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {ICONS.map((icon) => (
                <span key={icon.name} className="grid size-14 place-items-center rounded-full bg-white shadow-sm">
                  <img src={icon.src} alt={icon.name} className="h-6 w-8 object-contain" style={{ filter: "invert(0)" }} />
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[#1c1c1c]">Named systems a plan can specify. Not partnerships. Not deployed for $499.</p>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">One architecture for each part of the business.</h2>
            <ul className="mt-10 divide-y divide-line">
              {CASES.map((c, i) => (
                <li key={c.title}>
                  <button type="button" onClick={() => setOpen(i)} className="grid w-full items-center gap-6 py-6 text-left md:grid-cols-[16rem_1fr_auto]">
                    <img src={c.img} alt="" className="aspect-[16/9] w-full rounded-2xl object-cover" />
                    <div>
                      <h3 className="text-2xl">{c.title}</h3>
                      <p className="mt-2 text-muted">{c.text}</p>
                    </div>
                    <span className="text-accent-fill">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="espace" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em]">See the entire transformation. Understand every decision.</h2>
            <div className="mt-8"><FlowBoard /></div>
            <div className="mt-8"><SpaceStage /></div>
            <div className="mt-8"><QuoteHarness /></div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">THE PLAN</p>
              <h2 className="mt-3 text-4xl font-medium tracking-tight">One plan. One price.</h2>
              <p className="mt-4 text-5xl font-medium">$499</p>
              <p className="mt-2 text-muted">One-time · Delivered in 14 days after your complete dossier</p>
              <Link to="/offre" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm font-medium text-white">Get My Transformation Plan — $499</Link>
              <p className="mt-4 text-sm">The plan is designed. The systems are not deployed for $499.</p>
            </div>
            <img src="/visuals/office.jpg" alt="A room for the decision" className="aspect-[16/10] w-full rounded-3xl object-cover" />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-4xl font-medium tracking-[-0.04em]">Start with the architecture that connects the decisions.</h2>
          <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm font-medium text-white">Get My Transformation Plan — $499</Link>
        </section>
      </main>
    </Shell>
  );
}
