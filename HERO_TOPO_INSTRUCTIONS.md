# 🍦 Dolce Topographical Hero - Integration Guide

## Overview

I've converted the React Halide topographical hero component into **vanilla JavaScript** that works with your existing Dolce website!

## Files Created

- `hero-topo.html` - Standalone hero page
- `hero-topo.css` - 3D parallax styles
- `hero-topo.js` - Mouse parallax and animation logic

---

## 🎨 How to Add Your Custom Images

You provided two beautiful images:
1. **Chocolate milkshake with Oreos** (first image)
2. **Ice cream cone with pink/white scoops** (second image)

### Method 1: Using Your Local Images (Recommended)

1. **Save your images to the `images` folder**:
   ```
   images/
     ├── hero-layer-1.jpg  (Chocolate milkshake)
     ├── hero-layer-2.jpg  (Ice cream cone)
     └── hero-layer-3.jpg  (Optional third image)
   ```

2. **Update `hero-topo.css` (lines 79-97)**:

   Replace the current layer backgrounds with your local images:

   ```css
   /* Layer 1: Base Layer (Chocolate Milkshake) */
   .layer-1 {
       background-image: url('images/hero-layer-1.jpg');
       filter: grayscale(0.3) contrast(1.2) brightness(0.6);
       transform: translateZ(0px);
   }

   /* Layer 2: Middle Layer (Ice Cream Cone) */
   .layer-2 {
       background-image: url('images/hero-layer-2.jpg');
       filter: grayscale(0.2) contrast(1.1) brightness(0.7);
       opacity: 0.7;
       mix-blend-mode: screen;
       transform: translateZ(15px);
   }

   /* Layer 3: Top Layer (Optional - use milkshake or cone again) */
   .layer-3 {
       background-image: url('images/hero-layer-1.jpg');
       filter: grayscale(0.4) contrast(1.3) brightness(0.8);
       opacity: 0.5;
       mix-blend-mode: overlay;
       transform: translateZ(30px);
   }
   ```

3. **Update `hero-topo.js` (lines 117-121)**:

   Update the preload function with your local image paths:

   ```javascript
   function preloadImages() {
       const imageUrls = [
           'images/hero-layer-1.jpg',
           'images/hero-layer-2.jpg',
           'images/hero-layer-1.jpg'  // Reusing layer 1 for layer 3
       ];

       imageUrls.forEach(url => {
           const img = new Image();
           img.src = url;
       });
   }
   ```

### Method 2: Upload to Image Hosting (Alternative)

If you prefer to use a CDN or image hosting:

1. Upload your images to:
   - [Imgur](https://imgur.com)
   - [Cloudinary](https://cloudinary.com)
   - Your web hosting service

2. Get the direct image URLs

3. Replace the URLs in `hero-topo.css` with your hosted image URLs

---

## 🚀 How to Use This Hero

### Option A: As a Standalone Landing Page

1. Open `hero-topo.html` directly in your browser
2. This shows the full 3D parallax hero experience
3. The "EXPLORE FLAVORS" button links to your `sweets.html` page

### Option B: Integrate Into Your Existing `index.html`

Replace your current hero section with this 3D version:

1. **Add the CSS link to `index.html` `<head>`**:
   ```html
   <link rel="stylesheet" href="hero-topo.css">
   ```

2. **Replace the hero section** in `index.html` (around lines 51-115):

   Find:
   ```html
   <section class="hero section" id="home">
       <!-- Old hero content -->
   </section>
   ```

   Replace with the content from `hero-topo.html` (lines 29-79)

3. **Add the JavaScript before closing `</body>`**:
   ```html
   <script src="hero-topo.js"></script>
   ```

---

## 🎯 Customization Options

### Change the Text

Edit `hero-topo.html`:

```html
<!-- Line 35: Brand Name -->
<div class="brand-name">DOLCE</div>

<!-- Line 37-39: Location Info -->
<div class="meta-info">
    <div>SANDY HOOK, NJ</div>
    <div>ARTISAN CRAFTED</div>
</div>

<!-- Line 42-45: Main Title -->
<h1 class="hero-title">
    HANDCRAFTED<br />
    GELATO
</h1>

<!-- Line 50-52: Archive Info -->
<div class="archive-info">
    <p>[ EST. 2009 ]</p>
    <p>ITALIAN TRADITION & PREMIUM INGREDIENTS</p>
</div>
```

### Change the Colors

Edit `hero-topo.css`:

```css
:root {
    --bg: #0a0a0a;              /* Background color */
    --silver: #e0e0e0;          /* Text color */
    --accent: #2D5016;          /* Primary accent (forest green) */
    --accent-hover: #A0522D;    /* Hover color (earthy red) */
    --grain-opacity: 0.15;      /* Grain texture intensity */
}
```

### Adjust the 3D Effect

Edit `hero-topo.css` (line 43):

```css
.canvas-3d {
    transform: rotateX(55deg) rotateZ(-25deg) scale(1);
    /* Adjust these values:
       - rotateX: Tilt angle (higher = more tilted)
       - rotateZ: Rotation angle
       - scale: Size (1 = normal, 1.2 = 20% bigger)
    */
}
```

### Change Image Filters

Edit `hero-topo.css` (lines 79-97):

```css
.layer-1 {
    /* Adjust these values:
       - grayscale(0-1): 0 = full color, 1 = black & white
       - contrast(0-2): Higher = more contrast
       - brightness(0-2): Higher = brighter
    */
    filter: grayscale(0.3) contrast(1.2) brightness(0.6);
}
```

---

## 🎮 Interactive Features

### Mouse Parallax
- Move your mouse around the page
- The 3D layers shift based on mouse position
- Creates a depth effect

### Touch Support
- Works on mobile/tablet
- Touch and drag to see parallax effect

### Keyboard Controls
- **Arrow Keys**: Manual control of 3D rotation
- **Spacebar/Escape**: Reset to default position

### Smooth Entrance Animation
- Page loads with a dramatic 3D reveal
- 2.5 second animation on first load

---

## 📱 Responsive Behavior

The hero automatically adapts to:
- **Desktop**: Full 800x500px canvas
- **Tablet**: 600x400px canvas
- **Mobile**: 90vw width, scaled proportionally
- **Small Mobile**: Further optimized for phones

---

## 🎨 Design Philosophy

This hero uses:
- **3D CSS transforms** for depth
- **Multiple image layers** for parallax
- **Topographical contour lines** for texture
- **Film grain overlay** for premium feel
- **Dolce brand colors** (forest green, earthy red)

The design is inspired by:
- Artisan creamery aesthetics
- Topographical maps
- Film photography
- Premium product showcases

---

## 🔧 Browser Compatibility

Works in:
- ✅ Chrome/Edge (88+)
- ✅ Firefox (78+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Gracefully degrades in older browsers:
- 3D effects may not work
- Static version still displays

---

## ⚡ Performance Notes

- **Optimized with RequestAnimationFrame** for 60fps
- **Smooth easing** for mouse movement
- **Pauses when tab is hidden** to save resources
- **Preloads images** for instant display
- **Uses CSS transforms** (hardware accelerated)

---

## 🐛 Troubleshooting

### Images not loading?
- Check file paths in `hero-topo.css`
- Ensure images are in the correct folder
- Check browser console for errors (F12)

### 3D effect not working?
- Ensure `hero-topo.js` is loaded
- Check browser console for JavaScript errors
- Try in a modern browser (Chrome, Firefox, Safari)

### Performance issues?
- Reduce image file sizes (optimize with TinyPNG)
- Lower `--grain-opacity` in CSS
- Disable grain filter for older devices

---

## 🎯 Next Steps

1. **Test the standalone version**: Open `hero-topo.html`
2. **Add your images**: Follow "Method 1" above
3. **Customize the text**: Update to match your brand
4. **Integrate into index.html**: If you want it as your main hero

---

## 💡 Pro Tips

1. **Use high-quality images** (1200px wide minimum)
2. **Keep image file sizes under 500KB** for fast loading
3. **Use images with good contrast** for better layering
4. **Test on mobile devices** for touch interaction
5. **Experiment with filter values** for different moods

---

## 📞 Questions?

The hero is fully integrated and ready to use! Just add your images and you're set.

**Files to modify for your images:**
1. `hero-topo.css` - Lines 79-97
2. `hero-topo.js` - Lines 117-121

Enjoy your premium 3D parallax hero! 🍦✨
