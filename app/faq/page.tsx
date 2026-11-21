import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Practical answers about travelling in Sri Lanka with Bounce Tours — seasons, group sizes, private trips, visas and what's included.",
  alternates: { canonical: "/faq" },
};

// PLACEHOLDER answers about the company's policies — confirm with the client.
const groups = [
  {
    name: "Planning",
    items: [
      {
        q: "When is the best time to visit Sri Lanka?",
        a: "There's no bad month — just different coasts. The south and west are at their best roughly December to April; the east coast from May to September. The Cultural Triangle and hill country work for most of the year. Tell us your dates and we'll route around the weather.",
      },
      { q: "How far ahead should I book?", a: "Three to six months is comfortable, especially for December–April. Shorter notice is often possible — just ask." },
      { q: "Can I change a tour's itinerary?", a: "Yes. Every tour can be taken privately and adjusted — extra nights, different hotels, a slower pace or added experiences." },
    ],
  },
  {
    name: "On the trip",
    items: [
      { q: "How big are the groups?", a: "Small. Group tours are capped at a small number of travellers, and every tour can be booked as a private trip for just your party." },
      { q: "Who will be guiding us?", a: "Licensed local guides and driver-guides from our own team, who stay with you throughout." },
      { q: "Is Sri Lanka suitable for children?", a: "Very. We plan shorter drive days, family-friendly stays and plenty of wildlife, trains and beach time." },
    ],
  },
  {
    name: "Practicalities",
    items: [
      {
        q: "Do I need a visa?",
        a: "Most visitors need an Electronic Travel Authorisation (ETA) before arrival. Rules change, so check the official Sri Lanka immigration website for your nationality before you travel.",
      },
      { q: "What's included in the price?", a: "Each tour page lists what's included and what isn't. As a rule, accommodation, transport, guiding and listed entries are included; international flights, insurance and tips are not." },
      { q: "How do I pay?", a: "We'll explain payment options and the deposit schedule with your quote." },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) => g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Good <span className="serif-accent font-normal text-gold">questions.</span>
          </>
        }
        lede="The things people usually ask before they travel. Can't see yours? Just ask us."
        image={img.adamsPeak}
        crumbs={[{ href: "/faq", label: "FAQ" }]}
      />
      <section className="section-y">
        <div className="container-x space-y-20">
          {groups.map((g) => (
            <div key={g.name} className="grid gap-8 lg:grid-cols-12">
              <h2 className="text-h3 font-semibold lg:col-span-3">{g.name}</h2>
              <div className="border-t border-line lg:col-span-8 lg:col-start-5">
                {g.items.map((i) => (
                  <details key={i.q} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                      {i.q}
                      <Plus className="size-5 shrink-0 text-gold-ink transition-transform duration-300 group-open:rotate-45" aria-hidden />
                    </summary>
                    <p className="max-w-[62ch] pb-7 text-text-2">{i.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <p className="text-text-2 lg:pl-[calc(4/12*100%)]">
            Still wondering? <Link href="/contact" className="font-medium text-text underline decoration-gold decoration-2 underline-offset-4">Get in touch</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
