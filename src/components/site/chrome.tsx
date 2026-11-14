import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Transformation" },
  { to: "/method", label: "Method" },
  { to: "/resources", label: "Resources" },
] as const;

const EXPLORE = [
  { to: "/", label: "Enterprise Transformation" },
  { to: "/method", label: "The Method" },
  { to: "/resources", label: "Resources" },
] as const;

const COMPANY = [
  { to: "/offre", label: "Get the Plan" },
  { to: "/", label: "EXIOR Space", hash: "espace" },
] as const;

const RESOURCES = [
  { to: "/resources", label: "Research & Sources" },
  { to: "/method", label: "How the Plan Is Built" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label="Exior">
          <img src="/visuals/lockup.png" alt="Exior" className="h-8 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-4 xl:flex">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={active ? "text-sm text-fg" : "text-sm text-muted transition-colors hover:text-fg"}
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
            Get Started — $499
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close Menu" : "Open Menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg px-5 py-4 xl:hidden">
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
              Get Started — $499
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: readonly { to: string; label: string; hash?: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-faint">{title}</p>
      <div className="mt-4 flex flex-col gap-2 text-sm">
        {items.map((item) => (
          <Link key={item.label} to={item.to} hash={"hash" in item ? item.hash : undefined} className="text-muted hover:text-fg">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-lg font-semibold">EXIOR — Transform Your Enterprise.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Enterprise transformation architecture connecting strategy, organization, operations, data, technology, and AI.
          </p>
        </div>
        <div className="md:col-span-3">
          <Column title="Explore" items={EXPLORE} />
        </div>
        <div className="md:col-span-2">
          <Column title="Company" items={COMPANY} />
        </div>
        <div className="md:col-span-3">
          <Column title="Resources" items={RESOURCES} />
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-faint">Legal</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="text-muted hover:text-fg">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted hover:text-fg">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-faint sm:flex-row sm:justify-between">
          <p>EXIOR — Transform Your Enterprise.</p>
          <p>Technical implementation is a separate engagement.</p>
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
  return <p className="text-sm text-muted">{children}</p>;
}
