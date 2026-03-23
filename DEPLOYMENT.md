# 🌐 Deployment Guide - Dolce Ice Cream Website

This guide shows you how to publish your website online for free or with paid hosting options.

---

## 🆓 Free Hosting Options

### 1. GitHub Pages (Recommended - 100% Free)

**Pros:** Free, easy, supports custom domains, fast CDN
**Best for:** Small businesses, static sites

**Steps:**

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create a New Repository**
   - Click "New Repository"
   - Name it: `dolce-website` or `your-shop-name`
   - Choose "Public"
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all files from `dolce-website` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click "Save"

5. **Access Your Site**
   - Your site will be live at:
     `https://YOUR_USERNAME.github.io/dolce-website/`
   - Wait 2-3 minutes for first deployment

**Custom Domain (Optional):**
- Buy a domain (namecheap.com, godaddy.com)
- In GitHub Pages settings, add your custom domain
- Update DNS settings at your domain registrar

---

### 2. Netlify (Easy Drag & Drop)

**Pros:** Free tier, automatic SSL, easy updates
**Best for:** Quick deployment, beginners

**Steps:**

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for free
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `dolce-website` folder
5. Your site is live in seconds!

**Your URL:** `https://random-name-12345.netlify.app`

**Custom Domain:**
- Netlify provides free custom domain setup
- Or use your own domain (requires DNS configuration)

---

### 3. Vercel (Developer-Friendly)

**Pros:** Fast deployment, automatic previews, free SSL
**Best for:** Modern deployment workflow

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Vercel automatically detects and deploys
5. Live in under 1 minute!

---

### 4. Cloudflare Pages

**Pros:** Fast global CDN, unlimited bandwidth
**Best for:** Performance-focused sites

**Steps:**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up for free
3. Connect your GitHub repository
4. Configure build settings (leave empty for static sites)
5. Deploy!

---

## 💰 Paid Hosting Options

### 1. Shared Hosting (Most Common)

**Providers:**
- **Bluehost** (~$3/month) - Beginner-friendly
- **SiteGround** (~$4/month) - Fast support
- **HostGator** (~$3/month) - Popular choice

**Setup:**
1. Purchase hosting plan
2. Access cPanel or File Manager
3. Upload files to `public_html` folder
4. Visit your domain

---

### 2. Cloud Hosting (Scalable)

**Providers:**
- **DigitalOcean** (~$5/month)
- **AWS S3** (Pay as you go)
- **Google Cloud Storage** (Pay as you go)

**Best for:** Growing businesses, custom configurations

---

## 🔧 Pre-Deployment Checklist

Before publishing, make sure to:

**Content:**
- [ ] Replace all placeholder text with your information
- [ ] Update business name throughout the site
- [ ] Add your real photos (or keep Unsplash placeholders)
- [ ] Update contact information in footer
- [ ] Change Instagram handle to yours
- [ ] Update hours of operation
- [ ] Add your physical address

**Security:**
- [ ] Configure security files for your hosting platform (`_headers`, `vercel.json`, or `.htaccess`)
- [ ] Review `.gitignore` - ensure it's protecting sensitive files
- [ ] Set Instagram to manual mode (recommended)
- [ ] Never commit real API tokens to version control
- [ ] Enable HTTPS on hosting platform
- [ ] Test security headers at https://securityheaders.com
- [ ] Verify SSL certificate is valid

**Testing:**
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify carousel images load
- [ ] Test in incognito/private mode
- [ ] Check browser console for errors
- [ ] Verify no mixed content warnings (HTTP resources on HTTPS site)
- [ ] Test form submissions (if you added any)

---

## 🎨 Customization Before Launch

### Essential Changes:

1. **Business Name** (Search & Replace "Dolce")
   - Navigation logo
   - Page title
   - Footer
   - Meta tags

2. **Contact Details**
   - Phone number: `(732) 555-1234`
   - Address: `123 Beach Street, Sandy Hook, NJ 07732`
   - Email (if you add one)

3. **Social Media**
   - Instagram: `@dolcesandyhook`
   - Facebook link (update in footer)

4. **Images**
   - Hero carousel (3 slides)
   - Products section image
   - About section owner photo
   - Instagram feed (3 posts)

5. **Content**
   - Review testimonials
   - About section story
   - Product descriptions

---

## 📊 SEO Optimization (Important!)

Update these in `index.html`:

```html
<!-- Title Tag -->
<title>YOUR SHOP NAME | Ice Cream in YOUR CITY</title>

<!-- Meta Description -->
<meta name="description" content="YOUR DESCRIPTION">

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="YOUR SHOP NAME">
<meta property="og:description" content="YOUR DESCRIPTION">
<meta property="og:image" content="YOUR_IMAGE_URL">
```

---

## 🔒 Security Best Practices

### ⚠️ IMPORTANT: Read SECURITY.md First!
**See [SECURITY.md](SECURITY.md) for comprehensive security documentation.**

### Quick Security Checklist:

✅ **Before Deployment:**
- [ ] Review and configure security files for your hosting platform
- [ ] Enable HTTPS on your hosting provider
- [ ] Use Instagram manual mode (avoid API token exposure)
- [ ] Never commit `instagram-config.js` with real API token
- [ ] Test security headers: https://securityheaders.com

✅ **Platform-Specific Security Setup:**

**Netlify:** Upload `_headers` file (included)
**Vercel:** Upload `vercel.json` file (included)
**Shared Hosting:** Upload `.htaccess` file (included)
**GitHub Pages:** Enable "Enforce HTTPS" in settings (limited header support)

### For Static Sites (HTML/CSS/JS):
- ✅ Use HTTPS (all hosting providers offer free SSL)
- ✅ Keep dependencies minimal (this site has none!)
- ✅ No server-side code = no server vulnerabilities
- ✅ Security headers configured (see platform files)
- ✅ Content Security Policy (CSP) enabled
- ✅ Protection against clickjacking, XSS, MIME sniffing

### Instagram API Security
**🔴 CRITICAL:** Never expose your Instagram access token!

**RECOMMENDED APPROACH:**
1. Keep `manualMode: true` in `instagram-config.js`
2. Use local images in `images/` folder
3. No API token needed = No security risk

**If you must use API mode:**
- Read [SECURITY.md](SECURITY.md) → Instagram API Security section
- Consider using a backend proxy server
- Rotate tokens every 30 days
- Monitor for suspicious usage

### If You Add Forms:
- Use a form service like:
  - **Formspree** (free tier available)
  - **Google Forms** embedded
  - **Netlify Forms** (if using Netlify)
- Never process sensitive data client-side
- Always use HTTPS for form submissions
- Implement CAPTCHA to prevent spam

---

## 📈 Analytics Setup (Track Visitors)

### Google Analytics (Free):

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create an account
3. Get your tracking ID
4. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🗺️ Add Google Maps

Replace the footer location section with:

```html
<div class="footer__section">
    <h4 class="footer__subtitle">Location</h4>
    <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        width="100%"
        height="200"
        style="border:0; border-radius: 8px;"
        allowfullscreen=""
        loading="lazy">
    </iframe>
</div>
```

**Get embed code:**
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Embed a map"
4. Copy the `src` URL

---

## 🚀 Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use [TinyPNG.com](https://tinypng.com) to compress
   - Recommended formats: WebP or JPG
   - Keep file sizes under 500KB each

2. **Enable Compression**
   - Most hosting providers do this automatically
   - Check with your host's documentation

3. **Add Caching**
   - GitHub Pages: Automatic
   - Netlify/Vercel: Automatic
   - Shared hosting: Add to `.htaccess` file

---

## 📱 PWA (Progressive Web App) - Optional

Make your site installable on phones!

Add to `index.html` in `<head>`:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#E84855">
```

Create `manifest.json`:

```json
{
  "name": "Dolce Ice Cream",
  "short_name": "Dolce",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF8F5",
  "theme_color": "#E84855",
  "icons": [
    {
      "src": "images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🧪 Testing Before Launch

### Cross-Browser Testing:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Device Testing:
- ✅ Desktop (1920px)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

### Online Testing Tools:
- **BrowserStack** - Test on real devices
- **Responsive Design Checker** - Quick responsive test
- **PageSpeed Insights** - Performance check

---

## 🎯 Post-Launch Checklist

After deployment:

- [ ] Test all links and navigation
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test carousel auto-rotation
- [ ] Verify contact information is correct
- [ ] Submit to Google Search Console
- [ ] Set up Google My Business listing
- [ ] Share on social media
- [ ] Monitor analytics

---

## 🔄 Updating Your Site

### GitHub Pages:
1. Edit files locally
2. Commit and push changes
3. GitHub automatically redeploys

### Netlify/Vercel:
1. Push to GitHub
2. Automatic deployment triggered
3. Live in seconds

### Shared Hosting:
1. Edit files via cPanel File Manager
2. Or upload via FTP
3. Changes are immediate

---

## 🆘 Troubleshooting Deployment

### Site not loading?
- Wait 5-10 minutes after first deployment
- Check DNS propagation (can take 24-48 hours for custom domains)
- Clear browser cache

### Images broken?
- Check file paths are relative (not absolute)
- Verify images uploaded correctly
- Check file name case sensitivity (matters on Linux servers)

### Styles not applying?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check `styles.css` path in `index.html`
- Verify CSS file uploaded

### JavaScript not working?
- Check browser console for errors (F12)
- Verify `script.js` is loading
- Check file path in `index.html`

---

## 💡 Recommended Setup

**For Most Users:**
```
1. GitHub Pages (hosting)
2. Namecheap (domain - ~$10/year)
3. Google Analytics (tracking)
4. Formspree (contact forms)
5. Cloudflare (optional CDN + security)
```

**Total Cost:** $10-15/year for domain only!

---

## 🎉 You're Live!

Congratulations on launching your ice cream website!

**Next Steps:**
1. Share your URL on social media
2. Add URL to business cards
3. Update Google My Business
4. Monitor visitor analytics
5. Gather customer feedback
6. Keep content updated

---

**Questions?** Check the main `README.md` or hosting provider documentation.

**Good luck with your online presence! 🍦🌐**
