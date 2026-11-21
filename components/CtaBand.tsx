import { ButtonLink } from "./ui";
import { Ring } from "./Ring";

export function CtaBand({
  title = (
    <>
      Let&rsquo;s find your <span className="serif-accent">rhythm</span>.
    </>
  ),
  body = "Tell us how you like to travel and when. We'll come back with a route, honest advice on timing, and a price — no obligation.",
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gold text-ink">
      <Ring mark={false} className="pointer-events-none absolute -right-24 -top-24 w-[26rem] text-ink opacity-90 md:-right-10 md:top-1/2 md:w-[30rem] md:-translate-y-1/2" />
      <div className="container-x relative py-24 md:py-32">
        <h2 className="max-w-3xl text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">{title}</h2>
        <p className="mt-6 max-w-xl text-lede text-ink/75">{body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/tailor-made" variant="ink">
            Plan a tailor-made trip
          </ButtonLink>
          <ButtonLink href="/tours" variant="ghost-dark">
            Browse tours
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
