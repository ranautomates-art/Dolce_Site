/**
 * Instagram Feed Integration
 * ================================================
 * Fetches real Instagram posts using the Instagram Basic Display API
 * Falls back to manual images if API is not configured
 *
 * Setup Instructions:
 * 1. Get Instagram Access Token (see INSTAGRAM_SETUP.md)
 * 2. Add token to instagram-config.js
 * 3. Include both scripts in your HTML before closing </body>
 */

// ===========================
// CONFIGURATION
// ===========================

// Default configuration (can be overridden in instagram-config.js)
const INSTAGRAM_CONFIG = window.INSTAGRAM_CONFIG || {
    accessToken: '', // Your Instagram Access Token
    limit: 3, // Number of posts to display
    manualMode: true, // Set to false when using API
    manualImages: [
        {
            url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=400&fit=crop',
            caption: 'Delicious ice cream cones',
            permalink: 'https://instagram.com/dolcesandyhook'
        },
        {
            url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
            caption: 'Fresh Italian ice',
            permalink: 'https://instagram.com/dolcesandyhook'
        },
        {
            url: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&h=400&fit=crop',
            caption: 'Creamy milkshakes',
            permalink: 'https://instagram.com/dolcesandyhook'
        }
    ],
    cacheTime: 3600000, // Cache API responses for 1 hour (in milliseconds)
    instagramUsername: '@dolcesandyhook'
};

// ===========================
// CACHE MANAGEMENT
// ===========================

class InstagramCache {
    constructor(cacheKey = 'instagram_feed_cache') {
        this.cacheKey = cacheKey;
    }

    /**
     * Save data to localStorage with timestamp
     */
    save(data) {
        try {
            const cacheData = {
                timestamp: Date.now(),
                data: data
            };
            localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
        } catch (error) {
            console.warn('Failed to cache Instagram data:', error);
        }
    }

    /**
     * Get cached data if still valid
     */
    get(maxAge = INSTAGRAM_CONFIG.cacheTime) {
        try {
            const cached = localStorage.getItem(this.cacheKey);
            if (!cached) return null;

            const cacheData = JSON.parse(cached);
            const age = Date.now() - cacheData.timestamp;

            if (age < maxAge) {
                return cacheData.data;
            }

            // Cache expired, remove it
            this.clear();
            return null;
        } catch (error) {
            console.warn('Failed to read Instagram cache:', error);
            return null;
        }
    }

    /**
     * Clear cached data
     */
    clear() {
        try {
            localStorage.removeItem(this.cacheKey);
        } catch (error) {
            console.warn('Failed to clear Instagram cache:', error);
        }
    }
}

// ===========================
// INSTAGRAM API CLIENT
// ===========================

class InstagramFeed {
    constructor(config) {
        this.config = config;
        this.cache = new InstagramCache();
        this.container = null;
    }

    /**
     * Initialize the Instagram feed
     */
    async init(containerId = 'instagram-feed-container') {
        this.container = document.getElementById(containerId);

        if (!this.container) {
            console.error(`Container with ID "${containerId}" not found`);
            return;
        }

        // Show loading state
        this.showLoading();

        try {
            let posts;

            if (this.config.manualMode) {
                // Use manual images
                posts = this.config.manualImages.slice(0, this.config.limit);
                this.renderPosts(posts, true);
            } else {
                // Try to get cached data first
                const cachedPosts = this.cache.get();

                if (cachedPosts) {
                    console.log('Using cached Instagram data');
                    this.renderPosts(cachedPosts);
                } else {
                    // Fetch fresh data from API
                    posts = await this.fetchFromAPI();
                    this.cache.save(posts);
                    this.renderPosts(posts);
                }
            }
        } catch (error) {
            console.error('Failed to load Instagram feed:', error);
            this.showError();
        }
    }

    /**
     * Fetch posts from Instagram Basic Display API
     */
    async fetchFromAPI() {
        if (!this.config.accessToken) {
            throw new Error('Instagram access token not configured');
        }

        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${this.config.accessToken}&limit=${this.config.limit}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.data || data.data.length === 0) {
            throw new Error('No Instagram posts found');
        }

        // Transform API response to our format
        return data.data.map(post => ({
            id: post.id,
            url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
            caption: post.caption || '',
            permalink: post.permalink,
            mediaType: post.media_type
        }));
    }

    /**
     * Render posts to the container
     */
    renderPosts(posts, isManual = false) {
        if (!this.container) return;

        // Clear loading state
        this.container.innerHTML = '';

        posts.forEach((post, index) => {
            const postElement = this.createPostElement(post, index);
            this.container.appendChild(postElement);
        });

        // Trigger fade-in animations
        this.animatePosts();
    }

    /**
     * Create a single post element
     */
    createPostElement(post, index) {
        const link = document.createElement('a');
        link.href = post.permalink;
        link.className = 'social__post fade-in-up';
        link.style.animationDelay = `${0.1 * (index + 1)}s`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', post.caption || 'Instagram post');

        const img = document.createElement('img');
        img.src = post.url;
        img.alt = post.caption || 'Instagram post';
        img.className = 'social__img';
        img.loading = 'lazy';

        // Add error handling for images
        img.onerror = () => {
            img.src = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop';
            img.alt = 'Fallback image';
        };

        const overlay = document.createElement('div');
        overlay.className = 'social__overlay';
        overlay.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        `;

        link.appendChild(img);
        link.appendChild(overlay);

        return link;
    }

    /**
     * Show loading state
     */
    showLoading() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="instagram-loading">
                <div class="instagram-spinner"></div>
                <p>Loading Instagram feed...</p>
            </div>
        `;
    }

    /**
     * Show error state
     */
    showError() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="instagram-error">
                <p>Unable to load Instagram feed</p>
                <a href="https://instagram.com/${this.config.instagramUsername.replace('@', '')}"
                   class="btn btn--primary"
                   target="_blank"
                   rel="noopener noreferrer">
                    View on Instagram
                </a>
            </div>
        `;
    }

    /**
     * Animate posts on render
     */
    animatePosts() {
        const posts = this.container.querySelectorAll('.social__post');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        posts.forEach(post => {
            observer.observe(post);
        });
    }

    /**
     * Refresh the feed (bypass cache)
     */
    async refresh() {
        this.cache.clear();
        await this.init();
    }
}

// ===========================
// AUTO-INITIALIZATION
// ===========================

/**
 * Auto-initialize when DOM is ready
 */
function initInstagramFeed() {
    // Check if container exists
    const container = document.getElementById('instagram-feed-container');

    if (!container) {
        console.log('Instagram feed container not found. Skipping initialization.');
        return;
    }

    console.log('🍦 Initializing Instagram feed...');

    const feed = new InstagramFeed(INSTAGRAM_CONFIG);
    feed.init('instagram-feed-container');

    // Make feed instance globally accessible for manual refresh
    window.instagramFeed = feed;

    console.log('✅ Instagram feed initialized');

    if (INSTAGRAM_CONFIG.manualMode) {
        console.log('📸 Using manual images (API mode disabled)');
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstagramFeed);
} else {
    initInstagramFeed();
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Manually refresh the Instagram feed
 * Call this function from console: refreshInstagramFeed()
 */
window.refreshInstagramFeed = function() {
    if (window.instagramFeed) {
        console.log('Refreshing Instagram feed...');
        window.instagramFeed.refresh();
    } else {
        console.error('Instagram feed not initialized');
    }
};

/**
 * Clear Instagram cache
 * Call this function from console: clearInstagramCache()
 */
window.clearInstagramCache = function() {
    const cache = new InstagramCache();
    cache.clear();
    console.log('Instagram cache cleared');
};

// ===========================
// EXPORT FOR TESTING
// ===========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        InstagramFeed,
        InstagramCache,
        INSTAGRAM_CONFIG
    };
}
