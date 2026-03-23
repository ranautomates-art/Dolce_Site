/**
 * Menu Page Interactive Features
 * - Featured Banner Carousel with auto-play
 * - Sticky navigation with active section highlighting
 * - Back to top button with smooth scroll
 * - Intersection Observer for scroll animations
 */

(function() {
    'use strict';

    // Add 'js' class to HTML element to enable progressive enhancement
    document.documentElement.classList.add('js');

    // ===========================
    // FEATURED BANNER CAROUSEL
    // ===========================
    function initCarousel() {
        const bannerSlides = document.querySelectorAll('.banner-slide');
        const bannerDots = document.querySelectorAll('.banner-dot');
        const bannerPrevBtn = document.getElementById('bannerPrev');
        const bannerNextBtn = document.getElementById('bannerNext');
        const bannerCarousel = document.querySelector('.banner-carousel');

        if (!bannerSlides.length) {
            console.warn('No banner slides found');
            return;
        }

        let currentSlide = 0;
        let slideInterval;
        const slideDelay = 6000; // 6 seconds between slides

        console.log('✅ Carousel initialized with', bannerSlides.length, 'slides');

        function showSlide(index) {
            // Ensure index is within bounds
            if (index >= bannerSlides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = bannerSlides.length - 1;
            } else {
                currentSlide = index;
            }

            console.log('Showing slide:', currentSlide + 1);

            // Update slides
            bannerSlides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // Update dots
            bannerDots.forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            console.log('→ Next slide');
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            console.log('← Previous slide');
            showSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            stopAutoPlay(); // Clear any existing interval
            slideInterval = setInterval(nextSlide, slideDelay);
            console.log('▶ Auto-play started');
        }

        function stopAutoPlay() {
            if (slideInterval) {
                clearInterval(slideInterval);
                console.log('⏸ Auto-play paused');
            }
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // Arrow button event listeners
        if (bannerNextBtn) {
            bannerNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🖱 Next button clicked');
                nextSlide();
                resetAutoPlay();
            });
        }

        if (bannerPrevBtn) {
            bannerPrevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🖱 Prev button clicked');
                prevSlide();
                resetAutoPlay();
            });
        }

        // Dot indicator event listeners
        bannerDots.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🖱 Dot', index + 1, 'clicked');
                showSlide(index);
                resetAutoPlay();
            });
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
        });

        // Pause autoplay on hover/focus
        if (bannerCarousel) {
            bannerCarousel.addEventListener('mouseenter', stopAutoPlay);
            bannerCarousel.addEventListener('mouseleave', startAutoPlay);
            bannerCarousel.addEventListener('focusin', stopAutoPlay);
            bannerCarousel.addEventListener('focusout', startAutoPlay);
        }

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        if (bannerCarousel) {
            bannerCarousel.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            bannerCarousel.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - prev slide
                    prevSlide();
                }
                resetAutoPlay();
            }
        }

        // Initialize carousel
        showSlide(0);
        startAutoPlay();
    }

    // Initialize carousel when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        // DOM already loaded
        initCarousel();
    }

    // ===========================
    // STICKY MENU NAVIGATION
    // ===========================
    const menuNav = document.getElementById('menu-nav');
    const menuNavLinks = document.querySelectorAll('.menu-nav__link');
    const sections = document.querySelectorAll('.sweets-section, .featured-section');

    // Highlight active section in sticky nav
    function highlightActiveSection() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });

        menuNavLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scroll for menu navigation links
    menuNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const menuNavHeight = menuNav.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - menuNavHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active section on scroll
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check

    // ===========================
    // BACK TO TOP BUTTON
    // ===========================
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        function toggleBackToTopButton() {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }

        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Check on scroll
        window.addEventListener('scroll', toggleBackToTopButton);
        toggleBackToTopButton(); // Initial check
    }

    // ===========================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===========================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ===========================
    // CARD HOVER EFFECTS (Enhanced for Mobile)
    // ===========================
    const cards = document.querySelectorAll('.sweets-card, .featured-card');

    // Add touch support for mobile devices
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });

    // ===========================
    // PREVENT LAYOUT SHIFT
    // ===========================
    // Ensure images don't cause layout shift on load
    const images = document.querySelectorAll('.sweets-card__img, .featured-card__img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });

    // ===========================
    // KEYBOARD ACCESSIBILITY
    // ===========================
    // Allow keyboard navigation to trigger smooth scroll
    menuNavLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Back to top keyboard support
    if (backToTopButton) {
        backToTopButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // ===========================
    // RESPONSIVE GRID OPTIMIZATION
    // ===========================
    function optimizeGridLayout() {
        const grid = document.querySelectorAll('.sweets-grid');
        const viewportWidth = window.innerWidth;

        grid.forEach(gridElement => {
            if (viewportWidth < 768) {
                // Mobile: horizontal card layout
                gridElement.classList.add('mobile-layout');
            } else {
                gridElement.classList.remove('mobile-layout');
            }
        });
    }

    window.addEventListener('resize', optimizeGridLayout);
    optimizeGridLayout(); // Initial check

    // ===========================
    // PERFORMANCE OPTIMIZATION
    // ===========================
    // Debounce scroll events for better performance
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

    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightActiveSection, 50);
    const debouncedToggleButton = debounce(toggleBackToTopButton, 50);

    window.addEventListener('scroll', debouncedHighlight);
    window.addEventListener('scroll', debouncedToggleButton);

    // ===========================
    // LAZY LOADING ENHANCEMENT
    // ===========================
    // Add loading attribute to images if not already present
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // ===========================
    // CONSOLE GREETING
    // ===========================
    console.log('%c🍦 Dolce Menu Page Loaded Successfully! 🍦', 'color: #E25858; font-size: 16px; font-weight: bold;');
    console.log('%cFeatures: Auto-Play Carousel, Sticky Nav, Back to Top, Responsive Grid, Smooth Scrolling', 'color: #4A74B4; font-size: 12px;');

})();
