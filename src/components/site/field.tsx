const WAVES = [
  "M0 220 C 80 80, 160 80, 240 220 S 400 360, 480 220 S 640 80, 800 220",
  "M0 250 C 90 140, 170 120, 260 250 S 420 380, 510 240 S 660 110, 800 250",
  "M0 190 C 100 40, 180 70, 270 190 S 430 330, 520 180 S 670 40, 800 190",
  "M0 280 C 70 180, 150 170, 250 280 S 410 400, 500 270 S 650 160, 800 280",
  "M0 160 C 110 20, 200 40, 290 160 S 450 300, 540 150 S 680 30, 800 160",
] as const;

export function WaveField({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <filter id="violet-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="violet-fade" x1="0" x2="1">
          <stop offset="0" stopColor="#301058" stopOpacity="0" />
          <stop offset="0.35" stopColor="#f808f8" />
          <stop offset="0.7" stopColor="#c026ff" />
          <stop offset="1" stopColor="#301058" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="#07040f" />
      {WAVES.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="url(#violet-fade)"
          strokeWidth={i === 0 ? 2.4 : 1.2}
          filter="url(#violet-glow)"
          className="wave-dash"
          style={{ animationDuration: `${6 + i * 1.3}s`, opacity: 0.45 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

const PIECES: { title: string; kind: number }[] = [
  { title: "Filament", kind: 0 },
  { title: "Orbite", kind: 1 },
  { title: "Radar", kind: 2 },
  { title: "Flux", kind: 3 },
  { title: "Lattice", kind: 4 },
  { title: "Harness", kind: 5 },
  { title: "Bouclier", kind: 6 },
  { title: "Chaîne", kind: 7 },
  { title: "Signal", kind: 8 },
  { title: "Matrice", kind: 9 },
  { title: "Entonnoir", kind: 10 },
  { title: "Timeline", kind: 11 },
  { title: "Nœuds", kind: 12 },
  { title: "Accès", kind: 13 },
  { title: "Charge", kind: 14 },
  { title: "Veille", kind: 15 },
  { title: "Agent", kind: 16 },
  { title: "Marge", kind: 17 },
  { title: "14 jours", kind: 18 },
  { title: "90 jours", kind: 19 },
];

function Glyph({ kind }: { kind: number }) {
  const n = 5 + (kind % 4);
  if (kind % 5 === 0) {
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full">
        <path d="M4 50 C 24 10, 40 10, 60 50 S 96 90, 116 36" fill="none" stroke="#f808f8" strokeWidth="1.4" className="wave-dash" />
        <path d="M4 40 C 30 16, 48 18, 70 40 S 100 70, 116 28" fill="none" stroke="#c026ff" strokeWidth="1" className="wave-dash" />
      </svg>
    );
  }
  if (kind % 5 === 1) {
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full">
        <circle cx="60" cy="36" r="10" fill="none" stroke="#f808f8" strokeWidth="1.2" />
        <circle cx="60" cy="36" r="18" fill="none" stroke="#7c3aed" strokeWidth="1" />
        <circle cx="78" cy="28" r="3" fill="#f808f8" />
      </svg>
    );
  }
  if (kind % 5 === 2) {
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full">
        {Array.from({ length: n }, (_, i) => (
          <rect key={i} x={8 + i * 18} y={48 - ((i * 17 + kind) % 36)} width="8" height={16 + ((i * 13) % 28)} rx="2" fill={i % 2 ? "#f808f8" : "#7c3aed"} opacity={0.85} />
        ))}
      </svg>
    );
  }
  if (kind % 5 === 3) {
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full">
        {Array.from({ length: 6 }, (_, i) => (
          <circle key={i} cx={16 + (i % 3) * 36} cy={20 + Math.floor(i / 3) * 32} r="3" fill="#f808f8" />
        ))}
        <path d="M16 20 H88 M16 52 H88 M16 20 V52 M52 20 V52 M88 20 V52" stroke="#3a2460" />
        <path d="M16 20 L52 52 L88 20" fill="none" stroke="#f808f8" className="wave-dash" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 72" className="h-full w-full">
      <path d="M8 36 H112" stroke="#3a2460" />
      <path d="M8 36 H70" stroke="#f808f8" className="wave-dash" />
      {Array.from({ length: 4 }, (_, i) => (
        <circle key={i} cx={16 + i * 28} cy="36" r={i === kind % 4 ? 5 : 3} fill={i === kind % 4 ? "#f808f8" : "#7c3aed"} />
      ))}
    </svg>
  );
}

export function TechField() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {PIECES.map((piece) => (
        <figure key={piece.title} className="overflow-hidden rounded-lg border border-line bg-[#07040f]">
          <div className="h-24 px-2 pt-2">
            <Glyph kind={piece.kind} />
          </div>
          <figcaption className="border-t border-line px-3 py-2 text-xs text-muted">{piece.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
