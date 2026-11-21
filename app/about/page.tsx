import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/ui";
import { Ring } from "@/components/Ring";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About us",
  description: "Bounce Tours is a Sri Lankan tour company planning small-group and private journeys across the island — locally run and paced properly.",
  alternates: { canonical: "/about" },
};

// PLACEHOLDER copy — replace with the client's own story, team and verified commitments.
const principles = [
  { t: "Local, end to end", d: "Planning, guiding and on-trip support all come from our own team in Sri Lanka." },
  { t: "Small by design", d: "Small groups and private trips only. Big coaches can't stop for a roadside rambutan seller." },
  { t: "Paced properly", d: "Two or three nights per stop where it matters, and drive days broken up with something worth seeing." },
  { t: "Wildlife, wild", d: "We watch animals in national parks and their natural habitat — never rides or performances." },
  { t: "Spend that stays", d: "Family-run guesthouses, local restaurants and community-led experiences wherever we can." },
  { t: "Straight answers", d: "If it's the wrong season for a coast or a park, we'll say so — even if it means a different trip." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Your journey, <span className="serif-accent font-normal text-gold">our passion.</span>
          </>
        }
        lede="We started Bounce Tours to show people the Sri Lanka we know — the early mornings, the long lunches, the places between the highlights."
        image={img.trainWindow}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow className="text-text-2">Our story</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold">
              Why <span className="serif-accent font-normal">&ldquo;Bounce&rdquo;?</span>
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-5 text-lg text-text-2">
              <p>
                Because good trips have a rhythm. A day of ruins followed by a day by the pool. A pre-dawn safari, then a long, lazy lunch. Busy markets, then a silent
                tea estate. Get the rhythm right and the whole trip sings.
              </p>
              <p>
                That&rsquo;s what we plan for. Our team grew up here and still lives here, so we know which roads take twice as long as the map says, which coast is in
                season, and where the best rice and curry is on the way.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
              <Image src={img.riceCurry.src} alt={img.riceCurry.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" quality={70} className="object-cover" />
            </div>
            <Ring className="absolute -bottom-12 -left-12 w-36 text-ink md:w-44" mark={false} />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-ink text-white">
        <div className="container-x">
          <Eyebrow className="text-gold">How we travel</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-h2 font-semibold">
            Six things we <span className="serif-accent font-normal text-gold">won&rsquo;t</span> compromise on.
          </h2>
          <ol className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.t} delay={(i % 3) * 0.08} className="bg-ink py-10 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0 lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0">
                <p className="text-sm tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-h3 font-semibold">{p.t}</h3>
                <p className="mt-3 text-white/65">{p.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {[img.kandyTemple, img.stiltFishers, img.adamsPeak].map((x) => (
          <div key={x.src} className="relative aspect-[4/3] md:aspect-[3/4]">
            <Image src={x.src} alt={x.alt} fill sizes="(min-width: 768px) 33vw, 100vw" quality={70} className="object-cover" />
          </div>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
