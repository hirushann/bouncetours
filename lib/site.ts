// PLACEHOLDER contact details — confirm with the client before launch.
export const site = {
  name: "Bounce Tours",
  tagline: "Your journey, our passion",
  description:
    "Small-group and tailor-made tours across Sri Lanka, planned by people who live here — from Sigiriya and tea country to the wild south and quiet east coast.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bouncetours.com",
  email: "hello@bouncetours.com",
  locale: "en",
};

export const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tailor-made", label: "Tailor-made" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;
