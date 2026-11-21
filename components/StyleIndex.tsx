"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { styles, tours } from "@/lib/tours";

// Travel-style index: hovering/focusing a row swaps the large image.
export function StyleIndex() {
  const [active, setActive] = useState(0);
  const current = styles[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="relative hidden aspect-[4/5] overflow-hidden bg-ink-2 lg:col-span-5 lg:block">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.key}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={current.image.src} alt={current.image.alt} fill sizes="40vw" quality={70} className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <p className="absolute bottom-5 left-5 z-10 bg-ink px-3 py-2 text-sm text-white">{current.short}</p>
      </div>

      <ul className="border-t border-line-dark lg:col-span-7">
        {styles.map((s, i) => {
          const count = tours.filter((t) => t.styles.includes(s.key)).length;
          return (
            <li key={s.key} className="border-b border-line-dark">
              <Link
                href={`/tours?style=${s.key}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-6 md:grid-cols-[3.5rem_1fr_auto] md:py-8"
              >
                <span className={`text-sm tabular-nums transition-colors ${active === i ? "text-gold" : "text-white/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span
                    className={`block text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-[-0.035em] transition-colors ${
                      active === i ? "text-white" : "text-white/55"
                    }`}
                  >
                    {s.name}
                  </span>
                  <span className="mt-2 block text-sm text-white/60 lg:hidden">{s.short}</span>
                </span>
                <span className="flex items-center gap-3 text-sm text-white/60">
                  <span className="hidden sm:inline">
                    {count} {count === 1 ? "tour" : "tours"}
                  </span>
                  <span
                    className={`grid size-10 place-items-center rounded-full ring-1 ring-inset transition-all duration-300 ${
                      active === i ? "bg-gold text-ink ring-gold" : "ring-white/25"
                    } group-hover:rotate-45`}
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
