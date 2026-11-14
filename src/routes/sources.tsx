import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell, Kicker } from "@/components/site/chrome";
import { SplitPanel, useHashId } from "@/components/site/ui";
import { glossary, indicators, optimisations, references } from "@/lib/library";

export const Route = createFileRoute("/sources")({ component: SourcesPage });

const IDS = references.map((item) => item.id);
const GROUPS = ["Toutes", ...Array.from(new Set(references.map((item) => item.group)))];

function SourcesPage() {
  const [id, select] = useHashId(IDS, references[0].id);
  const [group, setGroup] = useState("Toutes");
  const visible = useMemo(
    () => references.filter((item) => group === "Toutes" || item.group === group),
    [group],
  );
  const active = visible.find((item) => item.id === id) ?? visible[0];

  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Kicker>Sources</Kicker>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Branchés sur les sources que les décisions sérieuses exigent.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          BCE, INSEE, Eurostat, FMI, OCDE pour la veille. ANSSI, CNIL, NIST pour
          la sécurité. MCP, Stanford HAI, HELM pour les agents. Chaque source a
          un usage et une limite. Rien n’est décoratif.
        </p>
        <div className="mt-8 flex gap-2 overflow-x-auto">
          {GROUPS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === group}
              onClick={() => setGroup(item)}
              className={
                item === group
                  ? "shrink-0 rounded-full bg-fg px-3 py-2 text-xs text-bg"
                  : "shrink-0 rounded-full border border-line px-3 py-2 text-xs text-muted"
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {active ? (
            <SplitPanel
              label="Références"
              items={visible.map((item) => ({ id: item.id, title: item.name, hint: item.group }))}
              active={active.id}
              onSelect={select}
            >
              <p className="text-xs uppercase tracking-widest text-accent">{active.group}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{active.name}</h2>
              <p className="mt-4 text-sm leading-relaxed">{active.use}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="text-fg">Limite. </span>{active.limit}
              </p>
              <a
                href={active.href}
                className="mt-6 inline-flex text-sm font-medium text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Ouvrir la source
              </a>
            </SplitPanel>
          ) : null}
        </div>

        <section className="mt-20 border-t border-line pt-12">
          <Kicker>Indicateurs</Kicker>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Ce qui peut déplacer une priorité.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {indicators.map((item) => (
              <article key={item.id} className="rounded-lg border border-line p-5">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-faint">{item.source}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-line pt-12">
          <Kicker>Optimisation</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            Six familles de problèmes. Et quand on refuse de les poser.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {optimisations.map((item) => (
              <article key={item.id} className="rounded-lg border border-line p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed"><span className="text-faint">Quand. </span>{item.when}</p>
                <p className="mt-2 text-sm leading-relaxed"><span className="text-faint">Modèle. </span>{item.model}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted"><span className="text-fg">Pas quand. </span>{item.notWhen}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="glossaire" className="mt-20 border-t border-line pt-12">
          <Kicker>Glossaire</Kicker>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Les mots du plan, sans habillage.</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {glossary.map((item) => (
              <div key={item.id} className="grid gap-2 py-4 md:grid-cols-12">
                <dt className="font-semibold md:col-span-4">{item.term}</dt>
                <dd className="text-sm leading-relaxed text-muted md:col-span-8">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Link to="/expertise" className="mt-10 inline-flex text-sm font-medium text-accent">
          Revenir aux disciplines →
        </Link>
      </main>
    </Shell>
  );
}
