<template>
  <header :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/logos/full/logo.png" alt="System3 Full Logo" class="logo-img full-logo" />
          <img src="@/assets/logos/compact/logo.png" alt="System3 Icon Logo" class="logo-img compact-logo" />
        </RouterLink>
      </div>
      
      <nav :class="{ active: isMenuOpen }">
        <ul>
          <li>
            <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
          </li>
          <li class="has-dropdown">
            <RouterLink to="/education" :class="{ active: $route.path.includes('/education') || $route.path.includes('/courses') }">Education</RouterLink>
            <ul class="dropdown-menu">
              <li><RouterLink to="/courses">Our Courses</RouterLink></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/consultancy" :class="{ active: $route.path === '/consultancy' }">Consultancy</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" :class="{ active: $route.path === '/about' }">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" :class="{ active: $route.path === '/contact' }">Contact</RouterLink>
          </li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
        </div>
        
        <!-- Theme toggle temporarily disabled
        <div class="theme-toggle-wrapper">
          <span class="theme-label">Theme</span>
          <div class="theme-toggle" @click="toggleTheme">
            <svg class="icon icon-moon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M12 3a9 9 0 1 0 9 9c0-.97-.03-1 0-1 .97 0 2-.97 2-2s-1.03-2-2-2h-2c-.97 0-2-1.03-2-2 0-1.03 1.03-2 2-2"></path>
            </svg>
            <svg class="icon icon-sun" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M12 3a9 9 0 1 0 9 9c0-4.97-4.03-9-9-9zm0 0V1m0 22v-2m10-10h2M1 12h2m17-7l-2 2M6 6L4 4m14 14l2 2m-16-2l-2 2"></path>
            </svg>
          </div>
        </div>
        -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDarkTheme = inject('isDarkTheme');
const toggleTheme = inject('toggleTheme');
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Handle scroll event to update header style
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  
  // If menu is open, prevent body scrolling
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (isMenuOpen.value && nav && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};

// Close menu when route changes
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
  // window.addEventListener('scroll', handleScroll);
  
  // Initialize scroll state
  handleScroll();
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; // Reset body overflow when component unmounts
});

// Close mobile menu if window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* Header container */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: max-width 0.4s ease, 
              transform 0.4s ease, 
              border-radius 0.4s ease, 
              background-color 0.3s ease, 
              box-shadow 0.3s ease;
}

.header-container {
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  transition: max-width 0.4s ease, 
              padding 0.4s ease;
}

/* Scrolled state */
header.scrolled {
  height: calc(var(--header-height) * 1);
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  max-width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 2rem;
}

header.scrolled .header-container {
  max-width: 1200px;
}

header.scrolled .full-logo {
  height: 48px;
}

.full-logo {
  height: 60px;
  width: auto;
  display: block;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .full-logo {
    height: 48px;
  }
  
  .header-container {
    padding: 0 2rem;
  }
  
  header.scrolled .header-container {
    max-width: 100%;
    padding: 0 1.5rem;
  }
}

@media (max-width: 576px) {
  .header-container {
    padding: 0 1.5rem;
  }
}

/* Style overrides for new color palette */
.logo {
  color: var(--clr-ink); /* Updated to new color token */
}

.logo-img {
  height: 60px;
  transition: all 0.3s ease;
}

/* By default, show full logo */
.compact-logo {
  display: none;
}

/* When scrolled, switch logos */
header.scrolled .full-logo {
  display: none;
}

header.scrolled .compact-logo {
  display: inline-block;
  height: 48px; /* or adjust based on your icon */
}

nav a::before {
  background-color: var(--clr-azure); /* Updated to new color token */
}

.dropdown-menu {
  border-color: rgba(34, 51, 68, 0.1); /* Updated to new ink color with reduced opacity */
}

.dropdown-menu a:hover {
  background-color: rgba(154, 142, 255, 0.08); /* Updated to new lavender color with reduced opacity */
}

.theme-toggle::before {
  background-color: var(--clr-lavender); /* Updated to new color token */
}

.dark-theme .theme-toggle::before {
  background-color: var(--clr-lavender-deep); /* Updated to new deep lavender color */
}

/* Dark theme adjustments */
:root .dark-theme header {
  background-color: rgba(30, 30, 30, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

:root .dark-theme header.scrolled {
  background-color: rgba(25, 25, 25, 0.98);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
</style>