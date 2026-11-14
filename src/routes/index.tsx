import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Shell } from "@/components/site/chrome";
import { Reel, Still } from "@/components/site/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXIOR | Enterprise Transformation Architecture & AI Strategy" },
      {
        name: "description",
        content:
          "Transform your business with a personalized enterprise architecture connecting organization, processes, data, technology, and AI. Your EXIOR Transformation Plan for $499, delivered in 14 days.",
      },
    ],
  }),
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    kicker: "Discover",
    title: "Understand your entire business. Identify what comes next.",
    text: "EXIOR maps your current organization, operating processes, business systems, information flows, and critical dependencies. It identifies where performance is constrained, where decisions are delayed, where systems are disconnected, and where transformation creates the greatest strategic value.",
    href: "/expertise",
    cta: "Explore Enterprise Analysis",
    film: "factory",
    points: [
      "End-to-end value chain mapping",
      "Organizational structure and decision flows",
      "Critical processes and operational constraints",
      "Systems, data, and integration dependencies",
      "Market conditions and competitive priorities",
    ],
  },
  {
    kicker: "Architect",
    title: "Design how your future enterprise operates.",
    text: "EXIOR brings every layer of your business into a coherent target architecture — from organizational responsibilities to digital infrastructure and AI capabilities. Every function, system, process, and agent has a defined role within the wider enterprise.",
    href: "/expertise",
    cta: "Explore Enterprise Architecture",
    film: "layers",
    points: [
      "Target organizational structure",
      "Redesigned operational processes",
      "Connected data and business systems",
      "AI agents and automation specifications",
      "Security, governance, and human oversight",
    ],
  },
  {
    kicker: "Transform",
    title: "Turn enterprise complexity into an executable roadmap.",
    text: "EXIOR translates your future architecture into a prioritized transformation plan. Know what to build, what to connect, what to retain, and what needs to happen first.",
    href: "/methode",
    cta: "Explore the Transformation Roadmap",
    film: "milestones",
    points: [
      "Transformation initiatives prioritized by value, risk, and dependency",
      "Clear implementation stages",
      "Defined requirements and decision points",
      "Practical sequencing across business functions",
      "A focused first implementation cycle",
    ],
  },
  {
    kicker: "Evolve",
    title: "Build an enterprise designed for continuous evolution.",
    text: "AI models improve. Technologies change. Business requirements shift. Your architecture brings these moving parts together through modular structures, explicit interfaces, and reusable capabilities. Add new technologies and capabilities without redesigning your entire organization around each new tool.",
    href: "/expertise",
    cta: "Discover Adaptive Architecture",
    film: "logistics",
    points: [
      "Modular organizational and digital design",
      "Extensible integrations",
      "Explicit business data models",
      "Governed AI agent specifications",
      "A foundation for continuous transformation",
    ],
  },
] as const;

const SPACE = [
  {
    title: "Enterprise Map",
    text: "Understand how your functions, processes, systems, and decisions connect.",
  },
  {
    title: "Architecture Studio",
    text: "Explore the organizational, operational, data, technology, AI, and security layers of your future enterprise.",
  },
  {
    title: "Transformation Roadmap",
    text: "Follow the implementation sequence, priorities, dependencies, and decision milestones.",
  },
  {
    title: "Decision Center",
    text: "Review outstanding decisions, assumptions, constraints, and supporting information.",
  },
] as const;

const INCLUDED = [
  "Enterprise analysis",
  "Target organizational architecture",
  "Process and value chain design",
  "Data and digital systems architecture",
  "AI agent and automation specifications",
  "Security and governance principles",
  "Prioritized implementation roadmap",
  "Personalized EXIOR Space",
] as const;

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
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
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-2">
          <div>
            <motion.p
              className="text-sm text-muted"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              EXIOR / ENTERPRISE TRANSFORMATION
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-6xl md:leading-[1.02]"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
            >
              Architect the next generation of your enterprise.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
            >
              Transform how your business operates with a unified architecture connecting strategy, organization, processes, data, technology, and artificial intelligence.
            </motion.p>
            <motion.p
              className="mt-4 max-w-xl leading-relaxed text-muted"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              EXIOR turns the complexity of enterprise transformation into one actionable blueprint — designed around your company, your existing systems, and your business priorities.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
            >
              <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get Your Transformation Plan
              </Link>
              <a href="#blueprint" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">
                Explore the EXIOR Blueprint
              </a>
            </motion.div>
            <p className="mt-5 text-sm text-muted">$499 · Delivered in 14 days</p>
          </div>
          <Reel
            src="/media/model.mp4"
            poster="/media/model.jpg"
            label="Modeling the company: the order path and the bottleneck"
            caption="The company, modeled. The cyan thread is the bottleneck between the shop and the dock."
          />
        </section>

        <section id="blueprint" className="border-y border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              One business. One architecture. A clear path forward.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              EXIOR brings the disciplines behind enterprise transformation into a single, coordinated plan. From organizational design to AI agents, every component is connected to the way your business creates value.
            </p>
            <div className="mt-10">
              <Still src="/media/meeting.jpg" alt="The model reviewed with the people who run the company" />
            </div>
          </div>
        </section>

        {PILLARS.map((pillar) => (
          <section key={pillar.kicker} className="border-b border-line">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
              <Reveal>
                <p className="text-sm text-muted">{pillar.kicker}</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">{pillar.title}</h2>
                <p className="mt-5 leading-relaxed text-muted">{pillar.text}</p>
                <Link to={pillar.href} className="mt-6 inline-flex text-sm font-medium text-fg">
                  {pillar.cta}
                </Link>
              </Reveal>
              <Reveal delay={0.06}>
                {pillar.kicker === "Transform" ? (
                  <Reel
                    src="/media/redesign.mp4"
                    poster="/media/redesign.jpg"
                    label="The same company model, redesigned into one path"
                    caption="The same model, reordered. Office, shop, warehouse, truck. One path."
                  />
                ) : pillar.kicker === "Discover" ? (
                  <Still src="/media/factory.jpg" alt="The line as it runs today" />
                ) : pillar.kicker === "Architect" ? (
                  <Still src="/media/layers.jpg" alt="The layers of the target architecture" />
                ) : (
                  <Still src="/media/logistics.jpg" alt="A flow that can take a new capability without being rebuilt" />
                )}
                <ul className="mt-4 divide-y divide-line rounded-2xl border border-line">
                  {pillar.points.map((point) => (
                    <li key={point} className="px-5 py-4 text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}

        <section id="espace" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="text-sm text-muted">Your EXIOR Space</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Your entire transformation. One connected environment.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                Explore your target architecture, review transformation priorities, understand dependencies, and keep critical decisions visible. Your EXIOR Space brings the complete blueprint together in a structured digital environment.
              </p>
            </Reveal>
            <div className="mt-10">
              <Still src="/media/office.jpg" alt="The EXIOR Space, a private working room" />
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {SPACE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-line bg-surface/40 p-6">
                    <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="text-sm text-muted">The Outcome</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                From fragmented operations to a connected enterprise.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                [
                  "Today",
                  "Your business operates across teams, systems, processes, and information that have evolved independently. Critical decisions depend on incomplete visibility. Operational constraints surface late. New technologies are introduced without a shared architectural direction.",
                ],
                [
                  "Day 14",
                  "You receive a complete transformation blueprint connecting your business model, organization, value chain, digital systems, AI opportunities, and security requirements. You know what needs to change, why it matters, and how to sequence the work.",
                ],
                [
                  "Your First Transformation Cycle",
                  "Put the highest-priority initiatives into action. Focus implementation on a measurable business process, operational constraint, or organizational capability. The transformation roadmap gives you a clear starting point and a structured direction for the work ahead.",
                ],
              ].map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-sm text-muted">See the transformation</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em]">See how an enterprise comes together.</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Explore how EXIOR connects business operations, information, systems, decisions, and intelligent capabilities in a single target architecture.
              </p>
              <h3 className="mt-8 text-lg font-medium">Current enterprise</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Disconnected systems. Fragmented decisions. Customer demand, internal capacity, operational planning, and financial information often move through separate processes. Dependencies become visible only when something goes wrong.
              </p>
              <p className="mt-4 text-sm text-fg">Customer request → Sales → Planning → Operations → Fulfillment → Finance</p>
              <h3 className="mt-8 text-lg font-medium">Target enterprise</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                One connected value chain. Information dependencies become explicit, responsibilities are defined, and selected activities are structured for automation.
              </p>
            </div>
            <div>
              <Reel
                src="/media/floor.mp4"
                poster="/media/floor.jpg"
                label="The real company, one continuous flow"
                caption="The real floor the model stands for. One person walks the whole flow."
              />
              <h3 className="mt-8 text-lg font-medium">Agent governance</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Intelligent execution. Defined boundaries. An agent can be authorized to retrieve an order status without being authorized to change a commercial price. A document-processing agent can prepare a file for review without making the final approval decision.
              </p>
              <h3 className="mt-8 text-lg font-medium">Decision visibility</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Your EXIOR Blueprint makes critical assumptions, implementation dependencies, and outstanding decisions visible. See which changes unlock the next stage and which conditions must be satisfied before implementation.
              </p>
              <div className="mt-6">
                <Still src="/media/decision.jpg" alt="A commercial decision that stays with a person" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted">Get Started</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Your enterprise transformation starts with a blueprint.
              </h2>
              <p className="mt-4 text-sm text-muted">EXIOR Transformation Plan</p>
              <p className="mt-2 text-6xl font-medium tracking-[-0.04em]">$499</p>
              <p className="mt-3 max-w-md text-muted">
                One-time payment. A personalized enterprise transformation architecture, delivered in 14 days after your complete business dossier is received.
              </p>
              <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                Get Your Transformation Plan — $499
              </Link>
              <p className="mt-4 text-sm text-muted">Technical implementation is a separate engagement.</p>
            </div>
            <ul className="divide-y divide-line self-center rounded-2xl border border-line">
              {INCLUDED.map((item) => (
                <li key={item} className="px-5 py-3.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
            <p className="text-sm text-muted">EXIOR TRANSFORMATION PLAN</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              The next version of your enterprise starts with a clear architecture.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Your organization, processes, data, systems, and AI capabilities — designed to work together. A personalized transformation blueprint. A prioritized roadmap. Your own EXIOR Space.
            </p>
            <p className="mt-6 text-sm text-muted">$499 · Delivered in 14 days. One-time payment.</p>
            <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
              Get Your Transformation Plan — $499
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
