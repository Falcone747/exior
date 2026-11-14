import { useEffect, useState } from "react";

const STEPS = [
  { name: "Acquérir", before: "Le marketing promet ce que l’exploitation ne tient pas.", act: "La promesse colle à la capacité réelle." },
  { name: "Qualifier", before: "Le besoin se perd entre le commercial et le devis.", act: "Le besoin devient un devis fiable." },
  { name: "Produire", before: "L’urgence passe devant. Le goulot se découvre trop tard.", act: "Le goulot se voit avant l’urgence." },
  { name: "Livrer", before: "La date client ignore le quai, le chantier, l’équipe.", act: "On ne promet que ce que la chaîne tient." },
  { name: "Encaisser", before: "La marge se voit après. La trésorerie subit.", act: "La marge remonte avant la clôture." },
  { name: "Apprendre", before: "Chaque incident recommence. Rien n’est écrit.", act: "L’exception devient une règle, ou un refus." },
] as const;

export function JourneyFilm() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % STEPS.length);
    }, 1700);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = STEPS[index];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line bg-bg-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 w-64 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_68%)] transition-[left] duration-700 ease-out"
        style={{ left: `calc(${(index / (STEPS.length - 1)) * 100}% - 8rem)` }}
      />
      <div className="relative px-5 py-7 md:px-8 md:py-9">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Signal EXIOR</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
              À chaque maillon, le système passe.
            </h3>
          </div>
          <p className="font-serif text-4xl tabular-nums text-accent">0{index + 1}</p>
        </div>

        <div className="relative mt-8 h-20">
          <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-line" />
          <div
            className="absolute left-3 top-1/2 h-px -translate-y-1/2 bg-fg shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-[width] duration-700 ease-in-out"
            style={{ width: `calc((100% - 1.5rem) * ${index / (STEPS.length - 1)})` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-[left] duration-700 ease-in-out"
            style={{ left: `calc(0.75rem + (100% - 1.5rem) * ${index / (STEPS.length - 1)})` }}
          >
            <span className="signal-ring" />
            <span className="signal-ring signal-ring-late" />
            <span className="relative block size-3.5 rounded-full bg-fg shadow-[0_0_22px_6px_rgba(255,255,255,0.85)]" />
          </div>
          <ol className="relative grid h-full grid-cols-6">
            {STEPS.map((step, i) => (
              <li key={step.name} className="flex items-end justify-center">
                <button
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "text-xs font-medium text-fg md:text-sm"
                      : "text-xs text-faint md:text-sm"
                  }
                >
                  {step.name}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div key={current.name} className="mt-2 grid gap-3 md:grid-cols-2">
          <p className="slide-out rounded-xl border border-line bg-bg px-4 py-4 text-sm leading-relaxed text-muted">
            <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-faint">Sans cadre</span>
            {current.before}
          </p>
          <p className="slide-in rounded-xl border border-line bg-surface px-4 py-4 text-sm leading-relaxed text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_16px_40px_rgba(0,0,0,0.35)]">
            <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-accent">EXIOR intervient</span>
            {current.act}
          </p>
        </div>
      </div>
    </div>
  );
}

const MOMENTS = [
  {
    id: "now",
    label: "Aujourd’hui",
    image: "/visuals/avant.jpg",
    title: "L’entreprise travaille. Elle ne tient pas ensemble.",
    text: "Les outils sont là. Les décisions non. Le devis, l’atelier, le stock et l’acquisition racontent quatre histoires. Le dirigeant compense.",
  },
  {
    id: "j14",
    label: "Jour 14",
    image: "/visuals/decision.jpg",
    title: "Vous tenez l’architecture. Vous pouvez trancher.",
    text: "Carte de la chaîne de valeur, organisation cible, agents autorisés, cybersécurité, ordre des chantiers. Un plan. Pas une pile de slides.",
  },
  {
    id: "j90",
    label: "Avant 90 jours",
    image: "/visuals/apres.jpg",
    title: "Le temps revient sur le cycle qui paie.",
    text: "Les frottements prioritaires sont retirés. L’équipe voit les écarts avant le client. La productivité se mesure sur un cycle réel, pas sur un slogan.",
  },
] as const;

export function MomentSwitch() {
  const [id, setId] = useState<(typeof MOMENTS)[number]["id"]>("j14");
  const current = MOMENTS.find((item) => item.id === id) ?? MOMENTS[1];
  return (
    <div>
      <div className="flex gap-2">
        {MOMENTS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === current.id}
            onClick={() => setId(item.id)}
            className={
              item.id === current.id
                ? "min-h-11 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg"
                : "min-h-11 rounded-full border border-line px-4 py-2 text-sm text-muted"
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      <figure key={current.id} className="reveal mt-6 overflow-hidden rounded-lg border border-line">
        <img
          src={current.image}
          alt={current.title}
          className="aspect-[3/2] w-full object-cover md:aspect-[16/9]"
        />
        <figcaption className="grid gap-3 bg-surface p-5 md:grid-cols-12 md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight md:col-span-5">{current.title}</h3>
          <p className="text-sm leading-relaxed text-muted md:col-span-7 md:text-base">{current.text}</p>
        </figcaption>
      </figure>
    </div>
  );
}

const LINKS = [
  { id: "acq", name: "Acquérir", now: "Le marketing promet ce que l’exploitation ne tient pas.", next: "L’offre et la capacité parlent le même langage." },
  { id: "qual", name: "Qualifier", now: "Le besoin se perd entre le commercial et le devis.", next: "Une demande entre, un devis fiable peut sortir." },
  { id: "prod", name: "Produire", now: "L’urgence passe devant. Le goulot se découvre trop tard.", next: "La charge, les priorités et les manques sont visibles." },
  { id: "liv", name: "Livrer", now: "La promesse client ignore le quai, le chantier, l’équipe.", next: "On promet ce que la chaîne peut tenir." },
  { id: "cash", name: "Encaisser", now: "La marge se voit après. La trésorerie subit.", next: "L’écart de marge remonte avant la clôture." },
  { id: "learn", name: "Apprendre", now: "Chaque incident recommence. Rien n’est écrit.", next: "L’exception devient une règle, ou un refus assumé." },
] as const;

export function ValueChain() {
  const [id, setId] = useState<(typeof LINKS)[number]["id"]>(LINKS[0].id);
  const current = LINKS.find((item) => item.id === id) ?? LINKS[0];
  const index = LINKS.findIndex((item) => item.id === current.id);
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <img src="/visuals/chaine.jpg" alt="Une chaîne de valeur continue, du bureau à l’expédition" className="aspect-[16/9] w-full object-cover" />
      <div className="bg-bg p-5 md:p-8">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {LINKS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === current.id}
              onClick={() => setId(item.id)}
              className={
                item.id === current.id
                  ? "min-h-11 rounded-md bg-fg px-2 py-3 text-sm font-medium text-accent-ink"
                  : "min-h-11 rounded-md border border-line px-2 py-3 text-sm text-muted"
              }
            >
              <span className="block text-[10px] uppercase tracking-widest opacity-70">0{i + 1}</span>
              {item.name}
            </button>
          ))}
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-line">
          <div
            className="chain-run h-full bg-fg"
            style={{ width: `${((index + 1) / LINKS.length) * 100}%` }}
          />
        </div>
        <div key={current.id} className="reveal mt-6 grid gap-4 md:grid-cols-2">
          <p className="rounded-md border border-line p-4 text-sm leading-relaxed text-muted">
            <span className="block text-xs uppercase tracking-widest text-faint">Avant</span>
            <span className="mt-2 block text-base text-fg">{current.now}</span>
          </p>
          <p className="rounded-md border border-line bg-surface p-4 text-sm leading-relaxed">
            <span className="block text-xs uppercase tracking-widest text-accent">Après EXIOR</span>
            <span className="mt-2 block text-base">{current.next}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const voices = [
  {
    quote: "En quatorze jours, j’ai vu l’entreprise entière. Pas un outil de plus : l’ordre dans lequel on change.",
    name: "Camille R.",
    role: "Directrice générale",
    meta: "Services B2B · 90 personnes",
    gain: "Une semaine de moins sur le cycle devis–commande, avant 90 jours.",
  },
  {
    quote: "On empilait les logiciels. EXIOR a dit quoi relier, quoi garder, et ce qu’il ne fallait surtout pas automatiser.",
    name: "Marc D.",
    role: "Président",
    meta: "Industrie · 160 personnes",
    gain: "Le goulot d’atelier est devenu un chiffre, plus une surprise.",
  },
  {
    quote: "La cybersécurité et les agents sont dans le même plan. Enfin un sujet, pas deux prestataires.",
    name: "Inès K.",
    role: "Directrice des systèmes",
    meta: "Distribution · 40 sites",
    gain: "Les accès ont été réduits avant d’ouvrir le moindre agent.",
  },
  {
    quote: "Je croyais qu’il fallait un an de conseil. J’ai payé 499 dollars. J’ai décidé dans la quinzaine.",
    name: "Julien P.",
    role: "Fondateur",
    meta: "Négoce · 35 personnes",
    gain: "Les ruptures se voient avant le client.",
  },
] as const;

export function Voices() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {voices.map((item) => (
        <figure key={item.name} className="flex flex-col rounded-lg border border-line bg-surface p-6">
          <blockquote className="font-serif text-xl leading-snug">« {item.quote} »</blockquote>
          <figcaption className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
              <p className="text-xs uppercase tracking-widest text-faint">{item.meta}</p>
            </div>
          </figcaption>
          <p className="mt-4 border-t border-line pt-4 text-sm text-accent">{item.gain}</p>
        </figure>
      ))}
    </div>
  );
}
