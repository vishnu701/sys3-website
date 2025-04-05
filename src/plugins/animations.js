import { initPageAnimations } from '@/utils/animations';

/**
 * Vue plugin to initialize professional animations
 * Automatically applies optimized animations to all pages
 */
export const AnimationsPlugin = {
  install(app) {
    // Initialize animations flag to track if animations have been set up
    window.animationsInitialized = false;
    
    // Register a global directive for page animations
    app.directive('page-animate', {
      mounted(el, binding) {
        // Extract options from directive binding value
        const options = binding.value || {};
        
        // Initialize page animations with specified or default options
        initPageAnimations(options);
        window.animationsInitialized = true;
      }
    });
    
    // Add global mixin to properly handle animations
    app.mixin({
      mounted() {
        // Only apply to top-level components (pages) to avoid duplicate animations
        if (this.$parent?.$root === this.$root) {
          // Reset the flag when a new page is loaded
          window.animationsInitialized = false;
          
          // Use a larger delay to ensure DOM is fully rendered and stable
          setTimeout(() => {
            if (!window.animationsInitialized) {
              console.log('Initializing animations for page:', this.$route?.path);
              initPageAnimations({
                // Default options that can be overridden by individual pages
                heroSelector: '#hero-section, .hero, [id$="-hero"]',
                sectionSelector: '.section',
                cardSelector: '.card, .form-card, .education-card, .team-card, .consulting-card'
              });
              window.animationsInitialized = true;
            }
          }, 150); // Increased timeout to ensure stable DOM
        }
      },
      
      // Add activation when component is reused in router views
      activated() {
        if (this.$parent?.$root === this.$root) {
          setTimeout(() => {
            if (!window.animationsInitialized) {
              console.log('Reinitializing animations on activation for:', this.$route?.path);
              initPageAnimations({
                heroSelector: '#hero-section, .hero, [id$="-hero"]',
                sectionSelector: '.section',
                cardSelector: '.card, .form-card, .education-card, .team-card, .consulting-card'
              });
              window.animationsInitialized = true;
            }
          }, 150);
        }
      }
    });
  }
};

export default AnimationsPlugin;