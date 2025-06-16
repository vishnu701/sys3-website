<template>
  <header :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <img :src="fullLogo" alt="System3 Full Logo" class="logo-img full-logo" />
          <img :src="compactLogo" alt="System3 Icon Logo" class="logo-img compact-logo" />
        </RouterLink>
      </div>
      
      <nav :class="{ active: isMenuOpen }">
        <ul>
          <li>
            <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
          </li>
          <li class="has-dropdown" :class="{ active: isDropdownOpen }">
            <div class="dropdown-header">
              <RouterLink to="/education" class="dropdown-link">Education</RouterLink>
              <span class="dropdown-arrow" :class="{ active: isDropdownOpen }" @click.stop="toggleDropdown">▼</span>
            </div>
            <ul class="dropdown-menu">
              <li><RouterLink to="/courses">Courses</RouterLink></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/consultancy" :class="{ active: $route.path === '/consultancy' }">Consultancy</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" :class="{ active: $route.path.includes('/blog') }">Blog</RouterLink>
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
import fullLogo from '@/assets/logos/full/logo.png';
import compactLogo from '@/assets/logos/compact/logo.png';

const route = useRoute();
const isDarkTheme = inject('isDarkTheme');
const toggleTheme = inject('toggleTheme');
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isDropdownOpen = ref(false);

// Handle scroll event to update header style
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  
  // If menu is open, prevent body scrolling and horizontal overflow
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
  } else {
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }
};

const toggleDropdown = (event) => {
  event.preventDefault();
  event.stopPropagation();
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (isMenuOpen.value && nav && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }
};

// Close menu when route changes
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
  // Removed scroll listener to keep header fixed
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
  // Removed scroll listener cleanup since we're not using it
  
  // Clean up any body modifications
  document.body.style.overflow = '';
  document.body.classList.remove('menu-open');
});

// Close mobile menu if window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }
  if (window.innerWidth > 768 && isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};
</script>

<style scoped>
/* Header container */
header {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 80px !important;
  z-index: 1000 !important;
  display: flex !important;
  justify-content: center !important;
  background-color: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
  visibility: visible !important;
  opacity: 1 !important;
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
  padding: 0 2rem;
}

/* Scrolled state - disabled to keep header fixed */
header.scrolled {
  /* Keep same styling as default header */
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

/* Logo positioning */
.logo {
  justify-self: start;
  z-index: 1002;
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
  height: 48px;
}

/* Navigation */
nav {
  justify-self: center;
  z-index: 1001;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
}

nav li {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

nav a {
  color: #404040;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #5842FF;
  transition: width 0.3s ease;
}

nav a:hover,
nav a.active {
  color: #5842FF;
}

nav a:hover::before,
nav a.active::before {
  width: 100%;
}

/* Desktop dropdown header */
.dropdown-header {
  display: contents;
}

.dropdown-arrow {
  display: none !important;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
}

/* Desktop dropdown link styling to match other nav items exactly */
.has-dropdown .dropdown-link {
  color: #404040;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  line-height: normal;
  pointer-events: auto !important;
  z-index: 1001;
  vertical-align: baseline;
  box-sizing: border-box;
}

.has-dropdown .dropdown-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #5842FF;
  transition: width 0.3s ease;
  transform: none;
  z-index: 1;
}

.has-dropdown:hover .dropdown-link,
.has-dropdown.active .dropdown-link {
  color: #5842FF;
}

.has-dropdown:hover .dropdown-link::before,
.has-dropdown.active .dropdown-link::before {
  width: 100%;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 200px;
  padding: 0.75rem 0;
  margin-top: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transform-origin: top center;
  transform: translateX(-50%) translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  z-index: 1002;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  text-align: center;
  transition: background-color 0.2s ease;
  font-size: 0.85rem;
  width: 100%;
}

.dropdown-menu a:hover {
  background-color: rgba(88, 66, 255, 0.1);
}

.dropdown-menu a::before {
  display: none;
}

/* Header actions */
.header-actions {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1002;
}

/* Mobile menu toggle - Override main.css styles */
header .menu-toggle {
  display: none !important;
  flex-direction: column !important;
  cursor: pointer;
  width: 24px !important;
  height: 18px !important;
  justify-content: space-between !important;
  z-index: 1003 !important;
  padding: 0 !important;
  margin: 0 !important;
  position: relative !important;
}

header .menu-toggle span {
  display: block !important;
  width: 100% !important;
  height: 2px !important;
  background-color: #404040 !important;
  border-radius: 1px !important;
  transition: all 0.3s ease !important;
  transform-origin: center !important;
  opacity: 1 !important;
  visibility: visible !important;
  margin: 0 !important;
  position: static !important;
}

header .menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px) !important;
}

header .menu-toggle.active span:nth-child(2) {
  opacity: 0 !important;
}

header .menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px) !important;
}

/* Mobile navigation styles */
@media (max-width: 768px) {
  header {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
  }
  
  body.menu-open {
    overflow-x: hidden;
  }
  
  header.scrolled {
    max-width: 100%;
    border-radius: 0;
    left: 0;
    transform: none;
    margin: 0;
    padding: 0;
  }
  
  .header-container {
    grid-template-columns: auto 1fr auto;
    padding: 0 1.5rem;
    max-width: 100%;
  }
  
  header.scrolled .header-container {
    padding: 0 1.5rem;
  }
  
  .logo {
    justify-self: start;
  }
  
  .full-logo,
  header.scrolled .compact-logo {
    height: 40px;
  }
  
  .header-actions {
    justify-self: end;
  }
  
  header .menu-toggle {
    display: flex !important;
  }
  
  nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--header-height));
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    padding-right: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    justify-self: stretch;
    box-sizing: border-box;
    max-width: 100vw;
    min-width: 100vw;
  }
  
  nav.active {
    transform: translateX(0);
  }
  
  nav ul {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  nav li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  nav li:last-child {
    border-bottom: none;
  }
  
  nav li.has-dropdown {
    border-bottom: none;
    width: 100%;
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
  }
  
  nav a {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.1rem;
    text-align: left;
    color: #404040;
    border-radius: 0;
  }
  
  .dropdown-header {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    position: relative;
    padding: 0 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    left: auto;
    right: auto;
    transform: none;
  }
  
  .dropdown-header a {
    flex: 1;
    padding: 1.5rem 0 !important;
    border-bottom: none !important;
    pointer-events: none;
    text-align: left;
  }
  
  .dropdown-arrow {
    display: block !important;
    padding: 1.5rem 0.5rem;
    font-size: 0.8rem;
    color: #5842FF;
    transition: transform 0.3s ease;
    user-select: none;
    flex-shrink: 0;
    width: auto;
    text-align: center;
    min-width: 30px;
  }
  
  .dropdown-arrow.active {
    transform: rotate(180deg);
  }
  
  nav a::before {
    display: none;
  }
  
  nav a:hover,
  nav a.active {
    color: #5842FF;
    padding-left: 1rem;
  }
  
  /* Mobile dropdown */
  .dropdown-menu {
    position: static !important;
    top: auto !important;
    left: 0 !important;
    transform: none !important;
    background: rgba(88, 66, 255, 0.05);
    border: none;
    border-radius: 0;
    margin: 0 !important;
    margin-top: 0 !important;
    padding: 0;
    opacity: 1 !important;
    visibility: visible !important;
    box-shadow: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    width: 100% !important;
    min-width: auto !important;
  }
  
  .dropdown-link {
    color: #404040;
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    width: auto;
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 1.5rem 0;
    margin: 0;
    transition: color 0.3s ease;
  }
  
  .dropdown-link:hover {
    color: #5842FF;
  }
  
  .has-dropdown.active .dropdown-menu {
    max-height: 200px;
    padding: 0.5rem 0;
    position: static !important;
    transform: none !important;
    left: auto !important;
    right: auto !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  .dropdown-menu li {
    border-bottom: none;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    position: static !important;
    left: auto !important;
    right: auto !important;
    margin: 0 !important;
    transform: none !important;
  }
  
  .dropdown-menu a {
    padding: 0.75rem 0 !important;
    padding-left: 2rem !important;
    padding-right: 1rem !important;
    font-size: 0.9rem !important;
    color: #5842FF !important;
    text-transform: none;
    font-weight: 500;
    display: block;
    border-bottom: none !important;
    background: transparent !important;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    position: relative;
    left: 0;
  }
  
  .dropdown-menu a:hover,
  .dropdown-menu a.active {
    background-color: rgba(88, 66, 255, 0.1) !important;
    padding-left: 2.5rem !important;
    color: #5842FF !important;
  }
  
  .dropdown-menu a::before {
    display: none !important;
  }
}

@media (max-width: 576px) {
  .header-container {
    padding: 0 1rem;
  }
  
  header.scrolled .header-container {
    padding: 0 1rem;
  }
  
  nav {
    padding: 1.5rem;
  }
  
  nav a {
    font-size: 1rem;
    padding: 1.25rem 0;
  }
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

.dark-theme .menu-toggle span {
  background-color: #ffffff;
}

.dark-theme nav {
  background: rgba(30, 30, 30, 0.98);
  border-top-color: rgba(255, 255, 255, 0.1);
}

.dark-theme nav a {
  color: #ffffff;
}

.dark-theme nav a:hover,
.dark-theme nav a.active {
  color: #A39AF5;
  background-color: rgba(163, 154, 245, 0.1);
}

.dark-theme .dropdown-menu {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-theme .dropdown-menu a {
  color: #A39AF5;
}

.dark-theme .dropdown-menu a:hover {
  background-color: rgba(163, 154, 245, 0.15);
}
</style>