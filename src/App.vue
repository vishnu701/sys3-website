<template>
  <div class="app" :class="{ 'dark-theme': isDarkTheme }" style="height: auto; overflow: visible;">
    <TheHeader />
    
    <main style="height: auto; overflow: visible; position: static;">
      <router-view />
    </main>
    <TheFooter />
    
    <!-- Page transition overlay -->
    <div class="page-transition-overlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

const isDarkTheme = ref(false);
const router = useRouter();
const isTransitioning = ref(false);
const neuralNetworkRef = ref(null);

// Minimal theme toggle function
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

provide('isDarkTheme', isDarkTheme);
provide('toggleTheme', toggleTheme);

// Page transition handlers (temporarily disabled)
const onBeforeLeave = async (el) => {
  isTransitioning.value = true;
  // Skip transition animation for debugging
};

const onEnter = async (el, done) => {
  // Skip transition animation for debugging
  isTransitioning.value = false;
  done();
};

// Listen for route changes to manipulate the neural network
router.beforeEach((to, from, next) => {
  // We'll update the neural network transition here if needed
  next();
});

// Force enable scrolling on mount
onMounted(() => {
  // Force HTML and body to be scrollable
  document.documentElement.style.overflow = 'auto';
  document.documentElement.style.height = 'auto';
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
  
  // Force light theme only - disable dark mode
  localStorage.setItem('theme', 'light');
  isDarkTheme.value = false;
  
  // Remove any classes that might interfere with scrolling
  document.body.classList.remove('no-scroll', 'smooth-scroll', 'loading');
});
</script>

<style>
/* Critical CSS to enable scrolling */
html, body, #app, .app {
  height: auto !important;
  overflow: auto !important;
  min-height: 0 !important;
  max-height: none !important;
}

main {
  height: auto !important;
  overflow: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  position: static !important;
}

/* Page transition overlay */
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0;
  pointer-events: none;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.dark-theme .page-transition-overlay {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Disable default Vue transitions - we'll use GSAP instead */
.page-transition-enter-active,
.page-transition-leave-active {
  transition-duration: 0s;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 1;
}
</style>