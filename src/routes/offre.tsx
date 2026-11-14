import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Shell, Kicker } from "@/components/site/chrome";
import { FaqList } from "@/components/site/ui";
import { Film } from "@/components/site/films";

export const Route = createFileRoute("/offre")({
  head: () => ({
    meta: [
      { title: "Enterprise Transformation Plan — $499 | EXIOR" },
      {
        name: "description",
        content:
          "Get your personalized enterprise transformation blueprint, target architecture, AI integration specifications, roadmap, and EXIOR Space in 14 days.",
      },
    ],
  }),
  component: Offre,
});

const STORAGE_KEY = "exior-dossier-v1";

type Dossier = {
  activite: string;
  organisation: string;
  outils: string;
  objectifs: string;
  contact: string;
};

const EMPTY: Dossier = { activite: "", organisation: "", outils: "", objectifs: "", contact: "" };

const FIELDS: { key: keyof Dossier; label: string; hint: string; rows: number }[] = [
  {
    key: "activite",
    label: "Business Model",
    hint: "What you sell, who you serve, your operating geography, and how your company generates value.",
    rows: 4,
  },
  {
    key: "organisation",
    label: "Organization",
    hint: "Your business functions, approximate team size, responsibilities, decision makers, and operational dependencies.",
    rows: 4,
  },
  {
    key: "outils",
    label: "Technology & Data",
    hint: "Existing applications, spreadsheets, critical business information, and the systems supporting your operations.",
    rows: 4,
  },
  {
    key: "objectifs",
    label: "Objectives & Constraints",
    hint: "Your business priorities, expected developments, financial and operational limitations, and non-negotiable requirements.",
    rows: 4,
  },
  {
    key: "contact",
    label: "Contact Details",
    hint: "Your name, position, and business email.",
    rows: 2,
  },
];

const INCLUDED = [
  ["Enterprise Analysis", "Understand your operating model, business activities, competitive position, critical dependencies, and organizational constraints."],
  ["Target Enterprise Architecture", "A coordinated design for your future organization, functions, processes, digital systems, data flows, and AI capabilities."],
  ["AI Agent Architecture", "Specifications for selected agent use cases, including responsibilities, authorized tools, context, controls, and human approval requirements."],
  ["Market & Economic Context", "Decision-relevant economic and industry intelligence incorporated into your transformation priorities."],
  ["Process Optimization", "Structured analysis of critical workflows, operational constraints, and opportunities to improve execution."],
  ["Security & Data Governance", "Architectural requirements for information access, data classification, residency, traceability, and operational safeguards."],
  ["Transformation Roadmap", "A prioritized implementation sequence connecting initiatives, dependencies, risks, and decision milestones."],
  ["Personalized EXIOR Space", "Your transformation blueprint organized into a dedicated digital environment."],
] as const;

const STEPS = [
  ["01 — Submit Your Business Profile", "Tell EXIOR about your business model, operating structure, software, data environment, objectives, and constraints."],
  ["02 — Enterprise Analysis & Design", "EXIOR builds your current-state model, develops your target architecture, identifies transformation opportunities, and defines implementation priorities."],
  ["03 — Receive Your EXIOR Blueprint", "Access your personalized transformation plan and EXIOR Space within 14 days of providing the complete required information."],
] as const;

const FAQ = [
  {
    q: "What exactly am I buying?",
    a: "A personalized enterprise transformation plan designed around your business. It includes analysis of your current organization, a target organizational and digital architecture, relevant AI opportunities, prioritized transformation initiatives, an implementation roadmap, and your EXIOR Space.",
  },
  {
    q: "How long does delivery take?",
    a: "14 days from receipt of your complete business dossier. The process begins when the information required for the analysis has been provided.",
  },
  {
    q: "How much time do I need to invest?",
    a: "You provide the initial dossier and respond to any essential clarification requests. The objective is to keep your involvement focused while ensuring the architecture reflects how your business actually operates.",
  },
  {
    q: "Do I need technical expertise?",
    a: "No. EXIOR translates organizational, operational, and technological complexity into a structured transformation plan. Your technical team can use the resulting architecture and implementation requirements when planning deployment.",
  },
  {
    q: "Does EXIOR implement the systems?",
    a: "Technical implementation is a separate service. The $499 offer covers the analysis, design, specifications, transformation roadmap, and personalized EXIOR Space.",
  },
  {
    q: "Does EXIOR replace our existing software?",
    a: "Your transformation architecture identifies which systems should remain, which should connect, and which may require modernization. Your EXIOR Space provides access to the plan. It does not replace your operational applications.",
  },
  {
    q: "Does the plan include AI agents?",
    a: "The plan identifies and specifies selected agent use cases where relevant. It can define responsibilities, authorized tools, inputs, outputs, controls, and human oversight requirements. Building and operating those agents requires a separate implementation engagement.",
  },
  {
    q: "How does EXIOR differ from a software vendor?",
    a: "EXIOR designs the enterprise architecture around your business requirements. Technology decisions follow the organizational and operational needs identified in the transformation plan.",
  },
  {
    q: "How does EXIOR differ from traditional consulting?",
    a: "EXIOR offers a defined transformation-design engagement with a fixed price, structured deliverables, and a 14-day delivery period after dossier completion. The output is a connected enterprise architecture and implementation roadmap.",
  },
  {
    q: "Can our IT team or financial adviser participate?",
    a: "Yes. Relevant stakeholders can help clarify systems, information, financial constraints, and operational requirements. Their involvement supports the existing scope of the transformation plan.",
  },
  {
    q: "Can EXIOR work with companies outside France?",
    a: "The applicability of the engagement depends on the company's operating context and the information required to address its relevant constraints. Country-specific regulatory and legal questions may require qualified local advisers.",
  },
  {
    q: "What happens after delivery?",
    a: "You receive your blueprint and determine the next implementation steps. You can use the plan to organize internal work, engage technical providers, or separately discuss deployment services.",
  },
] as const;

function Offre() {
  const [data, setData] = useState<Dossier>(EMPTY);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setData({ ...EMPTY, ...JSON.parse(raw) });
    } catch {
      /* ignore broken local draft */
    }
  }, []);

  function update(key: keyof Dossier, value: string) {
    setSaved(false);
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function save(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
  }

  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>EXIOR TRANSFORMATION PLAN</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            Your next enterprise. Designed in 14 days.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Everything you need to understand your current organization, design its future architecture, and move toward implementation with a clear sequence of priorities.
          </p>
          <p className="mt-6 text-sm text-muted">$499 · One-time payment</p>
          <a href="#profile" className="mt-6 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
            Get Your Transformation Plan
          </a>
          <div className="mt-10 max-w-4xl">
            <Film name="roadmap" />
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">One plan. Every layer of your business.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {INCLUDED.map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-line p-6">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">How it works</h2>
            <p className="mt-3 text-muted">From business information to enterprise architecture.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map(([title, text]) => (
                <article key={title}>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-tight">Your business profile</h2>
            <form onSubmit={save} className="mt-8 space-y-5">
              {FIELDS.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-sm font-medium">{field.label}</span>
                  <span className="mt-1 block text-xs text-faint">{field.hint}</span>
                  <textarea
                    value={data[field.key]}
                    rows={field.rows}
                    onChange={(e) => update(field.key, e.target.value)}
                    className="mt-2 w-full resize-y rounded-md border border-line bg-bg-2 px-3 py-3 text-sm leading-relaxed text-fg outline-none focus:border-fg"
                  />
                </label>
              ))}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="rounded-full bg-accent-fill px-6 py-3 text-sm font-medium text-accent-ink">
                  Save Draft
                </button>
                <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm text-muted">
                  Prepare My Business Profile
                </a>
              </div>
              {saved ? (
                <p className="text-sm text-muted">
                  Draft saved. Your draft has been saved on this device. Review and complete your information before submission.
                </p>
              ) : null}
              <p className="text-xs text-faint">Continue to checkout and complete my profile when your dossier is ready. No payment is taken on this page.</p>
            </form>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-tight">What happens after your plan?</h2>
            <p className="mt-4 text-lg">Your architecture is ready. Your next move is clear.</p>
            <p className="mt-4 leading-relaxed text-muted">
              Your EXIOR Blueprint defines the target architecture and implementation sequence. You decide which initiatives to execute, when to begin, and who will deliver them. Technical development, system integration, data migration, and ongoing operation are available through separate engagements.
            </p>
            <a href="#profile" className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
              Get Your Transformation Plan — $499
            </a>
          </div>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-tight">Frequently asked questions</h2>
            <div className="mt-8">
              <FaqList items={FAQ} />
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
