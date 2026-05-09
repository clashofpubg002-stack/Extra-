/*
 * EXTRA VIBES — Footer Component
 * Design: "Obsidian Atelier" — Clean, minimal luxury footer
 * Features: Newsletter signup, social links, contact info, gold accents
 */
import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter, Youtube, Send } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const footerLinks = {
  Shop: ["New Arrivals", "Bestsellers", "Limited Edition", "Gift Sets", "Sample Discovery"],
  Brand: ["Our Story", "Ingredients", "Sustainability", "Press", "Careers"],
  Support: ["FAQ", "Shipping & Returns", "Track Order", "Contact Us", "Store Locator"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    toast.success("Welcome to the inner circle.", {
      description: "You'll be the first to know about new releases and exclusive events.",
    });
    setEmail("");
  };

  return (
    <footer
      id="contact"
      style={{ background: "oklch(0.07 0.002 285)", borderTop: "1px solid oklch(0.72 0.12 75 / 15%)" }}
    >
      {/* Newsletter strip */}
      <div
        className="py-16"
        style={{ borderBottom: "1px solid oklch(1 0 0 / 6%)" }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.95 0.005 75)" }}
              >
                Join the Inner Circle
              </h3>
              <p
                className="text-sm"
                style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Exclusive launches, private events, and early access — for members only.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 text-sm outline-none transition-colors duration-200"
                style={{
                  background: "oklch(0.12 0.004 285)",
                  border: "1px solid oklch(1 0 0 / 10%)",
                  borderRight: "none",
                  color: "oklch(0.88 0.08 78)",
                  fontFamily: "'Montserrat', sans-serif",
                  borderRadius: "1px 0 0 1px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75 / 50%)")}
                onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 10%)")}
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-3.5 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                style={{
                  background: "oklch(0.72 0.12 75)",
                  color: "oklch(0.09 0.003 285)",
                  fontFamily: "'Montserrat', sans-serif",
                  borderRadius: "0 1px 1px 0",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 78)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.72 0.12 75)")}
              >
                <Send size={13} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2
                  className="text-2xl font-black tracking-[0.2em] uppercase mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, oklch(0.72 0.12 75) 0%, oklch(0.88 0.08 78) 50%, oklch(0.72 0.12 75) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Extra Vibes
                </h2>
                <p
                  className="text-[9px] tracking-[0.35em] uppercase"
                  style={{ color: "oklch(0.45 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Luxury Parfum · Est. 2025
                </p>
              </div>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ color: "oklch(0.40 0.006 285)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Crafted for the bold. Worn by the elite. Extra Vibes is more than a fragrance —
                it is a declaration of who you are.
              </p>

              {/* Contact info */}
              <div className="space-y-2 mb-8">
                {[
                  { label: "Email", value: "hello@extravibes.com" },
                  { label: "Phone", value: "+1 (800) EXTRA-VB" },
                  { label: "Address", value: "New York · Paris · Dubai" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 text-xs">
                    <span
                      className="tracking-[0.15em] uppercase"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif", minWidth: "60px" }}
                    >
                      {item.label}
                    </span>
                    <span style={{ color: "oklch(0.40 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid oklch(1 0 0 / 10%)",
                      color: "oklch(0.45 0.006 285)",
                      borderRadius: "1px",
                    }}
                    onClick={(e) => { e.preventDefault(); toast(`${label} — coming soon`); }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0.72 0.12 75 / 50%)";
                      e.currentTarget.style.color = "oklch(0.72 0.12 75)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "oklch(1 0 0 / 10%)";
                      e.currentTarget.style.color = "oklch(0.45 0.006 285)";
                    }}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-[10px] tracking-[0.3em] uppercase mb-5 font-semibold"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs transition-colors duration-200"
                        style={{ color: "oklch(0.40 0.006 285)", fontFamily: "'Montserrat', sans-serif" }}
                        onClick={(e) => { e.preventDefault(); toast(`${link} — coming soon`); }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.006 285)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5"
        style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-[10px] tracking-[0.1em]"
              style={{ color: "oklch(0.30 0.004 285)", fontFamily: "'Montserrat', sans-serif" }}
            >
              © 2025 Extra Vibes Parfum. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[10px] transition-colors duration-200"
                  style={{ color: "oklch(0.30 0.004 285)", fontFamily: "'Montserrat', sans-serif" }}
                  onClick={(e) => { e.preventDefault(); toast(`${item} — coming soon`); }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.30 0.004 285)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
