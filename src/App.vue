<template>
  <div class="app" :class="{ 'dark-theme': isDarkTheme }">
    <TheHeader />
    
    <div class="scroll-indicator" :class="{ 'visible': showScrollIndicator }">
      <div class="scroll-line"></div>
      <p>Explore</p>
    </div>
    
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in" @after-enter="handleRouteEnter">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, watch } from 'vue';
import { useRoute } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

const isDarkTheme = ref(false);
const showScrollIndicator = ref(false);
const route = useRoute();

// Handle route transitions and ensure animations are properly initialized
const handleRouteEnter = () => {
  console.log('Route transition completed for:', route.path);
  
  // Force reinitialization of animations on route change
  if (window.initPageAnimations) {
    window.animationsInitialized = false;
    
    // Use a short delay to ensure the DOM is stable
    setTimeout(() => {
      // Import initPageAnimations dynamically to avoid circular imports
      import('@/utils/animations').then(animations => {
        animations.initPageAnimations({
          heroSelector: '#hero-section, .hero, [id$="-hero"]',
          sectionSelector: '.section',
          cardSelector: '.card, .form-card, .education-card, .team-card, .consulting-card'
        });
        window.animationsInitialized = true;
      });
    }, 50);
  }
};

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
  
  // For toggling app's main class
  const appElement = document.querySelector('.app');
  
  if (isDarkTheme.value) {
    // Add dark theme class to HTML and body elements first
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.add('dark-theme-root');
    document.body.classList.add('dark-theme');
    appElement?.classList.add('dark-theme');
    
    // Update CSS variables directly
    document.body.style.setProperty('--color-bg', '#050505');
    document.body.style.setProperty('--color-bg-light', '#0a0a0a');
    document.body.style.setProperty('--color-text', '#ffffff');
    document.body.style.setProperty('--color-text-secondary', 'rgba(255, 255, 255, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(255, 255, 255, 0.08)');
    
    // Apply to all body and content
    document.body.style.backgroundColor = '#050505';
    document.body.style.color = '#ffffff';
  } else {
    // Remove dark theme classes from everything
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.remove('dark-theme-root');
    document.body.classList.remove('dark-theme');
    appElement?.classList.remove('dark-theme');
    
    // Reset CSS variables to light theme values
    document.body.style.setProperty('--color-bg', '#f8f9fa');
    document.body.style.setProperty('--color-bg-light', '#ffffff');
    document.body.style.setProperty('--color-text', '#202124');
    document.body.style.setProperty('--color-text-secondary', 'rgba(32, 33, 36, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(32, 33, 36, 0.1)');
    
    // Apply to all body and content
    document.body.style.backgroundColor = '#f8f9fa';
    document.body.style.color = '#202124';
    
    // Remove any force-dark-mode classes
    document.querySelectorAll('.force-dark-mode').forEach(el => {
      el.classList.remove('force-dark-mode');
    });
  }
  
  // Force repaint and update the DOM
  requestAnimationFrame(() => {
    // Force page reflow
    const scrollPosition = window.scrollY;
    
    // Try to force a reflow by making layout changes
    document.body.style.display = 'none';
    void document.body.offsetHeight;
    document.body.style.display = '';
    
    // Restore scroll position after forcing reflow
    window.scrollTo(0, scrollPosition);
  });
};

provide('isDarkTheme', isDarkTheme);
provide('toggleTheme', toggleTheme);


// Handle scroll events for scroll indicator and section animations
const handleScroll = () => {
  // Only show scroll indicator when at the top of the page
  // and hide it when scrolling down
  if (window.scrollY < 100) {
    showScrollIndicator.value = true;
  } else {
    showScrollIndicator.value = false;
  }
  
  // Activate sections as they enter the viewport
  document.querySelectorAll('.section:not(.active)').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
      section.classList.add('active');
    }
  });
};

// Initialize WebGL with current theme
const initializeTheme = () => {
  // Get app element for direct class manipulation
  const appElement = document.querySelector('.app');
  
  // Apply theme classes and CSS variables directly
  if (isDarkTheme.value) {
    // Apply to all theme-carrying elements
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.add('dark-theme-root');
    document.body.classList.add('dark-theme');
    appElement?.classList.add('dark-theme');
    
    // Set CSS variables directly for immediate effect
    document.body.style.setProperty('--color-bg', '#050505');
    document.body.style.setProperty('--color-bg-light', '#0a0a0a');
    document.body.style.setProperty('--color-text', '#ffffff');
    document.body.style.setProperty('--color-text-secondary', 'rgba(255, 255, 255, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(255, 255, 255, 0.08)');
    
    // Apply directly to body element
    document.body.style.backgroundColor = '#050505';
    document.body.style.color = '#ffffff';
  } else {
    // Remove theme classes
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.remove('dark-theme-root');
    document.body.classList.remove('dark-theme');
    appElement?.classList.remove('dark-theme');
    
    // Reset CSS variables to light theme values
    document.body.style.setProperty('--color-bg', '#f8f9fa');
    document.body.style.setProperty('--color-bg-light', '#ffffff');
    document.body.style.setProperty('--color-text', '#202124');
    document.body.style.setProperty('--color-text-secondary', 'rgba(32, 33, 36, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(32, 33, 36, 0.1)');
    
    // Apply directly to body element
    document.body.style.backgroundColor = '#f8f9fa';
    document.body.style.color = '#202124';
  }

  // Ensure no-webgl class is added to disable WebGL canvas everywhere
  document.body.classList.add('no-webgl');
  
  // Make all sections active that should be in viewport
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('active');
    }
  });
};

// Add no-webgl class to body to ensure WebGL canvas is disabled everywhere
document.body.classList.add('no-webgl');

onMounted(() => {
  // Get app element for direct class manipulation
  const appElement = document.querySelector('.app');
  
  // Check for the global flag set in index.html or stored theme
  if (window.DARK_MODE_ENABLED) {
    isDarkTheme.value = true;
  } else {
    const savedTheme = localStorage.getItem('theme');
    isDarkTheme.value = savedTheme === 'dark' || 
      (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
    
  // Apply theme classes and CSS immediately on mount
  if (isDarkTheme.value) {
    // Apply to all theme-carrying elements
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.add('dark-theme-root');
    document.body.classList.add('dark-theme');
    appElement?.classList.add('dark-theme');
    
    // Set CSS variables directly for immediate effect
    document.body.style.setProperty('--color-bg', '#050505');
    document.body.style.setProperty('--color-bg-light', '#0a0a0a');
    document.body.style.setProperty('--color-text', '#ffffff');
    document.body.style.setProperty('--color-text-secondary', 'rgba(255, 255, 255, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(255, 255, 255, 0.08)');
    
    // Apply directly to body and app elements
    document.body.style.backgroundColor = '#050505';
    document.body.style.color = '#ffffff';
    
    // Remove preload class after all variables and classes are set
    setTimeout(() => {
      document.documentElement.classList.remove('dark-theme-preload');
    }, 100);
  } else {
    // Ensure all dark theme classes are removed
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.remove('dark-theme-root');
    document.documentElement.classList.remove('dark-theme-preload');
    document.body.classList.remove('dark-theme');
    appElement?.classList.remove('dark-theme');
    
    // Reset CSS variables to light theme values
    document.body.style.setProperty('--color-bg', '#f8f9fa');
    document.body.style.setProperty('--color-bg-light', '#ffffff');
    document.body.style.setProperty('--color-text', '#202124');
    document.body.style.setProperty('--color-text-secondary', 'rgba(32, 33, 36, 0.7)');
    document.body.style.setProperty('--color-border', 'rgba(32, 33, 36, 0.1)');
    
    // Apply directly to body and app elements
    document.body.style.backgroundColor = '#f8f9fa';
    document.body.style.color = '#202124';
  }
  
  // Add scroll event listener for scroll indicator
  window.addEventListener('scroll', handleScroll);
  
  // Set initial scroll indicator visibility
  handleScroll();
  
  // Initialize theme and WebGL
  initializeTheme();
  
  // Prevent FOUC (Flash of Unstyled Content)
  document.documentElement.classList.remove('fouc-protection');
});

onBeforeUnmount(() => {
  // Remove scroll event listener
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Hide WebGL canvas everywhere */
canvas.webgl {
  display: none !important;
}

/* Fix footer styling without WebGL */
.footer-content {
  position: relative;
  padding-bottom: 0;
  margin-bottom: 0;
}

.footer-bottom {
  margin-top: 0;
  padding-bottom: 1rem;
}

/* Add a subtle gradient background to replace WebGL */
.app {
  background: linear-gradient(135deg, var(--color-bg), var(--color-bg-light));
  min-height: 100vh;
}
</style>