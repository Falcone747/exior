import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Shell } from "@/components/site/chrome";
import { FaqList } from "@/components/site/ui";
import { voices } from "@/components/site/proof";

export const Route = createFileRoute("/")({ component: Home });

const ease = [0.22, 1, 0.36, 1] as const;

const PLAN = [
  { k: "Organisation", v: "6 rôles. Une instance qui décide." },
  { k: "Chaîne", v: "5 maillons. 1 goulot nommé." },
  { k: "Données", v: "Un objet, une source, un propriétaire." },
  { k: "Agents", v: "2 autorisés. 1 refusé." },
  { k: "Sécurité", v: "Résidence, accès, journal, arrêt." },
] as const;

const LAYERS = [
  { n: "01", name: "Décision", text: "Qui tranche, sur quelle information, à quel rythme." },
  { n: "02", name: "Chaîne de valeur", text: "De la promesse à l’encaissement. Chaque frottement a un nom." },
  { n: "03", name: "Systèmes", text: "Ce qui reste, ce qui se relie, ce qui sort." },
  { n: "04", name: "Agents", text: "Un harness, des outils, une validation. Jamais un mandat général." },
  { n: "05", name: "Sécurité", text: "Le moindre privilège est dessiné avant le premier agent." },
] as const;

const ROAD = [
  { when: "Jour 0", title: "Le dossier", text: "Vous décrivez l’entreprise telle qu’elle tourne. Les 14 jours ne courent qu’ensuite." },
  { when: "Jour 14", title: "Le plan", text: "Architecture cible, priorités, ordre. Vous pouvez l’exécuter sans nous." },
  { when: "Jour 90", title: "Le premier cycle", text: "Un seul chantier. Le temps revient là, pas sur un indicateur emprunté." },
] as const;

const FAQ = [
  {
    q: "Pourquoi 499 $, et non un cabinet ?",
    a: "Les quatorze jours produisent le plan : architecture, priorités, ordre. Le travail dans vos systèmes, s’il a lieu, est une décision séparée.",
  },
  {
    q: "Quatorze jours suffisent-ils ?",
    a: "Le périmètre est fermé et la méthode déjà tenue sur plus de 200 entreprises. Votre temps se compte en heures, pas en mi-temps.",
  },
  {
    q: "Que mesure-t-on avant 90 jours ?",
    a: "Le temps sur un cycle réel : devis, stock, ordonnancement, promesse ou accès. Le plan désigne le cycle, le frottement et le premier chantier.",
  },
  {
    q: "Où vit le plan après la livraison ?",
    a: "Dans l’Espace EXIOR : la chaîne, les accès, les agents et les décisions. Vous le tenez. Nous ne le remplaçons pas par un tableau de bord générique.",
  },
] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function PlanCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(0,196,214,0.35),transparent_70%)]" />
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div className="flex items-center gap-3">
          <img src="/visuals/logo.jpg" alt="" className="size-8 object-contain" />
          <div>
            <p className="text-sm font-medium">Le plan</p>
            <p className="text-xs text-faint">Espace EXIOR · J14</p>
          </div>
        </div>
        <span className="rounded-full border border-accent/40 px-2.5 py-1 text-[11px] text-accent">Livrable</span>
      </div>
      <ul>
        {PLAN.map((row, i) => (
          <motion.li
            key={row.k}
            className="grid grid-cols-[7.5rem_1fr] items-baseline gap-3 border-b border-line/80 px-5 py-3.5 last:border-0"
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease }}
          >
            <span className="text-xs text-faint">{row.k}</span>
            <span className="text-sm">{row.v}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function Architecture() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-line">
      {LAYERS.map((layer, i) => {
        const on = open === i;
        return (
          <button
            key={layer.n}
            type="button"
            aria-expanded={on}
            onClick={() => setOpen(i)}
            className="block w-full border-b border-line text-left last:border-0"
          >
            <div className={on ? "bg-surface px-5 py-5 md:px-8" : "px-5 py-5 md:px-8"}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-accent">{layer.n}</span>
                  <span className="text-lg font-medium tracking-tight md:text-2xl">{layer.name}</span>
                </div>
                <span className="text-sm text-faint">{on ? "—" : "+"}</span>
              </div>
              <AnimatePresence initial={false}>
                {on ? (
                  <motion.p
                    className="max-w-xl pt-3 text-muted"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    {layer.text}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Space() {
  const reduce = useReducedMotion();
  const steps = ["Acquérir", "Qualifier", "Produire", "Livrer", "Encaisser"];
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-line bg-bg-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-xs text-faint">Espace EXIOR</p>
        <p className="text-xs text-accent">Chaîne active</p>
      </div>
      <div className="grid md:grid-cols-12">
        <ul className="border-b border-line p-3 text-sm md:col-span-3 md:border-b-0 md:border-r">
          {["Le plan", "Chaîne", "Agents", "Décisions"].map((item, i) => (
            <li key={item} className={i === 1 ? "rounded-lg bg-surface px-3 py-2.5" : "px-3 py-2.5 text-muted"}>
              {item}
            </li>
          ))}
        </ul>
        <div className="p-5 md:col-span-5">
          <p className="text-xs text-faint">Chaîne de valeur</p>
          <ol className="mt-4 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm">
                <motion.span
                  className={i === 2 ? "size-2 rounded-full bg-accent-fill" : "size-2 rounded-full bg-line"}
                  animate={i === 2 && !reduce ? { scale: [1, 1.6, 1] } : undefined}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className={i === 2 ? "text-fg" : "text-muted"}>{step}</span>
                {i === 2 ? <span className="text-xs text-accent">Goulot</span> : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="border-t border-line p-5 md:col-span-4 md:border-l md:border-t-0">
          <p className="text-xs text-faint">Décision ouverte</p>
          <p className="mt-3 text-sm leading-relaxed">Ne pas promettre sous dix jours tant que l’ordonnancement n’a pas de seuil.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">Agent autorisé sur le statut. Pas sur le prix.</p>
        </div>
      </div>
    </motion.div>
  );
}

function Home() {
  const reduce = useReducedMotion();
  return (
    <Shell>
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-8rem] h-[36rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,196,214,0.18),transparent_68%)]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-2">
            <div>
              <motion.p
                className="text-sm text-accent"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                Plan de transformation
              </motion.p>
              <motion.h1
                className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-6xl md:leading-[1.02]"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease }}
              >
                L’entreprise suivante, conçue en 14 jours.
              </motion.h1>
              <motion.p
                className="mt-6 max-w-md text-lg leading-relaxed text-muted"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease }}
              >
                Un plan unique : organisation, chaîne de valeur, données, agents et sécurité. Vous savez quoi changer, dans quel ordre, et ce qu’il ne faut pas toucher.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                <Link to="/offre" className="inline-flex items-center justify-center rounded-full bg-accent-fill px-5 py-3 text-sm text-accent-ink">
                  Obtenir le plan — 499 $
                </Link>
                <a href="#espace" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-muted">
                  Voir l’Espace EXIOR
                </a>
              </motion.div>
            </div>
            <PlanCard />
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["200+", "entreprises"],
              ["14 jours", "pour le plan"],
              ["90 jours", "premier cycle"],
              ["499 $", "une fois"],
            ].map(([n, l]) => (
              <div key={l} className="border-line px-5 py-8 md:border-l md:first:border-l-0">
                <p className="text-2xl font-medium tracking-tight md:text-3xl">{n}</p>
                <p className="mt-1 text-sm text-muted">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-sm text-accent">Le livrable</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Cinq pièces. Pas un rapport.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              ["Organisation", "Qui fait quoi, qui décide, et quelle instance ne sert plus."],
              ["Processus", "La chaîne décomposée. Un goulot. Une règle pour ne plus promettre au-delà."],
              ["Données et agents", "Ce que l’agent peut lire, écrire, et l’endroit où un humain arrête."],
              ["Feuille de route", "Un chantier pour 90 jours. Le reste est explicitement en attente."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-line bg-surface/40 p-6">
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="text-sm text-accent">Architecture cible</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Cinq couches. Une seule carte.
              </h2>
            </Reveal>
            <Architecture />
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="text-sm text-accent">Feuille de route</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Trois dates. Le reste attend.
              </h2>
            </Reveal>
            <div className="relative mt-14 grid gap-10 md:grid-cols-3">
              <div className="pointer-events-none absolute left-0 right-0 top-3 hidden h-px bg-line md:block" />
              {ROAD.map((step, i) => (
                <Reveal key={step.when} delay={i * 0.08}>
                  <div className="relative">
                    <motion.span
                      className="relative z-10 block size-2.5 rounded-full bg-accent-fill"
                      animate={reduce ? undefined : { boxShadow: ["0 0 0 0 rgba(0,196,214,0.0)", "0 0 0 8px rgba(0,196,214,0.18)", "0 0 0 0 rgba(0,196,214,0)"] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <p className="mt-5 text-sm text-accent">{step.when}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="espace" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <Reveal>
                <p className="text-sm text-accent">Espace EXIOR</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Le plan reste ouvert. Vous le tenez.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-md leading-relaxed text-muted">
                  Chaîne, accès, agents et décisions dans le même espace. Pas un diagramme à archiver : l’endroit où la contrainte du jour est visible.
                </p>
              </Reveal>
            </div>
            <div className="mt-12">
              <Space />
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">Ce que les dirigeants en retirent.</h2>
            <div className="mt-12 space-y-14">
              {voices.slice(0, 3).map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">“{item.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm text-muted">
                    {item.name}, {item.role} · {item.meta}
                  </figcaption>
                  <p className="mt-2 text-sm text-accent">{item.gain}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center">
            <p className="text-sm text-muted">Le plan, une fois</p>
            <p className="mt-3 text-6xl font-medium tracking-[-0.04em] md:text-7xl">499 $</p>
            <p className="mx-auto mt-4 max-w-sm text-muted">Quatorze jours. Cinq pièces. Vous dirigez. Le déploiement technique est une autre décision.</p>
            <Link to="/offre" className="mt-8 inline-flex rounded-full bg-accent-fill px-6 py-3 text-sm text-accent-ink">
              Obtenir le plan
            </Link>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-2xl font-medium tracking-tight">Questions de méthode</h2>
            <FaqList items={FAQ} />
          </div>
        </section>
      </main>
    </Shell>
  );
}
