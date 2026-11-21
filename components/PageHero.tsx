import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Img } from "@/lib/images";

type Crumb = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  image: Img;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink text-white">
      <Image src={image.src} alt={image.alt} fill preload sizes="100vw" quality={70} className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_11_20/0.55)_0%,rgb(7_11_20/0.15)_35%,rgb(7_11_20/0.9)_100%)]" />
      <div className="container-x relative pb-14 pt-32 md:pb-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" aria-hidden />
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="label mb-5 text-gold">{eyebrow}</p>}
        <h1 className="max-w-5xl text-h1 font-semibold">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lede text-white/80">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
