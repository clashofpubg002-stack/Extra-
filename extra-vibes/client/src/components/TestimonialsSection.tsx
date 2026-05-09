/*
 * EXTRA VIBES — Testimonials Section
 * Design: "Obsidian Atelier" — Editorial quote cards with gold accents
 * Features: Scroll-triggered reveals, star ratings, customer quotes
 */
import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexandra M.",
    role: "Fashion Director, Vogue",
    rating: 5,
    text: "Extra Vibes is the first fragrance in years that has made me stop mid-sentence and ask 'what are you wearing?' It's magnetic. Absolutely commanding.",
    product: "Noir Essence",
  },
  {
    name: "James K.",
    role: "Entrepreneur & Investor",
    rating: 5,
    text: "I've worn luxury fragrances for 20 years. Extra Vibes is in a different category entirely. The longevity alone is worth every cent — 14 hours and still going.",
    product: "Extra Vibes Signature",
  },
  {
    name: "Sofia R.",
    role: "Creative Director",
    rating: 5,
    text: "Golden Aura is my armor. I wear it to every important meeting. It's not just a scent — it's a psychological edge. Confidence in a bottle.",
    product: "Golden Aura",
  },
];

export default function TestimonialsSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "oklch(0.11 0.003 285)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              Testimonials
            </span>
            <div className="gold-divider" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.95 0.005 75)" }}
          >
            Worn by the
            <br />
            <span className="text-gold-shimmer">Extraordinary</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal p-8 relative"
              style={{
                background: "oklch(0.12 0.004 285)",
                border: "1px solid oklch(1 0 0 / 6%)",
                borderRadius: "2px",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-6"
                style={{ color: "oklch(0.72 0.12 75 / 30%)" }}
                fill="oklch(0.72 0.12 75 / 15%)"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    fill="oklch(0.72 0.12 75)"
                    stroke="none"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{
                  color: "oklch(0.65 0.007 285)",
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div
                className="mb-4"
                style={{ width: "30px", height: "1px", background: "oklch(0.72 0.12 75 / 40%)" }}
              />

              {/* Author */}
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.88 0.08 78)" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-[10px] tracking-[0.1em] mt-0.5"
                  style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {testimonial.role}
                </p>
                <p
                  className="text-[9px] tracking-[0.2em] uppercase mt-2"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
