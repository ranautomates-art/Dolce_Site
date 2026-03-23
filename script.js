/**
 * Dolce Ice Cream Website - Interactive Features
 * ================================================
 * - Hero Carousel with auto-rotation
 * - Smooth scroll animations
 * - Mobile navigation toggle
 * - Intersection Observer for fade-in effects
 * - Header scroll behavior
 */

// ===========================
// GLOBAL VARIABLES
// ===========================
let currentSlide = 0;
let autoRotateInterval;
const SLIDE_INTERVAL = 8000; // 8 seconds

// ===========================
// DOM ELEMENTS
// ===========================
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

// ===========================
// NAVIGATION FUNCTIONS
// ===========================

/**
 * Toggle mobile navigation menu
 */
function toggleMobileNav() {
    nav?.classList.toggle('mobile-active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    const isActive = nav?.classList.contains('mobile-active');
    spans[0].style.transform = isActive
        ? 'rotate(45deg) translateY(9px)'
        : 'none';
    spans[1].style.opacity = isActive ? '0' : '1';
    spans[2].style.transform = isActive
        ? 'rotate(-45deg) translateY(-9px)'
        : 'none';
}

/**
 * Close mobile nav when link is clicked
 */
function closeMobileNav() {
    if (window.innerWidth <= 640) {
        nav?.classList.remove('mobile-active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

/**
 * Add/remove header shadow on scroll
 */
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===========================
// CAROUSEL FUNCTIONS
// ===========================

/**
 * Show specific slide by index
 * @param {number} index - Slide index to show
 * @param {string} direction - Direction of slide ('next' or 'prev')
 */
function showSlide(index, direction = 'next') {
    const previousSlide = currentSlide;

    // Ensure index is within bounds
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Don't do anything if we're already on this slide
    if (previousSlide === currentSlide) {
        return;
    }

    // Position the incoming slide off-screen in the appropriate direction
    slides[currentSlide].classList.remove('slide-out-left', 'slide-out-right');
    if (direction === 'next') {
        slides[currentSlide].style.transform = 'translateX(100%)';
    } else {
        slides[currentSlide].style.transform = 'translateX(-100%)';
    }

    // Force a reflow to ensure the positioning is applied before transition
    slides[currentSlide].offsetHeight;

    // Remove inline styles and add active class to trigger transition
    slides[currentSlide].style.transform = '';
    slides[currentSlide].classList.add('active');

    // Slide out the previous slide
    slides[previousSlide].classList.remove('active');
    if (direction === 'next') {
        slides[previousSlide].classList.add('slide-out-left');
    } else {
        slides[previousSlide].classList.add('slide-out-right');
    }

    // Clean up other slides
    slides.forEach((slide, idx) => {
        if (idx !== currentSlide && idx !== previousSlide) {
            slide.classList.remove('active', 'slide-out-left', 'slide-out-right');
        }
    });

    // Update dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[currentSlide].classList.add('active');
}

/**
 * Go to next slide
 */
function nextSlide() {
    showSlide(currentSlide + 1, 'next');
    resetAutoRotate();
}

/**
 * Go to previous slide
 */
function prevSlide() {
    showSlide(currentSlide - 1, 'prev');
    resetAutoRotate();
}

/**
 * Start automatic slide rotation
 */
function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        showSlide(currentSlide + 1, 'next');
    }, SLIDE_INTERVAL);
}

/**
 * Stop automatic slide rotation
 */
function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

/**
 * Reset automatic rotation (restart timer)
 */
function resetAutoRotate() {
    stopAutoRotate();
    startAutoRotate();
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Observe all elements with fade-in classes
 */
function observeAnimatedElements() {
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-left, .fade-in-right, .fade-in-up'
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===========================
// SMOOTH SCROLLING
// ===========================

/**
 * Smooth scroll to anchor links
 * @param {Event} e - Click event
 */
function smoothScroll(e) {
    const href = this.getAttribute('href');

    // Check if it's an anchor link
    if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            closeMobileNav();
        }
    }
}

// ===========================
// PARALLAX EFFECTS
// ===========================

/**
 * Parallax effect disabled - keeping image static
 */
function handleParallax() {
    // Parallax effect removed - product image remains static
    // This function is kept empty to maintain compatibility with event listeners
}

// ===========================
// EVENT LISTENERS
// ===========================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Navigation
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Carousel controls
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    // Carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const direction = index > currentSlide ? 'next' : 'prev';
            showSlide(index, direction);
            resetAutoRotate();
        });
    });

    // Scroll events
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleParallax();
    });

    // Pause carousel on hover
    const heroCarousel = document.querySelector('.hero__carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', stopAutoRotate);
        heroCarousel.addEventListener('mouseleave', startAutoRotate);
    }

    // Keyboard navigation for carousel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            nav?.classList.remove('mobile-active');
        }
    });
}

// ===========================
// PERFORMANCE OPTIMIZATIONS
// ===========================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
const throttledParallax = throttle(handleParallax, 16); // ~60fps
window.addEventListener('scroll', throttledParallax);

// ===========================
// LAZY LOADING IMAGES
// ===========================

/**
 * Lazy load images for better performance
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===========================
// ACCESSIBILITY ENHANCEMENTS
// ===========================

/**
 * Add ARIA labels and roles for better accessibility
 */
function enhanceAccessibility() {
    // Add aria-label to carousel
    const carousel = document.querySelector('.hero__carousel');
    if (carousel) {
        carousel.setAttribute('role', 'region');
        carousel.setAttribute('aria-label', 'Image carousel');
    }

    // Update aria-current on active slide
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.setAttribute('aria-current', 'true');
        } else {
            slide.removeAttribute('aria-current');
        }
    });
}

// ===========================
// FORM VALIDATION (if needed)
// ===========================

/**
 * Validate contact form (example)
 */
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// ===========================
// ANIMATION UTILITIES
// ===========================

/**
 * Add entrance animation to elements
 * @param {HTMLElement} element - Element to animate
 * @param {string} animationClass - Animation class name
 * @param {number} delay - Delay in milliseconds
 */
function animateElement(element, animationClass, delay = 0) {
    setTimeout(() => {
        element.classList.add(animationClass);
    }, delay);
}

/**
 * Stagger animations for multiple elements
 * @param {NodeList} elements - Elements to animate
 * @param {string} animationClass - Animation class name
 * @param {number} staggerDelay - Delay between each element
 */
function staggerAnimation(elements, animationClass, staggerDelay = 100) {
    elements.forEach((element, index) => {
        animateElement(element, animationClass, index * staggerDelay);
    });
}

// ===========================
// INITIALIZATION
// ===========================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    console.log('🍦 Dolce Ice Cream Website Initialized');

    // Initialize event listeners
    initEventListeners();

    // Initialize first slide properly
    if (slides.length > 0) {
        showSlide(0, 'next');
    }

    // Start carousel auto-rotation
    startAutoRotate();

    // Initialize scroll animations
    observeAnimatedElements();

    // Lazy load images
    lazyLoadImages();

    // Enhance accessibility
    enhanceAccessibility();

    // Initial header state
    handleHeaderScroll();

    // Preload next slide images for smooth transitions
    if (slides.length > 1) {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        const nextSlideImages = slides[nextSlideIndex].querySelectorAll('img');
        nextSlideImages.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        });
    }
}

// ===========================
// PAGE LOAD
// ===========================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Optional: Add loading screen fade out
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✅ All resources loaded');
});

// ===========================
// ERROR HANDLING
// ===========================

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// ===========================
// PERFORMANCE MONITORING
// ===========================

/**
 * Log performance metrics (optional - for development)
 */
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;

        console.log('📊 Performance Metrics:');
        console.log(`- Page Load Time: ${pageLoadTime}ms`);
        console.log(`- Connection Time: ${connectTime}ms`);
    });
}

// ===========================
// EXPORT FOR TESTING
// ===========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSlide,
        nextSlide,
        prevSlide,
        toggleMobileNav,
        smoothScroll,
        debounce,
        throttle
    };
}
