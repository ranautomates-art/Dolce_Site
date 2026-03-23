# 📸 Instagram Images Folder

This folder is where you should place your Instagram post images for manual mode.

## 📁 File Naming Convention

For best results, name your images:

```
instagram-post-1.jpg
instagram-post-2.jpg
instagram-post-3.jpg
```

Or any other descriptive names like:
```
ice-cream-cone.jpg
milkshake-chocolate.jpg
italian-ice-lemon.jpg
```

## 🎨 Image Requirements

### Recommended Specifications:
- **Dimensions:** 400x400px (square) or 1080x1080px
- **Format:** JPG or PNG
- **File Size:** Under 500KB each (use TinyPNG.com to compress)
- **Aspect Ratio:** 1:1 (square) for best appearance
- **Quality:** High-resolution, well-lit photos

### Example Structure:
```
images/
├── favicon.png
├── instagram-post-1.jpg    ← Your ice cream cone photo
├── instagram-post-2.jpg    ← Your milkshake photo
├── instagram-post-3.jpg    ← Your Italian ice photo
└── README_INSTAGRAM.md     ← This file
```

## 🔧 How to Add Your Images

### Method 1: From Your Phone

1. Take photos with your phone
2. Transfer to computer via:
   - USB cable
   - AirDrop (Mac/iPhone)
   - Email/cloud storage
3. Save to this folder
4. Update `instagram-config.js` with filenames

### Method 2: From Instagram

1. Open Instagram on desktop browser
2. Navigate to your post
3. Right-click image → "Save image as..."
4. Save to this folder
5. Rename to match your config

### Method 3: Use Stock Images (Temporary)

While preparing your real photos, you can use:
- Unsplash.com (free stock photos)
- Your existing Unsplash URLs in config
- Placeholder images from placeholder.com

## 📝 Quick Reference

After adding images here, update `instagram-config.js`:

```javascript
manualImages: [
    {
        url: 'images/instagram-post-1.jpg',  // ← Your filename here
        caption: 'Delicious strawberry cone',
        permalink: 'https://instagram.com/dolcesandyhook'
    },
    // Add more...
]
```

## 🎯 Tips for Great Instagram Photos

1. **Good Lighting:** Natural light works best
2. **Clean Background:** Simple, uncluttered backgrounds
3. **Focus on Product:** Ice cream should be the star
4. **Consistent Style:** Use similar angles/filters across all 3
5. **Square Crop:** Make sure important parts aren't cut off

## 🔄 Updating Images

To change displayed images:

1. Add new images to this folder
2. Update filenames in `instagram-config.js`
3. Refresh your website
4. (Optional) Delete old unused images

## 📏 Image Optimization

### Before uploading:
- Resize to 800x800px or 400x400px
- Compress at [TinyPNG.com](https://tinypng.com/)
- Check file size is under 500KB

### Tools:
- **Resize:** Windows Photos, Mac Preview, or [BulkResizePhotos.com](https://bulkresizephotos.com/)
- **Compress:** [TinyPNG.com](https://tinypng.com/) or [Squoosh.app](https://squoosh.app/)
- **Edit:** [Photopea.com](https://www.photopea.com/) (free Photoshop alternative)

## ✅ Checklist

Before going live, make sure:

- [ ] All 3 images are in this folder
- [ ] Files are named correctly
- [ ] Images are square (1:1 aspect ratio)
- [ ] File sizes are under 500KB each
- [ ] Images look good on mobile
- [ ] Filenames in config match actual files
- [ ] No typos in filenames (case-sensitive!)

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match config exactly (case-sensitive)
- Verify files are in images/ folder, not a subfolder
- Try hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Check browser console (F12) for errors

**Images look stretched?**
- Make sure they're square (1:1 aspect ratio)
- Crop images to 400x400 or 1080x1080

**Images loading slowly?**
- Compress them at TinyPNG.com
- Reduce dimensions to 400x400px
- Convert to JPG if using PNG

---

**Need more help?** See [INSTAGRAM_QUICK_START.md](../INSTAGRAM_QUICK_START.md) or [INSTAGRAM_SETUP.md](../INSTAGRAM_SETUP.md)
