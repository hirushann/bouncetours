import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { img } from "@/lib/images";
import { regions, tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Sri Lanka's six regions — the Cultural Triangle, Hill Country, South and East coasts, the North, and Colombo — with when to go and the tours that visit each.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={
          <>
            One island, <span className="serif-accent font-normal text-gold">six moods.</span>
          </>
        }
        lede="Sri Lanka is small enough to cross in a day and varied enough to fill a month. Here's how the regions fit together — and when each one is at its best."
        image={img.sigiriyaAerial}
        crumbs={[{ href: "/destinations", label: "Destinations" }]}
      />

      <nav aria-label="Regions" className="sticky top-(--header-h) z-30 border-b border-line bg-paper/95">
        <ul className="container-x no-scrollbar flex gap-7 overflow-x-auto">
          {regions.map((r) => (
            <li key={r.slug}>
              <a href={`#${r.slug}`} className="inline-flex min-h-14 items-center whitespace-nowrap text-[0.95rem] text-text-2 hover:text-text">
                {r.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {regions.map((r, i) => {
        const regionTours = tours.filter((t) => r.places.some((p) => t.route.includes(p)));
        const flip = i % 2 === 1;
        return (
          <section key={r.slug} id={r.slug} className="scroll-mt-36 border-b border-line py-20 md:py-28">
            <div className="container-x grid items-center gap-10 md:grid-cols-12 md:gap-16">
              <Reveal className={`relative aspect-[4/3] overflow-hidden bg-paper-2 md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                <Image src={r.image.src} alt={r.image.alt} fill sizes="(min-width: 768px) 55vw, 100vw" quality={70} className="object-cover" />
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-sm tabular-nums text-gold-ink">{String(i + 1).padStart(2, "0")} / 06</p>
                <h2 className="mt-4 text-h2 font-semibold">{r.name}</h2>
                <p className="mt-5 text-lg text-text-2">{r.summary}</p>
                <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm">
                  <div className="grid grid-cols-[7rem_1fr] gap-4">
                    <dt className="label pt-0.5 text-text-2">Key places</dt>
                    <dd>{r.places.join(", ")}</dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-4">
                    <dt className="label pt-0.5 text-text-2">Best time</dt>
                    <dd>{r.bestTime}</dd>
                  </div>
                  {regionTours.length > 0 && (
                    <div className="grid grid-cols-[7rem_1fr] gap-4">
                      <dt className="label pt-0.5 text-text-2">Tours</dt>
                      <dd className="flex flex-wrap gap-x-4 gap-y-1">
                        {regionTours.map((t) => (
                          <Link key={t.slug} href={`/tours/${t.slug}`} className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-ink">
                            {t.name}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
