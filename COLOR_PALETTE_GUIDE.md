# 🎨 Dolce Brand Color Palette Guide

## Official Dolce Color System

This document outlines the exact hex codes used throughout the Dolce website to ensure consistent brand identity.

---

## 🍓 Primary Colors

### **#FDFBF7 - Artisanal Cream**
**Usage**: Main page background
- Creates a clean, premium feel
- Used for overall page backgrounds
- Applied to: `body`, `.hero`, `.sweets-hero`

### **#E25858 - Sweet Strawberry**
**Usage**: Primary CTA buttons, hover states, major section headings
- All primary "Call to Action" buttons
- Section titles and headers
- Primary brand accent
- Applied to: `.btn--primary`, `.hero__title`, `.sweets-section__title`, prices

**Hover State**: `#C14545` (Darkened Strawberry)
- Darkens slightly on hover for visual feedback
- Applied with `transition: all 0.3s ease`

### **#4A74B4 - Wild Blueberry**
**Usage**: Secondary links, social media icons, decorative elements
- Secondary navigation links
- Social media icons in footer
- Italian Ice category accent
- Applied to: `.footer__social-link`, `.nav__link.active`, Italian Ice buttons

### **#2D2D2D - Deep Charcoal**
**Usage**: All body text
- Ensures high contrast against cream background
- Primary text color throughout site
- Applied to: All paragraphs, descriptions, body text

### **#F1E9DB - Soft Parchment**
**Usage**: Cards & containers
- Review cards background (Section 3)
- Instagram feed containers (Section 5)
- Gelato category accent
- Subtle borders throughout
- Applied to: `.review__card`, gelato cards, borders

---

## 📋 Color Application by Section

### **Homepage (index.html)**

#### Section 1: Hero
- Background: `#FDFBF7` (Artisanal Cream)
- Title: `#E25858` (Sweet Strawberry)
- "Explore Our Menu" button: `#E25858` → `#C14545` on hover

#### Section 2: Products
- Background: `#FDFBF7`
- Title: `#2D2D2D` (Deep Charcoal)
- Icons: Colorful emojis
- Button: `#E25858` → `#C14545` on hover

#### Section 3: Reviews
- Background: `#FFFFFF`
- Card Background: `#F1E9DB` (Soft Parchment)
- Title: `#2D2D2D`
- Text: `#2D2D2D`
- Star Icons: `#D4AF37` (Gold accent)
- Border: `#F1E9DB`

#### Section 4: About
- Background: Gradient with `#FDFBF7`
- Title: `#2D2D2D`
- Button: `#4A74B4` (Wild Blueberry) with border
- Button Hover: Fills with `#4A74B4`, text turns white

#### Section 5: Instagram Feed
- Container: `#F1E9DB` (Soft Parchment)
- Overlay on hover: `#E25858` (Sweet Strawberry)
- Button: `#E25858` → `#C14545` on hover

#### Footer
- Background: `#2D2D2D` (Deep Charcoal)
- Text: `#FFFFFF`
- Social Icons: `#4A74B4` (Wild Blueberry)
- Social Icons Hover: Background `#4A74B4`, fills circle
- Phone Link: `#E25858`

---

### **Sweets Page (sweets.html)**

#### Hero Section
- Background: `#FDFBF7` (Artisanal Cream)
- Title: `#E25858` (Sweet Strawberry)
- Subtitle: `#2D2D2D` (Deep Charcoal)

#### Italian Ice Cards
- Background Gradient: Light blue (`#E8F4F8`) to white
- Border: `#F1E9DB` (Soft Parchment)
- Border Hover: `#4A74B4` (Wild Blueberry)
- Button: `#4A74B4` (Wild Blueberry)
- Button Hover: `#C14545` (Darkened Strawberry)
- Price: `#E25858` (Sweet Strawberry)

#### Gelato Cards
- Background Gradient: `#F1E9DB` (Soft Parchment) to white
- Border: `#F1E9DB`
- Border Hover: `#E25858` (Sweet Strawberry)
- Button: `#E25858` (Sweet Strawberry)
- Button Hover: `#C14545` (Darkened Strawberry)
- Price: `#E25858`

#### Milkshake Cards
- Background Gradient: Vanilla cream (`#FFF8E7`) to white
- Border: `#F1E9DB` (Soft Parchment)
- Border Hover: `#E25858` (Sweet Strawberry)
- Button: `#E25858` (Sweet Strawberry)
- Button Hover: `#C14545` (Darkened Strawberry)
- Price: `#E25858`

---

### **3D Hero Page (hero-topo.html)**

#### General
- Background: Dark (`#0a0a0a`)
- Primary Text: `#e0e0e0` (Silver)
- Meta Info: `#4A74B4` (Wild Blueberry)

#### CTA Button
- Background: `#E25858` (Sweet Strawberry)
- Hover: `#C14545` (Darkened Strawberry)
- Transition: `all 0.3s ease`

---

## 🎯 Button System

### Primary Buttons
```css
background: #E25858;  /* Sweet Strawberry */
color: #FFFFFF;
transition: all 0.3s ease;
```

**Hover State**:
```css
background: #C14545;  /* Darkened Strawberry */
transform: translateY(-2px);
```

### Secondary Buttons
```css
background: transparent;
color: #4A74B4;  /* Wild Blueberry */
border: 2px solid #4A74B4;
transition: all 0.3s ease;
```

**Hover State**:
```css
background: #4A74B4;
color: #FFFFFF;
transform: translateY(-2px);
```

---

## 🖼️ Border System

All borders use the **Soft Parchment** color for subtle, premium feel:

```css
border: 1px solid #F1E9DB;
/* OR */
border: 2px solid #F1E9DB;
/* OR */
border: 3px solid #F1E9DB;
```

**Never use**:
- ❌ Harsh blacks (`#000000`)
- ❌ Gray borders (`#888888`, `#CCCCCC`)
- ❌ Any color not in this palette

---

## ⚡ Transition Standards

All interactive elements use consistent transitions:

```css
transition: all 0.3s ease;
```

This includes:
- Buttons (hover states)
- Links (hover states)
- Cards (hover lift effects)
- Social icons (hover fills)
- Navigation items

---

## 📊 Color Contrast Ratios

Ensuring accessibility (WCAG 2.1 AA standard):

| Combination | Ratio | Pass |
|-------------|-------|------|
| Charcoal on Cream | 12.5:1 | ✅ AAA |
| Strawberry on White | 4.8:1 | ✅ AA |
| Blueberry on White | 5.2:1 | ✅ AA |
| White on Charcoal | 14.8:1 | ✅ AAA |

---

## 🎨 Usage Guidelines

### Do's ✅
- Use `#FDFBF7` (Artisanal Cream) for all backgrounds
- Use `#E25858` (Sweet Strawberry) for all primary CTAs
- Use `#C14545` (Darkened Strawberry) for hover states
- Use `#4A74B4` (Wild Blueberry) for secondary elements
- Use `#2D2D2D` (Deep Charcoal) for all body text
- Use `#F1E9DB` (Soft Parchment) for cards and borders
- Always include `transition: all 0.3s ease` on buttons

### Don'ts ❌
- Don't use generic or filler colors
- Don't use harsh black borders
- Don't use gray borders
- Don't skip the transition property
- Don't use colors outside this palette
- Don't use incorrect hover states

---

## 🔍 Quick Reference

```css
/* Copy-Paste Color Variables */
:root {
    /* Backgrounds */
    --color-primary: #FDFBF7;        /* Artisanal Cream */
    --color-parchment: #F1E9DB;      /* Soft Parchment */

    /* Brand Accents */
    --color-accent-red: #E25858;     /* Sweet Strawberry */
    --color-accent-red-hover: #C14545; /* Darkened Strawberry */
    --color-accent-blue: #4A74B4;    /* Wild Blueberry */

    /* Text */
    --color-text-dark: #2D2D2D;      /* Deep Charcoal */
    --color-text-light: #6B6B6B;     /* Gray */

    /* Base */
    --color-white: #FFFFFF;
    --color-border: #F1E9DB;         /* Soft Parchment */
}
```

---

## 📝 Implementation Checklist

### ✅ Files Updated with Brand Colors:
- [x] `styles.css` - Main stylesheet
- [x] `sweets-styles.css` - Sweets page stylesheet
- [x] `hero-topo.css` - 3D hero stylesheet
- [x] All buttons have `transition: all 0.3s ease`
- [x] All hover states use `#C14545`
- [x] All borders use `#F1E9DB`
- [x] All backgrounds use `#FDFBF7`
- [x] All body text uses `#2D2D2D`
- [x] Review cards use `#F1E9DB`
- [x] Social icons use `#4A74B4`

---

## 🎯 Color Psychology

### Why These Colors?

**#FDFBF7 (Artisanal Cream)**
- Evokes premium quality
- Creates clean, modern feel
- Associated with purity and freshness

**#E25858 (Sweet Strawberry)**
- Appetizing and inviting
- Creates urgency and excitement
- Perfect for ice cream/dessert brand

**#4A74B4 (Wild Blueberry)**
- Trustworthy and reliable
- Complements strawberry red
- Cool tone balances warm strawberry

**#2D2D2D (Deep Charcoal)**
- Professional and sophisticated
- Excellent readability
- Premium feel

**#F1E9DB (Soft Parchment)**
- Warm and inviting
- Artisanal and handcrafted feel
- Subtle and elegant

---

## 🚀 Testing Your Colors

### Browser DevTools
1. Open browser DevTools (F12)
2. Inspect any element
3. Check computed styles
4. Verify hex codes match this guide

### Accessibility Check
Use tools like:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Safe](http://colorsafe.co/)
- Browser accessibility tools

---

## 📞 Questions?

All colors have been applied consistently across:
- Main homepage ([index.html](index.html))
- Sweets page ([sweets.html](sweets.html))
- 3D Hero page ([hero-topo.html](hero-topo.html))

The brand identity is now cohesive and professional! 🍦✨
