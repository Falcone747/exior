import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/expertise", label: "Expertise" },
  { to: "/situations", label: "Situations" },
  { to: "/methode", label: "Méthode" },
  { to: "/sources", label: "Sources" },
  { to: "/offre", label: "Offre" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/visuals/logo.jpg" alt="" className="size-10 object-contain" />
          <span className="text-lg font-semibold tracking-tight">EXIOR</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  active
                    ? "text-sm text-fg"
                    : "text-sm text-muted transition-colors hover:text-fg"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/offre"
            className="hidden rounded-full bg-accent-fill px-4 py-2 text-sm font-medium text-accent-ink lg:inline-flex"
          >
            Démarrer — 499 $
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 text-base"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/offre"
              className="mt-4 inline-flex justify-center rounded-full bg-accent-fill px-4 py-3 text-sm font-medium text-accent-ink"
              onClick={() => setOpen(false)}
            >
              Démarrer — 499 $
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold">EXIOR</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Conception du plan de transformation : organisation, processus, données,
            technologies et intelligence artificielle. Vous gardez la direction.
            EXIOR fournit l’architecture et l’ordre d’exécution.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-faint">Pages</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="text-muted hover:text-fg">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-faint">Offre</p>
          <p className="mt-4 text-sm text-muted">Plan de transformation</p>
          <p className="mt-1 text-2xl font-semibold">499 $</p>
          <p className="mt-1 text-sm text-muted">Paiement unique · 14 jours</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-faint sm:flex-row sm:justify-between">
          <p>EXIOR — Transform your enterprise.</p>
          <p>La conception du plan est incluse. Le déploiement technique est distinct.</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-muted">{children}</p>
  );
}
