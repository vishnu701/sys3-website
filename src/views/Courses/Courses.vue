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
        <div id="graduate" class="course-level-tabs">
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
              <RouterLink :to="`/courses/${activeTab}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
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
              <RouterLink :to="`/courses/${activeTab}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
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
    <!-- <section id="cta-section" class="section cta-section">
      <div class="section-content">
        <h2>Ready to <span class="gradient-text">Transform</span> Your Team?</h2>
        <p>Contact us to discuss your educational needs and design a program that fits your goals.</p>
        <div class="cta-buttons">
          <RouterLink to="/contact" class="cta-button primary">Contact Us</RouterLink>
          <RouterLink to="/" class="cta-button secondary">Back to Home</RouterLink>
        </div>
      </div>
    </section> -->
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
  // Only Data Science, Machine Learning, and Computer Vision are available for high school level
  return courses.filter(course => 
    ['data-science', 'machine-learning', 'computer-vision'].includes(course.id)
  );
});

const graduateCourses = computed(() => {
  // All courses are available at graduate level
  return courses;
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #FFFFFF;
  overflow: hidden;
  z-index: 1;
  padding-top: 80px;
}

@media (max-width: 768px) {
  .courses-header {
    min-height: 70vh;
    padding-top: 80px;
  }
  
  .courses-header .hero-content {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .courses-header {
    min-height: 70vh;
    padding-top: 80px;
  }
  
  .courses-header .hero-content {
    padding: 0 1.5rem;
  }
  
  .courses-header .hero-content h1 {
    font-size: 28px;
    margin-bottom: 24px;
  }
  
  .courses-header .hero-content p {
    font-size: 16px;
    margin: 0 auto 24px;
  }
}

.courses-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(88, 66, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(101, 133, 254, 0.02) 0%, transparent 50%);
  z-index: -1;
}

.courses-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 66, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
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
  font-size: 56px;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.15;
  color: #545454;
  position: relative;
  z-index: 5;
  letter-spacing: -0.02em;
}

.courses-header .hero-content h1 .gradient-text {
  font-weight: 500;
}

.courses-header .hero-content p {
  font-size: 19px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
  color: #545454;
  font-weight: 300;
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
  background: #E8E8E8;
  z-index: -1;
}

.level-tab {
  padding: 0.8rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #545454;
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
  background: #5842FF;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.level-tab:hover::after {
  transform: scaleX(0.8);
}

.level-tab.active {
  color: #5842FF;
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
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 2rem;
    padding: 0 1rem;
  }
}

.course-card {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 24px;
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(88, 66, 255, 0.1);
  border-color: #5842FF;
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
  background: radial-gradient(circle at center, rgba(88, 66, 255, 0.1), transparent 70%);
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
  background: #5842FF;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 24px;
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
  font-size: 24px;
  margin-bottom: 16px;
  color: #5842FF;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  letter-spacing: -0.01em;
}

.course-content h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: #5842FF;
  transition: width 0.3s ease;
}

.course-card:hover .course-content h3::after {
  width: 60px;
}

.course-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  color: #545454;
  font-size: 0.95rem;
}

.meta-icon {
  margin-right: 0.5rem;
  font-style: normal;
}

.course-content p {
  margin-bottom: 24px;
  line-height: 1.7;
  min-height: 48px;
  overflow: hidden;
  color: #545454;
  font-weight: 300;
}

.course-topics {
  margin-bottom: 2rem;
}

.course-topics h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #545454;
  font-weight: 500;
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
  color: #545454;
  font-weight: 300;
  font-size: 15px;
}

.course-topics li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #5842FF;
  font-weight: bold;
}

.more-topics {
  display: block;
  color: #5842FF;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.course-link {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 1.5px solid #5842FF;
  color: #5842FF;
  border-radius: 24px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-align: center;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  margin-top: auto;
}

.course-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #5842FF;
  transition: width 0.3s ease;
  z-index: -1;
}

.course-link:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(88, 66, 255, 0.2);
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
  background: radial-gradient(circle at 20% 30%, rgba(88, 66, 255, 0.08), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(88, 66, 255, 0.08), transparent 50%);
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
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 24px;
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
  border-color: #5842FF;
  z-index: 2;
}

.approach-icon {
  color: #5842FF;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(88, 66, 255, 0.08);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.approach-item:hover .approach-icon {
  transform: scale(1.1);
  background: rgba(88, 66, 255, 0.1);
}

.approach-item h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #5842FF;
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.approach-item h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: #5842FF;
  opacity: 0.7;
  transition: width 0.3s ease;
}

.approach-item:hover h3::after {
  width: 60px;
}

.approach-item p {
  color: #545454;
  line-height: 1.7;
  font-size: 15px;
  font-weight: 300;
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
    font-size: 42px;
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
    font-size: 36px;
  }
  
  .courses-grid-section {
    padding: 3rem 0;
  }
  
  .courses-grid-section .section-content {
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .course-level-tabs {
    flex-direction: row;
    width: 100%;
    gap: 0;
    margin: 2rem 1rem 0;
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
  
  h2 {
    font-size: 36px;
    padding: 0 1rem;
  }
  
  .section-content .section-description {
    font-size: 17px;
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  .courses-header {
    padding: 0 1.5rem;
  }
  
  .courses-header .hero-content {
    padding: 0 1rem;
  }
  
  .courses-header .hero-content h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .courses-header .hero-content p {
    font-size: 16px;
    margin: 0 auto 20px;
  }
  
  .courses-grid-section .section-content {
    padding: 0 1.5rem;
  }
  
  .courses-grid {
    max-width: 100%;
    padding: 0 0.5rem;
    grid-gap: 1.5rem;
  }
  
  .course-card {
    min-height: 300px;
  }
  
  .course-content {
    padding: 1.5rem;
  }
  
  .course-content h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  .course-content p {
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  .course-image {
    height: 180px;
    padding: 1.5rem;
  }
  
  .course-image img {
    max-width: 100px;
    max-height: 100px;
  }
  
  h2 {
    font-size: 28px;
  }
  
  .section-content .section-description {
    font-size: 16px;
  }
  
  .course-level-tabs {
    margin: 2rem 0.5rem 0;
  }
  
  .level-tab {
    padding: 0.7rem 0.3rem;
    font-size: 0.9rem;
  }
  
  .approach-grid {
    padding: 0 0.5rem;
    grid-gap: 1.5rem;
  }
  
  .approach-item {
    padding: 2rem 1.5rem;
    min-height: 200px;
  }
  
  .approach-item h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  .approach-item p {
    font-size: 14px;
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Section Content Styling */
.section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #545454;
  text-align: center;
}

.section-content .section-description {
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 48px;
  font-weight: 300;
  color: #545454;
  max-width: 680px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.gradient-text {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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