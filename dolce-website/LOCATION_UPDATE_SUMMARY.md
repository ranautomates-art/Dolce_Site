# 📍 Dolce Location Information - Updated

## Current Location Details

### **Address:**
```
117 Church Hill Rd
Sandy Hook, CT 06482
```

### **Phone:**
```
(203) 304-9198
```

### **Hours of Operation:**

| Day | Hours |
|-----|-------|
| **Monday** | Closed |
| **Tuesday** | 2:00 PM - 9:00 PM |
| **Wednesday** | 2:00 PM - 9:00 PM |
| **Thursday** | 2:00 PM - 9:00 PM |
| **Friday** | 12:00 PM - 9:00 PM |
| **Saturday** | 12:00 PM - 9:00 PM |
| **Sunday** | 1:00 PM - 8:00 PM |

---

## Files Updated

### ✅ 1. [index.html](index.html) - Main Homepage Footer
**Location:** Lines 387-403

**Updated:**
- Address: `117 Church Hill Rd, Sandy Hook, CT 06482`
- Phone: `(203) 304-9198`
- Hours: Tuesday-Thursday 2-9pm, Friday-Saturday 12-9pm, Sunday 1-8pm, Monday Closed
- Description: "Sandy Hook, CT" (line 383)

### ✅ 2. [sweets.html](sweets.html) - Sweets Page Footer
**Location:** Lines 586-602

**Updated:**
- Address: `117 Church Hill Rd, Sandy Hook, CT 06482`
- Phone: `(203) 304-9198`
- Hours: Tuesday-Thursday 2-9pm, Friday-Saturday 12-9pm, Sunday 1-8pm, Monday Closed
- Description: "Sandy Hook, CT" (line 582)

### ✅ 3. [hero-topo.html](hero-topo.html) - 3D Hero Page
**Location:** Line 32

**Updated:**
- Meta Info: "SANDY HOOK, CT"

---

## Previous vs Current

### Address
- ❌ **Old:** 123 Beach Street, Sandy Hook, NJ 07732
- ✅ **New:** 117 Church Hill Rd, Sandy Hook, CT 06482

### Phone
- ❌ **Old:** (732) 555-1234
- ✅ **New:** (203) 304-9198

### Hours
**Old:**
- Monday - Thursday: 12pm - 9pm
- Friday - Saturday: 11am - 10pm
- Sunday: 12pm - 9pm

**New:**
- **Monday: Closed** ⚠️
- Tuesday - Thursday: 2pm - 9pm
- Friday - Saturday: 12pm - 9pm
- Sunday: 1pm - 8pm

---

## Key Changes Summary

1. **State Change:** NJ → CT
2. **Address Change:** Complete address updated
3. **Phone Change:** New area code (203 instead of 732)
4. **Monday:** Now CLOSED (was open 12pm-9pm)
5. **Tuesday-Thursday:** Now open 2pm (was 12pm)
6. **Friday:** Now open 12pm (was 11am)
7. **Friday Closing:** Now closes 9pm (was 10pm)
8. **Saturday:** Now open 12pm (was 11am)
9. **Saturday Closing:** Now closes 9pm (was 10pm)
10. **Sunday:** Now open 1pm (was 12pm)
11. **Sunday Closing:** Now closes 8pm (was 9pm)

---

## Phone Link Format

The phone number is properly formatted for click-to-call functionality:

```html
<a href="tel:+12033049198">(203) 304-9198</a>
```

This allows:
- Mobile users to tap and call directly
- Proper formatting for accessibility
- International dialing support

---

## Google Maps Integration (Optional)

If you want to add a "Get Directions" link, use this format:

```html
<a href="https://www.google.com/maps/search/?api=1&query=117+Church+Hill+Rd+Sandy+Hook+CT+06482"
   target="_blank"
   rel="noopener noreferrer">
    Get Directions
</a>
```

Or for Google Maps embed:
```html
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d-73.0!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzM2LjAiTiA3M8KwMDEnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
</iframe>
```

---

## SEO Considerations

### Schema.org LocalBusiness Markup (Recommended)

Add this to your `<head>` section for better search engine visibility:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  "name": "Dolce Ice Cream",
  "image": "https://yourdomain.com/images/dolce-logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "117 Church Hill Rd",
    "addressLocality": "Sandy Hook",
    "addressRegion": "CT",
    "postalCode": "06482",
    "addressCountry": "US"
  },
  "telephone": "+1-203-304-9198",
  "url": "https://yourdomain.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
      "opens": "14:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "12:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "13:00",
      "closes": "20:00"
    }
  ],
  "servesCuisine": "Ice Cream, Gelato, Italian Ice",
  "priceRange": "$$"
}
</script>
```

---

## Social Media Updates Needed

Don't forget to update your location on:

- ✅ **Website:** Complete (index.html, sweets.html, hero-topo.html)
- ⚠️ **Google My Business:** Update address, phone, hours
- ⚠️ **Facebook:** Update business info
- ⚠️ **Instagram:** Update bio location
- ⚠️ **Yelp:** Update business listing
- ⚠️ **Apple Maps:** Update business info
- ⚠️ **TripAdvisor:** Update restaurant info

---

## Customer Communication

### Sample Announcement Post:

> 📍 **We've Moved!**
>
> Find us at our new location:
> 117 Church Hill Rd, Sandy Hook, CT 06482
>
> 📞 New Phone: (203) 304-9198
>
> ⏰ **Updated Hours:**
> Tuesday-Thursday: 2pm-9pm
> Friday-Saturday: 12pm-9pm
> Sunday: 1pm-8pm
> Monday: Closed
>
> Same great gelato, new location! 🍦✨

---

## Verification Checklist

- ✅ Address updated in all footer sections
- ✅ Phone number updated with correct area code
- ✅ Phone link uses proper `tel:` format
- ✅ Hours correctly reflect new schedule
- ✅ Monday listed as "Closed"
- ✅ State changed from NJ to CT
- ✅ All HTML files updated consistently
- ✅ Meta information updated (hero-topo.html)

---

## Quick Reference Card

**Print this for your team:**

```
╔═══════════════════════════════════════╗
║          DOLCE ICE CREAM              ║
╠═══════════════════════════════════════╣
║ 117 Church Hill Rd                    ║
║ Sandy Hook, CT 06482                  ║
║                                       ║
║ Phone: (203) 304-9198                 ║
║                                       ║
║ HOURS:                                ║
║ Mon:       CLOSED                     ║
║ Tue-Thu:   2:00 PM - 9:00 PM         ║
║ Fri-Sat:   12:00 PM - 9:00 PM        ║
║ Sun:       1:00 PM - 8:00 PM         ║
╚═══════════════════════════════════════╝
```

---

All location information has been successfully updated across the entire Dolce website! 🎉
