# 🚀 Security Quick Start Guide

**⏱️ 5-Minute Security Setup for Your Website**

This guide helps you secure your website in just a few steps. For comprehensive details, see [SECURITY.md](SECURITY.md).

---

## ✅ Step 1: Choose Your Hosting Platform

Pick one and follow the corresponding steps below:

- **Netlify** → [Go to Netlify Setup](#netlify)
- **Vercel** → [Go to Vercel Setup](#vercel)
- **Shared Hosting** (Bluehost, SiteGround, etc.) → [Go to Shared Hosting Setup](#shared-hosting)
- **GitHub Pages** → [Go to GitHub Pages Setup](#github-pages)

---

## 🔒 Step 2: Instagram Security (CRITICAL)

### ⚠️ CHOOSE ONE OPTION:

### Option A: Manual Mode (RECOMMENDED - Most Secure)
✅ No API token needed
✅ No security risks
✅ 100% safe

**Setup:**
1. Open `instagram-config.js`
2. Ensure this line says: `manualMode: true`
3. Add your photos to the `images/` folder
4. Update the `manualImages` array with your image paths
5. Done! No API token needed.

```javascript
window.INSTAGRAM_CONFIG = {
    manualMode: true,  // ← KEEP THIS TRUE
    manualImages: [
        {
            url: 'images/your-photo.jpg',
            caption: 'Your caption',
            permalink: 'https://instagram.com/p/POST_ID'
        }
    ]
};
```

---

### Option B: API Mode (Advanced - Security Risk!)
🔴 Exposes your Instagram token
🔴 Requires token refresh every 60 days
🔴 Risk of token theft

**Only use if you absolutely need live Instagram feed!**

**Setup:**
1. Read [SECURITY.md](SECURITY.md) → Instagram API Security section
2. Consider using a backend proxy server (recommended)
3. Never commit your real token to version control
4. Rotate tokens monthly

---

## 📦 Step 3: Platform-Specific Security Setup

### Netlify

**What you need:** `_headers` file (already created)

**Steps:**
1. Upload all website files to Netlify
2. Make sure `_headers` file is in the root directory
3. Deploy your site
4. Security headers apply automatically!

**Test your security:**
Visit: https://securityheaders.com/?q=YOUR_SITE_URL

**Expected Grade:** A or A+

---

### Vercel

**What you need:** `vercel.json` file (already created)

**Steps:**
1. Upload all website files to Vercel
2. Make sure `vercel.json` file is in the root directory
3. Deploy your site
4. Security headers apply automatically!

**Test your security:**
1. Visit your live site
2. Open DevTools (F12)
3. Go to Network tab
4. Refresh page
5. Click on any HTML file
6. Check "Response Headers" - you should see security headers

---

### Shared Hosting

**What you need:** `.htaccess` file (already created)

**Steps:**
1. Log into your hosting cPanel
2. Upload all website files to `public_html` folder
3. Make sure `.htaccess` file is in `public_html` (root directory)
4. Install SSL certificate (usually free in cPanel)
5. Edit `.htaccess` file:
   - Find the "FORCE HTTPS" section (around line 30)
   - Uncomment the lines (remove the `#` symbols)
6. Test your site - should redirect to HTTPS

**Common issues:**
- If site breaks, some hosting providers don't support all .htaccess directives
- Comment out problematic sections
- Contact hosting support for help

**Test your security:**
Visit: https://securityheaders.com/?q=YOUR_SITE_URL

---

### GitHub Pages

**What you need:** Just enable HTTPS in settings

**Steps:**
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Check "Enforce HTTPS"
5. Done!

**Limitation:**
GitHub Pages doesn't support custom security headers. Consider using Netlify or Cloudflare Pages instead for better security.

**Test your security:**
Visit: https://securityheaders.com/?q=YOUR_SITE_URL
(Grade will be lower due to missing headers - this is a GitHub limitation)

---

## 🛡️ Step 4: Verify Security

### Test Checklist:

**1. HTTPS Test**
- [ ] Visit your site with `https://` (should work)
- [ ] Visit your site with `http://` (should redirect to HTTPS)
- [ ] No browser security warnings

**2. Security Headers Test**
- [ ] Go to https://securityheaders.com
- [ ] Enter your website URL
- [ ] Grade should be A or B (depending on platform)

**3. SSL Certificate Test**
- [ ] Go to https://www.ssllabs.com/ssltest/
- [ ] Enter your website URL
- [ ] Grade should be A or higher

**4. Browser Console Test**
- [ ] Open your site
- [ ] Press F12 to open DevTools
- [ ] Go to Console tab
- [ ] Should see no red errors
- [ ] No mixed content warnings

**5. Mobile Test**
- [ ] Open site on mobile phone
- [ ] Check for HTTPS padlock icon
- [ ] Verify everything loads correctly

---

## 🔐 Step 5: Protect Your Credentials

### Git/GitHub Users:

**IMPORTANT:** Never commit sensitive data!

The `.gitignore` file (already created) protects:
- `instagram-config.js` (if it contains API token)
- `.env` files
- Backup files

**Before committing to Git:**
1. Check `.gitignore` is in your repository
2. If you're using Instagram API mode:
   - Copy `instagram-config.example.js` to `instagram-config.js`
   - Add your token to `instagram-config.js`
   - The real config will NOT be committed (protected by `.gitignore`)
   - Only the example template will be committed

**If you accidentally committed a token:**
1. Revoke the token IMMEDIATELY in Instagram Developer console
2. Generate a new token
3. Read [SECURITY.md](SECURITY.md) → Incident Response section

---

## 📋 Daily Security Checklist

**Once your site is live:**

✅ **Daily:**
- Monitor website for unexpected changes

✅ **Weekly:**
- Check analytics for suspicious traffic
- Verify site loads correctly

✅ **Monthly:**
- Test security headers (securityheaders.com)
- Rotate Instagram API token (if using API mode)
- Review access logs

✅ **Quarterly:**
- Update security configurations if needed
- Review and update SECURITY.md

---

## 🚨 Emergency Contacts

**If something goes wrong:**

1. **Website down or defaced:**
   - Restore from backup
   - Contact hosting provider support
   - See [SECURITY.md](SECURITY.md) → Incident Response

2. **Instagram token compromised:**
   - Revoke token immediately at developers.facebook.com
   - Switch to manual mode
   - See [SECURITY.md](SECURITY.md) → Instagram Token Compromised

3. **Security warning from Google:**
   - Request review at Google Safe Browsing
   - Scan files for malware
   - Restore from clean backup

---

## 📚 Additional Resources

**Learn More:**
- [SECURITY.md](SECURITY.md) - Comprehensive security guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment with security checklist
- [README.md](README.md) - General documentation

**External Tools:**
- https://securityheaders.com - Test security headers
- https://www.ssllabs.com/ssltest/ - Test SSL certificate
- https://observatory.mozilla.org - Overall security audit

---

## ✅ You're All Set!

**Congratulations! Your website is now secured with:**

✅ HTTPS encryption
✅ Security headers (CSP, X-Frame-Options, etc.)
✅ Protection against common attacks
✅ Secure Instagram integration (if using manual mode)
✅ File access protection
✅ Best practices configuration

**Remember:**
- Use Instagram manual mode for best security
- Never commit API tokens to version control
- Test your site regularly with security tools
- Keep backups of your files

**Questions?** See [SECURITY.md](SECURITY.md) for detailed documentation.

---

**Next Steps:** Deploy your site and test with the verification checklist above!
