/**
 * Halide Topographical Hero - Vanilla JavaScript
 * 3D Parallax Effect with Mouse Interaction
 */

(function() {
    'use strict';

    // DOM Elements
    const canvas = document.getElementById('canvas-3d');
    const layers = [
        document.getElementById('layer-1'),
        document.getElementById('layer-2'),
        document.getElementById('layer-3')
    ];

    // State
    let isAnimationReady = false;
    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    /**
     * Entrance Animation
     * Animates the canvas into view on page load
     */
    function initEntranceAnimation() {
        if (!canvas) return;

        // Set initial state
        canvas.classList.add('entrance');

        // Trigger entrance animation after a short delay
        setTimeout(() => {
            canvas.classList.remove('entrance');
            canvas.classList.add('active');
            isAnimationReady = true;
        }, 300);
    }

    /**
     * Mouse Parallax Effect
     * Calculates 3D rotation and layer depth based on mouse position
     */
    function handleMouseMove(e) {
        if (!isAnimationReady) return;

        // Calculate mouse position relative to center
        mouseX = (window.innerWidth / 2 - e.pageX) / 25;
        mouseY = (window.innerHeight / 2 - e.pageY) / 25;
    }

    /**
     * Update Animation Frame
     * Smoothly interpolates between current and target positions
     */
    function updateAnimation() {
        if (!isAnimationReady || !canvas) return;

        // Smooth interpolation (easing)
        const ease = 0.1;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        // Rotate the 3D Canvas
        const rotateX = 55 + currentY / 2;
        const rotateZ = -25 + currentX / 2;
        canvas.style.transform = `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;

        // Apply depth shift to layers
        layers.forEach((layer, index) => {
            if (!layer) return;

            const depth = (index + 1) * 15;
            const moveX = currentX * (index + 1) * 0.2;
            const moveY = currentY * (index + 1) * 0.2;

            layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
        });

        // Continue animation loop
        rafId = requestAnimationFrame(updateAnimation);
    }

    /**
     * Touch Support for Mobile
     * Handles touch events for parallax on mobile devices
     */
    function handleTouchMove(e) {
        if (!isAnimationReady) return;

        const touch = e.touches[0];
        mouseX = (window.innerWidth / 2 - touch.pageX) / 25;
        mouseY = (window.innerHeight / 2 - touch.pageY) / 25;
    }

    /**
     * Reset Position
     * Returns canvas to default position when mouse leaves
     */
    function resetPosition() {
        mouseX = 0;
        mouseY = 0;
    }

    /**
     * Handle Window Resize
     * Adjusts canvas and layer positioning on window resize
     */
    function handleResize() {
        // Reset positions on resize
        resetPosition();
        currentX = 0;
        currentY = 0;
    }

    /**
     * Keyboard Navigation
     * Allows keyboard control of the 3D effect
     */
    function handleKeyboard(e) {
        if (!isAnimationReady) return;

        const step = 5;

        switch(e.key) {
            case 'ArrowLeft':
                mouseX += step;
                break;
            case 'ArrowRight':
                mouseX -= step;
                break;
            case 'ArrowUp':
                mouseY += step;
                break;
            case 'ArrowDown':
                mouseY -= step;
                break;
            case 'Escape':
            case ' ':
                resetPosition();
                break;
        }
    }

    /**
     * Visibility Change Handler
     * Pauses/resumes animation when tab is hidden/visible
     */
    function handleVisibilityChange() {
        if (document.hidden) {
            // Pause animation when tab is hidden
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        } else {
            // Resume animation when tab is visible
            if (!rafId && isAnimationReady) {
                rafId = requestAnimationFrame(updateAnimation);
            }
        }
    }

    /**
     * Preload Images
     * Preloads all layer images for smooth initial render
     */
    function preloadImages() {
        const imageUrls = [
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1200'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    /**
     * Initialize Event Listeners
     */
    function initEventListeners() {
        // Mouse events
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', resetPosition);

        // Touch events for mobile
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', resetPosition);

        // Window events
        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('orientationchange', handleResize);

        // Keyboard events
        document.addEventListener('keydown', handleKeyboard);

        // Visibility change
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    /**
     * Cleanup Function
     * Removes event listeners and cancels animation frame
     */
    function cleanup() {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', resetPosition);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', resetPosition);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
        document.removeEventListener('keydown', handleKeyboard);
        document.removeEventListener('visibilitychange', handleVisibilityChange);

        if (rafId) {
            cancelAnimationFrame(rafId);
        }
    }

    /**
     * Initialize Application
     */
    function init() {
        console.log('🍦 Dolce Topographical Hero Initialized');

        // Preload images
        preloadImages();

        // Initialize entrance animation
        initEntranceAnimation();

        // Set up event listeners
        initEventListeners();

        // Start animation loop
        rafId = requestAnimationFrame(updateAnimation);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

    // Export for debugging (optional)
    if (typeof window !== 'undefined') {
        window.HalideTopo = {
            reset: resetPosition,
            cleanup: cleanup
        };
    }

})();
