import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Tracklist } from "@/components/Tracklist";
import { EnquiryForm } from "@/components/EnquiryForm";
import { TourCard } from "@/components/TourCard";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { getTour, styleName, tours } from "@/lib/tours";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const tour = getTour((await params).slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — ${tour.days}-day Sri Lanka tour`,
    description: tour.summary,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: { images: [{ url: `${tour.image.src}?w=1200&h=630&fit=crop&q=80`, width: 1200, height: 630, alt: tour.image.alt }] },
  };
}

// The params read lives inside Suspense so the route's App Shell (header, dark hero
// block) can be prefetched and shown instantly on navigation.
export default function TourPage({ params }: PageProps<"/tours/[slug]">) {
  return (
    <Suspense fallback={<section aria-busy className="min-h-[78svh] bg-ink" />}>
      <TourContent params={params} />
    </Suspense>
  );
}

async function TourContent({ params }: { params: PageProps<"/tours/[slug]">["params"] }) {
  const tour = getTour((await params).slug);
  if (!tour) notFound();

  const facts = [
    { k: "Duration", v: `${tour.days} days` },
    { k: "Style", v: tour.styles.map(styleName).join(", ") },
    { k: "Pace", v: tour.pace },
    { k: "Best time", v: tour.bestTime },
    { k: "Price", v: "On request" },
  ];
  const related = tours.filter((t) => t.slug !== tour.slug && t.styles.some((s) => tour.styles.includes(s))).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.summary,
    touristType: tour.styles.map(styleName),
    itinerary: { "@type": "ItemList", itemListElement: tour.route.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
    provider: { "@type": "TravelAgency", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={`${tour.days} days · ${styleName(tour.styles[0])}`}
        title={tour.name}
        lede={tour.strapline}
        image={tour.image}
        crumbs={[
          { href: "/tours", label: "Tours" },
          { href: `/tours/${tour.slug}`, label: tour.name },
        ]}
      >
        <p className="mt-8 text-sm text-white/70">{tour.route.join("  →  ")}</p>
      </PageHero>

      {/* Facts bar */}
      <div className="border-b border-line bg-paper">
        <dl className="container-x grid grid-cols-2 gap-px md:grid-cols-5">
          {facts.map((f) => (
            <div key={f.k} className="py-6 md:py-8">
              <dt className="label text-text-2">{f.k}</dt>
              <dd className="mt-2 font-medium">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Overview */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow className="text-text-2">The trip</Eyebrow>
            <p className="mt-6 text-[clamp(1.4rem,2.4vw,2rem)] font-light leading-[1.35] tracking-[-0.02em]">{tour.summary}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <h2 className="label text-text-2">Highlights</h2>
            <ul className="mt-6 space-y-4">
              {tour.highlights.map((h) => (
                <li key={h} className="flex gap-3 border-b border-line pb-4">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Gallery strip */}
        <div className="container-x mt-20 grid grid-cols-6 gap-3 md:gap-6">
          {tour.gallery.map((g, i) => (
            <div
              key={g.src}
              className={`relative overflow-hidden bg-paper-2 ${
                i === 0 ? "col-span-6 aspect-[16/9] md:col-span-3 md:aspect-[4/5]" : i === 1 ? "col-span-3 aspect-[4/5] md:col-span-2 md:mt-20" : "col-span-3 aspect-[4/5] md:col-span-1 md:mt-40"
              }`}
            >
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 45vw, 100vw" quality={70} className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-y bg-ink text-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow className="text-gold">Day by day</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold">
                The <span className="serif-accent font-normal text-gold">tracklist.</span>
              </h2>
              <p className="mt-5 max-w-sm text-white/65">An outline, not a contract — we adjust the order for weather, wildlife and how you&rsquo;re feeling.</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Tracklist items={tour.itinerary} tone="dark" prefix="Day " />
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-h3 font-semibold">What&rsquo;s included</h2>
            <ul className="mt-6 space-y-3">
              {tour.included.map((x) => (
                <li key={x} className="flex gap-3 border-b border-line pb-3">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-semibold">Not included</h2>
            <ul className="mt-6 space-y-3 text-text-2">
              {tour.excluded.map((x) => (
                <li key={x} className="flex gap-3 border-b border-line pb-3">
                  <Minus className="mt-1 size-4 shrink-0" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="section-y scroll-mt-20 bg-paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-text-2">Enquire</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold">Interested in {tour.name}?</h2>
            <p className="mt-5 text-text-2">
              Ask about group dates, or take it privately and we&rsquo;ll adapt it to you. Pricing depends on dates, group size and hotels — we&rsquo;ll quote properly.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm defaultTour={tour.slug} heading="Ask us about this trip" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y">
          <div className="container-x">
            <div className="mb-12 flex items-end justify-between gap-6">
              <h2 className="text-h2 font-semibold">You might also like</h2>
              <Link href="/tours" className="hidden font-medium underline decoration-gold decoration-2 underline-offset-8 sm:block">
                All tours
              </Link>
            </div>
            <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <li key={t.slug}>
                  <TourCard tour={t} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
