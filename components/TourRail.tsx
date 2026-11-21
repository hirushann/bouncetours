"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Horizontal snap rail. Children are server-rendered cards.
export function TourRail({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div>
      <div className="container-x mb-8 flex justify-end gap-2">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => scroll(d)}
            aria-label={d < 0 ? "Previous tours" : "Next tours"}
            className="grid size-12 place-items-center rounded-full ring-1 ring-inset ring-text/20 transition-colors hover:bg-ink hover:text-gold hover:ring-ink"
          >
            {d < 0 ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
          </button>
        ))}
      </div>
      <ul
        ref={ref}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-(--gutter) px-(--gutter) pb-4 [&>li]:w-[82%] [&>li]:shrink-0 [&>li]:snap-start sm:[&>li]:w-[46%] lg:[&>li]:w-[31%] xl:[&>li]:w-[27%]"
      >
        {children}
      </ul>
    </div>
  );
}
