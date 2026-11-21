import Link from "next/link";
import { nav, site } from "@/lib/site";
import { tours } from "@/lib/tours";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="container-x grid gap-14 pb-12 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-white/65">{site.description}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block text-xl font-medium text-white underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="label text-gold">Explore</p>
            <ul className="mt-5 space-y-3 text-white/75">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-gold">Tours</p>
            <ul className="mt-5 grid gap-3 text-white/75 md:grid-cols-2">
              {tours.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tours/${t.slug}`} className="transition-colors hover:text-white">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container-x">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-[clamp(3rem,12.5vw,13.5rem)] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.06]"
        >
          Bounce Tours
        </p>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © <Year /> {site.name}. {site.tagline}.
          </p>
          <p>Photography via Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}

async function Year() {
  "use cache";
  return new Date().getFullYear();
}
