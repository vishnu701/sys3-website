<template>
  <div class="content">
    <!-- Main Hero -->
    <section id="courses-header" class="section courses-header">
      <div class="hero-content">
        <h1>Our <span class="gradient-text">AI Education</span> Courses</h1>
        <p>Comprehensive courses designed to transform your team with cutting-edge AI knowledge</p>
      </div>
    </section>

    <!-- Course Cards Section -->
    <section id="courses-grid" class="section courses-grid-section">
      <div class="section-content">
        <h2>Our <span class="gradient-text">Course Offerings</span></h2>
        <p class="section-description">Choose the educational track that matches your experience level</p>
        
        <!-- Course Level Tabs -->
        <div class="course-level-tabs">
          <button class="level-tab" :class="{ active: activeTab === 'high-school' }" @click="switchTab('high-school')">High School</button>
          <button class="level-tab" :class="{ active: activeTab === 'graduate' }" @click="switchTab('graduate')">Graduate & Corporate</button>
        </div>
        
        <!-- High School Level Courses -->
        <div class="courses-grid" :class="{ active: activeTab === 'high-school' }">
          <div v-for="course in highSchoolCourses" :key="course.id" class="course-card">
            <div class="course-image">
              <img :src="getIconPath(course.iconLight || course.icon)" alt="Course Icon" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" alt="Course Icon" class="dark-mode-icon" />
            </div>
            <div class="course-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${course.id}`" class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
        
        <!-- Graduate & Corporate Level Courses -->
        <div class="courses-grid" :class="{ active: activeTab === 'graduate' }">
          <div v-for="course in graduateCourses" :key="course.id" class="course-card">
            <div class="course-image">
              <img :src="getIconPath(course.iconLight || course.icon)" alt="Course Icon" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" alt="Course Icon" class="dark-mode-icon" />
              <div class="advanced-badge">Advanced</div>
            </div>
            <div class="course-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${course.id}`" class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Approach Section -->
    <section id="approach-section" class="section approach-section">
      <div class="section-content">
        <h2>Our <span class="gradient-text">Education Approach</span></h2>
        <p class="section-description">A blend of theory, practice, and real-world application</p>
        
        <div class="approach-grid">
          <div class="approach-item">
            <div class="approach-icon">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3>Flexible Learning</h3>
            <p>Courses designed to fit your team's schedule with both self-paced and instructor-led options.</p>
          </div>
          
          <div class="approach-item">
            <div class="approach-icon">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <h3>Hands-On Projects</h3>
            <p>Apply concepts to real-world challenges with guided projects and practical exercises.</p>
          </div>
          
          <div class="approach-item">
            <div class="approach-icon">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with extensive experience in AI implementation.</p>
          </div>
          
          <div class="approach-item">
            <div class="approach-icon">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3>Customizable Curriculum</h3>
            <p>Tailor the course content to address your organization's specific needs and challenges.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section id="cta-section" class="section cta-section">
      <div class="section-content">
        <h2>Ready to <span class="gradient-text">Transform</span> Your Team?</h2>
        <p>Contact us to discuss your educational needs and design a program that fits your goals.</p>
        <div class="cta-buttons">
          <RouterLink to="/contact" class="cta-button primary">Contact Us</RouterLink>
          <RouterLink to="/" class="cta-button secondary">Back to Home</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { courses } from '@/data/courses';
import { initSectionAnimations, initCardAnimations, initHeroAnimation } from '@/utils/animations';
import gsap from 'gsap';

// Course tab state
const activeTab = ref('high-school');

// Check for URL hash on component mount to determine initial tab
onMounted(() => {
  // Check if URL has an anchor (e.g., #graduate)
  const hash = window.location.hash;
  if (hash === '#graduate') {
    activeTab.value = 'graduate';
  }
  
  // Initialize animations
  initHeroAnimation('#courses-header');
  initSectionAnimations();
  initCardAnimations('.course-card, .approach-item');
});

// Function to handle tab switching
function switchTab(tab) {
  if (activeTab.value === tab) return; // Don't switch if already on this tab
  
  // Set active tab
  activeTab.value = tab;
  
  // Update URL hash without page refresh
  history.replaceState(null, null, tab === 'high-school' ? '#' : '#graduate');
  
  // Add a small delay to ensure Vue has updated the DOM
  setTimeout(() => {
    // Get the newly activated cards
    const cards = document.querySelectorAll(`.courses-grid.active .course-card`);
    
    // Reset any existing animations and set initial state
    gsap.set(cards, { opacity: 0, y: 30 });
    
    // Animate cards with staggered entry
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all"
    });
  }, 10);
}

// Split courses into categories
const highSchoolCourses = computed(() => {
  // In a real implementation, filter by a category property
  // For now, let's just use the first two courses
  return courses.slice(0, 2);
});

const graduateCourses = computed(() => {
  // Use the remaining courses for graduate level (4 courses)
  return courses.slice(2);
});

// Import SVG images for courses
import dataIconLight from '@/assets/images/data-science-icon-light.svg';
import dataIconDark from '@/assets/images/data-science-icon-dark.svg';
import mlIconLight from '@/assets/images/machine-learning-icon-light.svg';
import mlIconDark from '@/assets/images/machine-learning-icon-dark.svg';
import cvIconLight from '@/assets/images/computer-vision-icon-light.svg';
import cvIconDark from '@/assets/images/computer-vision-icon-dark.svg';
import nlpIconLight from '@/assets/images/nlp-icon-light.svg';
import nlpIconDark from '@/assets/images/nlp-icon-dark.svg';
import rlIconLight from '@/assets/images/reinforcement-learning-icon-light.svg';
import rlIconDark from '@/assets/images/reinforcement-learning-icon-dark.svg';
import llmopsIconLight from '@/assets/images/llmops-icon-light.svg';
import llmopsIconDark from '@/assets/images/llmops-icon-dark.svg';

// Helper to get icon path
function getIconPath(icon) {
  if (!icon) return '';
  
  // Map icons to imported assets
  const iconMap = {
    'data-science-icon-light.svg': dataIconLight,
    'data-science-icon-dark.svg': dataIconDark,
    'machine-learning-icon-light.svg': mlIconLight,
    'machine-learning-icon-dark.svg': mlIconDark,
    'computer-vision-icon-light.svg': cvIconLight,
    'computer-vision-icon-dark.svg': cvIconDark,
    'nlp-icon-light.svg': nlpIconLight,
    'nlp-icon-dark.svg': nlpIconDark,
    'reinforcement-learning-icon-light.svg': rlIconLight,
    'reinforcement-learning-icon-dark.svg': rlIconDark,
    'llmops-icon-light.svg': llmopsIconLight,
    'llmops-icon-dark.svg': llmopsIconDark
  };
  
  // Check if icon is in our map
  if (iconMap[icon]) {
    return iconMap[icon];
  }
  
  // If it's a full path, use it directly
  if (icon.startsWith('/')) return icon;
  
  // Fallback - assume it's a direct URL
  return icon;
}

// Helper to truncate long descriptions
function truncateDescription(text, maxLength = 100) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// No duplication - already defined above
</script>

<style scoped>
/* Courses Header Section */
.courses-header {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--color-bg);
  overflow: hidden;
  z-index: 1;
}

@media (max-width: 768px) {
  .courses-header {
    height: 40vh;
  }
}

@media (max-width: 480px) {
  .courses-header {
    height: 35vh;
  }
}

.courses-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.2), transparent 80%);
  opacity: 1;
  z-index: -1;
  backdrop-filter: none;
}

.courses-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(200, 180, 255, 0.15), transparent 70%);
  opacity: 0.8;
  z-index: -1;
}

.courses-header .hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 5;
  position: relative;
  animation: fadeIn 1s ease-in-out;
}

.courses-header .hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-text);
  position: relative;
  z-index: 5;
  letter-spacing: -0.5px;
}

.courses-header .hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  color: var(--color-text-secondary);
  font-weight: 400;
}

/* Course Level Tabs */
.course-level-tabs {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  position: relative;
  z-index: 1;
}

.course-level-tabs::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-border);
  z-index: -1;
}

.level-tab {
  padding: 0.8rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--color-text-secondary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  margin: 0 1rem;
}

.level-tab::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.level-tab:hover::after {
  transform: scaleX(0.8);
}

.level-tab.active {
  color: var(--color-primary);
}

.level-tab.active::after {
  transform: scaleX(1);
}

/* Courses Grid */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  visibility: hidden;
  position: absolute;
  opacity: 0;
  margin-top: 3rem;
  grid-gap: 2.5rem;
  pointer-events: none;
  margin-bottom: 2rem;
}

.courses-grid.active {
  position: relative;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}

@media (max-width: 1200px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
}

.course-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s ease;
  position: relative;
  min-height: 340px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Remove redundant media query */

.course-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.1);
  border-color: var(--color-primary);
}

.course-image {
  width: 100%;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.course-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.1), transparent 70%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.course-card:hover .course-image::after {
  opacity: 1;
}

.course-image img {
  width: auto;
  height: auto;
  max-width: 120px;
  max-height: 120px;
  object-fit: contain;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.course-card:hover .course-image img {
  transform: scale(1.08) translateY(-5px);
}

.advanced-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.course-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-content h3 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: var(--color-primary);
  font-weight: 600;
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
}

.course-content h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.course-card:hover .course-content h3::after {
  width: 60px;
}

.course-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.meta-icon {
  margin-right: 0.5rem;
  font-style: normal;
}

.course-content p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  min-height: 48px;
  overflow: hidden;
}

.course-topics {
  margin-bottom: 2rem;
}

.course-topics h4 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.course-topics ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0.5rem;
}

.course-topics li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.course-topics li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.more-topics {
  display: block;
  color: var(--color-primary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.course-link {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 1.5px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-align: center;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.course-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--color-primary);
  transition: width 0.3s ease;
  z-index: -1;
}

.course-link:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(138, 133, 255, 0.2);
}

.course-link:hover::before {
  width: 100%;
}

/* Approach Section */
.approach-section {
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  margin-top: 3rem;
}

.approach-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(138, 133, 255, 0.08), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(138, 133, 255, 0.08), transparent 50%);
  opacity: 0.6;
  z-index: 0;
}

.approach-section .section-content {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 0 2rem;
}

@media (max-width: 992px) {
  .approach-grid {
    gap: 2rem;
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
  
  .approach-section {
    padding: 4rem 0;
  }
}

.approach-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  text-align: center;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.approach-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
  z-index: 2;
}

.approach-icon {
  color: var(--color-primary);
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(138, 133, 255, 0.1);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.approach-item:hover .approach-icon {
  transform: scale(1.1);
  background: rgba(138, 133, 255, 0.2);
}

.approach-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  position: relative;
  padding-bottom: 0.8rem;
}

.approach-item h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  opacity: 0.7;
  transition: width 0.3s ease;
}

.approach-item:hover h3::after {
  width: 60px;
}

.approach-item p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 1.05rem;
}

/* CTA Section */
.cta-section {
  text-align: center;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2.5rem;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .course-card {
    flex-direction: column;
  }
  
  .course-image {
    width: 100%;
    height: 200px;
    min-width: unset;
  }
  
  .approach-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .courses-header .hero-content h1 {
    font-size: 3rem;
  }
  
  .approach-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .courses-header {
    height: 40vh;
  }
  
  .courses-header .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .course-level-tabs {
    flex-direction: row;
    width: 100%;
    gap: 0;
  }
  
  .level-tab {
    flex: 1;
    text-align: center;
    margin: 0;
    padding: 0.8rem 0.5rem;
    font-size: 0.95rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .courses-header .hero-content h1 {
    font-size: 2rem;
  }
  
  .course-content {
    padding: 1.5rem;
  }
  
  .course-content h3 {
    font-size: 1.5rem;
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Dark/Light mode specific styles */
:root .dark-theme .course-image {
  background: rgba(10, 10, 10, 0.3);
}

:root .dark-theme .course-content {
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.2), rgba(5, 5, 5, 0.1));
}

:root .dark-theme .approach-section {
  background-color: rgba(10, 10, 10, 0.5);
}

:root .dark-theme .course-card {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

:root .dark-theme .approach-item {
  background: rgba(25, 25, 35, 0.3);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

:root .light-theme .course-image {
  background: rgba(235, 235, 255, 0.5);
  border-bottom: 1px solid rgba(200, 200, 230, 0.3);
}

:root .light-theme .course-content {
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-text-dark);
}

:root .light-theme .course-content h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .course-content p {
  color: #2c3e50;
}

:root .light-theme .course-card {
  background: white;
  box-shadow: 0 8px 30px rgba(100, 100, 230, 0.12);
  border: 1px solid rgba(220, 220, 250, 0.5);
}

:root .light-theme .approach-section {
  background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%);
}

:root .light-theme .approach-item {
  background: white;
  box-shadow: 0 10px 25px rgba(100, 100, 250, 0.08);
  border: 1px solid rgba(220, 220, 250, 0.5);
}

:root .light-theme .approach-item h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .approach-item p {
  color: #2c3e50;
}

/* Icon visibility based on theme */
.light-mode-icon {
  display: block !important;
}

.dark-mode-icon {
  display: none !important;
}

:root .dark-theme .light-mode-icon {
  display: none !important;
}

:root .dark-theme .dark-mode-icon {
  display: block !important;
}

:root .light-theme .light-mode-icon {
  display: block !important;
}

:root .light-theme .dark-mode-icon {
  display: none !important;
}
</style>