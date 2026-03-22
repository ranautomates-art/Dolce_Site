# 🍦 Dolce Ice Cream Website

A premium, responsive single-page website for Dolce Ice Cream shop, featuring modern design, smooth animations, and interactive elements inspired by luxury ice cream brands.

![Dolce Ice Cream](https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=400&fit=crop)

## ✨ Features

### 🎨 Design & Aesthetics
- **Premium Visual Style**: Modern, clean design with luxury artisanal feel
- **Elegant Typography**: Playfair Display (serif headings) + Inter (sans-serif body)
- **Custom Color Palette**: Cream base with strawberry-red and blueberry-blue accents
- **Smooth Gradients**: Professional gradient backgrounds throughout
- **High-Quality Images**: Curated Unsplash images for premium appearance

### 🔄 Interactive Elements
- **Auto-Rotating Hero Carousel**: 3 slides with manual controls and indicators
- **Smooth Scroll Animations**: Fade-in effects triggered on scroll
- **Hover Effects**: Interactive buttons, cards, and images
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Parallax Scrolling**: Subtle depth effects on product images
- **Keyboard Navigation**: Arrow keys control carousel

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**:
  - Desktop: > 1024px (full layout)
  - Tablet: 640px - 1024px (2-column grids)
  - Mobile: < 640px (stacked single-column)
- **Touch-Friendly**: 44px minimum touch targets
- **Adaptive Images**: Responsive image sizing

### ♿ Accessibility
- **Semantic HTML5**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear focus states for all interactive elements
- **Reduced Motion Support**: Respects user's motion preferences

### ⚡ Performance
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Images load on demand
- **Debounced/Throttled Events**: Efficient scroll handling
- **Minimal Dependencies**: Pure vanilla JavaScript (no frameworks)
- **Fast Load Times**: Lightweight codebase

## 📂 File Structure

```
dolce-website/
├── index.html          # Main HTML structure (5 sections)
├── styles.css          # Complete styling and animations
├── script.js           # Interactive functionality
├── images/             # Image assets folder
│   └── (placeholder for local images)
└── README.md           # This file
```

## 🏗️ Website Structure

### 1. **Hero Section** (`#home`)
- Full-viewport height with gradient background
- Auto-rotating carousel (3 slides, 5-second intervals)
- Ice cream cone visuals with float animations
- Left/right navigation arrows
- Slide indicator dots
- "Scroll Down" call-to-action

### 2. **Products Section** (`#products`)
- Two-column grid layout
- Left: Product descriptions with icons
  - Premium Ice Cream
  - Italian Ice
  - Milkshakes
- Right: Featured product image with accent shapes
- "Explore Our Menu" CTA button

### 3. **Reviews Section** (`#reviews`)
- Three-column card grid
- Each card features:
  - 5-star rating display
  - Customer testimonial
  - Customer name
- Hover effects with lift animation

### 4. **About Section** (`#about`)
- Two-column grid layout
- Left: Company story and statistics
  - 15+ years of excellence
  - 50+ unique flavors
  - 100% family recipes
- Right: Framed owner portrait
- "Our Story" CTA button

### 5. **Social Feed Section** (`#social`)
- Instagram handle (@dolcesandyhook)
- Three-column grid of Instagram posts
- Hover overlay with Instagram icon
- "Follow Us" CTA button

### 6. **Footer** (`#location`)
- Four-column grid:
  - Brand info
  - Hours of operation
  - Location & contact
  - Social media links
- Copyright notice

## 🎨 Color Palette

```css
--color-primary: #FAF8F5        /* Cream/Off-white */
--color-accent-red: #E84855     /* Strawberry Red */
--color-accent-blue: #4A90E2    /* Blueberry Blue */
--color-accent-gold: #D4AF37    /* Gold accent */
--color-text-dark: #2C2C2C      /* Charcoal */
--color-text-light: #6B6B6B     /* Gray */
```

## 📖 Typography

```css
/* Headings */
font-family: 'Playfair Display', serif;
sizes: 3.5rem (H1), 2.5rem (H2), 1.75rem (H3)

/* Body Text */
font-family: 'Inter', sans-serif;
size: 1.125rem
line-height: 1.6
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) - optional for editing

### Installation

1. **Download/Clone the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd dolce-website

   # Or simply download the ZIP and extract
   ```

2. **Open the website**
   - Double-click `index.html` to open in your default browser
   - Or right-click → "Open with" → Choose your browser

### Development Setup

1. **Use a local server** (recommended for best experience):

   **Option 1: VS Code Live Server**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"

   **Option 2: Python Simple Server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then visit: `http://localhost:8000`

   **Option 3: Node.js http-server**
   ```bash
   npx http-server
   ```

## 🛠️ Customization Guide

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-accent-red: #YOUR_COLOR;
    --color-accent-blue: #YOUR_COLOR;
}
```

### Updating Content

1. **Business Name**: Search for "Dolce" in `index.html` and replace
2. **Instagram Handle**: Replace "@dolcesandyhook" throughout
3. **Contact Info**: Update footer section with your details
4. **Hours**: Modify footer hours list

### Changing Images

Replace Unsplash URLs in `index.html` with your own images:

```html
<!-- Example: Hero slide -->
<img src="YOUR_IMAGE_URL" alt="Description">

<!-- Or use local images -->
<img src="images/hero-1.jpg" alt="Description">
```

**Recommended Image Sizes:**
- Hero carousel: 800x600px (landscape)
- Product showcase: 600x800px (portrait)
- Owner photo: 600x700px (portrait)
- Instagram posts: 400x400px (square)

### Carousel Settings

Modify timing in `script.js`:

```javascript
const SLIDE_INTERVAL = 5000; // Change to desired milliseconds
```

### Adding More Carousel Slides

1. Add slide HTML in `index.html`:
   ```html
   <div class="hero__slide">
       <!-- Your content -->
   </div>
   ```

2. Add corresponding dot indicator:
   ```html
   <button class="hero__dot" data-slide="3"></button>
   ```

### Custom Animations

Animation classes available:
- `.fade-in` - Fade in from below
- `.fade-in-left` - Slide in from left
- `.fade-in-right` - Slide in from right
- `.fade-in-up` - Slide in from bottom

Add to any element to trigger on scroll.

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

**Features Used:**
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript

## 🔧 Technical Details

### Dependencies
- **None!** Pure HTML, CSS, and JavaScript
- Google Fonts (Playfair Display, Inter) - loaded via CDN

### JavaScript Features
- Intersection Observer for scroll animations
- Auto-rotating carousel with manual controls
- Smooth scroll navigation
- Mobile menu toggle
- Parallax effects
- Debouncing & throttling for performance
- Keyboard accessibility

### CSS Features
- Custom properties (CSS variables)
- Grid & Flexbox layouts
- CSS animations & transitions
- Media queries for responsiveness
- Gradient backgrounds
- Box shadows & filters

## 📊 Performance Optimization

- **Lazy Loading**: Images load as they enter viewport
- **Throttled Scroll Events**: Limits scroll handler calls to ~60fps
- **Hardware Acceleration**: Uses CSS transforms for animations
- **Minimal Repaints**: Optimized CSS to reduce browser reflows
- **Efficient Selectors**: Uses modern CSS for fast rendering

## ✅ Accessibility Checklist

- ✓ Semantic HTML5 elements
- ✓ ARIA labels on interactive elements
- ✓ Keyboard navigation support
- ✓ Focus visible on all interactive elements
- ✓ Alt text on all images
- ✓ Sufficient color contrast ratios
- ✓ Respects prefers-reduced-motion
- ✓ Proper heading hierarchy
- ✓ Screen reader friendly

## 🎯 SEO Features

- Meta tags for description and Open Graph
- Semantic HTML structure
- Descriptive alt text on images
- Proper heading hierarchy
- Fast load times
- Mobile-responsive design

## 🐛 Troubleshooting

### Images Not Loading
- Check internet connection (using Unsplash URLs)
- For local images, ensure they're in the `images/` folder
- Verify file paths are correct

### Animations Not Working
- Check browser compatibility
- Ensure JavaScript is enabled
- Check browser console for errors

### Mobile Menu Not Opening
- Verify JavaScript is loaded
- Check for JavaScript errors in console
- Ensure viewport meta tag is present

### Carousel Not Auto-Rotating
- Check if page is in focus (carousel pauses when page is inactive)
- Verify JavaScript initialization
- Check console for errors

## 📸 Instagram Feed Integration

**NEW!** Dynamic Instagram feed with two setup options:

### Quick Setup (Manual Mode)
1. Add 3 images to `images/` folder
2. Update `instagram-config.js` with image paths
3. Done! See [INSTAGRAM_QUICK_START.md](INSTAGRAM_QUICK_START.md)

### Advanced Setup (Live API Feed)
- Automatically displays your latest Instagram posts
- Updates dynamically from Instagram API
- See [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md) for full guide

**Files Added:**
- `instagram-feed.js` - Integration script
- `instagram-config.js` - Your settings (edit this!)
- `INSTAGRAM_SETUP.md` - Complete documentation
- `INSTAGRAM_QUICK_START.md` - 5-minute setup guide

## 📝 Future Enhancements

Potential features to add:
- [ ] Online ordering integration
- [ ] Flavor menu page with filtering
- [ ] Location map integration (Google Maps)
- [ ] Newsletter signup form
- [ ] Customer photo gallery
- [ ] Seasonal flavor announcements
- [ ] Gift card purchase option
- [ ] Catering inquiry form
- [ ] Blog section for flavor stories
- [ ] Loyalty program signup

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own ice cream shop or similar business!

## 📞 Support

For questions or issues:
1. Check this README
2. Review the code comments
3. Check browser console for errors

## 🙏 Credits

- **Design Inspiration**: Marco Ice Cream, GrassRoots Ice Cream
- **Images**: Unsplash.com (various photographers)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Custom SVG icons

## 🎉 Acknowledgments

Built with passion for premium ice cream and modern web design.

---

**Made with ❤️ and 🍦**

*Dolce - Where every scoop is a sweet memory*
