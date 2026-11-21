# Bounce Tours website

Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · Motion · Lucide.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Design rationale, palette, type and sitemap: [`DESIGN_DIRECTION.md`](DESIGN_DIRECTION.md).

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap and robots (default `https://bouncetours.com`). |
| `ENQUIRY_WEBHOOK_URL` | Where enquiry forms POST JSON (CRM, Zapier, Formspree, email service). Without it, the form tells visitors to email instead — it never fakes success. |

## Content to confirm before launch

- `lib/site.ts` — email and business description (placeholders).
- `lib/tours.ts` — tours, itineraries, inclusions, best-time notes and regions (realistic placeholders).
- `app/about/page.tsx`, `app/faq/page.tsx` — story, principles and policy answers (placeholders).
- `lib/images.ts` — Unsplash photos; swap for the client's own photography.
