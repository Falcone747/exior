import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";
import { agentRules, disciplines, sources } from "@/lib/site-content";
import { disciplineNotes } from "@/lib/library";

export const Route = createFileRoute("/expertise")({ component: Expertise });

function Expertise() {
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Kicker>Expertise</Kicker>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Ce que les meilleurs cabinets séparent, EXIOR le réunit.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Stratégie, processus, data, cybersécurité, acquisition, agents.
          Une méthode éprouvée, les outils les plus sérieux du moment, et un seul
          plan — le vôtre. Ouvrez une discipline.
        </p>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {disciplines.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="shrink-0 rounded-full border border-line px-4 py-2 text-sm text-muted hover:text-fg"
            >
              {d.title}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-16">
          {disciplines.map((d) => (
            <article key={d.id} id={d.id} className="scroll-mt-24 border-t border-line pt-10">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{d.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.lead}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="mt-4 text-base leading-relaxed text-fg">{d.body}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {disciplineNotes[d.id]?.depth}
                  </p>
                  <ol className="mt-6 grid gap-3">
                    {d.method.map((step, i) => (
                      <li key={step} className="flex gap-4 rounded-md border border-line px-4 py-3">
                        <span className="text-xs text-accent">0{i + 1}</span>
                        <span className="text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-faint">Questions du plan</p>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                        {disciplineNotes[d.id]?.questions.map((q) => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-faint">Pièces</p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {disciplineNotes[d.id]?.artifacts.map((a) => (
                          <li key={a} className="border-t border-line pt-2">{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 border-t border-line pt-12">
          <Kicker>Agents</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            Six règles pour un agent que l’on peut laisser tourner.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Déployer un agent fiable, ce n’est pas choisir un modèle. C’est écrire
            le contrat d’usage avant la première connexion. Ces règles sont celles
            que le plan applique à chaque cas retenu.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agentRules.map((rule) => (
              <article key={rule.title} className="rounded-lg border border-line p-5">
                <h3 className="text-lg font-semibold">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{rule.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-line pt-12">
          <Kicker>Sources</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            Branchés sur des références que vous pouvez vérifier.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Nous ne revendiquons pas un réseau fermé d’analystes ni un benchmark
            maison. Le plan cite ses sources. Si une donnée n’est pas sourcée, elle
            est marquée comme hypothèse, pas comme fait.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sources.map((group) => (
              <article key={group.group} className="rounded-lg border border-line p-6">
                <h3 className="text-lg font-semibold">{group.group}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-lg border border-line bg-bg-2 p-6 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Ce que cette page ne prétend pas</h2>
          <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
            <li>Nous ne certifions pas votre entreprise ISO, ANSSI ou autre.</li>
            <li>Nous ne publions pas de prévisions macroéconomiques propriétaires.</li>
            <li>Nous ne garantissons pas un gain de marge chiffré avant d’avoir vu vos données.</li>
            <li>Nous ne déployons pas les systèmes dans le prix du plan.</li>
          </ul>
          <Link to="/offre" className="mt-8 inline-flex text-sm font-medium text-accent">
            Passer à l’offre →
          </Link>
        </section>
      </main>
    </Shell>
  );
}
