/*
 * EXTRA VIBES — Home Page
 * Design: "Obsidian Atelier" — Dark Luxury Modernism
 * Assembles: Navbar, Hero, ProductShowcase, BrandStory, Ingredients, Testimonials, Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import IngredientsSection from "@/components/IngredientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.003 285)" }}>
      {/* Sticky navigation */}
      <Navbar />

      {/* Cinematic hero */}
      <HeroSection />

      {/* Product showcase grid */}
      <ProductShowcase />

      {/* Brand story / philosophy */}
      <BrandStory />

      {/* Ingredients showcase */}
      <IngredientsSection />

      {/* Social proof */}
      <TestimonialsSection />

      {/* Footer with newsletter */}
      <Footer />
    </div>
  );
}
