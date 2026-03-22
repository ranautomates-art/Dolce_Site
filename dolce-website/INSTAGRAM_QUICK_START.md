# 📸 Instagram Feed - Quick Start

**Goal:** Add your real Instagram images to the website in 5 minutes!

---

## 🎯 Option 1: Manual Setup (EASIEST - Recommended)

### Step 1: Add Your Images

Put 3 square images (400x400px) in the `images/` folder:
- `images/instagram-post-1.jpg`
- `images/instagram-post-2.jpg`
- `images/instagram-post-3.jpg`

### Step 2: Edit Configuration

Open `instagram-config.js` and update lines 51-67:

```javascript
manualImages: [
    {
        url: 'images/instagram-post-1.jpg',
        caption: 'Your photo caption',
        permalink: 'https://instagram.com/dolcesandyhook'
    },
    {
        url: 'images/instagram-post-2.jpg',
        caption: 'Your photo caption',
        permalink: 'https://instagram.com/dolcesandyhook'
    },
    {
        url: 'images/instagram-post-3.jpg',
        caption: 'Your photo caption',
        permalink: 'https://instagram.com/dolcesandyhook'
    }
]
```

### Step 3: Update Your Instagram Username

Line 75 in `instagram-config.js`:
```javascript
instagramUsername: '@your_username',
```

### Step 4: Done!

Open `index.html` in your browser and scroll to the Instagram section.

---

## 🚀 Option 2: Live API Feed (Advanced)

**Time Required:** 30-60 minutes
**See Full Guide:** [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md)

Quick overview:
1. Create Facebook Developer App
2. Enable Instagram Basic Display API
3. Generate Access Token
4. Update `instagram-config.js`:
   - Set `manualMode: false`
   - Add your `accessToken`
5. Your latest Instagram posts appear automatically!

**Note:** Tokens expire every 60 days and need renewal.

---

## 🎨 Already Using Instagram?

### Get Direct Image URLs from Instagram:

1. Open Instagram on desktop browser
2. Find a post you want to use
3. Right-click the image → "Open image in new tab"
4. Copy the URL from address bar
5. Use that URL in `instagram-config.js`

Example:
```javascript
manualImages: [
    {
        url: 'https://scontent.cdninstagram.com/v/t51.2885-15/your-image.jpg',
        caption: 'Delicious ice cream',
        permalink: 'https://instagram.com/p/ABC123'
    }
]
```

---

## ⚡ Pro Tips

### Image Requirements:
- **Size:** 400x400px (square) recommended
- **Format:** JPG or PNG
- **File size:** Keep under 500KB for fast loading
- **Compress at:** [TinyPNG.com](https://tinypng.com/)

### How Many Posts?
Change `limit` in `instagram-config.js`:
```javascript
limit: 3,  // Try 3, 6, or 9 for different layouts
```

### Update Your Username:
Search and replace `@dolcesandyhook` with `@your_username` in:
- `instagram-config.js` (line 75)
- `index.html` (if not using dynamic feed)

---

## 🔧 Troubleshooting

**Images not showing?**
1. Check browser console (F12) for errors
2. Verify image file names match exactly
3. Make sure images are in `images/` folder
4. Try hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)

**Need more help?**
See the full guide: [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md)

---

## 📁 What Files Were Added?

Three new files for Instagram integration:

1. **`instagram-config.js`** - Your settings (edit this!)
2. **`instagram-feed.js`** - The integration code (don't edit)
3. **`INSTAGRAM_SETUP.md`** - Full documentation

Plus updates to:
- `index.html` - Added container and script tags
- `styles.css` - Added loading/error styles

---

## ✅ Quick Checklist

Before going live:

- [ ] Added 3 images to `images/` folder
- [ ] Updated image paths in `instagram-config.js`
- [ ] Changed Instagram username to yours
- [ ] Tested in browser (images show correctly)
- [ ] Tested on mobile device
- [ ] "Follow Us" button links to your Instagram

---

**That's it! You're done! 🎉**

For the full guide with API setup, troubleshooting, and advanced options, see [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md).
