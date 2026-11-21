import Image from "next/image";
import Link from "next/link";
import { styleName, type Tour } from "@/lib/tours";

export function TourCard({ tour, sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw" }: { tour: Tour; sizes?: string }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
        <Image
          src={tour.image.src}
          alt={tour.image.alt}
          fill
          sizes={sizes}
          quality={70}
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(7_11_20/0.75))]" />
        <p className="absolute left-4 top-4 bg-ink px-2.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-gold">
          {tour.days} days
        </p>
        <p className="absolute inset-x-4 bottom-4 text-sm text-white/85">{tour.route.join(" · ")}</p>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="label text-text-2">{styleName(tour.styles[0])}</p>
          <h3 className="mt-2 text-h3 font-semibold">
            <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0">
              {tour.name}
            </Link>
          </h3>
          <p className="mt-2 text-text-2">{tour.strapline}</p>
        </div>
      </div>
    </article>
  );
}
