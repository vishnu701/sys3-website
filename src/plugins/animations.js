import { initPageAnimations } from '@/utils/animations';

/**
 * Vue plugin to initialize professional animations
 * Automatically applies optimized animations to all pages
 */
export const AnimationsPlugin = {
  install(app) {
    // Register a global directive for page animations
    app.directive('page-animate', {
      mounted(el, binding) {
        // Extract options from directive binding value
        const options = binding.value || {};
        
        // Initialize page animations with specified or default options
        initPageAnimations(options);
      }
    });
    
    // Add global mixin to initialize animations on page mount
    app.mixin({
      mounted() {
        // Only apply to top-level components (pages) to avoid duplicate animations
        if (this.$parent?.$root === this.$root) {
          // Use a tiny delay to ensure DOM is fully rendered
          setTimeout(() => {
            initPageAnimations({
              // Default options that can be overridden by individual pages
              heroSelector: '#hero-section, .hero, [id$="-hero"]',
              sectionSelector: '.section',
              cardSelector: '.card, .form-card, .education-card, .team-card, .consulting-card'
            });
          }, 50);
        }
      }
    });
  }
};

export default AnimationsPlugin;