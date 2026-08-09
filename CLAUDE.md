# Local Luxe Concierge — Project Reference

## Overview
Premium static HTML/CSS/JS website for Local Luxe Concierge, a home watch and lifestyle concierge service based in Southwest Florida / Lowcountry SC.

- **Live domain:** `localluxeconcierge.com`
- **Hosting:** GitHub Pages (`jeremylaytonbrownsmith-droid.github.io/Local-Luxe`)
- **CNAME file:** present in repo root → routes custom domain
- **DNS:** Managed in Wix (Danny, the site owner, controls DNS; Jeremy has co-owner access only)

## Tech Stack
- Pure HTML5 / CSS3 / Vanilla JS — no build step, no framework
- **Google Fonts:** Playfair Display (headings), Raleway (body), Allura (script accents)
- **Forms:** Formspree endpoint `xbdebbgw` (`https://formspree.io/f/xbdebbgw`) — activated and working
- **Images:** Hosted on Wix CDN (`static.wixstatic.com`) — use only real, approved photos; never fabricate staff imagery

## Brand
| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#16477C` | Primary brand, SVG strokes |
| Deep navy | `#0f3360` | Dark sections, footers |
| Gold | `#c5a74e` | Accents, borders, icon fills |
| Cream | `#f5f3ee` | Alternating section backgrounds |
| White | `#ffffff` | Card backgrounds |

## File Inventory
```
index.html                 Homepage
about.html                 About / team / core values
contact.html               Contact form (client + subcontractor tabs)
homewatch-services.html    Home Watch service detail page
lifestyle-concierge.html   Lifestyle Concierge service detail page
concierge-services.html    Concierge services overview (circles nav)
key-holder-services.html   Key Holder services detail
rental-assistance.html     Vacation Home Concierge / Rental Assistance page
storm-readiness.html       Storm Readiness & Post-Storm Checks page
move-in-move-out.html      Move-In & Move-Out Services page
pricing.html               Pricing plans (NHWA recommends removing — pending Danny's decision)
faqs.html                  FAQ accordion
realtors.html              Realtor partnerships page
portal-demo.html           Client portal coming-soon page
styles.css                 Global stylesheet
scripts.js                 Global JS (nav, accordion, testimonial reveals, etc.)
robots.txt                 Disallows all crawlers (site not fully indexed yet)
CNAME                      localluxeconcierge.com (GitHub Pages custom domain)
```

## Navigation Structure
The nav has a dropdown under HOMEWATCH SERVICES:
- Home Watch Services → /homewatch-services
- Concierge Services → /concierge-services
- Key-Holder Services → /key-holder-services
- Rental Assistance → /rental-assistance
- Storm Readiness & Recovery → /storm-readiness
- Move-In & Move-Out Services → /move-in-move-out

All other nav items: HOME, LIFESTYLE CONCIERGE, PRICING, ABOUT, CONTACT, FAQS, REALTORS, CLIENT LOGIN (portal-demo)

## Contact Form — URL Parameter Tracking
Every CTA link across the site passes two optional query params to `contact.html`:

| Param | Purpose | Example values |
|-------|---------|----------------|
| `?plan=` | Pre-selects a pricing plan | `weekly-sm`, `weekly-md`, `bimonthly-lg` |
| `?source=` | Tracks which page sent the visitor | `homepage`, `homewatch`, `lifestyle`, `pricing`, `about`, `faqs`, `portal`, `storm`, `rental`, `moveinout` |

## Core Values SVG Icons (`about.html`)
All icons: `viewBox="0 0 80 80"`, `stroke="#16477C"`, `stroke-width="2"`, gold accents via `fill="#c5a74e"`. Cards have white backgrounds (`#fff`) so strokes must be navy, not white.

| Value | Icon |
|-------|------|
| EXPERIENCE | Document/ID card with gold checkmark badge |
| PERSONAL CONNECTION | Handshake icon (inline SVG) |
| SERVICE | Wrench/tool with gold concierge wrench icon |
| QUALITY | Medal circle + gold filled star + ribbon |

## CSS Notes
- `.value-icon-circle` — 140×140px circle, `border: 2px solid #c5a74e`
- `.values { background: #f5f3ee; }` — cream section background
- `.value-card { background: #fff; }` — white card (reason icons need navy stroke)
- About page "Get started" banner: cream background override `#f5f3ee`

## Key Decisions
1. **No fabricated staff photos** — use only approved real images from Wix CDN
2. **Pricing page may be removed** — NHWA president advises against listing pricing; 99% of home watch companies don't publish rates. Pending Danny's decision. Recommended approach: replace with a "Get a Custom Quote" page.
3. **Source tracking added** — `?source=` param on all CTAs so Danny/Jeremy know inquiry origins in Formspree emails
4. **`portal-demo.html` is a coming-soon page** — full client portal is a future build
5. **`robots.txt` blocks crawlers** — intentional until the site is fully polished and SEO-ready
6. **3 new service pages added** — rental-assistance, storm-readiness, move-in-move-out (all have placeholder images; Danny to upload correct photos to Wix CDN)

## Image Placeholders (need real photos from Danny via Wix)
New pages use existing Wix CDN images as placeholders:
- `rental-assistance.html` hero image: family photo (6096ed_52b8ab58650949bd8f78f492ae876fe2)
- `storm-readiness.html` hero image: home exterior (b61df5_404f710af52740f894591ee1ef6ea924)
- `move-in-move-out.html` hero image: concierge products (6096ed_96f0fdd0fac9443389fd6e5dea4b0fcd)
- Homepage new panels: same placeholders; Danny said he'll upload proper photos to Wix

To update image: replace the `src` URL with the new Wix CDN URL Danny provides.

## Pending Items
- [ ] Danny decides whether to keep or remove pricing page (NHWA recommendation: remove)
- [ ] Danny uploads real photos for 3 new service pages and 3 new homepage panels to Wix CDN
- [ ] Confirm item 6 from Danny's email (cut off at "Change Vendor c...")
- [ ] `realtors.html` may need content review / completion
- [ ] Consider adding Google Analytics once SEO indexing is enabled
- [ ] Future: build real client portal (authenticated, home watch reports, messaging)
- [ ] Danny's info@ email at localluxeconcierge.com — verify Formspree is receiving to correct address
