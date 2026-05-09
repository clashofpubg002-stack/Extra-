/*
 * EXTRA VIBES — Ingredients Section
 * Design: "Obsidian Atelier" — Horizontal scroll ingredient showcase
 * Features: Scroll-triggered reveals, gold accents, ingredient cards
 */
import { useEffect, useRef } from "react";

const ingredients = [
  {
    name: "Oud",
    origin: "Arabian Peninsula",
    description: "The most coveted raw material in perfumery. Deep, woody, and intoxicatingly complex.",
    icon: "🌿",
  },
  {
    name: "Ambergris",
    origin: "Atlantic Ocean",
    description: "A rare oceanic treasure that fixes and amplifies every note it touches.",
    icon: "🌊",
  },
  {
    name: "Jasmine Absolute",
    origin: "Grasse, France",
    description: "Hand-picked at dawn when the flowers are at their most fragrant and potent.",
    icon: "🌸",
  },
  {
    name: "Sandalwood",
    origin: "Mysore, India",
    description: "Aged for decades to develop its signature creamy, warm, and meditative depth.",
    icon: "🪵",
  },
  {
    name: "Bergamot",
    origin: "Calabria, Italy",
    description: "Sun-drenched citrus that opens every composition with radiant, confident clarity.",
    icon: "🍋",
  },
  {
    name: "Black Amber",
    origin: "Baltic Coast",
    description: "Ancient resin with a smoky, resinous warmth that lingers for hours on skin.",
    icon: "💎",
  },
];

export default function IngredientsSection() {
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
      id="ingredients"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.09 0.003 285)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-divider" />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              The Ingredients
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.95 0.005 75)" }}
          >
            Nature's Finest,
            <br />
            <span className="text-gold-shimmer">Masterfully Composed</span>
          </h2>
        </div>

        {/* Ingredient grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ingredients.map((ingredient, i) => (
            <div
              key={ingredient.name}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal group p-6 transition-all duration-300"
              style={{
                background: "oklch(0.12 0.004 285)",
                border: "1px solid oklch(1 0 0 / 6%)",
                borderRadius: "2px",
                transitionDelay: `${(i % 3) * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.72 0.12 75 / 30%)";
                e.currentTarget.style.background = "oklch(0.13 0.004 285)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 6%)";
                e.currentTarget.style.background = "oklch(0.12 0.004 285)";
              }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{ingredient.icon}</div>

              {/* Name */}
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.88 0.08 78)" }}
              >
                {ingredient.name}
              </h3>

              {/* Origin */}
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
              >
                {ingredient.origin}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
