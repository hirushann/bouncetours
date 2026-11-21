import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/Reveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const lexend = Lexend({ variable: "--font-lexend", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Small-group & tailor-made tours in Sri Lanka`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    images: [{ url: `${img.sigiriyaDawn.src}?w=1200&h=630&fit=crop&q=80`, width: 1200, height: 630, alt: img.sigiriyaDawn.alt }],
  },
  twitter: { card: "summary_large_image" },
};

// viewport-fit=cover lets the dark hero run edge to edge on iPhone; the header pads for the notch.
export const viewport: Viewport = { viewportFit: "cover" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  email: site.email,
  logo: `${site.url}/brand/logo.webp`,
  areaServed: "Sri Lanka",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} ${instrument.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <MotionProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
