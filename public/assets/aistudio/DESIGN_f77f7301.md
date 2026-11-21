---
name: Crimson Editorial
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#e8bcb6'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#ae8782'
  outline-variant: '#5e3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e61919'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0000b'
  secondary: '#ffb4aa'
  on-secondary: '#690003'
  secondary-container: '#8f100e'
  on-secondary-container: '#ff9a8d'
  tertiary: '#f6be39'
  on-tertiary: '#402d00'
  tertiary-container: '#956e00'
  on-tertiary-container: '#fffbff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930006'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#8f100e'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#f6be39'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  bg-canvas: '#0A0A0C'
  bg-card: '#131317'
  bg-card-hover: '#1A1A20'
  crimson-bright: '#E61919'
  crimson-deep: '#8A0B0B'
  crimson-glow: rgba(230, 25, 25, 0.35)
  amber-ambient: rgba(212, 160, 23, 0.14)
  border-subtle: rgba(255, 255, 255, 0.12)
  border-crimson: rgba(230, 25, 25, 0.4)
  text-primary: '#FFFFFF'
  text-muted: rgba(255, 255, 255, 0.72)
  text-dim: rgba(255, 255, 255, 0.45)
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 106px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.18em
  ticker-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.22em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 5vw
  margin-sm: 1.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style
This design system defines a bold, high-drama dark editorial aesthetic engineered for personal portfolios, creative showcases, and high-impact digital resumes. The visual mood captures cinematic tension through a palette of inky blacks, deep crimson saturations, and warm amber atmospheric peripheral lighting. It combines the tactile punch of Swiss-style oversized condensed typography with refined, futuristic glass and subtle hairline boundaries.

The target audience spans campus selection boards, tech recruiters, creative collaborators, and organizational leaders. The interface evokes conviction, precision, academic drive, and focused energy. 

The stylistic execution synthesizes:
- **Bold Editorial:** Extreme scale contrast, condensed all-caps display typography, tight leading, and continuous marquee tickers.
- **Atmospheric Dark Glassmorphism:** Deep Obsidian surfaces (`#0A0A0C` to `#131317`) accented with glowing crimson edge flares and optical streaks.
- **Precision Framing:** Asymmetric border radii, razor-thin borders (`rgba(255, 255, 255, 0.12)`), and saturated red pill affordances.

## Colors
The color architecture relies on a dark canvas anchored by `#0A0A0C`, which avoids pure monochrome `#000000` to prevent visual clipping and color banding.

- **Primary (`#E61919`)**: High-saturation signal crimson utilized for focal CTAs, active states, marquee banners, glowing badges, and graphic accents.
- **Secondary (`#8A0B0B`)**: Deep shade crimson used to generate gradient depth, inner glow borders, and linear backdrop transitions.
- **Tertiary (`#D4A017`)**: Ambient warm amber utilized exclusively as an atmospheric peripheral glow on the opposing edge of crimson glows to balance cold and warm optics.
- **Neutral (`#0A0A0C`)**: Deep obsidian base. Surfaces layer up through `#131317` (cards and containers) to `#1A1A20` (active/hover surfaces).

### Contrast & Hierarchy
All text sitting directly over the dark surfaces defaults to pure `#FFFFFF` for primary content or `rgba(255, 255, 255, 0.72)` for secondary descriptions to maintain strict WCAG AAA contrast ratios. Crimson buttons always carry `#FFFFFF` text set in heavy weights.

## Typography
The system enforces a dual-typeface typographic pairing:

1. **Display Typography (`Anton`)**: Single-weight condensed sans-serif engineered for monumental titles, index counters, and poster headlines. Set in all-caps (`text-transform: uppercase`) with ultra-tight line height (`0.88` to `1.0`) and subtle tracking (`0.02em`).
2. **Interface & Editorial Typography (`Plus Jakarta Sans`)**: Clean, contemporary geometric sans designed for legibility against high-contrast dark backdrops. Used for narrative paragraphs, metadata key-value tables, and uppercase micro-labels.

### Formatting Rules
- Display elements larger than 32px must use `Anton` in uppercase.
- Eyebrows, category markers, and section numbers use `label-md` or `label-lg` with extended letter-spacing (`0.14em` to `0.18em`) and crimson color accents.
- Never set long-form paragraphs in display fonts.

## Layout & Spacing
The layout strategy follows an asymmetric 12-column grid capped at a maximum width of `1240px` with dynamic fluid horizontal padding (`5vw`).

### Spacing Philosophy
- Vertical sectional padding is intentional and generous (`100px` to `120px` desktop, `64px` mobile) to create gallery-like pauses between content phases.
- Element rhythm within modules uses a strict 8px/4px base interval (`space-xs` = 8px, `space-sm` = 12px, `space-md` = 20px, `space-lg` = 32px, `space-xl` = 56px).

### Breakpoints & Adaptive Reflow
- **Desktop (1024px and above)**: Full 12-column or asymmetric split grids (e.g., Hero image-to-text 0.95fr to 1.15fr; Story narrative 1.25fr to 0.95fr).
- **Tablet (768px – 1023px)**: 2-column uniform grids for cards, reduced hero display typography scale, maintain 5vw side margins.
- **Mobile (below 768px)**: Strict 1-column stack. Hero portrait transitions to a centered position above text. Marquee speed adjusts to prevent motion nausea.

## Elevation & Depth
Depth is produced through light emulation, tonal stacking, and optical glows rather than standard drop shadows:

1. **Ambient Atmospheric Light**:
   - Left peripheral edge: Low-opacity olive-gold radial blur (`rgba(212, 160, 23, 0.14)`).
   - Right peripheral edge: Linear-diagonal crimson streak (`rgba(230, 25, 25, 0.25)`).
2. **Tonal Planes**:
   - Ground: `#0A0A0C` (Canvas).
   - Elevated Cards: `#131317` with a razor-thin border (`1px solid rgba(255, 255, 255, 0.12)`).
   - Raised Cards & Modals: `#16161B` with dynamic crimson shadow (`box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7), 0 0 60px rgba(230, 25, 25, 0.12)`).
3. **Hero Portrait Frame Depth**:
   - Multilayered styling combining an asymmetric cut-out radius (`12px 72px 12px 12px`), a thick framing border (`14px solid rgba(138, 11, 11, 0.55)`), and a crimson base gradient (`#FF2A2A` to `#9E0B0B`). The subject cut-out sits above the framing container to create a 3D pop-out illusion.

## Shapes
The design system combines high-radius pill primitives with architectural card profiles:

- **Interactive Elements & Badges**: Fully rounded pills (`border-radius: 9999px`) for buttons, active state indicators, tags, and timeline markers.
- **Cards & Data Modules**: Modern rounded cards (`14px` to `16px`).
- **Feature Focal Elements**: Asymmetrical geometry (e.g. Hero portrait frame using `12px 72px 12px 12px`) providing an editorial silhouette distinct from standard templates.

## Components

### 1. Buttons
- **Primary Pill**: Red gradient or solid `#E61919` fill, white bold text (`label-lg`), pill shape (`rounded-full`), padded `10px 24px`. Emits ambient red luminescence (`box-shadow: 0 0 24px rgba(230, 25, 25, 0.35)`). Active transform: `scale(0.98)`.
- **Ghost Pill**: Transparent background, `1px solid rgba(255, 255, 255, 0.25)`, white text. On hover: border switches to `#E61919`, with a subtle background glow (`rgba(230, 25, 25, 0.08)`).

### 2. Cards
- **Editorial Content Card**: Background `#131317`, border `1px solid rgba(255, 255, 255, 0.12)`, radius `16px`, interior padding `24px` to `30px`. Hover interaction shifts surface upward (`translateY(-4px)`), deepens shadow, and changes border color to `rgba(230, 25, 25, 0.5)`.
- **Metric Highlight Card**: `#131317` panel featuring a vertical left indicator bar (`3px solid #E61919`), compact padding (`16px`), uppercase secondary label, and bold value text.

### 3. Ticker Bar & Red Accent Divider
- **Infinite Marquee Ticker**: Full-width container with a horizontal gradient background (`#990D0D` → `#E61919` → `#990D0D`). Contains infinite looping uppercase text with spacing dots or diamonds (`✦`).
- **Dividers & Section Rules**: Hairline horizontal rules (`1px`) styled with a centered crimson glow fading into transparent edges.

### 4. Timeline
- **Vertical Path**: Continuous `2px solid #E61919` vertical trace with a localized radial shadow.
- **Timeline Node**: Circular beacon (`8px` diameter) filled with pure white or glowing crimson. Horizontal detail cards offset from the line with institution name, role, and monospace red-pill period badges.

### 5. Badges & Chips
- Compact pill forms (`6px 14px`), background `rgba(230, 25, 25, 0.15)`, border `1px solid rgba(230, 25, 25, 0.3)`, text in `label-md` uppercase crimson or white.

### 6. Lists & Key-Value Rows
- **Biodata Row**: Flexible horizontal line separated by `1px dashed rgba(255, 255, 255, 0.1)` with 12px vertical padding. Left label dim, right value crisp white.
- **Activity Bullet**: Custom crimson diamond glyph (`◆`) in place of standard disc bullets, spaced 12px from text.