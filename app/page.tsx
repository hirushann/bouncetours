import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroTitle } from "@/components/HeroTitle";
import { Reveal } from "@/components/Reveal";
import { Ring } from "@/components/Ring";
import { StyleIndex } from "@/components/StyleIndex";
import { TourCard } from "@/components/TourCard";
import { TourRail } from "@/components/TourRail";
import { Tracklist } from "@/components/Tracklist";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { img } from "@/lib/images";
import { regions, styles, tours } from "@/lib/tours";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const steps = [
  { title: "Tell us the brief", body: "Dates, who's coming, what you love, what you'd rather skip. A short form or a call — whichever suits you." },
  { title: "We sketch a route", body: "A day-by-day outline with honest notes on drive times, seasons and where we'd spend an extra night." },
  { title: "Shape it together", body: "Swap hotels, slow the pace, add a cooking class or a dawn safari. Nothing is fixed until you're happy." },
  { title: "Travel, with us on call", body: "Your guide and our team are a message away for the whole trip." },
];

const inline = "relative mx-[0.12em] inline-block h-[0.78em] w-[1.5em] translate-y-[0.08em] overflow-hidden align-baseline";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-lvh flex-col justify-end overflow-hidden bg-ink text-white">
        <Image
          src={img.sigiriyaDawn.src}
          alt={img.sigiriyaDawn.alt}
          fill
          preload
          sizes="100vw"
          quality={70}
          className="object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_11_20/0.6)_0%,rgb(7_11_20/0.3)_30%,rgb(7_11_20/0.35)_55%,rgb(7_11_20/0.92)_100%)]" />

        <Ring className="absolute right-(--gutter) top-32 hidden w-44 text-white md:block xl:w-52" />

        <div className="container-x relative pb-[calc(env(safe-area-inset-bottom)+5.5rem)] pt-40 md:pb-10">
          <Eyebrow className="mb-6 text-white [text-shadow:0_1px_10px_rgb(7_11_20/0.7)]">Small-group &amp; tailor-made tours · Sri Lanka</Eyebrow>
          <HeroTitle
            className="text-display font-semibold"
            lines={[
              <span key="a">Sri Lanka,</span>,
              <span key="b">
                at your own <span className="serif-accent font-normal text-gold">tempo.</span>
              </span>,
            ]}
          />
          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
            <p className="max-w-md text-lede text-white/80 md:col-span-5">
              Journeys planned by people who live here — paced so the island has room to surprise you.
            </p>

            {/* Trip finder: plain GET form, works without JavaScript */}
            <form action="/tours" className="flex flex-col gap-2 bg-white p-2 text-ink sm:flex-row md:col-span-7 md:col-start-6">
              <label className="flex flex-1 flex-col px-4 py-2">
                <span className="label text-text-2">Travel style</span>
                <select name="style" defaultValue="" className="-ml-1 mt-1 cursor-pointer bg-transparent py-1 text-base font-medium focus:outline-none">
                  <option value="">Any style</option>
                  {styles.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 font-medium transition-colors hover:bg-ink hover:text-gold"
              >
                Find tours <ArrowRight className="size-4" aria-hidden />
              </button>
            </form>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-5 text-sm text-white/60">
            <span>Sigiriya at first light</span>
            <Link href="/tailor-made" className="group inline-flex items-center gap-2 text-white hover:text-gold">
              Or plan a private trip <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow className="text-text-2">Who we are</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <p className="text-[clamp(1.75rem,3.6vw,3.25rem)] font-light leading-[1.18] tracking-[-0.03em]">
              We&rsquo;re a small Sri Lankan team who plan trips the way the island actually moves — the rock at opening time,
              <span className={inline}>
                <Image src={img.sigiriyaPath.src} alt="" fill sizes="80px" className="object-cover" />
              </span>
              the slow train into the hills,
              <span className={inline}>
                <Image src={img.trainWindow.src} alt="" fill sizes="80px" className="object-cover" />
              </span>
              long lunches, and room for the moments{" "}
              <span className="serif-accent text-gold-ink">you didn&rsquo;t plan.</span>
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-20 md:mt-28">
          <div className="grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { k: "Local, end to end", v: "Planned, guided and supported by people who live here — not resold through layers of agents." },
            { k: "Small by design", v: "Small groups or private trips only, so plans can bend around weather, wildlife and whim." },
            { k: "Paced properly", v: "Fewer hotel changes, sensible drive times, and early starts only when they're worth it." },
          ].map((d, i) => (
            <Reveal key={d.k} delay={i * 0.08} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="text-sm tabular-nums text-gold-ink">0{i + 1}</p>
              <h2 className="mt-4 text-h3 font-semibold">{d.k}</h2>
              <p className="mt-3 max-w-sm text-text-2">{d.v}</p>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="pb-[var(--section)]">
        <div className="container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow className="text-text-2">Featured tours</Eyebrow>
            <h2 className="mt-5 max-w-xl text-h2 font-semibold">
              Routes we&rsquo;d <span className="serif-accent font-normal">happily</span> take again.
            </h2>
          </Reveal>
          <Link href="/tours" className="group inline-flex items-center gap-2 font-medium underline decoration-gold decoration-2 underline-offset-8">
            All {tours.length} tours <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <div className="mt-6">
          <TourRail label="Featured tours">
            {tours.map((t) => (
              <li key={t.slug}>
                <TourCard tour={t} />
              </li>
            ))}
          </TourRail>
        </div>
      </section>

      {/* TRAVEL STYLES */}
      <section className="section-y bg-ink text-white">
        <div className="container-x">
          <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <Eyebrow className="text-gold">Ways to travel</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold">
                Find your <span className="serif-accent font-normal text-gold">rhythm.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="self-end text-white/65 md:col-span-4 md:col-start-9">
              Every trip has a pace. Pick the one that sounds like you — or mix them, which most people do.
            </Reveal>
          </div>
          <StyleIndex />
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <Eyebrow className="text-text-2">Destinations</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold">
                Six regions. One small, <span className="serif-accent font-normal">very</span> varied island.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="text-text-2">
                You can drive from beach to cloud forest in a morning. The trick is knowing which coast is in season and which roads are worth the time.
              </p>
            </Reveal>
          </div>

          <ul className="gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid">
            {regions.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={(i % 3) * 0.08}>
                <Link href={`/destinations#${r.slug}`} className="group block">
                  <div className={`relative overflow-hidden bg-paper-2 ${r.ratio}`}>
                    <Image
                      src={r.image.src}
                      alt={r.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      quality={70}
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-4">
                    <h3 className="text-h3 font-semibold">{r.name}</h3>
                    <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:rotate-45" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm text-text-2">{r.places.join(" · ")}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-y bg-jungle text-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow className="text-gold">Tailor-made</Eyebrow>
                <h2 className="mt-5 text-h2 font-semibold">
                  Your trip, <span className="serif-accent font-normal text-gold">in four tracks.</span>
                </h2>
                <p className="mt-6 max-w-md text-white/70">
                  Any tour can be taken privately, on your dates. Or start from a blank page and we&rsquo;ll build it with you.
                </p>
                <ButtonLink href="/tailor-made" className="mt-8">
                  Start planning
                </ButtonLink>
              </Reveal>
              <Reveal delay={0.1} className="relative mt-12 hidden aspect-[3/2] overflow-hidden lg:block">
                <Image src={img.teaHills.src} alt={img.teaHills.alt} fill sizes="35vw" quality={70} className="object-cover" />
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <Tracklist items={steps} tone="dark" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
