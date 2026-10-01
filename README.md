# Second Mountain Landing

Build a professional, single-page static landing page for a self-help/personal growth book titled "The Second Mountain: Finding Purpose Beyond the Climb" by Andrew Collins.

GOAL
A clean, elegant, trustworthy book website whose single purpose is to get visitors to buy the book (primary CTA: "Buy Now"). Calm, reflective, inspiring mood, like a premium publishing house, not a flashy sales page.

COLOR THEME (taken from the book cover)
- Deep Navy: #0F2A44 (headings, text, buttons)
- Sky Blue: #6FA3C7 (accents, soft backgrounds)
- Pale Mist: #EAF2F8 (section backgrounds)
- Sunrise Gold/Peach: #F2B880 (CTA highlights, small accents, dividers)
- Mountain Green: #3F6B4F (subtle secondary accent)
- Warm Off-White: #FAF8F4 (main background)
Use soft gradients from sky blue to warm peach in the hero to echo the cover's sunrise.

TYPOGRAPHY
- Headings: elegant serif (Cormorant Garamond or Playfair Display), wide letter-spacing on small caps labels
- Body: clean sans-serif (Inter or Lato)
- Generous whitespace, large readable text, calm and spacious layout

SECTIONS (one page, smooth scroll, top to bottom)
1. Minimal sticky navbar: Author name/logo on left, links (About the Book, About the Author, Reviews) and a "Buy Now" button on right.
2. HERO: Left side has the headline "Finding Purpose Beyond the Climb", a 1-2 line subheading, and two buttons ("Buy Now" gold, "Read an Excerpt" outline). Right side has the book cover (use /book_1.png) with soft shadow and a subtle floating effect. Background: sky-to-sunrise gradient.
3. ABOUT THE BOOK: Short compelling description (placeholder text about leaving the "first mountain" of success and ambition, and discovering a deeper life of meaning, purpose and service). Include 3 key takeaway cards with icons.
4. WHO IS THIS BOOK FOR: 3-4 short points (e.g., professionals feeling unfulfilled, people at a life crossroads, anyone seeking deeper meaning).
5. WHAT YOU'LL LEARN: Clean list or 4 cards with simple icons.
6. ABOUT THE AUTHOR: Circular/rounded author photo (use /andrew-collings-cover-v2.jpg, cropped to the face/book), short bio placeholder, warm and personal tone.
7. TESTIMONIALS: 3 reader review cards with 5-star ratings (placeholder text).
8. FINAL CTA BANNER: Navy background with sunrise gold button, line like "Your second mountain is waiting." plus Buy Now buttons (Amazon, Barnes & Noble, Kindle, placeholders).
9. FOOTER: Author name, copyright, social icons, and a small "Published with Alpaca Authors" credit linking to alpacaauthors.com.

DESIGN & TECH REQUIREMENTS
- Fully responsive (mobile-first), looks great on phone, tablet and desktop
- Static page only: HTML, CSS (Tailwind is fine) and minimal vanilla JS, no backend
- Soft rounded corners, subtle shadows, gentle fade-in on scroll animations
- Smooth scrolling, hover effects on buttons and cards
- Fast loading, semantic HTML, proper alt text, good contrast and accessibility
- SEO basics: title tag, meta description, Open Graph tags using the book cover
- Keep everything in a single index.html file with clearly marked sections and easy-to-edit placeholder text and buy links

TONE OF COPY
Warm, thoughtful, inspiring, and professional. Avoid hype and pushy sales language.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://second-mountain-landing.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36ce5839-16de-4b59-ab1d-d845e8c94504).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
