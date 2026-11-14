import { useEffect, useState, type ReactNode } from "react";

export function useHashId(ids: readonly string[], fallback: string) {
  const [id, setId] = useState(fallback);

  useEffect(() => {
    const read = () => {
      const next = window.location.hash.replace(/^#/, "");
      if (ids.includes(next)) setId(next);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [ids]);

  function select(next: string) {
    setId(next);
    const url = `${window.location.pathname}${window.location.search}#${next}`;
    window.history.replaceState(null, "", url);
  }

  return [id, select] as const;
}

export function SplitPanel({
  label,
  items,
  active,
  onSelect,
  children,
}: {
  label: string;
  items: readonly { id: string; title: string; hint?: string }[];
  active: string;
  onSelect: (id: string) => void;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      <div className="lg:sticky lg:top-32 lg:col-span-4">
        <p className="mb-3 text-xs uppercase tracking-widest text-faint">{label}</p>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:max-h-[70vh] lg:flex-col lg:overflow-y-auto lg:pb-0">
          {items.map((item) => {
            const on = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => onSelect(item.id)}
                className={
                  on
                    ? "min-h-11 shrink-0 rounded-md border border-accent bg-surface px-4 py-3 text-left lg:w-full"
                    : "min-h-11 shrink-0 rounded-md border border-line px-4 py-3 text-left hover:border-muted lg:w-full"
                }
              >
                <span className="block text-sm font-medium">{item.title}</span>
                {item.hint ? (
                  <span className="mt-1 hidden text-xs text-muted lg:block">{item.hint}</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div key={active} className="panel-in rounded-lg border border-line bg-surface p-6 md:p-8 lg:col-span-8">
        {children}
      </div>
    </div>
  );
}

export function JumpNav({ items }: { items: readonly { id: string; label: string }[] }) {
  const [current, setCurrent] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3" aria-label="Sommaire">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              current === item.id
                ? "shrink-0 rounded-full bg-fg px-3 py-2 text-xs font-medium text-bg"
                : "shrink-0 rounded-full border border-line px-3 py-2 text-xs text-muted hover:text-fg"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, index) => {
        const on = open === index;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : index)}
            >
              <span className="text-base font-medium">{item.q}</span>
              <span className="text-muted">{on ? "–" : "+"}</span>
            </button>
            {on ? <p className="pb-4 text-sm leading-relaxed text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export function Mark({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-faint">{children}</p>
  );
}
