import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  Facebook,
  HeartHandshake,
  Instagram,
  Leaf,
  Linkedin,
  Menu,
  Mountain,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import bookAsset from "@/assets/book_1.png.asset.json";
import authorAsset from "@/assets/andrew-collings-cover-v2.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Second Mountain — Andrew Collins" },
      {
        name: "description",
        content:
          "Discover a deeper life of meaning, purpose, and service in The Second Mountain by Andrew Collins.",
      },
      { property: "og:title", content: "The Second Mountain — Andrew Collins" },
      {
        property: "og:description",
        content: "Finding purpose beyond the climb—a thoughtful guide to the life that comes after achievement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const BUY_LINKS = {
  amazon: "#buy",
  barnesAndNoble: "#buy",
  kindle: "#buy",
};

const takeaways = [
  { icon: Compass, title: "Redefine success", text: "Move beyond achievement as the only measure of a life well lived." },
  { icon: HeartHandshake, title: "Choose connection", text: "Build a life shaped by belonging, commitment, and service to others." },
  { icon: Mountain, title: "Find your next climb", text: "Listen for the purpose that is calling you into a deeper chapter." },
];

const lessons = [
  "Recognize when an old definition of success no longer fits",
  "Turn periods of uncertainty into invitations for growth",
  "Make choices rooted in values rather than expectation",
  "Build a life of purpose through contribution and community",
];

const reviews = [
  { quote: "A quiet, generous book for anyone wondering what comes after achievement. I finished it with a clearer sense of what matters.", name: "Maya R.", role: "Educator & lifelong learner" },
  { quote: "Andrew writes with warmth and hard-won honesty. This is the kind of book you underline, set down, and return to.", name: "Thomas K.", role: "Business leader" },
  { quote: "The rare personal-growth book that never talks down to you. Thoughtful, practical, and deeply humane.", name: "Elena S.", role: "Reader & community volunteer" },
];

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-mountain"}`}>{children}</p>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("opacity-100"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("translate-y-0", "opacity-100")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
        <nav aria-label="Primary navigation" className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <a href="#top" className="min-w-0 font-serif text-xl font-semibold text-primary sm:text-2xl">Andrew Collins</a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="text-sm text-foreground/70 transition-colors hover:text-primary" href="#book">About the Book</a>
            <a className="text-sm text-foreground/70 transition-colors hover:text-primary" href="#author">About the Author</a>
            <a className="text-sm text-foreground/70 transition-colors hover:text-primary" href="#reviews">Reviews</a>
            <a className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90" href="#buy">Buy Now</a>
          </div>
          <button className="grid size-10 shrink-0 place-items-center rounded-md border border-primary/15 text-primary md:hidden" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-primary/10 bg-background px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <a onClick={closeMenu} href="#book">About the Book</a><a onClick={closeMenu} href="#author">About the Author</a><a onClick={closeMenu} href="#reviews">Reviews</a><a onClick={closeMenu} className="rounded-md bg-primary px-5 py-3 text-center font-bold text-primary-foreground" href="#buy">Buy Now</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-[linear-gradient(135deg,var(--color-mist)_0%,var(--color-background)_48%,color-mix(in_oklab,var(--color-gold)_38%,var(--color-background))_100%)]">
          <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <SectionLabel>A new book by Andrew Collins</SectionLabel>
              <h1 className="text-5xl font-semibold leading-[0.94] text-primary sm:text-6xl lg:text-8xl">Finding Purpose<br />Beyond the Climb</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/75 sm:text-xl">What if the life you are searching for begins after the summit? A thoughtful guide to meaning, belonging, and the courage to begin again.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" href="#buy">Buy Now <ArrowRight size={18} /></a>
                <a className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-background/40 px-7 py-3.5 font-bold text-primary transition hover:border-primary hover:bg-background/70" href="#excerpt"><BookOpen size={18} /> Read an Excerpt</a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-foreground/60"><Leaf className="text-mountain" size={16} /> A calm companion for life’s next chapter</p>
            </div>
            <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
              <div className="absolute inset-x-8 bottom-1 h-20 rounded-full bg-primary/20 blur-2xl" />
              <img src={bookAsset.url} alt="Cover of The Second Mountain by Andrew Collins" className="book-float relative mx-auto w-full max-w-[21rem] rounded-sm shadow-[0_28px_65px_color-mix(in_oklab,var(--color-primary)_30%,transparent)] sm:max-w-[24rem]" />
            </div>
          </div>
        </section>

        <section id="book" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="grid translate-y-6 gap-8 opacity-0 transition-all duration-700 lg:grid-cols-[0.72fr_1.28fr]">
              <div><SectionLabel>About the book</SectionLabel><h2 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl">The summit was never the whole story.</h2></div>
              <div className="space-y-5 text-lg leading-8 text-foreground/70"><p>We spend much of life climbing the first mountain—building a career, earning recognition, and proving what we can do. But even at the top, a quieter question can remain: <em>What is all this for?</em></p><p><cite className="not-italic font-bold text-primary">The Second Mountain</cite> is an invitation to step beyond ambition alone and toward a life shaped by meaning, service, and enduring relationships. With warmth and clarity, Andrew Collins offers a path for anyone ready to listen more deeply and live more intentionally.</p></div>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {takeaways.map(({ icon: Icon, title, text }) => <article data-reveal key={title} className="translate-y-6 border-t-2 border-gold bg-card p-7 opacity-0 shadow-[0_12px_30px_color-mix(in_oklab,var(--color-primary)_8%,transparent)] transition duration-500 hover:-translate-y-1"><Icon className="mb-8 text-mountain" size={28} strokeWidth={1.7} /><h3 className="text-2xl font-semibold text-primary">{title}</h3><p className="mt-3 leading-7 text-foreground/65">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-mist px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700"><SectionLabel>Who this book is for</SectionLabel><h2 className="max-w-lg text-4xl font-semibold leading-tight text-primary sm:text-5xl">For the moment between what was and what comes next.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-foreground/65">You do not need to have all the answers. You only need to be willing to ask a more honest question.</p></div>
            <ul className="grid content-center gap-4">
              {["Professionals who have succeeded on paper, yet feel something is missing", "People navigating a transition, loss, or unexpected turning point", "Leaders who want their work to serve something larger than themselves", "Anyone seeking a more grounded and meaningful way to live"].map((item) => <li key={item} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 border-b border-primary/10 pb-4 text-lg leading-7"><span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-mountain text-primary-foreground"><Check size={15} /></span><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section id="excerpt" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center"><SectionLabel>What you’ll learn</SectionLabel><h2 className="text-4xl font-semibold text-primary sm:text-5xl">A practical path toward a deeper life.</h2></div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-primary/10 bg-primary/10 sm:grid-cols-2">
              {lessons.map((lesson, index) => <div key={lesson} className="flex min-h-44 flex-col justify-between bg-background p-7 transition-colors hover:bg-mist"><span className="font-serif text-3xl text-sky">0{index + 1}</span><p className="mt-8 text-lg font-bold leading-7 text-primary">{lesson}</p></div>)}
            </div>
          </div>
        </section>

        <section id="author" className="scroll-mt-20 bg-primary px-5 py-24 text-primary-foreground sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[12rem] rounded-b-lg border border-primary-foreground/15"><img src={authorAsset.url} alt="Author Andrew Collins holding The Second Mountain" className="h-full w-full object-cover object-[50%_24%]" /></div>
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700"><SectionLabel light>About the author</SectionLabel><h2 className="text-5xl font-semibold sm:text-6xl">Andrew Collins</h2><div className="mt-7 h-px w-20 bg-gold" /><p className="mt-7 text-lg leading-8 text-primary-foreground/75">Andrew Collins is a writer and thoughtful observer of the ways ambition, identity, and purpose shape our lives. After years spent pursuing the familiar markers of success, he began asking a different question—not how to climb higher, but how to live more deeply.</p><p className="mt-5 text-lg leading-8 text-primary-foreground/75">In <cite className="not-italic text-primary-foreground">The Second Mountain</cite>, Andrew brings together personal reflection and practical wisdom to help readers meet change with courage, build lives of contribution, and rediscover what truly matters.</p><div className="mt-8 flex items-center gap-3 text-gold"><Sparkles size={19} /><span className="text-sm font-bold uppercase tracking-[0.16em]">Purpose is found in what we give</span></div></div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl"><SectionLabel>Reader reflections</SectionLabel><h2 className="text-4xl font-semibold text-primary sm:text-5xl">Words that stay with you.</h2></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => <figure key={review.name} className="flex min-h-80 flex-col border border-primary/10 bg-card p-7 shadow-sm"><div aria-label="5 out of 5 stars" className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><Quote className="mt-8 text-sky" size={30} /><blockquote className="mt-4 flex-1 font-serif text-2xl leading-8 text-primary">“{review.quote}”</blockquote><figcaption className="mt-8 border-t border-primary/10 pt-5"><p className="font-bold text-primary">{review.name}</p><p className="mt-1 text-sm text-foreground/55">{review.role}</p></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section id="buy" className="scroll-mt-20 bg-primary px-5 py-20 text-center text-primary-foreground sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl"><Mountain className="mx-auto text-gold" size={35} strokeWidth={1.4} /><h2 className="mt-6 text-5xl font-semibold sm:text-6xl">Your second mountain is waiting.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-primary-foreground/70">Begin the next chapter with a clearer sense of what matters—and the courage to live toward it.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a className="rounded-md bg-gold px-6 py-3.5 font-bold text-primary transition hover:-translate-y-0.5 hover:bg-gold/90" href={BUY_LINKS.amazon}>Amazon</a><a className="rounded-md border border-primary-foreground/30 px-6 py-3.5 font-bold transition hover:border-gold hover:text-gold" href={BUY_LINKS.barnesAndNoble}>Barnes &amp; Noble</a><a className="rounded-md border border-primary-foreground/30 px-6 py-3.5 font-bold transition hover:border-gold hover:text-gold" href={BUY_LINKS.kindle}>Kindle</a></div><p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary-foreground/45">Available in hardcover, paperback, and ebook</p></div>
        </section>
      </main>

      <footer className="bg-background px-5 py-10 sm:px-8"><div className="mx-auto grid max-w-7xl items-center gap-7 text-center md:grid-cols-3 md:text-left"><div><p className="font-serif text-2xl font-semibold text-primary">Andrew Collins</p><p className="mt-1 text-sm text-foreground/50">© 2026. All rights reserved.</p></div><div className="flex justify-center gap-2"><a aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-primary/15 text-primary transition hover:bg-mist" href="#"><Instagram size={17} /></a><a aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-primary/15 text-primary transition hover:bg-mist" href="#"><Facebook size={17} /></a><a aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full border border-primary/15 text-primary transition hover:bg-mist" href="#"><Linkedin size={17} /></a></div><p className="text-sm text-foreground/50 md:text-right">Published with <a className="font-bold text-mountain hover:underline" href="https://alpacaauthors.com" rel="noreferrer" target="_blank">Alpaca Authors</a></p></div></footer>
    </div>
  );
}