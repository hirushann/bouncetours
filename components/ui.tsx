import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ink" | "ghost-light" | "ghost-dark";
  className?: string;
};

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  ink: "bg-ink text-white hover:bg-jungle",
  "ghost-light": "text-white ring-1 ring-inset ring-white/35 hover:ring-white hover:bg-white/5",
  "ghost-dark": "text-text ring-1 ring-inset ring-text/25 hover:ring-text hover:bg-text/5",
};

export function ButtonLink({ href, children, variant = "gold", className = "" }: BtnProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full py-3 pl-6 pr-3 text-[0.95rem] font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      <span className="grid size-7 place-items-center rounded-full bg-current/10 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-gold" aria-hidden />
      {children}
    </p>
  );
}
