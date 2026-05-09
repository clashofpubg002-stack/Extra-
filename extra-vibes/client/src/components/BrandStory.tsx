/*
 * EXTRA VIBES — Brand Story Section
 * Design: "Obsidian Atelier" — Editorial split layout with decorative numerals
 * Features: Scroll-triggered reveal, gold ornaments, asymmetric composition
 */
import { useEffect, useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Born from Darkness",
    text: "Extra Vibes was conceived in the quiet hours between midnight and dawn — a time when creativity is raw and unfiltered. Our obsidian black bottles are a tribute to that creative void.",
  },
  {
    number: "02",
    title: "Crafted for Confidence",
    text: "Every formula is a collaboration between master perfumers and the boldest minds in luxury. We don't create fragrances. We architect identities.",
  },
  {
    number: "03",
    title: "Unapologetically Elite",
    text: "Limited production. No compromises. Every bottle is numbered and authenticated. Extra Vibes is not for everyone — and that is precisely the point.",
  },
];

export default function BrandStory() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "oklch(0.11 0.003 285)" }}
    >
      {/* Decorative background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black select-none pointer-events-none leading-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "oklch(0.72 0.12 75 / 3%)",
          whiteSpace: "nowrap",
        }}
      >
        VIBES
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-divider" />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Philosophy
            </span>
            <div className="gold-divider" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.95 0.005 75)" }}
          >
            The Art of
            <br />
            <em className="text-gold-shimmer not-italic">Extra Vibes</em>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "oklch(0.50 0.007 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Luxury is not about price. It is about intention. Every Extra Vibes fragrance
            is a deliberate act of artistry — a statement worn on skin, remembered in rooms,
            and felt long after you've left.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Decorative number */}
              <div
                className="text-6xl font-black mb-4 leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.72 0.12 75 / 20%)",
                }}
              >
                {pillar.number}
              </div>
              {/* Gold hairline */}
              <div
                className="mb-5"
                style={{ width: "40px", height: "1px", background: "oklch(0.72 0.12 75)" }}
              />
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.88 0.08 78)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Feature quote */}
        <div
          ref={(el) => { refs.current[4] = el; }}
          className="reveal text-center"
        >
          <div
            className="inline-block px-8 py-8 relative"
            style={{ border: "1px solid oklch(0.72 0.12 75 / 20%)" }}
          >
            {/* Corner ornaments */}
            {[["top-0 left-0", "border-t border-l"], ["top-0 right-0", "border-t border-r"], ["bottom-0 left-0", "border-b border-l"], ["bottom-0 right-0", "border-b border-r"]].map(([pos, borders]) => (
              <div
                key={pos}
                className={`absolute ${pos} w-4 h-4 ${borders}`}
                style={{ borderColor: "oklch(0.72 0.12 75)" }}
              />
            ))}
            <blockquote
              className="text-xl md:text-2xl lg:text-3xl font-light italic max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.88 0.08 78)" }}
            >
              "Scent is the only sense that bypasses logic and speaks directly to the soul."
            </blockquote>
            <cite
              className="block mt-4 text-xs tracking-[0.25em] uppercase not-italic"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              — Extra Vibes, Founder
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
