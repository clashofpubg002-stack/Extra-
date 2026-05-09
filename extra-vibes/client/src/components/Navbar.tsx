/*
 * EXTRA VIBES — Navbar Component
 * Design: "Obsidian Atelier" — Sleek sticky nav with centered logo
 * Features: Transparent → frosted glass on scroll, cart & menu icons
 */
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { toast } from "sonner";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for cart updates
  useEffect(() => {
    const handleCartUpdate = (e: CustomEvent) => {
      setCartCount(e.detail.count);
    };
    window.addEventListener("cartUpdate" as any, handleCartUpdate);
    return () => window.removeEventListener("cartUpdate" as any, handleCartUpdate);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? undefined : "1px solid transparent" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left nav links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
                  style={{ color: "oklch(0.55 0.008 285)", fontFamily: "'Montserrat', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.008 285)")}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Center logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <span
                className="text-xl md:text-2xl font-black tracking-[0.25em] uppercase"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, oklch(0.72 0.12 75) 0%, oklch(0.88 0.08 78) 50%, oklch(0.72 0.12 75) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Extra Vibes
              </span>
              <span
                className="text-[9px] tracking-[0.35em] uppercase mt-0.5"
                style={{ color: "oklch(0.55 0.008 285)", fontFamily: "'Montserrat', sans-serif" }}
              >
                Parfum
              </span>
            </button>

            {/* Right nav links + icons (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
                  style={{ color: "oklch(0.55 0.008 285)", fontFamily: "'Montserrat', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.008 285)")}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => toast("Your cart has " + cartCount + " item(s).")}
                className="relative transition-colors duration-200"
                style={{ color: "oklch(0.72 0.12 75)" }}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.12 75)", color: "oklch(0.09 0.003 285)" }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile: cart + hamburger */}
            <div className="flex md:hidden items-center gap-4 ml-auto">
              <button
                onClick={() => toast("Your cart has " + cartCount + " item(s).")}
                className="relative"
                style={{ color: "oklch(0.72 0.12 75)" }}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.12 75)", color: "oklch(0.09 0.003 285)" }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "oklch(0.72 0.12 75)" }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.09 0.003 285 / 97%)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-light tracking-[0.1em] uppercase transition-colors duration-200"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: menuOpen ? "oklch(0.88 0.08 78)" : "transparent",
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.88 0.08 78)")}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="mt-12 flex gap-6">
          {["Instagram", "Facebook", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "oklch(0.55 0.008 285)", fontFamily: "'Montserrat', sans-serif" }}
              onClick={(e) => { e.preventDefault(); toast(`${s} — coming soon`); }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
