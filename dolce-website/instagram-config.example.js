/**
 * Instagram Feed Configuration - EXAMPLE TEMPLATE
 * ================================================
 * This is a SAFE template file to share publicly
 *
 * SETUP INSTRUCTIONS:
 * 1. Copy this file and rename it to: instagram-config.js
 * 2. Edit instagram-config.js with your real settings
 * 3. NEVER commit instagram-config.js with a real API token!
 *
 * The .gitignore file will prevent your real config from being committed
 */

window.INSTAGRAM_CONFIG = {
    // ===========================
    // MODE SELECTION
    // ===========================

    /**
     * Manual Mode: Use static images (no API needed) - RECOMMENDED for security
     * API Mode: Fetch live posts from Instagram
     *
     * Set to 'true' for manual mode (most secure)
     * Set to 'false' for API mode
     */
    manualMode: true,

    // ===========================
    // API SETTINGS (for API mode)
    // ===========================

    /**
     * Instagram Access Token
     *
     * ⚠️ SECURITY WARNING:
     * - NEVER commit your real token to version control
     * - Client-side API tokens can be stolen by anyone viewing your site
     * - Consider using a backend proxy server instead
     * - Tokens expire every 60 days and need manual refresh
     *
     * For API mode setup, see INSTAGRAM_SETUP.md
     *
     * BETTER APPROACH: Keep manualMode: true and use local images
     */
    accessToken: 'PASTE_YOUR_INSTAGRAM_ACCESS_TOKEN_HERE',

    /**
     * Number of posts to display
     * Recommended: 3, 6, or 9 for best grid layout
     */
    limit: 3,

    /**
     * Cache duration in milliseconds
     * Default: 3600000 (1 hour)
     */
    cacheTime: 3600000,

    // ===========================
    // MANUAL MODE SETTINGS (RECOMMENDED)
    // ===========================

    /**
     * Manual Images Array
     * Use this when manualMode is true (recommended for security)
     *
     * Add your photos to the 'images/' folder and reference them here
     */
    manualImages: [
        {
            url: 'images/1.jpg',
            caption: 'Delicious ice cream at our shop',
            permalink: 'https://www.instagram.com/YOUR_USERNAME/p/POST_ID/'
        },
        {
            url: 'images/2.jpg',
            caption: 'Sweet treats for everyone',
            permalink: 'https://www.instagram.com/YOUR_USERNAME/p/POST_ID/'
        },
        {
            url: 'images/3.jpg',
            caption: 'Handcrafted perfection',
            permalink: 'https://www.instagram.com/YOUR_USERNAME/p/POST_ID/'
        }
    ],

    // ===========================
    // GENERAL SETTINGS
    // ===========================

    /**
     * Your Instagram username (with @)
     */
    instagramUsername: '@yourusername',

    /**
     * Instagram profile URL
     */
    instagramUrl: 'https://instagram.com/yourusername'
};

// ===========================
// SECURITY BEST PRACTICES
// ===========================

/**
 * WHY MANUAL MODE IS MORE SECURE:
 * --------------------------------
 * 1. No API tokens exposed in client-side code
 * 2. No risk of token theft or abuse
 * 3. No token expiration issues
 * 4. Full control over displayed content
 * 5. Better performance (no API calls)
 * 6. Works offline and in development
 *
 * IF YOU MUST USE API MODE:
 * -------------------------
 * 1. Use a backend proxy server to hide your token
 * 2. Implement rate limiting
 * 3. Monitor token usage for suspicious activity
 * 4. Rotate tokens regularly
 * 5. Use environment variables, not hardcoded values
 * 6. Consider Instagram's oEmbed API instead (more limited but public)
 */

console.log('📸 Instagram config loaded (EXAMPLE TEMPLATE)');
console.log('⚠️  Remember to rename this to instagram-config.js and add your settings');
