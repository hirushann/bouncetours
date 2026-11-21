import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";
import { Ring } from "@/components/Ring";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink pt-(--header-h) text-white">
      <Ring mark={false} className="pointer-events-none absolute -right-40 top-1/2 w-[28rem] -translate-y-1/2 text-white/15 md:-right-20 md:w-[36rem] md:text-white/30" />
      <div className="container-x relative">
        <p className="label text-gold">Error 404</p>
        <h1 className="mt-5 max-w-3xl text-h1 font-semibold">
          This track <span className="serif-accent font-normal text-gold">skipped.</span>
        </h1>
        <p className="mt-6 max-w-md text-lede text-white/70">The page you&rsquo;re after has moved or never existed. Let&rsquo;s get you back on the road.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/tours" variant="ghost-light">
            Browse tours
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
