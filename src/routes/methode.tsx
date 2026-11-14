import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, Kicker } from "@/components/site/chrome";
import { days, deliverables } from "@/lib/site-content";
import { phaseNotes, specimen } from "@/lib/library";

export const Route = createFileRoute("/methode")({ component: Methode });

function Methode() {
  const [open, setOpen] = useState(0);
  const current = deliverables[open];

  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>Méthode</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Quatorze jours. Toute la chaîne. Une méthode déjà passée par plus de 200 entreprises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Le délai est court parce que la méthode est écrite. Vous livrez le dossier.
            EXIOR rend l’architecture, les priorités, et ce qui doit bouger avant 90 jours.
            Vous restez celui qui décide.
          </p>
        </section>

        <section className="border-y border-line bg-bg-2">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Le calendrier</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {days.map((day, i) => (
                <li key={day.phase} className="rounded-lg border border-line bg-bg p-6">
                  <p className="text-xs uppercase tracking-widest text-accent">0{i + 1}</p>
                  <p className="mt-3 text-sm text-faint">{day.phase}</p>
                  <h3 className="mt-1 text-xl font-semibold">{day.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{day.text}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {phaseNotes[i]?.outputs.map((item) => (
                      <li key={item}>Sortie — {item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Kicker>Dossier d’entrée</Kicker>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Ce que vous devez pouvoir dire.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Pas un audit de six mois. Un dossier suffisamment précis pour que
                l’architecture ne soit pas une fiction. S’il manque une pièce, nous
                la demandons avant de lancer le compte à rebours.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-8">
              {[
                ["Activité", "Offre, clients, géographie, saisonnalité, ce qui fait la marge."],
                ["Organisation", "Fonctions, effectifs clés, qui décide vraiment, ce qui dépend d’une personne."],
                ["Outils", "Logiciels utilisés, tableurs critiques, ce qui est doublé, ce qui est abandonné."],
                ["Données", "Où sont les clients, les commandes, le stock, la trésorerie. Qui en est propriétaire."],
                ["Objectifs", "Ce que vous voulez pouvoir faire dans douze à vingt-quatre mois, et ce que vous refusez."],
                ["Contraintes", "Réglementation, sous-traitants, trésorerie, délais clients non négociables."],
              ].map(([title, text]) => (
                <li key={title} className="grid gap-2 border-t border-line py-4 md:grid-cols-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted md:col-span-3">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-bg-2">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Kicker>Livrables</Kicker>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Ouvrir une pièce du plan.</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="flex flex-col gap-2 lg:col-span-4">
                {deliverables.map((d, i) => (
                  <button
                    key={d.n}
                    type="button"
                    onClick={() => setOpen(i)}
                    className={
                      i === open
                        ? "rounded-md border border-accent bg-surface px-4 py-4 text-left"
                        : "rounded-md border border-line px-4 py-4 text-left hover:border-muted"
                    }
                  >
                    <span className="text-xs text-accent">{d.n}</span>
                    <span className="mt-1 block text-base font-semibold">{d.title}</span>
                  </button>
                ))}
              </div>
              <div className="rounded-lg border border-line bg-bg p-6 md:p-8 lg:col-span-8">
                <p className="text-xs uppercase tracking-widest text-faint">{current.time}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{current.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{current.text}</p>
                <ul className="mt-6 space-y-2">
                  {current.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="text-accent">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <Kicker>Spécimen</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            La structure d’un plan. Pas un plan réel.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specimen.map((part) => (
              <article key={part.n} className="rounded-lg border border-line p-5">
                <p className="text-xs text-accent">{part.n}</p>
                <h3 className="mt-2 text-lg font-semibold">{part.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {part.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-lg border border-line p-6">
              <h2 className="text-xl font-semibold">Inclus dans la conception</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li>Lecture de votre dossier et questions de cadrage.</li>
                <li>Cartographie, architecture, priorités, feuille de route.</li>
                <li>Spécification des harness pour les cas d’usage retenus.</li>
                <li>Lecture macro et sectorielle limitée aux décisions du plan.</li>
                <li>Espace EXIOR pour relire l’ensemble.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-line p-6">
              <h2 className="text-xl font-semibold">Hors périmètre</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li>Développement, intégration, migration de données.</li>
                <li>Exploitation des agents en production.</li>
                <li>Audit de certification ou prestation juridique.</li>
                <li>Formation générale des équipes à l’IA.</li>
                <li>Accompagnement mensuel après la livraison du plan.</li>
              </ul>
            </article>
          </div>
          <Link
            to="/offre"
            className="mt-10 inline-flex rounded-full bg-accent-fill px-6 py-3 text-sm font-medium text-accent-ink"
          >
            Préparer le dossier — 499 $
          </Link>
        </section>
      </main>
    </Shell>
  );
}
