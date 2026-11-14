import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell, Kicker } from "@/components/site/chrome";
import { SplitPanel, useHashId } from "@/components/site/ui";
import { situations } from "@/lib/library";

export const Route = createFileRoute("/situations")({ component: SituationsPage });

const IDS = situations.map((item) => item.id);
const FAMILIES = ["Toutes", ...Array.from(new Set(situations.map((item) => item.family)))];

function SituationsPage() {
  const [id, select] = useHashId(IDS, situations[0].id);
  const [family, setFamily] = useState("Toutes");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return situations.filter((item) => {
      const inFamily = family === "Toutes" || item.family === family;
      const blob = `${item.title} ${item.lead} ${item.body}`.toLowerCase();
      return inFamily && (q === "" || blob.includes(q));
    });
  }, [family, query]);
  const active = visible.find((item) => item.id === id) ?? visible[0];

  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Kicker>Situations</Kicker>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Votre chaîne de valeur est déjà dans la méthode.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Huit types d’entreprise. Les frottements que nous avons vus revenir,
          les agents qui tiennent, ceux qu’il faut refuser. Trouvez le vôtre.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrer une situation"
            className="w-full rounded-md border border-line bg-bg-2 px-3 py-3 text-sm outline-none focus:border-accent sm:max-w-xs"
            aria-label="Filtrer les situations"
          />
          <div className="flex gap-2 overflow-x-auto">
            {FAMILIES.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={item === family}
                onClick={() => setFamily(item)}
                className={
                  item === family
                    ? "shrink-0 rounded-full bg-fg px-3 py-2 text-xs text-bg"
                    : "shrink-0 rounded-full border border-line px-3 py-2 text-xs text-muted"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          {active ? (
            <SplitPanel
              label={`${visible.length} situations`}
              items={visible.map((item) => ({ id: item.id, title: item.title, hint: item.family }))}
              active={active.id}
              onSelect={select}
            >
              <p className="text-xs uppercase tracking-widest text-accent">{active.family}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{active.title}</h2>
              <p className="mt-4 font-serif text-xl leading-snug">{active.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{active.body}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold">Frictions typiques</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {active.frictions.map((item) => (
                      <li key={item} className="border-t border-line pt-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Ce que le plan regarde</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {active.watches.map((item) => (
                      <li key={item} className="border-t border-line pt-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <p className="rounded-md border border-line p-4 text-sm leading-relaxed">
                  <span className="text-accent">Agent possible. </span>{active.agentsYes}
                </p>
                <p className="rounded-md border border-line p-4 text-sm leading-relaxed">
                  <span className="text-faint">Agent refusé. </span>{active.agentsNo}
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                <span className="text-fg">Veille. </span>{active.macro}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="text-fg">Ordre probable. </span>{active.sequence}
              </p>
            </SplitPanel>
          ) : (
            <p className="text-sm text-muted">Aucune situation ne correspond à ce filtre.</p>
          )}
        </div>
        <Link to="/methode" className="mt-10 inline-flex text-sm font-medium text-accent">
          Voir comment ces lectures entrent dans les 14 jours →
        </Link>
      </main>
    </Shell>
  );
}
