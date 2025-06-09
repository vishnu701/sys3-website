import { gsap } from 'gsap';

/**
 * Elegant fade-reveal transition effect for page navigation
 * Creates a premium layered reveal effect when navigating between sections
 */
export const initPageTransitions = () => {
  // Create transition container and layers
  const createTransitionElements = () => {
    // Remove any existing transition elements
    const existingContainer = document.getElementById('page-transition-container');
    if (existingContainer) {
      document.body.removeChild(existingContainer);
    }

    // Create container - starts below the header
    const container = document.createElement('div');
    container.id = 'page-transition-container';
    container.style.position = 'fixed';
    container.style.top = '80px'; // Leave space for the header (adjust if needed)
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = 'calc(100% - 80px)'; // Adjust height to exclude header
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'none';
    container.style.visibility = 'hidden';
    container.style.overflow = 'hidden';
    
    // Create overlapping layers with different transforms
    const layerCount = 4;
    
    for (let i = 0; i < layerCount; i++) {
      const layer = document.createElement('div');
      layer.className = 'transition-layer';
      layer.style.position = 'absolute';
      layer.style.top = '0';
      layer.style.left = '0';
      layer.style.width = '100%';
      layer.style.height = '100%';
      layer.style.transformOrigin = 'center center';
      
      // Different styling for each layer
      switch(i) {
        case 0: // Main overlay - slightly transparent dark
          layer.style.backgroundColor = 'rgba(25, 25, 30, 0.9)';
          layer.style.transform = 'translateY(100%)';
          break;
        case 1: // Subtle accent layer
          layer.style.background = 'radial-gradient(circle at center, rgba(138, 133, 255, 0.1) 0%, rgba(25, 25, 30, 0) 70%)';
          layer.style.transform = 'translateY(100%) scale(1.5)';
          layer.style.opacity = '0';
          break;
        case 2: // Geometric pattern layer
          layer.style.backgroundImage = 'linear-gradient(to right, rgba(138, 133, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(138, 133, 255, 0.03) 1px, transparent 1px)';
          layer.style.backgroundSize = '40px 40px';
          layer.style.transform = 'translateY(100%) rotate(5deg)';
          layer.style.opacity = '0';
          break;
        case 3: // Thin brand accent line
          layer.style.height = '2px';
          layer.style.bottom = '0';
          layer.style.top = 'auto';
          layer.style.background = 'linear-gradient(to right, transparent, rgba(138, 133, 255, 0.7), transparent)';
          layer.style.transform = 'scaleX(0)';
          layer.style.opacity = '0';
          break;
      }
      
      container.appendChild(layer);
    }

    document.body.appendChild(container);
    return container;
  };

  // Transition in animation (reveal layers)
  const transitionIn = () => {
    const container = createTransitionElements();
    const layers = container.querySelectorAll('.transition-layer');
    
    container.style.visibility = 'visible';
    
    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
      }
    });
    
    // Main overlay animation
    tl.to(layers[0], {
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Accent gradient animation
    tl.to(layers[1], {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power2.out'
    }, "-=0.6");
    
    // Pattern layer animation
    tl.to(layers[2], {
      y: 0,
      opacity: 0.5,
      rotate: 0,
      duration: 0.9,
      ease: 'power2.inOut'
    }, "-=0.7");
    
    // Brand accent line animation
    tl.to(layers[3], {
      scaleX: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out'
    }, "-=0.4");
    
    // Return the timeline so we can chain with navigation
    return tl;
  };

  // Transition out animation (hide layers)
  const transitionOut = () => {
    const container = document.getElementById('page-transition-container');
    if (!container) return gsap.timeline(); // Return empty timeline if no container
    
    const layers = container.querySelectorAll('.transition-layer');
    
    // Create timeline for coordinated exit animations
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.inOut'
      },
      onComplete: () => {
        container.style.visibility = 'hidden';
      }
    });
    
    // Animate all layers out in reverse order
    tl.to(layers[3], {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power1.in'
    });
    
    tl.to(layers[2], {
      y: -100,
      opacity: 0,
      rotate: -2,
      duration: 0.7
    }, "-=0.3");
    
    tl.to(layers[1], {
      y: -100,
      opacity: 0,
      scale: 0.9,
      duration: 0.7
    }, "-=0.6");
    
    tl.to(layers[0], {
      y: -100,
      duration: 0.6,
      ease: 'power2.in'
    }, "-=0.5");
    
    return tl;
  };

  return {
    transitionIn,
    transitionOut
  };
};

// Update page transition based on theme
export const updateTransitionTheme = (isDark) => {
  const container = document.getElementById('page-transition-container');
  if (!container) return;
  
  const layers = container.querySelectorAll('.transition-layer');
  if (layers.length >= 1) {
    // Adjust main overlay color based on theme
    layers[0].style.backgroundColor = isDark ? 
      'rgba(15, 15, 20, 0.9)' : 
      'rgba(25, 25, 30, 0.9)';
  }
};

export default {
  initPageTransitions,
  updateTransitionTheme
};