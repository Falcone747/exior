import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Shell, Kicker } from "@/components/site/chrome";
import { faqs } from "@/lib/site-content";
import { moreFaqs } from "@/lib/library";
import { FaqList } from "@/components/site/ui";

export const Route = createFileRoute("/offre")({ component: Offre });

const STORAGE_KEY = "exior-dossier-v1";

type Dossier = {
  activite: string;
  organisation: string;
  outils: string;
  objectifs: string;
  contact: string;
};

const EMPTY: Dossier = {
  activite: "",
  organisation: "",
  outils: "",
  objectifs: "",
  contact: "",
};

const FIELDS: { key: keyof Dossier; label: string; hint: string; rows: number }[] = [
  {
    key: "activite",
    label: "Activité",
    hint: "Ce que vous vendez, à qui, sur quel territoire, ce qui fait la marge.",
    rows: 4,
  },
  {
    key: "organisation",
    label: "Organisation",
    hint: "Fonctions, effectif approximatif, qui décide, ce qui dépend d’une personne.",
    rows: 4,
  },
  {
    key: "outils",
    label: "Outils et données",
    hint: "Logiciels, tableurs critiques, où vivent clients, commandes, stock, trésorerie.",
    rows: 4,
  },
  {
    key: "objectifs",
    label: "Objectifs et contraintes",
    hint: "Ce que vous voulez pouvoir faire dans 12 à 24 mois. Ce que vous refusez.",
    rows: 4,
  },
  {
    key: "contact",
    label: "Contact",
    hint: "Nom, rôle, e-mail. Sert à relire votre dossier sur cet appareil.",
    rows: 2,
  },
];

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

  const filled = FIELDS.filter((f) => data[f.key].trim().length > 0).length;

  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Kicker>Offre</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            499 $. Quatorze jours. L’entreprise suivante.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Paiement unique. Vous obtenez l’architecture de toute la chaîne de valeur,
            l’ordre des chantiers, et un espace pour piloter. Les gains de temps se
            jouent sur les 90 jours qui suivent — parce que vous savez enfin par où commencer.
          </p>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl md:grid-cols-12">
            <div className="border-b border-line px-5 py-10 md:col-span-5 md:border-b-0 md:border-r md:py-16">
              <p className="text-sm text-muted">Plan de transformation EXIOR</p>
              <p className="mt-3 text-6xl font-semibold tracking-tight">499 $</p>
              <p className="mt-2 text-sm text-muted">Paiement unique · 14 jours</p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Analyse personnalisée de votre entreprise",
                  "Organisation et architecture numérique cibles",
                  "Harness des cas d’usage IA retenus",
                  "Veille macro et sectorielle utile aux décisions",
                  "Décomposition et optimisation des processus critiques",
                  "Règles de souveraineté et de cybersécurité",
                  "Feuille de route ordonnée par dépendances",
                  "Espace EXIOR personnel",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-t border-line pt-3">
                    <span className="text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-faint">
                La conception du plan est incluse. Le déploiement technique dans
                vos systèmes fait l’objet d’une prestation distincte.
              </p>
            </div>
            <div className="px-5 py-10 md:col-span-7 md:py-16 md:pl-12" id="dossier">
              <h2 className="text-2xl font-semibold tracking-tight">Préparer le dossier</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                Cinq champs. Le brouillon reste sur cet appareil. Il sert à voir
                si vous avez déjà de quoi lancer les 14 jours. {filled}/5 renseignés.
              </p>
              <form onSubmit={save} className="mt-8 space-y-5">
                {FIELDS.map((field) => (
                  <label key={field.key} className="block">
                    <span className="text-sm font-medium">{field.label}</span>
                    <span className="mt-1 block text-xs text-faint">{field.hint}</span>
                    <textarea
                      value={data[field.key]}
                      rows={field.rows}
                      onChange={(e) => update(field.key, e.target.value)}
                      className="mt-2 w-full resize-y rounded-md border border-line bg-bg-2 px-3 py-3 text-sm leading-relaxed text-fg outline-none focus:border-accent"
                    />
                  </label>
                ))}
                <button
                  type="submit"
                  className="rounded-full bg-accent-fill px-6 py-3 text-sm font-medium text-accent-ink"
                >
                  Enregistrer le brouillon
                </button>
                {saved ? (
                  <p className="text-sm text-muted">
                    Brouillon enregistré sur cet appareil. Relisez-le, complétez ce
                    qui est vague, puis transmettez-le au moment de la commande.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              ["1", "Vous commandez", "Paiement unique. Le dossier se complète ensuite, pas dans la précipitation du checkout."],
              ["2", "Le délai démarre", "Quatorze jours à compter du dossier complet, pas d’un formulaire à moitié vide."],
              ["3", "Vous recevez le plan", "Architecture, priorités, feuille de route, Espace EXIOR. Vous décidez de la suite."],
            ].map(([n, t, d]) => (
              <article key={n}>
                <p className="text-xs text-accent">{n}</p>
                <h3 className="mt-2 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <Kicker>Questions</Kicker>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Avant de commander.</h2>
            <div className="mt-8">
              <FaqList items={[...faqs, ...moreFaqs]} />
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
