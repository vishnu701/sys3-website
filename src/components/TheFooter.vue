<template>
  <footer>
    <div class="footer-container">
      <!-- Mobile-first: Logo and description at top -->
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-mark"></span>
          System<span class="gradient-text">3</span>
        </div>
        <p class="footer-description">
          Empowering organizations with advanced AI education and strategic consulting services.
        </p>
      </div>

      <!-- Compact link sections -->
      <div class="footer-nav">
        <div class="nav-section">
          <h4>Services</h4>
          <div class="nav-links">
            <RouterLink to="/education">Education</RouterLink>
            <RouterLink to="/consultancy">Consultancy</RouterLink>
            <RouterLink to="/courses">Courses</RouterLink>
            <a href="https://www.theepochtour.ai/" target="_blank" rel="noopener noreferrer">Workshops</a>
          </div>
        </div>
        
        <div class="nav-section">
          <h4>Company</h4>
          <div class="nav-links">
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
          </div>
        </div>
      </div>

      <!-- Social and copyright -->
      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/system3-company/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        
        <div class="footer-copyright">
          <p>© {{ currentYear }} System3. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Mobile-first Footer Design */
footer {
  background: linear-gradient(to bottom, #1A1F35, #0A0F1F);
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 1rem;
}

/* Brand section - Mobile first */
.footer-brand {
  text-align: center;
  margin-bottom: 2rem;
}

.footer-logo {
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: block;
}

.footer-description {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  font-size: 0.9rem;
  max-width: 280px;
  margin: 0 auto;
}

/* Navigation sections - Mobile first */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.nav-section {
  text-align: center;
}

.nav-section h4 {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  position: relative;
}

.nav-section h4::after {
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  background: linear-gradient(to right, #5842FF, #6585FE);
  margin: 0.5rem auto 0;
  border-radius: 1px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.nav-links a:hover,
.nav-links a:focus {
  color: white;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.5rem;
}

/* Footer bottom section */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover,
.social-link:focus {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.3);
}

.footer-copyright p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin: 0;
}

/* Tablet breakpoint - 768px and up */
@media (min-width: 768px) {
  .footer-container {
    padding: 3rem 2rem 2rem;
  }
  
  .footer-brand {
    text-align: left;
    margin-bottom: 2.5rem;
  }
  
  .footer-description {
    max-width: 400px;
    margin: 0;
    font-size: 1rem;
  }
  
  .footer-nav {
    flex-direction: row;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto 2.5rem;
  }
  
  .nav-section {
    text-align: left;
    flex: 1;
  }
  
  .nav-section h4::after {
    margin: 0.5rem 0 0;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
  }
  
  .footer-social {
    margin-bottom: 0;
    order: 2;
  }
  
  .footer-copyright {
    order: 1;
  }
}

/* Desktop breakpoint - 1024px and up */
@media (min-width: 1024px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    padding: 4rem 2rem 2rem;
  }
  
  .footer-brand {
    margin-bottom: 0;
  }
  
  .footer-logo {
    font-size: 1.75rem;
  }
  
  .footer-description {
    font-size: 1rem;
    max-width: none;
  }
  
  .footer-nav {
    margin-bottom: 0;
    grid-column: 2;
    grid-row: 1;
  }
  
  .footer-bottom {
    grid-column: 1 / -1;
    margin-top: 2rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .social-link,
  .nav-links a {
    transition: none;
  }
  
  .social-link:hover {
    transform: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .footer-description,
  .nav-links a,
  .footer-copyright p {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .nav-section h4::after {
    background: white;
  }
}
</style>