/**
 * Instagram Feed Configuration
 * ================================================
 * Configure your Instagram feed settings here
 *
 * SETUP MODES:
 * 1. Manual Mode (Quick Setup - No API Required)
 *    - Set manualMode: true
 *    - Update manualImages array with your photos
 *
 * 2. API Mode (Dynamic Live Feed)
 *    - Set manualMode: false
 *    - Add your Instagram Access Token
 *    - See INSTAGRAM_SETUP.md for token instructions
 */

window.INSTAGRAM_CONFIG = {
    // ===========================
    // MODE SELECTION
    // ===========================

    /**
     * Manual Mode: Use static images (no API needed)
     * API Mode: Fetch live posts from Instagram
     *
     * Set to 'true' for manual mode
     * Set to 'false' for API mode
     */
    manualMode: true,

    // ===========================
    // API SETTINGS (for API mode)
    // ===========================

    /**
     * Instagram Access Token
     * Get yours at: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
     * See INSTAGRAM_SETUP.md for detailed instructions
     *
     * IMPORTANT: Keep this token secure!
     * - Never commit this file with a real token to public repositories
     * - Consider using environment variables for production
     * - Tokens expire every 60 days (can be refreshed)
     */
    accessToken: '',

    /**
     * Number of posts to display
     * Recommended: 3, 6, or 9 for best grid layout
     */
    limit: 3,

    /**
     * Cache duration in milliseconds
     * Default: 3600000 (1 hour)
     *
     * Longer cache = fewer API calls = better performance
     * Shorter cache = more frequent updates
     */
    cacheTime: 3600000,

    // ===========================
    // MANUAL MODE SETTINGS
    // ===========================

    /**
     * Manual Images Array
     * Use this when manualMode is true
     *
     * To use your own images:
     * 1. Add your photos to the 'images/' folder
     * 2. Update the 'url' below to reference them
     * 3. Example: url: 'images/instagram-post-1.jpg'
     *
     * Or use Instagram direct image URLs:
     * - Right-click image on Instagram web
     * - Select "Open image in new tab"
     * - Copy the URL
     */
    manualImages: [
        {
            url: '/images/1.jpg',
            caption: 'Delicious Dolce ice cream',
            permalink: 'https://www.instagram.com/dolcesandyhook/p/DJXXmxbPzjL/'
        },
        {
            url: '/images/2.jpg',
            caption: 'Sweet treats at Dolce',
            permalink: 'https://www.instagram.com/dolcesandyhook/reel/DDhwxDAxyia/'
        },
        {
            url: '/images/3.jpg',
            caption: 'Handcrafted ice cream perfection',
            permalink: 'https://www.instagram.com/dolcesandyhook/p/DBB-RF0vVsY/'
        }
    ],

    // ===========================
    // GENERAL SETTINGS
    // ===========================

    /**
     * Your Instagram username (with @)
     * Used in fallback links and CTAs
     */
    instagramUsername: '@dolcesandyhook',

    /**
     * Instagram profile URL
     * Used in "Follow Us" buttons
     */
    instagramUrl: 'https://instagram.com/dolcesandyhook'
};

// ===========================
// EXAMPLE CONFIGURATIONS
// ===========================

/**
 * EXAMPLE 1: Manual Mode with Local Images
 * ----------------------------------------
 * manualMode: true,
 * manualImages: [
 *     {
 *         url: 'images/post-1.jpg',
 *         caption: 'Our famous strawberry swirl',
 *         permalink: 'https://instagram.com/p/ABC123'
 *     },
 *     {
 *         url: 'images/post-2.jpg',
 *         caption: 'Chocolate lovers paradise',
 *         permalink: 'https://instagram.com/p/DEF456'
 *     },
 *     {
 *         url: 'images/post-3.jpg',
 *         caption: 'Vanilla bean perfection',
 *         permalink: 'https://instagram.com/p/GHI789'
 *     }
 * ]
 */

/**
 * EXAMPLE 2: API Mode with Live Feed
 * ----------------------------------------
 * manualMode: false,
 * accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_HERE',
 * limit: 6,
 * cacheTime: 1800000 // 30 minutes
 */

/**
 * EXAMPLE 3: Manual Mode with Direct Instagram URLs
 * ----------------------------------------
 * manualMode: true,
 * manualImages: [
 *     {
 *         url: 'https://scontent.cdninstagram.com/v/t51.2885-15/your-image-1.jpg',
 *         caption: 'Post caption here',
 *         permalink: 'https://instagram.com/p/YOUR_POST_ID'
 *     },
 *     // Add more...
 * ]
 */

// ===========================
// QUICK START GUIDE
// ===========================

/**
 * QUICK START: Manual Mode (Easiest)
 * -----------------------------------
 * 1. Keep manualMode: true (default)
 * 2. Take photos of your ice cream
 * 3. Save them in the images/ folder (e.g., images/post-1.jpg)
 * 4. Update manualImages array above with your image paths
 * 5. Update your Instagram username
 * 6. Refresh your website - done!
 *
 * ADVANCED: API Mode (Dynamic)
 * ----------------------------
 * 1. Follow INSTAGRAM_SETUP.md for detailed instructions
 * 2. Create Instagram App at developers.facebook.com
 * 3. Get your Access Token
 * 4. Set manualMode: false
 * 5. Paste your Access Token above
 * 6. Your feed will update automatically!
 *
 * SECURITY NOTE:
 * --------------
 * If using API mode and deploying publicly:
 * - Use environment variables for the access token
 * - Consider a backend proxy to hide your token
 * - Never commit real tokens to public repositories
 * - Rotate tokens regularly
 */

console.log('📸 Instagram config loaded:', {
    mode: window.INSTAGRAM_CONFIG.manualMode ? 'Manual' : 'API',
    posts: window.INSTAGRAM_CONFIG.limit,
    username: window.INSTAGRAM_CONFIG.instagramUsername
});
