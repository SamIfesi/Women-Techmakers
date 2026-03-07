# From the Margins to the Mainstream
## Women Who Claimed Their Seat at the Table of Technology

**Official Book Launch Website · IWD 2026 · Women Techmakers Nsukka**

> *12 Contributors · 6 Chapters · Always Free*

A lightweight, mobile-first website serving as the digital home for the book launch, the IWD 2026 event, and the WTM Nsukka community.

---

## What This Is

**From the Margins to the Mainstream** is a curated collection of true stories by women in technology, published by Women Techmakers Nsukka in celebration of International Women's Day 2026. The book is free — always and forever.

This repository contains the source code for the book's dedicated launch website. The site is not just a download page. It is a storytelling and publicity platform — sharing the journey behind the book, spotlighting contributors and the team, showcasing IWD 2026, and inviting women everywhere into the WTM Nsukka community.

---

## Site Phases

The site operates in two distinct states:

| Phase | Period | Book Access |
|---|---|---|
| **Pre-Launch** | Now → 27th March 2026 | Waitlist only — book not yet available |
| **Post-Launch** | 28th March 2026 onward | Direct free PDF download enabled |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 + Vite | UI and build tooling |
| Plain CSS | Styling — no framework |
| Google Fonts | Bebas Neue, Playfair Display, DM Sans |
| Google Forms | Waitlist signups and Women Spotlight nominations |
| Google Analytics | Traffic and download tracking |
| Vercel (free tier) | Hosting and deployment |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Site Structure

| # | Page | Route | Purpose |
|---|---|---|---|
| 1 | Home | `/` | Book hero, waitlist / download CTA, key teasers |
| 2 | About the Book | `/about` | Full story, editor's note, chapter overview |
| 3 | Contributors | `/contributors` | Spotlights for all 12 contributors |
| 4 | IWD 2026 Event | `/iwd2026` | Theme, activities, speakers, venue, registration |
| 5 | Women Spotlight | `/spotlight` | Nomination form (pre-event) → gallery (post-event) |
| 6 | Our Team | `/team` | Organising team, volunteers, special recognitions |
| 7 | Partners | `/partners` | Community partners, sponsors, built-with credits |

---

## Design System

### Colours

| Name | Hex | Usage |
|---|---|---|
| Dark Navy | `#0F1E8A` | Nav, hero backgrounds, footer, primary headings |
| Primary Blue | `#1A35C5` | Section backgrounds, buttons, key accents |
| Brand Green | `#00D48A` | CTAs, highlights, badges, success states |
| Light Green | `#C8F7E8` | Callout boxes, card hover states |
| Light Blue | `#E8ECFA` | Card backgrounds, table rows, section fills |
| Off White | `#F7F8FD` | Page backgrounds |
| Dark Text | `#0D1A3A` | Primary body copy |
| Mid Text | `#3A4A6A` | Secondary copy, metadata, labels |

### Typography

| Role | Font |
|---|---|
| Display / Hero titles | Bebas Neue |
| Section headings | Playfair Display |
| Body and UI copy | DM Sans |
| Fallback | System sans-serif |

### Responsive Breakpoints

| Breakpoint | Width | Grid |
|---|---|---|
| Mobile | < 768px | 1 column |
| Tablet | 768px – 1024px | 2 columns |
| Desktop | > 1024px | 4 columns |

---

## Key Events

| Event | Date | Details |
|---|---|---|
| Pre-Event Webinar | 9th March 2026, 6PM WAT | Online · Free · [Register](https://luma.com/5vppqueh) |
| **IWD 2026 Main Event** | **28th March 2026** | University of Nigeria, Nsukka · Free · 120 seats · [Register](https://gdg.community.dev/events/details/google-gdg-enugu-presents-break-the-pattern-women-shaping-the-future-of-tech-international-womens-day-nsukka-2026/) |

**Event Theme:** Break the Pattern: Women Shaping the Future of Tech

---

## Contributors

Three contributors confirmed as of March 2026. Nine slots show *Announcing Soon* until confirmed.

| Name | Role |
|---|---|
| Anyika Uchechukwu Lorreta | Data Engineer and Instructor |
| Victoria Ofuasia | Researcher and Backend Developer, Co-founder NSK.AI |
| Oluwabukola Adesina | Senior QA Engineer, Founder of MMIT |

---

## Content Checklist

| Item | Owner | Status | Needed By |
|---|---|---|---|
| Final book PDF | Editor / WTM Nsukka Lead | In progress | 27th March |
| Book cover image | Cover Designer | Pending | 20th March |
| Contributor photos (12) | Individual contributors | 3 confirmed, 9 pending | 20th March |
| Contributor bios and quotes | Individual contributors | Partially received | 9th March |
| Team photos and roles | Organising team | To be collected | 21st March |
| Partner logos | Partnership lead | To be confirmed | 21st March |
| Past event photos | WTM Nsukka archive | To be sourced | 25th March |
| Women Spotlight Google Form | Form creator | To be created | 15th March |
| Speaker bios and headshots | Speakers liaison | Partially confirmed | 15th March |
| Social media handles | WTM Nsukka lead | To be confirmed | Before go-live |
| WhatsApp community link | Community manager | To be confirmed | Before go-live |

---

## Deployment

The site deploys to Vercel free tier via drag-and-drop or connected to this repository.

```bash
npm run build
# Upload the /dist folder to Vercel
```

- Hosting: Vercel free tier
- Domain format: `breakthepattern-wtm.Vercel.app`
- Book PDF: hosted alongside site files in `/public` or via Google Drive direct link
- No backend — all form data routes to Google Forms and Google Sheets

---

## Success Targets

| Metric | Target |
|---|---|
| Waitlist signups before launch | 200+ |
| Book downloads (first month) | 500+ |
| Women Spotlight nominations | 30+ |
| IWD event click-throughs | 50+ |
| WhatsApp community referrals | 50+ |
| Unique site visitors (first month) | 1,000+ |
| Mobile traffic share | 60%+ |

---

## Hashtags

`#WTMIWD2026` · `#BreakThePattern` · `#FromTheMarginsToTheMainstream`

---

## License

The website code is open for the community.
The book itself is **free to read and share — not for resale.**

&copy; 2026 Women Techmakers Nsukka
