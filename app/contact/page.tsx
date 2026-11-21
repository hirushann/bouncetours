import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bounce Tours to plan a small-group or private trip in Sri Lanka.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s <span className="serif-accent font-normal text-gold">talk.</span>
          </>
        }
        lede="Questions, ideas, half-formed plans — send them over. A real person reads every message."
        image={img.boatSea}
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="section-y">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <ul className="space-y-8 border-t border-line pt-8">
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-gold-ink" aria-hidden />
                <div>
                  <p className="label text-text-2">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-medium underline decoration-gold decoration-2 underline-offset-4">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-gold-ink" aria-hidden />
                <div>
                  <p className="label text-text-2">Replies</p>
                  <p className="mt-1">Usually within two working days, Sri Lanka time (GMT+5:30).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 size-5 shrink-0 text-gold-ink" aria-hidden />
                <div>
                  <p className="label text-text-2">Prefer a call?</p>
                  <p className="mt-1">Mention it in your message with a good time to reach you.</p>
                </div>
              </li>
            </ul>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm heading="Send us a message" />
          </div>
        </div>
      </section>
    </>
  );
}
