import { useState } from "react";

const LAYERS = [
  {
    id: "org",
    n: "01",
    title: "Organisation",
    line: "Fonctions, responsabilités, instances.",
    body: "On redessine qui décide, qui exécute, qui arbitre. Le plan nomme les fonctions cibles, les interfaces entre elles et les rituels de coordination — pas un organigramme décoratif, une machine de décision.",
    out: ["Carte des fonctions", "Matrice de responsabilités", "Instances de décision"],
  },
  {
    id: "proc",
    n: "02",
    title: "Processus",
    line: "Décomposition, contraintes, chemins.",
    body: "Chaque processus critique est découpé en étapes, entrées, sorties et points de friction. On formule ensuite ce qui peut être standardisé, automatisé ou laissé au jugement humain, avec les dépendances explicites.",
    out: ["Cartographie actuelle", "Processus cibles", "Points de contrôle"],
  },
  {
    id: "data",
    n: "03",
    title: "Données",
    line: "Sources, qualité, résidence.",
    body: "Sans donnée fiable, l’IA amplifie le bruit. Le plan identifie les systèmes sources, les objets métier, les lacunes de qualité et les règles de résidence. La souveraineté se décide ici, pas après coup.",
    out: ["Objets métier", "Flux de données", "Règles de résidence"],
  },
  {
    id: "sys",
    n: "04",
    title: "Systèmes",
    line: "Outils, connexions, dette.",
    body: "Inventaire de ce qui existe déjà, de ce qui se duplique, de ce qui doit rester. L’architecture cible relie les systèmes au lieu d’en ajouter un de plus. On évite de reconstruire ce qui tient.",
    out: ["Paysage applicatif", "Connexions prioritaires", "Ce qu’on ne touche pas"],
  },
  {
    id: "ia",
    n: "05",
    title: "Agents & harness",
    line: "Là où l’IA a un rôle précis.",
    body: "Un harness est le cadre d’un agent : contexte, outils, limites, validation humaine. On ne « met pas de l’IA partout ». On désigne les activités où un agent réduit un cycle, et celles où il n’a pas sa place.",
    out: ["Cas d’usage retenus", "Harness par activité", "Points de validation"],
  },
  {
    id: "gov",
    n: "06",
    title: "Gouvernance",
    line: "Sécurité, audit, responsabilité.",
    body: "Qui peut déclencher un agent, sur quelles données, avec quelle trace. Moindre privilège, journalisation, escalade humaine. La cybersécurité est une contrainte de conception, pas une annexe.",
    out: ["Politique d’usage", "Journal d’actions", "Escalades"],
  },
] as const;

export function ArchitectureStudio() {
  const [id, setId] = useState<(typeof LAYERS)[number]["id"]>("org");
  const active = LAYERS.find((l) => l.id === id) ?? LAYERS[0];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="overflow-hidden rounded-lg border border-line bg-bg-2">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-faint">Architecture cible</p>
            <p className="text-xs text-muted">{active.n}</p>
          </div>
          <div className="relative p-4">
            <div className="grid gap-2">
              {LAYERS.map((layer) => {
                const on = layer.id === id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setId(layer.id)}
                    className={
                      on
                        ? "flex items-center justify-between rounded-md border border-accent bg-surface px-4 py-3 text-left"
                        : "flex items-center justify-between rounded-md border border-line px-4 py-3 text-left hover:border-muted"
                    }
                  >
                    <span className="flex items-center gap-3">
                      <span className={on ? "text-xs text-accent" : "text-xs text-faint"}>{layer.n}</span>
                      <span className="text-sm font-medium">{layer.title}</span>
                    </span>
                    <span className="hidden text-xs text-muted sm:inline">{layer.line}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 md:p-8">
          <p className="font-serif text-3xl leading-tight md:text-4xl">{active.title}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{active.body}</p>
          <p className="mt-8 text-xs uppercase tracking-widest text-faint">Dans le plan</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3">
            {active.out.map((item) => (
              <li key={item} className="rounded-md border border-line px-3 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
