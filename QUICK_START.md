# 🚀 Quick Start Guide - Dolce Ice Cream Website

## Fastest Way to View Your Website

### Option 1: Direct Browser Open (Easiest)
1. Navigate to the `dolce-website` folder
2. Double-click `index.html`
3. Your default browser will open the website

### Option 2: VS Code Live Server (Best for Development)
1. Open the `dolce-website` folder in VS Code
2. Install the "Live Server" extension (if not already installed)
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Website opens at `http://127.0.0.1:5500`

### Option 3: Python Server (Cross-Platform)
```bash
cd dolce-website
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## ✅ What You Get

### 5 Complete Sections:
1. **Hero** - Auto-rotating carousel with ice cream images
2. **Products** - Ice cream, Italian ice, milkshakes showcase
3. **Reviews** - 3 customer testimonials with 5-star ratings
4. **About** - Family-owned story with statistics
5. **Social** - Instagram feed integration (@dolcesandyhook)

### Interactive Features:
- ✨ Smooth scroll animations
- 🔄 Auto-rotating hero carousel (5-second intervals)
- 📱 Responsive mobile navigation
- 🖱️ Hover effects on all interactive elements
- ⌨️ Keyboard navigation (arrow keys for carousel)
- 🎨 Premium gradients and styling

---

## 🎨 Quick Customization

### Change Your Business Name:
1. Open `index.html`
2. Find/Replace "Dolce" with your shop name
3. Save and refresh browser

### Update Instagram Handle:
1. Search for "@dolcesandyhook" in `index.html`
2. Replace with your Instagram handle
3. Update the Instagram links

### Change Colors:
1. Open `styles.css`
2. Find the `:root` section at the top
3. Update these values:
   ```css
   --color-accent-red: #E84855;    /* Your primary color */
   --color-accent-blue: #4A90E2;   /* Your secondary color */
   ```

### Add Your Photos:
1. Save your images in the `images/` folder
2. Open `index.html`
3. Replace Unsplash URLs with your images:
   ```html
   <!-- Change from: -->
   <img src="https://images.unsplash.com/photo-..." alt="...">

   <!-- To: -->
   <img src="images/your-photo.jpg" alt="...">
   ```

---

## 📱 Test on Mobile

### Using Your Phone:
1. Start a local server (Option 2 or 3 above)
2. Find your computer's local IP:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` (look for inet)
3. On your phone browser, visit:
   `http://YOUR_IP:8000`
   Example: `http://192.168.1.100:8000`

---

## 🔧 File Overview

| File | Purpose | Edit This For |
|------|---------|---------------|
| `index.html` | Website structure | Content, text, images |
| `styles.css` | Visual styling | Colors, fonts, spacing |
| `script.js` | Interactive features | Carousel timing, animations |
| `README.md` | Full documentation | Reference guide |

---

## ⚡ Performance Tips

- Images from Unsplash are optimized automatically
- For local images, compress them first (use TinyPNG.com)
- Recommended image sizes:
  - Hero: 800x600px
  - Products: 600x800px
  - Instagram: 400x400px

---

## 🐛 Common Issues

### Website looks broken?
- Make sure all files are in the same folder
- Check that `styles.css` and `script.js` are present
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Carousel not working?
- Ensure JavaScript is enabled in browser
- Open browser console (F12) to check for errors
- Verify `script.js` is loading

### Mobile menu not opening?
- This only appears on screens smaller than 640px
- Try resizing your browser window
- Or test on an actual mobile device

---

## 📞 Need Help?

1. Check the full `README.md` for detailed documentation
2. Review code comments in each file
3. Use browser DevTools (F12) to inspect elements

---

## 🎉 You're Ready!

Your premium ice cream website is ready to go. Just customize the content and images to match your brand!

**Next Steps:**
1. Replace placeholder images with your photos
2. Update all text content (shop name, address, hours)
3. Customize colors to match your brand
4. Test on mobile devices
5. Deploy to web hosting (GitHub Pages, Netlify, etc.)

---

**Enjoy your beautiful new website! 🍦**
