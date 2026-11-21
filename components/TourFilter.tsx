"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { styles, tours, type StyleKey } from "@/lib/tours";

// Renders the style filter bar and hides non-matching cards. Cards are server-rendered
// and passed in keyed by slug so this component only decides what to show.
export function TourFilter({ cards }: { cards: Record<string, React.ReactNode> }) {
  const param = useSearchParams().get("style");
  const active = styles.some((s) => s.key === param) ? (param as StyleKey) : null;
  return <TourFilterView cards={cards} active={active} />;
}

// Pure view, also used as the Suspense fallback (unfiltered) so the prerendered HTML matches.
export function TourFilterView({ cards, active }: { cards: Record<string, React.ReactNode>; active: StyleKey | null }) {
  const shown = active ? tours.filter((t) => t.styles.includes(active)) : tours;

  const chip = "inline-flex min-h-11 shrink-0 items-center gap-2 border-b-2 px-1 py-2 text-[0.95rem] transition-colors";
  return (
    <>
      <nav aria-label="Filter by travel style" className="no-scrollbar -mx-(--gutter) overflow-x-auto px-(--gutter)">
        <ul className="flex gap-7 border-b border-line">
          <li>
            <Link href="/tours" scroll={false} aria-current={!active ? "true" : undefined} className={`${chip} ${!active ? "border-gold font-medium text-text" : "border-transparent text-text-2 hover:text-text"}`}>
              All tours <span className="text-xs tabular-nums text-text-2">{tours.length}</span>
            </Link>
          </li>
          {styles.map((s) => {
            const on = active === s.key;
            return (
              <li key={s.key}>
                <Link
                  href={`/tours?style=${s.key}`}
                  scroll={false}
                  aria-current={on ? "true" : undefined}
                  className={`${chip} ${on ? "border-gold font-medium text-text" : "border-transparent text-text-2 hover:text-text"}`}
                >
                  {s.name}
                  <span className="text-xs tabular-nums text-text-2">{tours.filter((t) => t.styles.includes(s.key)).length}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="mt-8 text-text-2" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "tour" : "tours"}
        {active && <> for {styles.find((s) => s.key === active)!.name.toLowerCase()}</>}.
      </p>

      <ul className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((t) => (
          <li key={t.slug}>{cards[t.slug]}</li>
        ))}
      </ul>
    </>
  );
}
