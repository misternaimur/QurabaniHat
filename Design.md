---
name: QurbaniHat Design System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#404942'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#707971'
  outline-variant: '#c0c9c0'
  surface-tint: '#2d6a48'
  primary: '#003820'
  on-primary: '#ffffff'
  primary-container: '#0f5132'
  on-primary-container: '#84c39b'
  inverse-primary: '#95d4ac'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffc641'
  on-secondary-container: '#715300'
  tertiary: '#2d3135'
  on-tertiary: '#ffffff'
  tertiary-container: '#43474b'
  on-tertiary-container: '#b2b5ba'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f1c7'
  primary-fixed-dim: '#95d4ac'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#0f5132'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#f6be39'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e0e3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#181c20'
  on-tertiary-fixed-variant: '#43474c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The visual identity of this design system centers on the intersection of sacred tradition and high-end modern commerce. It is designed to evoke deep trust, reflecting the sanctity of the Qurbani tradition while providing the efficiency of a premium global marketplace. 

The aesthetic is **Modern Corporate** with heavy influences of **Glassmorphism** to create a sense of transparency and lightness. The atmosphere is intentionally "High-End Agricultural," replacing the chaotic nature of traditional livestock markets with a serene, curated, and gallery-like experience. Decorative elements utilize subtle Islamic geometric patterns—specifically 8-point stars (Rub el Hizb)—rendered as low-opacity watermarks or delicate gold-leaf dividers to reinforce the brand's cultural and religious roots.

## Colors

The palette is rooted in the "Deep Green" of the Bangladeshi flag and Islamic heritage, representing growth and life. "Gold" is used sparingly as an accent to denote premium quality, certification, and value. 

The "Cream/Off-white" background is the foundation of the interface, providing a warmer, more organic feel than pure white, which can feel too clinical for an agricultural context. To maintain a high-end feel, we avoid pure blacks, opting instead for a "Deep Charcoal" or a darkened version of the primary green for typography to keep the contrast soft and sophisticated.

## Typography

This design system utilizes **Poppins** for all display and heading elements to provide a friendly yet authoritative geometric structure. Its wide character set and high x-height ensure legibility in both English and Bengali scripts.

**Inter** is employed for all functional UI elements, body text, and data points. It provides the necessary clarity for livestock weight, price listings, and technical specifications. Hierarchy is established through weight variation and the selective use of uppercase labels for metadata like "Breed" or "Location."

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel that doesn't feel overly "stretched." We utilize a 12-column grid with generous gutters to provide breathing room, reflecting the "High-End" brand promise.

Spacing follows an 8px rhythmic scale. We prioritize large vertical margins between sections to allow the Islamic geometric patterns to sit in the whitespace without cluttering the content. Layouts are predominantly card-based, using staggered heights or "masonry" styles for livestock galleries to feel more organic and less like a standard e-commerce grid.

## Elevation & Depth

Hierarchy is achieved through a combination of **Glassmorphism** and **Ambient Shadows**. 

1.  **Surface Tiers:** The base layer is the Cream background. Primary cards sit slightly above this with a soft, diffused shadow tinted with the primary green (#0F5132 at 5% opacity).
2.  **Glass Layers:** Navigation bars and floating action buttons use a backdrop-blur (20px) with a semi-transparent white fill (70% opacity). This creates a sense of depth and modern luxury.
3.  **Active States:** When hovered, cards should subtly lift using a more pronounced shadow and a 1px Gold border to signify selection and value.

## Shapes

The shape language is defined by **large radii** and **organic flow**. 

All primary containers, livestock images, and call-to-action buttons use a `rounded-lg` (16px) or `rounded-xl` (24px) corner radius. This softness counteracts the "industrial" nature of agriculture, making the platform feel approachable and safe. Search bars and input fields should utilize fully rounded "pill" shapes to differentiate them from the content cards.

## Components

### Buttons
- **Primary:** Deep Green fill with Gold text or white text. Large padding (16px 32px) and rounded-xl corners.
- **Secondary:** Transparent background with a 2px Gold border.
- **Glass:** Used for "View Details" on image overlays, featuring a blur effect and white text.

### Cards
Livestock cards are the core component. They feature a large image container at the top (rounded-lg), a Gold "Certified" badge in the top right, and a clean typography area below. The card background is slightly lighter than the page background to create a subtle lift.

### Input Fields
Inputs use the Cream background but are inset with a soft inner shadow. On focus, the border transitions to a 2px Gold stroke with a subtle glow.

### Interactive Patterns
- **Hover Transitions:** All cards and buttons should have a 300ms ease-in-out transition for transform (scale) and shadow depth.
- **Gradients:** Use subtle linear gradients in the primary green (from #0F5132 to #1A6B45) for header sections to add depth and a "lush" feel.
- **Islamic Geometry:** Use these as SVG masks or low-opacity backgrounds for section headers to ground the modern UI in tradition.