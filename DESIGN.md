# Design System & Visual Specification: Dual Theme Edition

## 1. Theme Strategy: Light Mode (Default) & Dark Mode

While dark mode is common in developer portfolios, light mode provides substantial benefits for an institutional university background:
- **Academic & Institutional Credibility**: Mirrors official university publications, research journals, and government documentation.
- **Daylight Legibility**: Superior readability for commercial clients reading proposals on mobile or office monitors.
- **Botanical / Forest Field Aesthetic**: Warm ivory paper, crisp pine-black typography, lush canopy green, and mahogany timber accents.

---

## 2. Color Tokens

### Light Mode (Default — "Botanical Field Journal")
- **Background Root**: `#f8faf8` (Clean Organic Mist)
- **Surface Level 1**: `#ffffff` (Crisp White Card)
- **Surface Level 2**: `#f0f5f2` (Soft Pine Wash)
- **Surface Hover**: `#e7efe9`
- **Border Default**: `rgba(16, 185, 129, 0.15)`
- **Border Medium**: `rgba(16, 185, 129, 0.28)`
- **Text Primary**: `#0e2418` (Deep Pine Charcoal — Contrast 14.5:1)
- **Text Secondary**: `#365343` (Forest Slate — Contrast 6.8:1)
- **Text Muted**: `#62806f`
- **Forestry Accent**: `#059669` (Rich Emerald)
- **Timber Bark Accent**: `#92400e` (Warm Mahogany)
- **Commercial Accent**: `#0284c7` (Electric Ocean Blue)

### Dark Mode ("Mt. Makiling Night")
- **Background Root**: `#060e0a`
- **Surface Level 1**: `#0c1811`
- **Surface Level 2**: `#12241a`
- **Border Default**: `rgba(74, 222, 128, 0.09)`
- **Text Primary**: `#f0fdf4`
- **Text Secondary**: `#a3c2b0`
- **Text Muted**: `#5e7e6c`
- **Forestry Accent**: `#10b981`
- **Timber Bark Accent**: `#d97706`

---

## 3. Theme Toggle Interaction
- A dedicated Sun/Moon theme button in the header.
- Respects `prefers-color-scheme` on first visit and persists user preference in `localStorage`.
