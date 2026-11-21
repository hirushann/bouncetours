# Bounce Tours — Design Direction

## Read of the brand

The logo is a gold-on-ink emblem: concentric arcs wrapped around a music note, a geometric rounded wordmark, and the line *Your journey, our passion*. It reads as **warm, confident and rhythmic** rather than corporate. The note is the idea worth building on: travel with a beat, a trip that has a rhythm to it.

**Personality:** modern, warm, quietly premium, a little playful. Not luxury-stiff (Black Tomato), not mass-market loud (G Adventures).

> **Assumption to confirm with the client:** no business details were supplied. The site is written as a **Sri Lanka–based operator of small-group and tailor-made tours across Sri Lanka**. All tours, itineraries, contact details and policies live in `lib/` and are marked as placeholders where they are not verified facts.

## What we took from the references

| Reference | Strongest idea | How it shows up here |
|---|---|---|
| Black Tomato | Cinematic full-bleed imagery, editorial restraint, enquiry-led ("Plan my trip") | Dark cinematic hero, editorial intro paragraph with inline photos, Tailor-made as a first-class route |
| Intrepid | Search-first hero, trip cards with duration + style, "Ways to travel" | Trip finder strip in the hero, tour rail, travel styles as a browseable index |
| G Adventures | Bold type, horizontal trip rails, travel styles taxonomy | Large confident display type, snap-scrolling tour rail with arrow controls |

Nothing is copied: the layout language is built around the logo's rhythm idea.

## Concept: "Travel with a rhythm"

- **Itineraries are tracklists.** Day-by-day plans read like a record's tracklist (`01 — Arrive Colombo`), numbered in tabular figures with a gold rule. Used on tour pages and the "How it works" steps.
- **The ring.** The logo's concentric arcs become a slowly rotating circular-text ring (*Your journey · Our passion*) in the hero and as a quiet mark elsewhere. It stops under `prefers-reduced-motion`.
- **Rhythm between sections.** Sections alternate ink → paper → ink, with changing compositions (full-bleed, editorial split, rail, index list, mosaic, numbered list) so no two adjacent sections share a layout.

## Colour system (CSS variables in `app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--ink` (background dark) | `#070B14` | Logo background. Hero, header, dark sections, footer |
| `--ink-2` (surface dark) | `#0F1524` | Raised surfaces on dark |
| `--gold` (primary) | `#F7BE3A` | Logo gold. CTAs, rules, numerals, highlights — used sparingly |
| `--gold-dark` | `#D99A12` | Hover/pressed |
| `--gold-light` | `#FBE3A6` | Tints, selection |
| `--paper` (background light) | `#F5F0E6` | Warm off-white for light sections — softer than pure white next to gold |
| `--paper-2` (surface muted) | `#ECE4D4` | Muted panels, image placeholders |
| `--jungle` (secondary) | `#1E3A2F` | Deep tea-country green, one accent section + tags |
| `--text` / `--text-2` | `#0B0F1A` / `#4A4F5C` | Text on paper |
| `--line` | `rgb(11 15 26 / 0.12)` | Borders on paper |
| `--success` / `--error` | `#2F7D4F` / `#C2412D` | Form states |

White is used only for type on ink. No gradients except image scrims.

## Typography

- **Lexend** (variable, 300–800) — display, headings, UI. Geometric and rounded like the logo wordmark; bold weights with tight tracking for display.
- **Instrument Serif** (italic) — a single editorial accent: one or two words per headline, pull quotes. Adds the Black Tomato warmth without a second sans.

Scale (fluid, `clamp`): Display 3.5→8.5rem · H1 2.75→5rem · H2 2.1→3.5rem · H3 1.35→1.75rem · Body 1.0625rem/1.65 · Small 0.875rem · Label 0.75rem uppercase +0.16em tracking.

## Layout

- Container max 1440px, gutters `clamp(1.25rem, 4vw, 3.5rem)`; readable text max ~62ch.
- Section spacing `clamp(5rem, 11vw, 10rem)`.
- 12-column grid on desktop, intentional single-column stacks on mobile (not shrunk desktop).
- Radius: 0 for photography and sections (editorial), 999px only for the primary CTA and icon buttons, 2px for inputs. No card shadows.
- Image ratios: hero full-viewport; tour cards 4:5; mosaic mixes 3:4, 4:3, 1:1; editorial insets 3:2.

## Sitemap

```
/                     Home
/tours                All tours (filter by travel style, ?style=)
/tours/[slug]         Tour detail: overview, tracklist itinerary, inclusions, enquiry
/destinations         Regions of Sri Lanka
/tailor-made          Private trip planning: process + enquiry form
/about                Story, how we travel, responsible travel commitments
/faq                  Practical questions
/contact              Contact details + enquiry form
```

## Homepage narrative

1. **Hero** — full-bleed Sigiriya, display headline, rotating ring, trip-finder strip (style → tours).
2. **Intro** — editorial statement with inline photos + three ruled differentiators.
3. **Featured tours** — snap rail of 4:5 cards.
4. **Find your rhythm** — travel-style index; hovering a style swaps the large image.
5. **Destinations** — asymmetric mosaic of regions.
6. **How it works** — tailor-made process as a numbered tracklist on jungle green.
7. **Promise** — responsible-travel commitments (placeholder, to be confirmed).
8. **CTA** — gold band to plan a trip.

## Motion

Motion for React, used sparingly: hero headline line reveal, scroll reveals (fade + 24px rise, once), style-image crossfade, mobile-menu transition, card image scale on hover. `MotionConfig reducedMotion="user"` plus CSS media query stop the ring and transitions.

## Components

`Header` (transparent over hero, ink on scroll, full-screen mobile menu), `Footer`, `ButtonLink`, `Eyebrow`, `Reveal`, `Ring`, `PageHero`, `Breadcrumbs`, `TourCard`, `TourRail`, `StyleIndex`, `TourFilter`, `Tracklist`, `EnquiryForm` (+ server action), `CtaBand`.

## Forms

`EnquiryForm` validates on the client and in a Server Action (`app/actions.ts`). If `ENQUIRY_WEBHOOK_URL` is set, the action POSTs JSON there; otherwise it tells the visitor plainly that online enquiries aren't connected yet and gives the email address. It never fakes success.

## Imagery

Unsplash (free licence) photographs of real Sri Lankan places, chosen for warm light and editorial framing. Replace with the client's own photography where available — see `lib/images.ts`.
