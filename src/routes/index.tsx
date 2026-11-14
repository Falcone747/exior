import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Shell } from "@/components/site/chrome";
import { SpaceStage, Timeline, MERIDIAN } from "@/components/site/visuals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXIOR | Enterprise Transformation Plan — $499" },
      {
        name: "description",
        content:
          "A personalized enterprise transformation blueprint, target architecture, implementation roadmap and EXIOR Space. $499. Delivered in 14 days after complete intake. Technical deployment is separate.",
      },
    ],
  }),
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;

const VISUALS = {
  Discover: "/visuals/map.jpg",
  Architect: "/visuals/architecture.jpg",
  Transform: "/visuals/roadmap.jpg",
  Evolve: "/visuals/map.jpg",
} as const;

const PILLARS = [
    kicker: "Discover",
    title: "See where your business is being held back.",
    text: "We map how work moves across teams and systems, name the constraint that matters, and connect it to your operating priorities.",
    points: ["Value-chain mapping", "Decision and ownership gaps", "System and data dependencies", "Prioritized opportunities"],
    view: "map" as const,
  },
  {
    kicker: "Architect",
    title: "One architecture for how your enterprise operates.",
    text: "We design a target organization and digital environment that connects functions, systems, data and selected AI capabilities, with responsibilities defined.",
    points: ["Target operating model", "Integration architecture", "Data ownership", "Agent roles and guardrails"],
    view: "layers" as const,
  },
  {
    kicker: "Transform",
    title: "Know exactly what to change first.",
    text: "The roadmap turns the architecture into an ordered set of decisions. Each priority is grounded in readiness, dependency and risk.",
    points: ["A clear first initiative", "Prerequisites named", "Sequencing", "Human decision gates"],
    view: "roadmap" as const,
  },
  {
    kicker: "Evolve",
    title: "A foundation built to accommodate change.",
    text: "New tools and AI capabilities attach to named objects and interfaces. You do not redesign the company around each new product.",
    points: ["Retained systems", "Explicit interfaces", "Governed agent specs", "What not to migrate"],
    view: "systems" as const,
  },
] as const;

const FAQ = [
  ["Is this a generic AI report?", "No. The plan is built from your dossier: how you sell, who decides, which systems hold the truth, and what you will not change."],
  ["Does $499 include implementation?", "No. The plan, the architecture and the EXIOR Space are included. Software implementation, migration and running agents are a separate engagement."],
  ["When do the 14 days begin?", "When the intake dossier is complete. Not at payment, and not on a half-filled form."],
  ["Can my team implement it?", "Yes. The roadmap is written so you can execute it without us, or with a partner you choose."],
  ["Does it lock us to a platform?", "No. EXIOR is independent of any single software vendor. Existing systems are kept where they should be kept."],
] as const;

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const reduce = useReducedMotion();
  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:pt-24 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <motion.p className="text-xs tracking-[0.16em] text-muted" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
              ENTERPRISE TRANSFORMATION ARCHITECTURE
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Transform your enterprise. Start with the blueprint.
            </motion.h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              EXIOR analyzes your business and designs a future-ready organization, connected digital architecture, and prioritized AI integration roadmap. Every part of your transformation, connected in one actionable plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
              <a href="#espace" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">
                Explore a Sample Blueprint
              </a>
            </div>
            <p className="mt-5 text-sm text-muted">Your personalized plan. $499. Delivered in 14 days after complete intake.</p>
            <p className="mt-2 text-xs text-faint">Enterprise-wide analysis · Target architecture · Prioritized roadmap · Personalized EXIOR Space</p>
          </div>
          <div id="espace">
            <SpaceStage />
            <p className="mt-3 text-xs text-faint">Inside EXIOR Space — illustrative enterprise transformation.</p>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <p className="text-xs tracking-[0.16em] text-muted">ONE CONNECTED ENTERPRISE</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Design the business. Connect every layer.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Your company runs on relationships between people, processes, information and systems. EXIOR maps those relationships and defines an architecture in which each component supports the rest.
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {["From strategy to execution.", "From fragmented data to defined ownership.", "From isolated AI experiments to governed capabilities."].map((t) => (
                <li key={t} className="rounded-2xl border border-line px-5 py-4 text-sm">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {PILLARS.map((pillar) => (
          <section key={pillar.kicker} className="border-b border-line">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
              <Reveal>
                <p className="text-xs tracking-[0.16em] text-muted">{pillar.kicker}</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">{pillar.title}</h2>
                <p className="mt-5 leading-relaxed text-muted">{pillar.text}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {pillar.points.map((p) => <li key={p} className="text-muted">— {p}</li>)}
                </ul>
              </Reveal>
              <Reveal delay={0.06}>
                <img
                  src={VISUALS[pillar.kicker]}
                  alt={`${pillar.kicker} — Meridian sample, illustrative`}
                  className="w-full rounded-2xl border border-line"
                />
                <p className="mt-2 text-xs text-faint">Sample output · Meridian is illustrative, not a client.</p>
              </Reveal>
            </div>
          </section>
        ))}

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">SAMPLE COMPANY</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">Meridian, before and after the architecture.</h2>
            <p className="mt-5 max-w-2xl text-muted">
              {MERIDIAN.rule} This is an illustrative company. The plan proposes the architecture. It does not operate it.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-line p-5">
                <p className="text-xs text-faint">Current</p>
                <p className="mt-3 text-sm">Quotes go out before capacity is checked. Production is an 11-day constraint. Stock is not one number. Shipment waits.</p>
              </div>
              <div className="rounded-2xl border border-accent-fill/40 p-5">
                <p className="text-xs text-faint">Target architecture</p>
                <p className="mt-3 text-sm">CRM reads the capacity signal. Price and release stay with a person. One stock figure. Invoice follows the released shipment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs tracking-[0.16em] text-muted">FOURTEEN DAYS</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">The clock starts when the dossier is complete.</h2>
            <div className="mt-8">
              <Timeline />
            </div>
            <Link to="/methode" className="mt-6 inline-flex text-sm text-fg">See how the plan is built</Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.16em] text-muted">THE PLAN</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">Your enterprise transformation starts with a blueprint.</h2>
              <p className="mt-4 text-6xl font-medium tracking-[-0.04em]">$499</p>
              <p className="mt-3 max-w-md text-muted">One-time. Delivered in 14 days after complete intake. Technical deployment is a separate engagement.</p>
              <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get My Transformation Plan — $499
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-medium">Before you order</h3>
              <dl className="mt-4 divide-y divide-line rounded-2xl border border-line">
                {FAQ.map(([q, a]) => (
                  <div key={q} className="px-5 py-4">
                    <dt className="text-sm font-medium">{q}</dt>
                    <dd className="mt-2 text-sm text-muted">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
