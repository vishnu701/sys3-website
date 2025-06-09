import { initPageAnimations } from '@/utils/animations';

/**
 * Vue plugin to initialize professional animations
 * Automatically applies optimized animations to all pages
 * 
 * NOTE: Currently disabled to fix scrolling and visibility issues
 */
export const AnimationsPlugin = {
  install(app) {
    // Empty install function - all animations are disabled
    
    // Force document to be scrollable when the plugin is installed
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    
    // Remove any classes that might interfere with scrolling
    document.body.classList.remove('no-scroll', 'smooth-scroll', 'loading');
  }
};

export default AnimationsPlugin;