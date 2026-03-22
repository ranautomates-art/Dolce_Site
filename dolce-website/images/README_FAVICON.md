# Adding Your Dolce Logo as Favicon

## Quick Instructions

To add your Italian Ice Gelato logo to the browser tabs, follow these steps:

### Step 1: Save Your Logo Image
1. Save your logo image (the one with the three colored circles - blue, pink, yellow - forming an ice cream cone) in this `images` folder

### Step 2: Create Favicon Files
You need to create the following files from your logo:

#### Required Files:
- `favicon.ico` - 32x32 pixels (for browser tabs)
- `favicon.png` - 32x32 pixels (modern browsers)
- `apple-touch-icon.png` - 180x180 pixels (for iOS devices)

### How to Create Favicon Files:

#### Option 1: Online Favicon Generator (Easiest)
1. Go to https://favicon.io/favicon-converter/
2. Upload your logo image
3. Download the generated files
4. Place them in this `images` folder

#### Option 2: Using an Image Editor
1. Open your logo in an image editor (Photoshop, GIMP, Paint.NET, etc.)
2. Resize to 32x32 pixels for favicon
3. Save as `favicon.png` and `favicon.ico`
4. Resize to 180x180 pixels for Apple touch icon
5. Save as `apple-touch-icon.png`

#### Option 3: Using Free Online Tools
- **Favicon.io**: https://favicon.io/
- **RealFaviconGenerator**: https://realfavicongenerator.net/
- **Canva**: https://www.canva.com/create/favicons/

### Step 3: Verify Installation
1. Open `index.html` or `sweets.html` in your browser
2. Look at the browser tab - you should see your logo instead of the default globe icon
3. If you don't see it, try:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear browser cache
   - Close and reopen the browser

### File Names Expected:
The HTML files are already configured to look for these files:
```
images/
  ├── favicon.ico
  ├── favicon.png
  ├── apple-touch-icon.png
```

### Testing
After adding the files, you should see your logo in:
- ✓ Browser tabs (Chrome, Firefox, Edge, Safari)
- ✓ Bookmarks
- ✓ Browser history
- ✓ iOS home screen (when saved as a web app)

---

**Note**: The HTML files ([index.html](../index.html) and [sweets.html](../sweets.html)) have already been updated with the correct favicon links. You just need to add the image files!
