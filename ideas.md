# Extra Vibes — Design Brainstorm

## Design Approaches

<response>
<text>
### Approach A: "Obsidian Atelier"
**Design Movement:** Dark Luxury Modernism — inspired by high-fashion editorial photography and Parisian couture houses.

**Core Principles:**
1. Cinematic darkness as canvas — deep obsidian backgrounds that let gold breathe
2. Asymmetric tension — off-center compositions that feel intentional and editorial
3. Typographic contrast — massive display serifs against whisper-thin tracking
4. Restraint as luxury — every element earns its place on the page

**Color Philosophy:**
- Primary: `#0A0A0B` (obsidian black) — the void from which luxury emerges
- Gold accent: `#C9A84C` (antique gold) — warm, aged, not garish
- Highlight: `#E8D5A3` (champagne) — for hover states and delicate accents
- Charcoal: `#1C1C1E` — card backgrounds, subtle depth
- Muted text: `#8A8A8E` — secondary information, never competing

**Layout Paradigm:**
- Full-bleed cinematic hero with asymmetric text placement (left-anchored)
- Product grid with staggered heights — not a uniform grid but a curated gallery
- Horizontal scroll section for featured fragrances
- Diagonal section dividers using clip-path for visual dynamism

**Signature Elements:**
1. Gold hairline borders (1px) used as decorative separators and card frames
2. Oversized Playfair Display numerals as decorative background elements
3. Particle/smoke effect in hero using CSS animation

**Interaction Philosophy:**
- Hover reveals product details with a silk-smooth upward slide
- CTA buttons use a gold border sweep animation on hover
- Scroll-triggered fade-in for each section

**Animation:**
- Hero: 1.2s fade-in with subtle upward drift (translateY 20px → 0)
- Product cards: scale(1.03) on hover with 300ms ease-out
- Navigation: backdrop-blur intensifies on scroll
- Gold shimmer: linear gradient sweep on CTA button hover

**Typography System:**
- Display: Playfair Display (serif) — headings, product names, pull quotes
- UI/Body: Montserrat (sans-serif) — navigation, prices, body text, labels
- Hierarchy: 72px display → 48px section → 24px subhead → 16px body → 12px caption
- Letter-spacing: +0.15em on all-caps labels for luxury feel
</text>
<probability>0.08</probability>
</response>

<response>
<text>
### Approach B: "Noir Geometric"
**Design Movement:** Bauhaus Noir — geometric precision meets dark luxury

**Core Principles:**
1. Grid as art — visible geometric structure as design element
2. Monochrome foundation with gold as the sole accent
3. Bold typographic statements — text as visual architecture
4. Negative space as premium indicator

**Color Philosophy:**
- Near-black: `#080808` — deeper than black, a void
- Geometric lines: `#1A1A1A` — subtle structural elements
- Gold: `#B8960C` — saturated, bold, confident
- White: `#F5F5F0` — warm white for text, never pure white

**Layout Paradigm:**
- Strict geometric grid with visible gold rule lines
- Split-screen hero: text left, product right
- Masonry product grid with varying aspect ratios

**Signature Elements:**
1. Gold geometric diamond/rhombus motifs as decorative elements
2. Bold oversized section numbers (01, 02, 03) in gold
3. Horizontal rule lines in gold separating content zones

**Typography System:**
- Display: Playfair Display Bold for maximum impact
- Body: Montserrat Light for elegant contrast
</text>
<probability>0.06</probability>
</response>

<response>
<text>
### Approach C: "Velvet Editorial"
**Design Movement:** High Fashion Editorial — think Vogue meets luxury fragrance

**Core Principles:**
1. Editorial asymmetry — layouts borrowed from luxury magazine spreads
2. Texture and materiality — velvet, silk, and glass as visual metaphors
3. Cinematic color grading — warm amber tones bleeding into deep shadow
4. Confidence through scale — oversized type, generous margins

**Color Philosophy:**
- Deep charcoal: `#111114` — warmer than pure black, more inviting
- Warm gold: `#D4AF37` — classic gold, timeless
- Amber glow: `#8B6914` — for warm accent tones
- Cream: `#F2EDD7` — warm off-white for text

**Layout Paradigm:**
- Magazine-style asymmetric layouts with overlapping elements
- Full-bleed product photography with text overlaid
- Staggered product cards with varying sizes

**Signature Elements:**
1. Overlapping text and image elements for editorial depth
2. Thin serif italic quotes as decorative pull elements
3. Warm amber gradient overlays on images

**Typography System:**
- Display: Playfair Display Italic for editorial elegance
- Body: Montserrat for clean readability
</text>
<probability>0.07</probability>
</response>

---

## Selected Approach: **Obsidian Atelier** (Approach A)

The "Obsidian Atelier" approach best captures the elite, confident, and cinematic essence of Extra Vibes. The deep obsidian backgrounds with antique gold accents create a premium dark-mode aesthetic that feels genuinely luxurious rather than merely dark. The asymmetric editorial layouts and typographic contrast between Playfair Display and Montserrat will give the site a crafted, hand-designed feel that elevates it above generic e-commerce templates.
