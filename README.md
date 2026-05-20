# Local Luxe Concierge — Custom Homepage

A pixel-faithful recreation of the localluxeconcierge.com homepage, built as a standalone HTML/CSS site you can host anywhere or paste into Wix as a custom Embed/HTML element.

## What you need to add

Drop these image files into the `images/` folder. Filenames must match exactly:

| Filename | What it is | Where it appears |
|---|---|---|
| `llc-logo.png` | Their actual LLC logo file (PNG with transparent background) | Top-left header |
| `hero-house.jpg` | The big white plantation-style house | Full-width hero |
| `panel-services.jpg` | Grandfather + grandchild whispering photo | Left of 3-panel row |
| `panel-homewatch.jpg` | Exterior of a home | Middle of 3-panel row |
| `panel-concierge.jpg` | Family on couch with laptop / Christmas tree | Right of 3-panel row |

### How to get the images
1. Visit https://www.localluxeconcierge.com
2. Right-click each image → "Save image as..."
3. Rename to match the filenames above
4. Drop them into the `images/` folder next to `index.html`

If you can't get the logo file, the code has a fallback that displays a typographic version automatically.

## How to use

### Option A — Static site (easiest)
Just open `index.html` in a browser. It's a complete static site — works anywhere.

### Option B — Host it
Upload the whole folder to:
- Netlify (drag & drop the folder onto netlify.com/drop)
- Vercel
- GitHub Pages
- Firebase Hosting (when you migrate)

### Option C — Drop into Wix
1. In Wix Editor, add an **HTML Embed** element
2. Choose "Code" mode
3. Paste the contents of `index.html`
4. You'll need to inline the styles or host them externally

## Brand colors used

- Navy primary: `#1d4e6b`
- Deep navy (CTAs / banner): `#1a4267`
- Teal (logo accent): `#2e8b7a`
- Gold (accents, script text): `#b5a808`
- Cream (section bg): `#f5f3ee`
- Top bar gray: `#f2f2f2`

## Fonts

Loaded from Google Fonts (free, no API key needed):
- **Playfair Display** — for serif headings ("Our Mission", "How can we help?", panel titles)
- **Raleway** — for all sans-serif body and nav text
- **Allura** — for the gold script labels ("about us", "get started")

## Phase 2 — Firebase

When you're ready to convert this into an app:
- The form already has the right field structure to wire into Firestore
- Replace the static images with Storage-hosted URLs
- Add Firebase Auth on a `/portal` route for the homeowner login
- Build the dashboard pages for visit reports, photo uploads, etc.

Let me know when you want to start that.
