import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Tracklist } from "@/components/Tracklist";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tailor-made trips",
  description: "Private, tailor-made Sri Lanka itineraries built around your dates, interests and pace — planned with a local team.",
  alternates: { canonical: "/tailor-made" },
};

const steps = [
  { title: "Tell us the brief", body: "Use the form below or ask for a call. Dates (even rough ones), who's travelling, what you love and what you'd rather avoid." },
  { title: "We sketch a route", body: "A day-by-day draft with hotel suggestions, realistic drive times and notes on what the season will be like." },
  { title: "Shape it together", body: "Change anything — the pace, the hotels, the order. We'll tell you honestly when something won't work." },
  { title: "Confirm and relax", body: "Once you're happy we confirm every booking and send a clear travel pack." },
  { title: "Travel, with us on call", body: "Your guide is with you; our team is a message away for anything else." },
];

const ideas = [
  { t: "Honeymoons", d: "Hill-country hideaways, a private safari, then a quiet beach on whichever coast is in season.", i: img.palmBeach },
  { t: "Families", d: "Short drives, pools at every stop, elephants, trains and a beach finish.", i: img.elephants },
  { t: "Active trips", d: "Hike Horton Plains and Ella Rock, cycle Polonnaruwa, surf the east.", i: img.waterfall },
];

export default function TailorMadePage() {
  return (
    <>
      <PageHero
        eyebrow="Tailor-made"
        title={
          <>
            A trip written <span className="serif-accent font-normal text-gold">just for you.</span>
          </>
        }
        lede="Private journeys on your dates, at your pace, with a guide who knows the island. Start with an idea — we'll do the rest."
        image={img.pidurangala}
        crumbs={[{ href: "/tailor-made", label: "Tailor-made" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-text-2">How it works</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold">From idea to itinerary.</h2>
            <p className="mt-5 text-text-2">No fee to plan, no obligation to book. You talk to the same person from first message to final day.</p>
          </div>
          <div className="lg:col-span-8">
            <Tracklist items={steps} />
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-white">
        <div className="container-x">
          <Eyebrow className="text-gold">Some starting points</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-h2 font-semibold">
            Every trip is different. <span className="serif-accent font-normal text-gold">Some ideas</span> to get you going.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {ideas.map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08} className={i === 1 ? "md:mt-16" : ""}>
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                  <Image src={x.i.src} alt={x.i.alt} fill sizes="(min-width: 768px) 30vw, 100vw" quality={70} className="object-cover" />
                </div>
                <h3 className="mt-5 text-h3 font-semibold">{x.t}</h3>
                <p className="mt-2 text-white/65">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="section-y scroll-mt-20 bg-paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-text-2">Start planning</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold">Tell us where your head is at.</h2>
            <p className="mt-5 text-text-2">Rough ideas are fine. The more you tell us, the better our first draft will be.</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
