/*
 * EXTRA VIBES — Hero Section
 * Design: "Obsidian Atelier" — Cinematic full-screen with asymmetric text
 * Features: Fade-in animations, floating product image, gold CTA button
 * Image: Dark obsidian with dramatic golden studio lighting
 */
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToCollection = () => {
    const el = document.querySelector("#collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.09 0.003 285)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/extra_vibes_hero_8559a23f.jpg"
          alt="Extra Vibes hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Multi-layer gradient overlay for cinematic effect */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, oklch(0.09 0.003 285 / 92%) 0%, oklch(0.09 0.003 285 / 70%) 50%, oklch(0.09 0.003 285 / 40%) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.09 0.003 285) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Decorative smoke particles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              background: `radial-gradient(circle, oklch(0.72 0.12 75 / ${0.04 - i * 0.005}) 0%, transparent 70%)`,
              left: `${10 + i * 15}%`,
              bottom: `${15 + (i % 3) * 10}%`,
              animation: `smoke-rise ${4 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative gold ornament lines */}
      <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div style={{ width: "1px", height: "80px", background: "linear-gradient(to bottom, transparent, oklch(0.72 0.12 75 / 50%))" }} />
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: "oklch(0.72 0.12 75 / 60%)", writingMode: "vertical-rl", fontFamily: "'Montserrat', sans-serif" }}
        >
          Scroll
        </span>
        <div style={{ width: "1px", height: "80px", background: "linear-gradient(to bottom, oklch(0.72 0.12 75 / 50%), transparent)" }} />
      </div>

      {/* Main content — asymmetric left-anchored layout */}
      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          <div className="hero-text-1 flex items-center gap-4 mb-6">
            <div className="gold-divider" />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              New Collection 2025
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="hero-text-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.95 0.005 75)",
            }}
          >
            Experience
          </h1>
          <h1
            className="hero-text-3 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <span className="text-gold-shimmer">the Extra Vibes.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-text-4 text-sm md:text-base leading-relaxed mb-10 max-w-md"
            style={{ color: "oklch(0.65 0.008 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            A luxury fragrance born from obsidian nights and golden mornings.
            Crafted for those who command the room before they speak.
          </p>

          {/* CTA buttons */}
          <div className="hero-text-5 flex flex-wrap gap-4 items-center">
            <button
              className="btn-gold"
              onClick={scrollToCollection}
            >
              Shop the Collection
            </button>
            <button
              className="text-xs tracking-[0.15em] uppercase flex items-center gap-2 transition-colors duration-200"
              style={{ color: "oklch(0.55 0.008 285)", fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => {
                const el = document.querySelector("#story");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.08 78)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.008 285)")}
            >
              Our Story
              <span style={{ display: "inline-block", width: "24px", height: "1px", background: "currentColor" }} />
            </button>
          </div>

          {/* Stats row */}
          <div
            className="hero-text-5 flex gap-8 mt-16 pt-8"
            style={{ borderTop: "1px solid oklch(1 0 0 / 8%)" }}
          >
            {[
              { value: "4", label: "Exclusive Scents" },
              { value: "100%", label: "Natural Ingredients" },
              { value: "12h+", label: "Lasting Fragrance" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase mt-1"
                  style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCollection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "oklch(0.72 0.12 75 / 60%)" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </button>
    </section>
  );
}
