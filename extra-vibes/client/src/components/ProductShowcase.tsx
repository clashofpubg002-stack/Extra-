/*
 * EXTRA VIBES — Product Showcase Section
 * Design: "Obsidian Atelier" — 4-column editorial product grid
 * Features: Zoom hover, gold card borders, Add to Cart with cart count update
 */
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Noir Essence",
    subtitle: "Eau de Parfum",
    price: "$285",
    originalPrice: "$340",
    ml: "100ml",
    notes: "Oud · Vetiver · Black Amber",
    image: "/manus-storage/product_noir_essence_f0fc65b2.jpg",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Extra Vibes",
    subtitle: "Signature Parfum",
    price: "$320",
    originalPrice: null,
    ml: "75ml",
    notes: "Sandalwood · Musk · Amber",
    image: "/manus-storage/product_extra_vibes_77684434.jpg",
    badge: "New",
    rating: 5.0,
    reviews: 64,
  },
  {
    id: 3,
    name: "Velvet Noir",
    subtitle: "Eau de Parfum",
    price: "$265",
    originalPrice: "$310",
    ml: "100ml",
    notes: "Rose · Patchouli · Dark Musk",
    image: "/manus-storage/product_velvet_noir_256765d4.jpg",
    badge: "Limited",
    rating: 4.8,
    reviews: 97,
  },
  {
    id: 4,
    name: "Golden Aura",
    subtitle: "Eau de Parfum",
    price: "$295",
    originalPrice: null,
    ml: "100ml",
    notes: "Bergamot · Jasmine · Vanilla",
    image: "/manus-storage/product_golden_aura_f395377a.jpg",
    badge: "Exclusive",
    rating: 4.9,
    reviews: 83,
  },
];

let globalCartCount = 0;

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 120);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const handleAddToCart = () => {
    setAdded(true);
    globalCartCount++;
    window.dispatchEvent(new CustomEvent("cartUpdate", { detail: { count: globalCartCount } }));
    toast(`${product.name} added to cart`, {
      description: `${product.subtitle} · ${product.ml}`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={cardRef} className="reveal product-card group" style={{ borderRadius: "2px" }}>
      {/* Product image */}
      <div className="product-img-wrap" style={{ aspectRatio: "3/4", background: "oklch(0.07 0.002 285)" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Badge */}
        <div
          className="absolute top-4 left-4 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1"
          style={{
            background: "oklch(0.72 0.12 75)",
            color: "oklch(0.09 0.003 285)",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
          }}
        >
          {product.badge}
        </div>
      </div>

      {/* Product info */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                fill={i < Math.floor(product.rating) ? "oklch(0.72 0.12 75)" : "none"}
                stroke="oklch(0.72 0.12 75)"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span
            className="text-[10px]"
            style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
          >
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-lg font-bold leading-tight mb-0.5"
          style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.92 0.005 75)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-[10px] tracking-[0.2em] uppercase mb-3"
          style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
        >
          {product.subtitle} · {product.ml}
        </p>

        {/* Scent notes */}
        <p
          className="text-[11px] mb-4 leading-relaxed"
          style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
        >
          {product.notes}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}
            >
              {product.price}
            </span>
            {product.originalPrice && (
              <span
                className="text-xs line-through"
                style={{ color: "oklch(0.35 0.005 285)", fontFamily: "'Montserrat', sans-serif" }}
              >
                {product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase px-3 py-2 transition-all duration-300"
            style={{
              border: "1px solid oklch(0.72 0.12 75 / 40%)",
              color: added ? "oklch(0.09 0.003 285)" : "oklch(0.72 0.12 75)",
              background: added ? "oklch(0.72 0.12 75)" : "transparent",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              borderRadius: "1px",
            }}
            onMouseEnter={(e) => {
              if (!added) {
                e.currentTarget.style.background = "oklch(0.72 0.12 75 / 15%)";
                e.currentTarget.style.borderColor = "oklch(0.72 0.12 75)";
              }
            }}
            onMouseLeave={(e) => {
              if (!added) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "oklch(0.72 0.12 75 / 40%)";
              }
            }}
          >
            <ShoppingBag size={12} strokeWidth={2} />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collection"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.09 0.003 285)" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-divider" />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
            >
              The Collection
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.95 0.005 75)" }}
            >
              Exclusive
              <br />
              <span className="text-gold-shimmer">Fragrances</span>
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Each bottle is a statement. Each scent, a signature.
              Crafted in limited quantities for those who refuse the ordinary.
            </p>
          </div>
        </div>

        {/* Product grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center mt-14">
          <button
            className="btn-gold"
            onClick={() => toast("Full catalogue coming soon — stay tuned.")}
          >
            View Full Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}
