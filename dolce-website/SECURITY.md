# 🔒 Security Guide - Dolce Website

**Last Updated:** March 2026
**Security Level:** Static Site - Low to Medium Risk
**Purpose:** Defensive security measures for protecting your business website

---

## 📋 Table of Contents

1. [Security Overview](#security-overview)
2. [Threat Assessment](#threat-assessment)
3. [Security Measures Implemented](#security-measures-implemented)
4. [Deployment Security](#deployment-security)
5. [Instagram API Security](#instagram-api-security)
6. [Best Practices Checklist](#best-practices-checklist)
7. [Incident Response](#incident-response)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## 🛡️ Security Overview

### What This Site Is
This is a **static website** (HTML/CSS/JavaScript only) with:
- No backend server code
- No database
- No user authentication
- No form processing (currently)
- No payment handling

### Security Posture
✅ **Low Attack Surface:** Static sites are inherently more secure
✅ **No Server Vulnerabilities:** No PHP, Python, or Node.js to exploit
✅ **Read-Only:** Visitors can't modify server data

⚠️ **Areas of Concern:**
- Instagram API token exposure (if using API mode)
- Third-party CDN dependencies (Google Fonts)
- Hosting platform security
- Cross-Site Scripting (XSS) if adding user-generated content later

---

## 🎯 Threat Assessment

### High Priority Threats
1. **API Token Theft** 🔴
   - **Risk:** Instagram access token exposed in client-side code
   - **Impact:** Unauthorized access to your Instagram data
   - **Mitigation:** Use manual mode instead of API mode

2. **CDN Compromise** 🟡
   - **Risk:** Google Fonts or other CDN resources could be compromised
   - **Impact:** Malicious code injection
   - **Mitigation:** Subresource Integrity (SRI) implemented

3. **Clickjacking** 🟡
   - **Risk:** Your site embedded in malicious iframe
   - **Impact:** Trick users into clicking hidden elements
   - **Mitigation:** X-Frame-Options header configured

### Medium Priority Threats
4. **Cross-Site Scripting (XSS)** 🟡
   - **Risk:** Malicious scripts injected into your pages
   - **Impact:** Steal visitor data, redirect users
   - **Mitigation:** Content Security Policy (CSP) configured

5. **Hotlinking** 🟢
   - **Risk:** Other sites using your images (bandwidth theft)
   - **Impact:** Increased hosting costs
   - **Mitigation:** Optional .htaccess rules available

### Low Priority Threats
6. **MITM Attacks** 🟢
   - **Risk:** Man-in-the-middle attacks over HTTP
   - **Impact:** Data interception
   - **Mitigation:** HTTPS enforced on all modern hosting platforms

---

## 🔐 Security Measures Implemented

### 1. Content Security Policy (CSP)
**What it does:** Prevents unauthorized scripts from running

**Configuration:**
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https: blob:;
frame-ancestors 'none';
```

**Files:** `_headers`, `vercel.json`, `.htaccess`

**Why 'unsafe-inline'?**
- Required for inline styles and scripts
- Static site with no user input = low XSS risk
- Alternative: Move all inline scripts to external files (recommended for high security)

---

### 2. HTTP Security Headers

| Header | Purpose | Protection |
|--------|---------|------------|
| `X-Frame-Options: DENY` | Prevent clickjacking | High |
| `X-Content-Type-Options: nosniff` | Prevent MIME sniffing | Medium |
| `X-XSS-Protection: 1; mode=block` | Enable browser XSS filter | Medium |
| `Referrer-Policy: strict-origin-when-cross-origin` | Control referrer data | Low |
| `Permissions-Policy` | Disable unused browser features | Low |
| `Strict-Transport-Security` | Force HTTPS | High |

**Implementation:** Configured in hosting platform files

---

### 3. Subresource Integrity (SRI)

**What it does:** Ensures CDN resources haven't been tampered with

**Implementation:**
```html
<link href="https://fonts.googleapis.com/..."
      crossorigin="anonymous">
```

**Note:** Google Fonts doesn't support full SRI hashes (content changes frequently)
**Mitigation:** Using `crossorigin="anonymous"` for better CORS security

---

### 4. Access Control

**File Protection:**
- `.gitignore` prevents sensitive files from version control
- `.htaccess` blocks access to `.env`, `.bak`, `.git` files
- Directory browsing disabled

**What's Protected:**
- `instagram-config.js` (if contains API token)
- `.env` files (if you add them)
- Backup files (`.bak`, `.backup`)
- Git repository data

---

### 5. HTTPS Enforcement

**Status:** Depends on hosting platform

**GitHub Pages:** Automatic HTTPS
**Netlify/Vercel:** Automatic HTTPS + free SSL
**Shared Hosting:** Must enable in `.htaccess` after SSL certificate installed

**How to Enable (Shared Hosting):**
Uncomment these lines in `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🚀 Deployment Security

### Platform-Specific Configurations

#### **Netlify** (Recommended)
1. Upload `_headers` file to root directory
2. Security headers apply automatically
3. HTTPS enabled by default
4. DDoS protection included

**File:** `_headers`
**Test:** https://securityheaders.com

---

#### **Vercel**
1. Upload `vercel.json` to root directory
2. Security headers configured in JSON
3. Automatic HTTPS and CDN
4. Edge network protection

**File:** `vercel.json`
**Test:** Open Network tab in DevTools, check response headers

---

#### **Shared Hosting (Bluehost, SiteGround, etc.)**
1. Upload `.htaccess` to `public_html` directory
2. Enable SSL certificate in cPanel
3. Uncomment HTTPS redirect in `.htaccess`
4. Test all pages after upload

**File:** `.htaccess`
**Important:** Some directives may not work on all hosts

---

#### **GitHub Pages**
1. Go to repository Settings → Pages
2. Check "Enforce HTTPS"
3. Security headers: Limited (no custom headers support)
4. Consider using Cloudflare Pages instead for better security

**Limitation:** Cannot add custom security headers directly

---

### Pre-Deployment Checklist

Before going live:

- [ ] HTTPS enabled and tested
- [ ] Security headers configured for your platform
- [ ] All placeholder content replaced
- [ ] Instagram API token removed or secured
- [ ] `.gitignore` file in place
- [ ] Test site in private/incognito mode
- [ ] Check browser console for mixed content warnings
- [ ] Verify external links use HTTPS
- [ ] Test on multiple devices and browsers

---

## 🔑 Instagram API Security

### The Problem
Your Instagram access token is currently **visible in client-side code**. Anyone can:
1. View page source
2. Find your token in `instagram-config.js`
3. Use it to access your Instagram data

### ⚠️ CRITICAL: Current Risk Level

**If using API mode:** 🔴 HIGH RISK
**If using manual mode:** 🟢 LOW RISK

---

### Solution 1: Use Manual Mode (RECOMMENDED)

**Security Level:** ✅ Most Secure

**How it works:**
1. Take photos of your products
2. Save to `images/` folder
3. Update `instagram-config.js`:

```javascript
window.INSTAGRAM_CONFIG = {
    manualMode: true,  // KEEP THIS TRUE
    manualImages: [
        {
            url: 'images/your-photo-1.jpg',
            caption: 'Your caption',
            permalink: 'https://instagram.com/p/POST_ID'
        }
        // Add more...
    ]
};
```

**Advantages:**
- ✅ No API token needed
- ✅ No token expiration
- ✅ No risk of token theft
- ✅ Full control over displayed content
- ✅ Works offline during development

---

### Solution 2: Backend Proxy (Advanced)

**Security Level:** ✅ Secure (requires backend)

**How it works:**
1. Create a simple backend server (Node.js, Python, PHP)
2. Store token as environment variable on server
3. Frontend calls YOUR server (not Instagram directly)
4. Your server forwards request to Instagram

**Example Architecture:**
```
Browser → Your Server (token hidden) → Instagram API
         (yoursite.com/api/instagram)
```

**Platforms that support this:**
- Netlify Functions (serverless)
- Vercel Functions (serverless)
- AWS Lambda
- Your own VPS/server

---

### Solution 3: Environment Variables + Build Process

**Security Level:** ⚠️ Better but not perfect

**How it works:**
1. Add token to hosting platform's environment variables
2. Use build process to inject token at build time
3. Token still visible in browser, but not in Git

**Platforms:**
- Netlify: Settings → Build & Deploy → Environment
- Vercel: Settings → Environment Variables

**Important:** This still exposes token in browser! Use manual mode instead.

---

### Token Security Best Practices

If you MUST use API mode:

1. **Rotate tokens regularly** (every 30 days)
2. **Monitor token usage** in Facebook Developer dashboard
3. **Revoke token immediately** if compromised
4. **Use short-lived tokens** (refresh every 60 days)
5. **Limit token permissions** (basic access only)
6. **Never commit tokens to Git** (use .gitignore)

**How to revoke a token:**
1. Go to developers.facebook.com
2. My Apps → Instagram Basic Display
3. User Token Generator → Revoke

---

## ✅ Best Practices Checklist

### Daily Operations
- [ ] Keep Instagram manual mode enabled (recommended)
- [ ] Monitor website for unexpected changes
- [ ] Check hosting platform security notifications

### Weekly Tasks
- [ ] Review analytics for suspicious traffic patterns
- [ ] Check website loads correctly (no errors)
- [ ] Verify HTTPS certificate is valid

### Monthly Tasks
- [ ] Update any dependencies (if you add them)
- [ ] Review access logs for unusual activity
- [ ] Test security headers: https://securityheaders.com
- [ ] Rotate Instagram API token (if using API mode)

### Quarterly Tasks
- [ ] Audit file permissions on server
- [ ] Review and update contact information
- [ ] Test disaster recovery (backup restoration)
- [ ] Update this security documentation

---

## 🚨 Incident Response

### If Your Instagram Token is Compromised

**Signs of compromise:**
- Unauthorized posts on your Instagram
- Unexpected API usage
- Account access notifications

**Immediate Actions:**
1. Go to developers.facebook.com
2. Revoke the compromised token
3. Generate new token
4. Switch to manual mode immediately
5. Update `instagram-config.js` with manual mode
6. Change Instagram password
7. Enable two-factor authentication

---

### If Your Website is Defaced

**Immediate Actions:**
1. Take screenshots for documentation
2. Restore from backup (hosting provider backups)
3. Change all passwords:
   - Hosting account
   - FTP/SFTP
   - cPanel/admin panel
4. Review access logs to identify intrusion method
5. Update all security configurations
6. Contact hosting provider support

---

### If You Receive Security Warnings

**Browser Security Warnings:**
1. Check SSL certificate expiration
2. Verify HTTPS is enabled
3. Check for mixed content (HTTP resources on HTTPS page)
4. Contact hosting provider if certificate issues persist

**Google Safe Browsing Alert:**
1. Visit https://safebrowsing.google.com/safebrowsing/report_error/
2. Request review
3. Scan all files for malware
4. Restore from clean backup if infected

---

## 📊 Monitoring & Maintenance

### Security Monitoring Tools

**Free Tools:**
1. **Security Headers Check**
   https://securityheaders.com
   Check: Your security header configuration

2. **SSL Server Test**
   https://www.ssllabs.com/ssltest/
   Check: SSL/TLS configuration

3. **Mozilla Observatory**
   https://observatory.mozilla.org
   Check: Overall security score

4. **Google Search Console**
   https://search.google.com/search-console
   Monitor: Security issues and warnings

---

### Backup Strategy

**What to backup:**
- All HTML files
- All CSS files
- All JavaScript files
- All images in `images/` and `js/` folders
- Configuration files

**Backup Frequency:**
- Before any major changes
- Weekly automated backups (hosting provider)
- After adding new content

**Backup Storage:**
- Local computer (external hard drive)
- Cloud storage (Google Drive, Dropbox)
- Version control (GitHub private repository)

**Note:** Most hosting providers offer automatic backups

---

### Version Control Security

**If using Git/GitHub:**

1. **Never commit sensitive data:**
   - Instagram API tokens
   - API keys
   - Passwords
   - Email addresses (if private)

2. **Use .gitignore:**
   ```
   instagram-config.js
   .env
   *.backup
   ```

3. **If you accidentally commit a token:**
   ```bash
   # Revoke the token IMMEDIATELY
   # Then remove from Git history
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch instagram-config.js" \
   --prune-empty --tag-name-filter cat -- --all

   git push --force
   ```

4. **Use private repositories** for business sites

---

## 🎓 Security Education

### Common Vulnerabilities (OWASP Top 10)

**Not applicable to this static site:**
- ❌ SQL Injection (no database)
- ❌ Broken Authentication (no auth system)
- ❌ Sensitive Data Exposure (no user data)
- ❌ XXE (no XML processing)
- ❌ Broken Access Control (no access control)

**Potentially applicable:**
- ⚠️ Cross-Site Scripting (if adding user content)
- ⚠️ Insecure Deserialization (if adding JavaScript processing)
- ⚠️ Using Components with Known Vulnerabilities (Google Fonts)

---

### Safe Coding Practices

**When adding features:**

1. **Never trust user input** (if adding forms)
   ```javascript
   // BAD
   element.innerHTML = userInput;

   // GOOD
   element.textContent = userInput;
   ```

2. **Validate everything**
   ```javascript
   // Email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
       // Reject invalid input
   }
   ```

3. **Sanitize data before display**
   ```javascript
   function sanitize(str) {
       const div = document.createElement('div');
       div.textContent = str;
       return div.innerHTML;
   }
   ```

4. **Use HTTPS for all external resources**
   ```html
   <!-- BAD -->
   <script src="http://example.com/script.js"></script>

   <!-- GOOD -->
   <script src="https://example.com/script.js"></script>
   ```

---

## 📞 Security Support

### Resources

**For this website:**
- Documentation: See `README.md`, `DEPLOYMENT.md`
- Hosting support: Contact your hosting provider
- Emergency: Restore from backup, then investigate

**General Security:**
- OWASP: https://owasp.org
- Mozilla Web Security: https://infosec.mozilla.org/guidelines/web_security
- Security Headers: https://securityheaders.com
- CSP Evaluator: https://csp-evaluator.withgoogle.com

---

## 🔄 Changelog

**v1.0 - March 2026**
- Initial security implementation
- Added CSP, security headers
- Configured platform-specific security files
- Created Instagram token security guidelines
- Implemented SRI for external resources

---

## ⚖️ Disclaimer

This security guide provides defensive measures to protect your website from common threats. No security system is 100% foolproof. Regular monitoring, updates, and following best practices are essential for maintaining security.

**This guide covers defensive security only.**
Do not use this information for:
- Unauthorized access to systems
- Credential harvesting
- Malicious activities

---

**Questions or concerns?** Review this guide regularly and stay informed about web security best practices.

**Last Security Audit:** March 2026
**Next Recommended Audit:** June 2026
