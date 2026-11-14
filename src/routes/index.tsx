import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Shell } from "@/components/site/chrome";
import { FaqList } from "@/components/site/ui";
import { voices } from "@/components/site/proof";

export const Route = createFileRoute("/")({ component: Home });

const WORK = [
  {
    title: "Une architecture, pas un diagnostic de plus",
    text: "Organisation, processus, systèmes, données et agents sont dessinés sur la même carte. Ce qui se contredit devient visible avant le projet.",
  },
  {
    title: "La chaîne, du premier contact à l’encaissement",
    text: "Chaque maillon a une entrée, une sortie et un frottement. On ne fluidifie que ce qui est formulé. Le reste reste une opinion.",
  },
  {
    title: "Des agents avec un périmètre",
    text: "Un harness fixe le contexte, les outils et l’arrêt. Un humain valide. Il n’y a pas de mandat général, ni d’accès plus large que la tâche.",
  },
  {
    title: "La sécurité dans le dessin",
    text: "Résidence des données, moindre privilège, journal, escalade. Décidés avant d’ouvrir un agent, pas dans une annexe après coup.",
  },
  {
    title: "La veille qui change une décision",
    text: "Macroéconomie et secteur n’entrent dans le plan que s’ils déplacent un prix, une capacité ou un délai. Le reste ne s’imprime pas.",
  },
  {
    title: "Un ordre pour 90 jours",
    text: "Un cycle prioritaire. Un chantier. Le reste attend. La productivité se mesure sur ce cycle, pas sur un indicateur emprunté.",
  },
] as const;

const CASES = [
  {
    name: "Direction",
    text: "Le plan dit qui décide, sur quelle information, et à quel rythme. Les instances qui ne tranchent rien sont retirées ou bornées.",
  },
  {
    name: "Opérations",
    text: "Le goulot est nommé : atelier, quai, planning, sous-traitance. On ne promet au client que ce que cette contrainte tient.",
  },
  {
    name: "Finance",
    text: "La marge et le cash remontent avant la clôture. Le devis, le stock et l’avoir racontent la même affaire.",
  },
  {
    name: "Commercial",
    text: "La promesse est alignée sur la capacité réelle. Ce qui ne peut pas être livré n’est plus vendu.",
  },
  {
    name: "Industrie",
    text: "Ordonnancement, qualité, maintenance. Les écarts se voient avant l’urgence, avec un responsable et un seuil.",
  },
  {
    name: "Données",
    text: "Un objet métier, une source, une règle de résidence. L’agent ne lit que ce qui a un propriétaire.",
  },
] as const;

const FAQ = [
  {
    q: "Pourquoi 499 $, et non un cabinet ?",
    a: "Les quatorze jours produisent le plan : architecture, priorités, ordre. C’est ce qui rend un déploiement utile ou inutile. Le travail dans vos systèmes, s’il a lieu, est une décision séparée.",
  },
  {
    q: "Quatorze jours suffisent-ils ?",
    a: "Le délai est court parce que le périmètre est fermé et la méthode déjà tenue sur plus de 200 entreprises. Vous fournissez le dossier. Le temps que vous y passez se compte en heures.",
  },
  {
    q: "Que mesure-t-on avant 90 jours ?",
    a: "Le temps sur un cycle réel : devis, stock, ordonnancement, promesse, accès. Le plan désigne le cycle, le frottement et le premier chantier. Pas un pourcentage repris d’un autre dossier.",
  },
  {
    q: "Que devient la cybersécurité ?",
    a: "Elle n’est pas un lot à part. Accès, journal, résidence et arrêt des agents sont des contraintes du plan. Un agent sans borne est refusé.",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

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
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
function ProductFrame() {
  const reduce = useReducedMotion();
  const steps = ["Acquérir", "Qualifier", "Produire", "Livrer", "Encaisser"];
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-line bg-bg-2 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <p className="ml-3 text-xs text-faint">EXIOR · Plan · J14</p>
      </div>
      <div className="grid gap-0 md:grid-cols-12">
        <ul className="border-b border-line p-4 text-sm md:col-span-3 md:border-b-0 md:border-r">
          {["Chaîne", "Accès", "Agents", "Décision"].map((item, i) => (
            <li key={item} className={i === 0 ? "rounded-md bg-surface px-3 py-2 text-fg" : "px-3 py-2 text-muted"}>
              {item}
            </li>
          ))}
        </ul>
        <div className="p-5 md:col-span-6">
          <p className="text-xs text-faint">Chaîne de valeur</p>
          <ol className="mt-4 space-y-2">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm">
                <motion.span
                  className={i === 2 ? "size-2 rounded-full bg-accent-fill" : "size-2 rounded-full bg-line"}
                  animate={i === 2 && !reduce ? { scale: [1, 1.7, 1], opacity: [1, 0.6, 1] } : undefined}
                  transition={i === 2 ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : undefined}
                />
                <span className={i === 2 ? "text-fg" : "text-muted"}>{step}</span>
                {i === 2 ? <span className="text-xs text-accent">Goulot · ordonnancement</span> : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="border-t border-line p-5 md:col-span-3 md:border-l md:border-t-0">
          <p className="text-xs text-faint">À trancher</p>
          <p className="mt-3 text-sm leading-relaxed">Ne pas promettre sous 10 jours tant que le goulot n’a pas de seuil.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">Agent autorisé sur le statut de commande. Pas sur le prix.</p>
        </div>
      </div>
    </motion.div>
  );
}

function Cases() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const current = CASES[index];
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {CASES.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            className={
              i === index
                ? "shrink-0 rounded-full bg-fg px-4 py-2 text-sm text-bg"
                : "shrink-0 rounded-full border border-line px-4 py-2 text-sm text-muted"
            }
          >
            {item.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={current.name}
          className="mt-8 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease }}
        >
          {current.text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Home() {
  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-3xl px-5 pb-10 pt-20 text-center md:pt-28">
          <motion.h1
            className="text-4xl font-medium tracking-[-0.03em] md:text-6xl md:leading-[1.05]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Le plan de l’entreprise suivante. En 14 jours.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            EXIOR réunit organisation, processus, données, agents et sécurité dans un seul plan.
            Vous savez quoi changer, dans quel ordre, et ce qu’il ne faut pas toucher.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <Link
              to="/offre"
              className="inline-flex rounded-full bg-accent-fill px-5 py-2.5 text-sm text-accent-ink"
            >
              Obtenir le plan
            </Link>
          </motion.div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20">
          <ProductFrame />
        </section>

        <section className="border-y border-line">
          <p className="mx-auto max-w-3xl px-5 py-10 text-center text-lg text-muted md:text-xl">
            Plus de 200 entreprises. Le temps utile se voit avant 90 jours, sur un cycle réel.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Conçu pour décider, pas pour empiler des outils.
          </h2>
          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {WORK.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Chaque fonction reçoit un objet précis.
            </h2>
            <div className="mt-12">
              <Cases />
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.03em]">Vos données restent les vôtres.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Le dossier sert à concevoir le plan. Il n’entraîne aucun modèle. La résidence, les accès et le journal font partie du livrable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.03em]">Simple à tenir.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                499 $, une fois. Quatorze jours. Cinq pièces : organisation, processus, données, agents, feuille de route. Le déploiement technique est une autre décision.
              </p>
              <Link to="/offre" className="mt-6 inline-flex text-sm font-medium text-accent">
                Voir le contenu du plan
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">Ce que les dirigeants en retirent.</h2>
            <div className="mt-12 space-y-14">
              {voices.slice(0, 3).map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                    “{item.quote}”
                  </blockquote>
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
          <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
            <p className="text-sm text-muted">Le plan</p>
            <p className="mt-3 text-6xl font-medium tracking-[-0.04em]">499 $</p>
            <p className="mt-3 text-muted">Une fois. Quatorze jours. Vous dirigez.</p>
            <Link
              to="/offre"
              className="mt-8 inline-flex rounded-full bg-accent-fill px-5 py-2.5 text-sm text-accent-ink"
            >
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
