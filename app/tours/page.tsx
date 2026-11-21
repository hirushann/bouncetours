import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { TourCard } from "@/components/TourCard";
import { TourFilter, TourFilterView } from "@/components/TourFilter";
import { CtaBand } from "@/components/CtaBand";
import { img } from "@/lib/images";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours",
  description: "Small-group and private tours across Sri Lanka — culture, wildlife, tea country, coast and slow travel. Every route can be tailored.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  const cards = Object.fromEntries(tours.map((t) => [t.slug, <TourCard key={t.slug} tour={t} />]));

  return (
    <>
      <PageHero
        eyebrow="Tours"
        title={
          <>
            Seven routes, <span className="serif-accent font-normal text-gold">endless remixes.</span>
          </>
        }
        lede="Join a small group or take any of these privately on your own dates. Every one can be stretched, shortened or rearranged."
        image={img.teaAerial}
        crumbs={[{ href: "/tours", label: "Tours" }]}
      />
      <section className="pb-(--section) pt-16">
        <div className="container-x">
          <Suspense fallback={<TourFilterView cards={cards} active={null} />}>
            <TourFilter cards={cards} />
          </Suspense>
        </div>
      </section>
      <CtaBand
        title={
          <>
            Nothing <span className="serif-accent">quite</span> right?
          </>
        }
        body="Most of our trips are built from scratch. Tell us what you have in mind and we'll draft a route around it."
      />
    </>
  );
}
