# 📸 Instagram Feed Setup Guide

Complete guide for adding real Instagram images to your Dolce website.

---

## 🎯 Quick Start (Manual Mode - No API Required)

**Best for:** Beginners, quick setup, complete control over displayed images

### Step 1: Prepare Your Images

1. **Take or select 3 Instagram-style photos** of your ice cream
   - Recommended size: 400x400px (square)
   - Format: JPG or PNG
   - Keep file size under 500KB each

2. **Save images to the `images/` folder:**
   ```
   dolce-website/
   ├── images/
   │   ├── instagram-post-1.jpg
   │   ├── instagram-post-2.jpg
   │   └── instagram-post-3.jpg
   ```

### Step 2: Update Configuration

Open `instagram-config.js` and update the `manualImages` array:

```javascript
manualMode: true,  // Keep this as true

manualImages: [
    {
        url: 'images/instagram-post-1.jpg',
        caption: 'Your caption here',
        permalink: 'https://instagram.com/p/YOUR_POST_ID'
    },
    {
        url: 'images/instagram-post-2.jpg',
        caption: 'Your caption here',
        permalink: 'https://instagram.com/p/YOUR_POST_ID'
    },
    {
        url: 'images/instagram-post-3.jpg',
        caption: 'Your caption here',
        permalink: 'https://instagram.com/p/YOUR_POST_ID'
    }
]
```

### Step 3: Update Instagram Username

```javascript
instagramUsername: '@your_actual_username',
instagramUrl: 'https://instagram.com/your_actual_username'
```

### Step 4: Test Your Site

1. Open `index.html` in your browser
2. Scroll to the Instagram section
3. You should see your 3 images displayed!

**✅ Done! Your Instagram feed is now showing your real photos.**

---

## 🚀 Advanced: API Mode (Dynamic Live Feed)

**Best for:** Automatic updates, always showing latest posts

### Prerequisites

- Instagram Business or Creator Account
- Facebook Developer Account
- Basic understanding of APIs

### Part 1: Set Up Instagram Basic Display API

#### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as the app type
4. Fill in app details:
   - **App Name**: "Dolce Instagram Feed" (or your choice)
   - **App Contact Email**: Your email
5. Click "Create App"

#### Step 2: Add Instagram Basic Display Product

1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Scroll to "User Token Generator"
4. Click "Add or Remove Instagram Testers"

#### Step 3: Add Instagram Test User

1. Click "Instagram Testers"
2. Add your Instagram username
3. Open Instagram app on your phone
4. Go to Settings → Apps and Websites → Tester Invites
5. Accept the invite from your app

#### Step 4: Generate Access Token

1. Back in Facebook Developers, go to Instagram Basic Display
2. Under "User Token Generator", click "Generate Token"
3. Log in with your Instagram account
4. Authorize the app
5. **Copy the Access Token** (you'll need this!)

⚠️ **IMPORTANT:** This token expires every 60 days. See "Token Refresh" section below.

### Part 2: Configure Your Website

#### Step 1: Update Configuration

Open `instagram-config.js` and update:

```javascript
window.INSTAGRAM_CONFIG = {
    manualMode: false,  // Change to false for API mode

    accessToken: 'YOUR_ACCESS_TOKEN_HERE',  // Paste your token

    limit: 3,  // Number of posts to display

    cacheTime: 3600000,  // 1 hour (in milliseconds)

    instagramUsername: '@dolcesandyhook',
    instagramUrl: 'https://instagram.com/dolcesandyhook'
};
```

#### Step 2: Test Your Integration

1. Open `index.html` in your browser
2. Open browser console (F12)
3. Check for any error messages
4. Your latest Instagram posts should appear!

#### Step 3: Verify in Console

Open browser console and run:
```javascript
refreshInstagramFeed()
```

This will force a refresh and show any errors.

---

## 🔄 Token Management

### Long-Lived Access Tokens

Short-lived tokens expire in 1 hour. Convert to long-lived (60 days):

1. Use this URL in your browser:
```
https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_SHORT_LIVED_TOKEN
```

2. You'll receive a long-lived token valid for 60 days

### Auto-Refresh Tokens (Advanced)

For tokens that never expire, you need a backend server to refresh them automatically. This is beyond the scope of this guide but recommended for production.

**Services that handle this:**
- [Juicer.io](https://www.juicer.io/) - Paid service
- [SnapWidget](https://snapwidget.com/) - Free/paid options
- [Curator.io](https://curator.io/) - Paid service

---

## 🎨 Customization Options

### Display More/Fewer Posts

In `instagram-config.js`:
```javascript
limit: 6,  // Change to 6 or 9 for more posts
```

### Adjust Cache Duration

```javascript
cacheTime: 1800000,  // 30 minutes (shorter = more frequent updates)
cacheTime: 7200000,  // 2 hours (longer = fewer API calls)
```

### Change Grid Layout

In `styles.css`, find `#instagram-feed-container`:
```css
#instagram-feed-container {
    grid-template-columns: repeat(3, 1fr);  /* Change 3 to 2, 4, etc. */
    gap: var(--spacing-md);
}
```

---

## 🔧 Troubleshooting

### "Unable to load Instagram feed"

**Possible causes:**

1. **Invalid Access Token**
   - Regenerate token in Facebook Developers
   - Make sure you copied the entire token
   - Check if token has expired (60 days)

2. **CORS Error**
   - Open site through a local server (not file://)
   - Use VS Code Live Server or Python's http.server

3. **No Posts Found**
   - Make sure your Instagram account has public posts
   - Business/Creator account required for API

### Images Not Displaying

1. **Check console for errors** (F12)
2. **Verify image paths** in `instagram-config.js`
3. **Check file names match exactly** (case-sensitive)
4. **Ensure images exist** in the images/ folder

### API Rate Limiting

Instagram allows:
- 200 requests per hour per user
- 4800 requests per day per user

**Solution:** Increase `cacheTime` to reduce API calls

### "Access Token has expired"

1. Generate a new token in Facebook Developers
2. Update `instagram-config.js` with new token
3. Clear browser cache (Ctrl+Shift+Del)
4. Refresh page

### Clear Cached Data

Run in browser console:
```javascript
clearInstagramCache()
```

Or manually:
1. Open DevTools (F12)
2. Go to Application tab
3. Expand Local Storage
4. Delete `instagram_feed_cache` key

---

## 🔒 Security Best Practices

### For Manual Mode

✅ Safe to deploy as-is
- No API keys exposed
- Static images only

### For API Mode

⚠️ **IMPORTANT:** Access tokens should be kept secure!

#### For Small Sites (Low Traffic)

The current implementation is acceptable if:
- Site has limited traffic
- You rotate tokens regularly
- Account has minimal permissions

#### For Production Sites (Recommended)

1. **Use Environment Variables:**
   ```javascript
   // Don't commit real tokens to GitHub
   accessToken: process.env.INSTAGRAM_TOKEN
   ```

2. **Backend Proxy (Best Practice):**
   - Create a backend endpoint (Node.js, PHP, etc.)
   - Backend fetches from Instagram API
   - Frontend calls your backend (not Instagram directly)
   - Token stays hidden on server

3. **Use Third-Party Services:**
   - Juicer.io, SnapWidget, or Curator.io
   - Handle security and refreshing for you
   - Simple embed code

#### Never Do This:

❌ Commit real access tokens to public repositories
❌ Share tokens in public forums
❌ Use tokens with unnecessary permissions
❌ Forget to rotate expired tokens

---

## 📊 Comparison: Manual vs API Mode

| Feature | Manual Mode | API Mode |
|---------|-------------|----------|
| **Setup Time** | 5 minutes | 30-60 minutes |
| **Technical Skill** | Beginner | Intermediate |
| **Updates** | Manual | Automatic |
| **Cost** | Free | Free |
| **Maintenance** | Replace images manually | Refresh token every 60 days |
| **Control** | Full control over what shows | Shows latest posts |
| **API Limits** | None | 200/hour |
| **Best For** | Small sites, full control | Dynamic content, frequent updates |

---

## 🎯 Recommended Approach

### Start with Manual Mode
1. Use manual mode initially (quickest setup)
2. Launch your site with 3 carefully selected images
3. Get comfortable with the website

### Upgrade to API Mode Later
1. Once established, consider API mode
2. Follow the API setup guide above
3. Enjoy automatic updates!

### Or Use a Third-Party Service
1. Embed an Instagram widget from SnapWidget
2. Paste their embed code in place of the integration
3. Let them handle everything

---

## 📝 Manual Mode: Step-by-Step Example

Let's say you want to add these 3 images:
- Ice cream cone photo
- Milkshake photo
- Italian ice photo

### 1. Take/Download Images

Take photos with your phone and transfer to computer.

### 2. Optimize Images

Use a tool like [TinyPNG](https://tinypng.com/) to compress:
- Original: 2MB → Optimized: 200KB

### 3. Rename Files

```
my_photo1.jpg → instagram-post-1.jpg
my_photo2.jpg → instagram-post-2.jpg
my_photo3.jpg → instagram-post-3.jpg
```

### 4. Move to Images Folder

```
C:\Users\yourname\dolce-website\images\
```

### 5. Update Config

```javascript
manualImages: [
    {
        url: 'images/instagram-post-1.jpg',
        caption: 'Our signature strawberry swirl cone 🍓',
        permalink: 'https://instagram.com/dolcesandyhook'
    },
    {
        url: 'images/instagram-post-2.jpg',
        caption: 'Thick and creamy chocolate milkshake 🍫',
        permalink: 'https://instagram.com/dolcesandyhook'
    },
    {
        url: 'images/instagram-post-3.jpg',
        caption: 'Refreshing lemon Italian ice 🍋',
        permalink: 'https://instagram.com/dolcesandyhook'
    }
]
```

### 6. Test

Open `index.html` → Scroll to Instagram section → See your images!

---

## 🚀 Alternative: Third-Party Embed Services

### Option 1: SnapWidget (Easiest)

1. Go to [SnapWidget.com](https://snapwidget.com/)
2. Choose "Instagram Grid" layout
3. Enter your Instagram username
4. Copy the embed code
5. Replace the Instagram section in `index.html` with their code

**Pros:** No API setup, automatic updates
**Cons:** Branding on free tier, external dependency

### Option 2: Juicer.io

1. Sign up at [Juicer.io](https://www.juicer.io/)
2. Connect your Instagram account
3. Get embed code
4. Add to your HTML

**Pros:** Professional, multiple sources
**Cons:** Paid service ($19/month)

### Option 3: Curator.io

Similar to Juicer, with more features.

---

## 🆘 Need Help?

### Check These First:

1. **Browser Console (F12)** - Look for error messages
2. **Network Tab** - Check if API calls are failing
3. **This Guide** - Re-read relevant sections

### Common Solutions:

- **Nothing shows:** Check JavaScript console for errors
- **Old images cached:** Clear browser cache (Ctrl+Shift+R)
- **API errors:** Regenerate access token
- **Rate limited:** Increase cacheTime value

### Debug Commands:

Run in browser console:
```javascript
// Check config
console.log(INSTAGRAM_CONFIG)

// Refresh feed
refreshInstagramFeed()

// Clear cache
clearInstagramCache()

// Check if feed is initialized
console.log(window.instagramFeed)
```

---

## 📚 Additional Resources

### Official Documentation:
- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Getting Started Guide](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)

### Tools:
- [Image Optimizer - TinyPNG](https://tinypng.com/)
- [Image Resizer - Bulk Resize Photos](https://bulkresizephotos.com/)
- [Token Testing - Instagram Graph API Explorer](https://developers.facebook.com/tools/explorer/)

### Recommended Reading:
- Understanding API Rate Limits
- Long-lived vs Short-lived Tokens
- CORS and Same-Origin Policy

---

## ✅ Final Checklist

Before going live, verify:

- [ ] Instagram feed displays correctly
- [ ] All images load properly
- [ ] Links point to correct Instagram profile
- [ ] Username is correct (@dolcesandyhook → @your_username)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (F12)
- [ ] Images are optimized (< 500KB each)
- [ ] Captions are accurate and engaging
- [ ] Instagram overlay hover effect works
- [ ] "Follow Us" button links to correct profile

---

## 🎉 You're All Set!

Your Instagram feed is now integrated with your website. Whether you chose manual or API mode, your site now showcases your delicious ice cream creations!

**Remember:**
- Manual Mode: Update images when you want
- API Mode: Check token expiration every 60 days
- Consider third-party services for zero maintenance

---

**Questions?** Check the troubleshooting section above or review the code comments in `instagram-feed.js` and `instagram-config.js`.

**Happy Coding! 🍦✨**
