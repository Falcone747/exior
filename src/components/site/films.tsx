import { useEffect, useState, type FC, type ReactNode } from "react";
import { Player } from "@remotion/player";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { useReducedMotion } from "framer-motion";

const CYAN = "#00f0ff";
const LINE = "#26282c";
const MUTED = "#8b9098";
const FG = "#f4f5f6";

function Stage({ children }: { children: ReactNode }) {
  return (
    <AbsoluteFill style={{ background: "#101113", color: FG, fontFamily: "Inter, sans-serif" }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${LINE} 1px, transparent 1px), linear-gradient(90deg, ${LINE} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          opacity: 0.45,
        }}
      />
      {children}
    </AbsoluteFill>
  );
}

export const ChainFilm: FC = () => {
  const frame = useCurrentFrame();
  const steps = ["Acquire", "Qualify", "Produce", "Deliver", "Collect"];
  const progress = interpolate(frame, [8, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const active = Math.min(4, Math.floor(progress * 4.99));
  return (
    <Stage>
      <div style={{ position: "absolute", left: 72, right: 72, top: "46%" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 6, height: 1, background: LINE }} />
        <div style={{ position: "absolute", left: 0, top: 6, height: 1, width: `${progress * 100}%`, background: CYAN }} />
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
          {steps.map((step, i) => (
            <div key={step} style={{ width: 110, textAlign: "center" }}>
              <div
                style={{
                  margin: "0 auto",
                  width: 12,
                  height: 12,
                  borderRadius: 99,
                  background: i <= active ? CYAN : "#3a3d42",
                }}
              />
              <p style={{ marginTop: 18, fontSize: 15, color: i === active ? FG : MUTED }}>{step}</p>
              {i === 2 && active >= 2 ? (
                <p style={{ marginTop: 6, fontSize: 12, color: CYAN }}>Constraint</p>
              ) : (
                <p style={{ marginTop: 6, fontSize: 12, color: "transparent" }}>.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
};

export const LayersFilm: FC = () => {
  const frame = useCurrentFrame();
  const layers = ["Security", "Agents", "Systems", "Data", "Processes", "Organization"];
  return (
    <Stage>
      <div style={{ position: "absolute", left: 80, right: 80, top: 70, display: "flex", flexDirection: "column", gap: 10 }}>
        {layers.map((name, i) => {
          const shown = interpolate(frame, [i * 12, i * 12 + 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const on = frame > 90 && Math.floor((frame - 90) / 12) % layers.length === i;
          return (
            <div
              key={name}
              style={{
                opacity: shown,
                transform: `translateY(${(1 - shown) * 8}px)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: `1px solid ${on ? CYAN : LINE}`,
                background: "#16181a",
                borderRadius: 10,
                padding: "12px 16px",
                fontSize: 15,
              }}
            >
              <span>{name}</span>
              <span style={{ color: MUTED, fontSize: 12 }}>{String(layers.length - i).padStart(2, "0")}</span>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

export const RoadmapFilm: FC = () => {
  const frame = useCurrentFrame();
  const marks = [
    ["Day 0", "Dossier"],
    ["Day 14", "Blueprint"],
    ["Cycle 1", "First build"],
  ];
  const progress = interpolate(frame, [10, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: "42%" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 7, height: 1, background: LINE }} />
        <div style={{ position: "absolute", left: 0, top: 7, height: 1, width: `${progress * 100}%`, background: FG }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {marks.map(([when, title], i) => {
            const on = progress > i / 2.2;
            return (
              <div key={when} style={{ width: 160 }}>
                <div style={{ width: 14, height: 14, borderRadius: 99, background: on ? CYAN : "#3a3d42" }} />
                <p style={{ marginTop: 16, fontSize: 13, color: CYAN }}>{when}</p>
                <p style={{ marginTop: 6, fontSize: 20, color: on ? FG : MUTED }}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

export const AgentFilm: FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    ["Read order status", "Allowed"],
    ["Draft a summary", "Allowed"],
    ["Change the price", "Refused"],
  ];
  return (
    <Stage>
      <div style={{ position: "absolute", left: 80, right: 80, top: 80 }}>
        <p style={{ fontSize: 12, letterSpacing: "0.14em", color: MUTED, textTransform: "uppercase" }}>Agent boundary</p>
        <div style={{ marginTop: 18, border: `1px solid ${LINE}`, borderRadius: 12, overflow: "hidden" }}>
          {rows.map(([action, verdict], i) => {
            const shown = frame > 12 + i * 22;
            const refused = verdict === "Refused";
            return (
              <div
                key={action}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 20px",
                  borderTop: i === 0 ? "none" : `1px solid ${LINE}`,
                  opacity: shown ? 1 : 0.25,
                  background: shown && refused ? "#16181a" : "transparent",
                }}
              >
                <span style={{ fontSize: 18 }}>{action}</span>
                <span style={{ fontSize: 14, color: shown && !refused ? CYAN : MUTED }}>{shown ? verdict : "—"}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

export const MapFilm: FC = () => {
  const frame = useCurrentFrame();
  const nodes = [
    [18, 30, "Sales"],
    [48, 22, "Planning"],
    [78, 34, "Operations"],
    [30, 68, "Data"],
    [62, 70, "Finance"],
  ] as const;
  const links = interpolate(frame, [20, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Stage>
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 40, width: "calc(100% - 80px)", height: "calc(100% - 80px)" }}>
        <line x1="18" y1="30" x2="48" y2="22" stroke={FG} strokeWidth="0.4" strokeDasharray="40" strokeDashoffset={40 - links * 40} />
        <line x1="48" y1="22" x2="78" y2="34" stroke={FG} strokeWidth="0.4" strokeDasharray="40" strokeDashoffset={40 - links * 40} />
        <line x1="18" y1="30" x2="30" y2="68" stroke={CYAN} strokeWidth="0.45" strokeDasharray="50" strokeDashoffset={50 - links * 50} />
        <line x1="78" y1="34" x2="62" y2="70" stroke={FG} strokeWidth="0.4" strokeDasharray="40" strokeDashoffset={40 - links * 40} />
        <line x1="30" y1="68" x2="62" y2="70" stroke={FG} strokeWidth="0.4" strokeDasharray="40" strokeDashoffset={40 - links * 40} />
      </svg>
      {nodes.map(([x, y, label], i) => {
        const on = frame > 8 + i * 8;
        return (
          <div
            key={label}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              opacity: on ? 1 : 0,
              border: `1px solid ${LINE}`,
              background: "#16181a",
              borderRadius: 8,
              padding: "8px 12px",
              fontSize: 14,
            }}
          >
            {label}
          </div>
        );
      })}
    </Stage>
  );
};

export const SpaceFilm: FC = () => {
  const frame = useCurrentFrame();
  const nav = ["Enterprise Map", "Architecture", "Roadmap", "Decisions"];
  const active = Math.min(3, Math.floor(interpolate(frame, [0, 110], [0, 3.99], { extrapolateRight: "clamp" })));
  const lines = [
    ["Functions connected to the value chain", "Dependencies named"],
    ["Six layers, one target", "Security drawn in"],
    ["Day 14, then the first cycle", "The rest waits"],
    ["Price change stays human", "Status read is allowed"],
  ];
  return (
    <Stage>
      <div style={{ position: "absolute", inset: 36, display: "grid", gridTemplateColumns: "200px 1fr", border: `1px solid ${LINE}`, borderRadius: 12, overflow: "hidden", background: "#0c0d0e" }}>
        <div style={{ borderRight: `1px solid ${LINE}`, padding: 12 }}>
          {nav.map((item, i) => (
            <div
              key={item}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                fontSize: 13,
                color: i === active ? FG : MUTED,
                background: i === active ? "#16181a" : "transparent",
                border: i === active ? `1px solid ${CYAN}` : "1px solid transparent",
                marginBottom: 6,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ padding: 28 }}>
          <p style={{ fontSize: 12, color: MUTED }}>EXIOR Space</p>
          <p style={{ marginTop: 16, fontSize: 26 }}>{lines[active][0]}</p>
          <p style={{ marginTop: 10, fontSize: 16, color: MUTED }}>{lines[active][1]}</p>
        </div>
      </div>
    </Stage>
  );
};

const FILMS = {
  chain: { label: "Value chain", component: ChainFilm, duration: 140 },
  layers: { label: "Target architecture", component: LayersFilm, duration: 160 },
  roadmap: { label: "Transformation roadmap", component: RoadmapFilm, duration: 140 },
  agent: { label: "Agent boundary", component: AgentFilm, duration: 130 },
  map: { label: "Connected enterprise", component: MapFilm, duration: 140 },
  space: { label: "EXIOR Space", component: SpaceFilm, duration: 150 },
} as const;

export type FilmName = keyof typeof FILMS;

export function Film({ name }: { name: FilmName }) {
  const spec = FILMS[name];
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#101113]">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="text-xs text-faint">{spec.label}</p>
        <span className="size-1.5 rounded-full bg-accent-fill" />
      </div>
      <div className="aspect-video">
        {ready && !reduce ? (
          <Player
            component={spec.component}
            durationInFrames={spec.duration}
            compositionWidth={960}
            compositionHeight={540}
            fps={30}
            acknowledgeRemotionLicense
            loop
            autoPlay
            controls={false}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="grid h-full place-items-center px-6 text-center text-sm text-muted">{spec.label}</div>
        )}
      </div>
    </div>
  );
}
