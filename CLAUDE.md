# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Common commands:**
```bash
# View locally (no build needed - static site)
python -m http.server 8000        # Visit http://localhost:8000
# OR double-click index.html

# No build, test, or lint commands (pure HTML/CSS/JS)
```

**Key files to edit:**
- Colors: [styles.css](styles.css) (`:root` variables)
- Menu items: [menu-script.js](menu-script.js) (product arrays)
- Instagram config: [instagram-config.js](instagram-config.js)
- Business info: Search/replace across HTML files

**Adding features:**
- New menu item → Edit [menu-script.js](menu-script.js) + add image to `js/`
- New carousel slide → Edit [index.html](index.html) hero section + add dot
- New page → Copy existing HTML structure + update nav in all pages

## Project Overview

This is a static website for "Dolce Ice Cream" - a premium ice cream shop in Sandy Hook, NJ. The site is built with **pure vanilla HTML, CSS, and JavaScript** with no framework dependencies. It features a multi-page layout with interactive elements, smooth animations, and full mobile responsiveness.

## Site Architecture

### Multi-Page Structure
- **[index.html](index.html)** - Main landing page with hero carousel, product showcase, reviews, about section, and social feed
- **[sweets.html](sweets.html)** - Menu page displaying Italian Ice, Gelato, and Milkshakes with filterable categories
- **[about.html](about.html)** - About page with company story and owner information
- **[location.html](location.html)** - Location/contact page with embedded Google Maps and business hours
- **[hero-topo.html](hero-topo.html)** - Standalone 3D parallax hero page (optional alternative hero design)
- **[INTEGRATION_TEMPLATE.html](INTEGRATION_TEMPLATE.html)** - Template for integrating features into existing pages

### Key JavaScript Files
- **[script.js](script.js)** - Main interactive features for index.html:
  - Hero carousel with auto-rotation (5-second intervals)
  - Mobile navigation toggle
  - Intersection Observer for scroll animations
  - Smooth scroll behavior
- **[menu-script.js](menu-script.js)** - Menu filtering and display logic for sweets.html
- **[instagram-feed.js](instagram-feed.js)** - Instagram feed integration (supports manual mode with local images or API mode)
- **[instagram-config.js](instagram-config.js)** - Configuration for Instagram feed (edit this to customize)
- **[hero-topo.js](hero-topo.js)** - 3D parallax mouse-tracking hero animation

### Styling Structure
- **[styles.css](styles.css)** - Global styles, navigation, hero carousel, and base components
- **[sweets-styles.css](sweets-styles.css)** - Menu page specific styles
- **[about.css](about.css)** - About page specific styles
- **[location.css](location.css)** - Location page specific styles
- **[hero-topo.css](hero-topo.css)** - 3D parallax hero styles

### Assets Organization
- **images/** - General website images (Instagram feed posts)
  - Contains 3 numbered images (1.jpg, 2.jpg, 3.jpg) for Instagram feed
  - README files for Instagram and favicon setup instructions
- **js/** - Product images (gelato, milkshakes, Italian ice photos) and logo files
  - Logo: `Dolce_Logo2.avif` (used in navigation)
  - Product images follow naming pattern: `[Flavor]_[Product].jpg`
  - Contains 37+ product flavor images across all categories

**Note:** The dual image folder structure exists because:
- `images/` is for general site content (social media, decorative images)
- `js/` is specifically for menu products referenced in [menu-script.js](menu-script.js)

## Development Workflow

### Local Development
Since this is a static site with no build process:

```bash
# Option 1: Direct file opening (simplest)
# Just double-click index.html

# Option 2: Python HTTP server (recommended for testing)
python -m http.server 8000
# Visit http://localhost:8000

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### No Build Commands
This project has **no build process, no package.json, no dependencies**. All code runs directly in the browser.

### Testing
- Open files directly in browser and test interactively
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Use browser DevTools (F12) for debugging
- Test responsive design at breakpoints: 640px (mobile), 1024px (tablet), 1024px+ (desktop)

## Design System & Color Palette

The site uses CSS custom properties defined in `:root` of [styles.css](styles.css):

```css
/* Current Dolce Brand Colors */
--color-primary: #FDFBF7           /* Artisanal Cream - Main Background */
--color-accent-red: #E25858        /* Sweet Strawberry - Primary CTA & Headers */
--color-accent-red-hover: #C14545  /* Darkened Strawberry - Hover State */
--color-accent-blue: #4A74B4       /* Wild Blueberry - Secondary Links & Icons */
--color-accent-gold: #D4AF37       /* Gold (for stars/ratings) */
--color-text-dark: #2D2D2D         /* Deep Charcoal - Body Text */
--color-text-light: #6B6B6B        /* Gray - Secondary Text */
--color-parchment: #F1E9DB         /* Soft Parchment - Cards & Containers */
```

**Note:** The color palette has evolved from initial values. See [COLOR_PALETTE_GUIDE.md](COLOR_PALETTE_GUIDE.md) for the complete color system.

### Typography
- **Headings**: `'Playfair Display', serif` - Elegant serif for premium feel
- **Body**: `'Inter', sans-serif` - Modern sans-serif for readability
- **Menu page accent**: `'Dancing Script', cursive` - For decorative elements

### Spacing System
Based on 8px grid:
- `--spacing-xs` (0.5rem / 8px)
- `--spacing-sm` (1rem / 16px)
- `--spacing-md` (1.5rem / 24px)
- `--spacing-lg` (2rem / 32px)
- `--spacing-xl` (3rem / 48px)
- `--spacing-2xl` (4rem / 64px)
- `--spacing-3xl` (6rem / 96px)

## Code Architecture Patterns

### JavaScript Initialization Pattern
Each page uses a consistent initialization approach:
1. **Global variables** declared at the top (e.g., `SLIDE_INTERVAL`, `currentSlide`)
2. **DOM elements** cached after declaration
3. **Functions** defined before they're called
4. **Event listeners** attached after DOM is loaded
5. **Initialization functions** called at the end of the script

Example from [script.js](script.js):
```javascript
// 1. Global variables
let currentSlide = 0;
const SLIDE_INTERVAL = 5000;

// 2. Cache DOM elements
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');

// 3. Define functions
function showSlide(n) { /* ... */ }
function nextSlide() { /* ... */ }

// 4. Attach listeners (at end of file)
nextBtn?.addEventListener('click', nextSlide);
```

### Page-Specific JavaScript Loading
- **[index.html](index.html)** → loads [script.js](script.js) + [instagram-feed.js](instagram-feed.js)
- **[sweets.html](sweets.html)** → loads [menu-script.js](menu-script.js)
- **[about.html](about.html)** → no custom JS (uses global styles only)
- **[location.html](location.html)** → no custom JS (Google Maps embed via iframe)
- **[hero-topo.html](hero-topo.html)** → loads [hero-topo.js](hero-topo.js)

Each JavaScript file is **self-contained** with no cross-dependencies.

### CSS Architecture
- **Global styles first** (resets, typography, utilities) in [styles.css](styles.css)
- **Component styles** follow (nav, hero, cards, footer)
- **Page-specific stylesheets** loaded after global stylesheet
- **Mobile-first approach** with min-width media queries
- **CSS custom properties** used throughout for consistency

### Common Code Modification Patterns

**Adding a new menu item:**
1. Add image to `js/` folder: `NewFlavor_Category.jpg`
2. Edit [menu-script.js](menu-script.js), add to appropriate array:
   ```javascript
   const gelatos = [
     // existing items...
     { name: "New Flavor", image: "js/NewFlavor_Gelato.jpg" }
   ];
   ```
3. No HTML changes needed - menu renders dynamically

**Adding a new carousel slide:**
1. Edit [index.html](index.html), add slide HTML in `.hero__carousel`
2. Add corresponding dot in `.hero__dots` section
3. No JavaScript changes needed - carousel auto-detects slide count

**Adding a new page:**
1. Create HTML file (e.g., `contact.html`)
2. Copy `<head>` and `<nav>` from existing page for consistency
3. Create page-specific CSS if needed (e.g., `contact.css`)
4. Update navigation links in ALL HTML files
5. Add page-specific script only if interactive features needed

## Key Interactive Features

### Hero Carousel (index.html)
- Auto-rotates every 5 seconds (configurable via `SLIDE_INTERVAL` in [script.js](script.js))
- Manual controls: Previous/Next arrows and dot indicators
- Keyboard navigation: Arrow keys to navigate slides
- Pauses when page is not in focus
- To add more slides: Add HTML in `.hero__carousel` AND corresponding `.hero__dot` elements

### Mobile Navigation
- Hamburger menu appears at 640px breakpoint
- Toggle implemented in [script.js](script.js) via `toggleMobileNav()`
- Menu closes when nav link is clicked
- Animated hamburger icon (3-line → X transformation)

### Scroll Animations
- Uses Intersection Observer API (see `observeElements()` in [script.js](script.js))
- Fade-in classes: `.fade-in`, `.fade-in-left`, `.fade-in-right`, `.fade-in-up`
- Triggers when elements enter viewport
- Respects `prefers-reduced-motion` user preference

### Instagram Feed Integration
Two modes available (configured in [instagram-config.js](instagram-config.js)):
1. **Manual Mode** (`manualMode: true`): Display local images from `images/` folder
2. **API Mode** (`manualMode: false`): Fetch live posts from Instagram Basic Display API

See [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md) for detailed setup instructions.

### Menu Filtering (sweets.html)
- Categories: "All", "Italian Ice", "Gelato", "Milkshakes"
- Product data stored as JavaScript objects in [menu-script.js](menu-script.js)
- Filter buttons dynamically show/hide products
- Images loaded from `js/` folder

**How the menu system works:**
1. Product arrays defined in [menu-script.js](menu-script.js): `gelatos`, `italianIces`, `milkshakes`
2. `renderMenuItems()` function dynamically creates HTML from arrays
3. Filter buttons call `filterMenu(category)` to show/hide items
4. Each product object has: `{ name: "Flavor Name", image: "js/Flavor_Category.jpg" }`

**Current product counts:**
- Gelato: 12 flavors (Bacio, Chocolate, Coconut, Mint Stracciatella, Pistachio, Pumpkin, etc.)
- Italian Ice: 8 flavors (Blue Raspberry, Bubble Gum, Cherry, Lemon, Mango, Rainbow, etc.)
- Milkshakes: 10 flavors (Bacio, Cappuccino, Chocolate, Coconut, Mint, etc.)

## Common Customization Tasks

### Updating Business Information
Search and replace throughout HTML files:
- Business name: "Dolce"
- Instagram handle: "@dolcesandyhook"
- Phone: Update in footer sections
- Address: Update in footer and [location.html](location.html)
- Hours: Update in footer and [location.html](location.html)

### Changing Colors
Edit `:root` variables in [styles.css](styles.css). The two accent colors are the most impactful:
- `--color-accent-red`: Primary CTA buttons, accents
- `--color-accent-blue`: Secondary accents, links

### Adding/Removing Products (Menu Page)
1. Add product image to `js/` folder with naming pattern: `[Flavor]_[Category].jpg`
2. Add product object to respective array in [menu-script.js](menu-script.js):
   ```javascript
   { name: "Flavor Name", image: "js/Flavor_Category.jpg" }
   ```

### Carousel Timing
Change `SLIDE_INTERVAL` constant in [script.js](script.js) (value in milliseconds)

### Hero Image Replacement
Images use Unsplash URLs by default. To use local images:
1. Save images to `images/` or `js/` folder
2. Replace `src` attributes in HTML: Change from `https://images.unsplash.com/...` to `images/your-image.jpg`

## Responsive Breakpoints

```css
/* Mobile: Default (< 640px) */
/* Single column, hamburger menu, full-width cards */

/* Tablet: 640px - 1024px */
@media (min-width: 640px) { /* 2-column grids */ }

/* Desktop: > 1024px */
@media (min-width: 1024px) { /* 3-column grids, full nav */ }
```

## File Naming Conventions
- HTML files: lowercase, descriptive (`about.html`, `location.html`)
- CSS files: match HTML or feature name (`about.css`, `sweets-styles.css`)
- JS files: kebab-case, descriptive (`menu-script.js`, `instagram-feed.js`)
- Images: PascalCase with underscores (`Strawberry_Gelato.jpg`, `Dolce_Logo2.avif`)

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive hosting guide. Quick options:
- **GitHub Pages**: Free, simple, just upload files
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Fast CDN, automatic SSL
- No server-side code means hosting is simple and free

## Instagram Integration Notes

The site has a sophisticated Instagram integration with two operational modes:

1. **Manual Mode** (recommended for beginners): Configure `manualImages` array in [instagram-config.js](instagram-config.js) with local image paths
2. **API Mode** (for live feeds): Requires Instagram Basic Display API access token (expires every 60 days)

The feed uses localStorage caching to minimize API calls. See [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md) and [INSTAGRAM_QUICK_START.md](INSTAGRAM_QUICK_START.md) for setup instructions.

## 3D Parallax Hero (Optional)

The project includes an advanced 3D parallax hero ([hero-topo.html](hero-topo.html), [hero-topo.css](hero-topo.css), [hero-topo.js](hero-topo.js)):
- Mouse-tracking parallax effect
- Layered image composition with depth
- Topographical contour lines overlay
- Keyboard controls (arrow keys, spacebar to reset)
- Touch support for mobile

See [HERO_TOPO_INSTRUCTIONS.md](HERO_TOPO_INSTRUCTIONS.md) for integration instructions. This can replace the standard hero carousel in [index.html](index.html) if desired.

## Browser Compatibility

Targets modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Uses modern features:
- CSS Grid and Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript (const/let, arrow functions, template literals)

## Performance Considerations

- **No external dependencies**: Only Google Fonts (loaded via CDN)
- **Lazy loading**: Images load when entering viewport
- **Throttled scroll events**: Performance optimized to ~60fps
- **Hardware acceleration**: Uses CSS transforms for animations
- **Total bundle size**: ~60KB (HTML + CSS + JS), excluding images

## Important Notes

### Project Constraints
- **No version control**: Project is not a git repository (no .git folder)
- **No package manager**: No npm, yarn, or other dependencies
- **No testing framework**: Testing is manual via browser
- **No linting/formatting config**: Code style is consistent but not enforced by tools
- **No build process**: All code runs directly in browser

### Asset Management
- **Image optimization recommended**: Use TinyPNG or similar before adding images (target <500KB per image)
- **Logo files**: Multiple formats in `js/` folder - currently using `Dolce_Logo2.avif` for best quality/compression
- **Product images**: 37+ images in `js/` folder with consistent naming: `[Flavor]_[Category].jpg`
- **Instagram images**: 3 images in `images/` folder (numbered 1.jpg, 2.jpg, 3.jpg)

### Platform Considerations
- **File paths**: Currently on Windows (uses backslashes in system paths)
- **Case sensitivity**: While Windows is case-insensitive, Linux hosting servers are not - maintain consistent casing
- **Line endings**: Ensure CRLF (Windows) or LF (Unix) consistency when deploying
- **Local server recommended**: Some features (like Instagram feed) work best with a local server rather than file:// protocol

## Troubleshooting Common Issues

### Carousel not auto-rotating
- Check browser console for JavaScript errors
- Verify [script.js](script.js) is loaded
- Ensure page is in focus (carousel pauses on inactive tabs)

### Images not loading
- Check file paths (case-sensitive on Linux servers)
- Verify images exist in specified folder
- Check browser console for 404 errors
- For Unsplash images, verify internet connection

### Mobile menu not opening
- Only appears on screens < 640px
- Check JavaScript console for errors
- Verify [script.js](script.js) is loaded and `navToggle` element exists

### Styles not applying
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check CSS file paths in HTML `<head>`
- Verify CSS files are in root directory (same level as HTML files)

## Documentation Files Reference

- **[README.md](README.md)** - Comprehensive technical documentation
- **[START_HERE.md](START_HERE.md)** - Complete project guide for beginners
- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Hosting and launch instructions
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project overview and architecture
- **[INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md)** - Complete Instagram integration guide
- **[INSTAGRAM_QUICK_START.md](INSTAGRAM_QUICK_START.md)** - Quick Instagram manual mode setup
- **[HERO_TOPO_INSTRUCTIONS.md](HERO_TOPO_INSTRUCTIONS.md)** - 3D parallax hero integration guide
- **[COLOR_PALETTE_GUIDE.md](COLOR_PALETTE_GUIDE.md)** - Color system reference
- **[CHANGELOG.md](CHANGELOG.md)** - Version history
