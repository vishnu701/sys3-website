<template>
  <div class="content">
    <!-- Education Hero Section - Clean Minimal Design -->
    <section id="education-hero" class="section hero">
      <!-- Background Elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <!-- Education Video Visual -->
          <div class="education-visual-wrapper">
            <video
              autoplay
              muted
              loop
              playsinline
              class="education-hero-video"
            >
              <source src="@/assets/3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Right Text Section -->
          <div class="hero-text-container">
            <div class="hero-badge">Harvard University Faculty</div>
            <h1 class="hero-heading">
              System3 <span class="gradient-text">Education</span>
            </h1>
            <p class="hero-paragraph">
              Distinguished AI education led by Harvard's Scientific Program Director and Harvard's expert faculty
            </p>
            <div class="cta-container">
              <RouterLink to="/courses" class="cta-button primary">View Academic Programs</RouterLink>
              <RouterLink to="/contact" class="cta-button secondary">Apply for Admission</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-dots">
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>
        <p>SCROLL</p>
      </div>
    </section>

    <!-- About Education Section - Clean Layout -->
    <section id="about-education" class="section light-section">
      <div class="container">
        <div class="split-layout">
          <div class="split-content">
            <div class="section-header left">
              <span class="overline">Harvard Excellence</span>
              <h2>Academic <span class="gradient-text">Excellence</span></h2>
              <div class="section-divider"></div>
            </div>
            
            <p class="large-text">We deliver the rigorous academic standards of Harvard University, thoughtfully adapted for exceptional high school students</p>
            
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-number">01</div>
                <div class="feature-text">
                  <h4>Harvard-Caliber Education</h4>
                  <p>Under the direct guidance of Harvard's Scientific Program Director and faculty, we offer an unparalleled educational experience.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">02</div>
                <div class="feature-text">
                  <h4>Research-Level Projects</h4>
                  <p>Develop sophisticated AI applications of publication quality with guidance from Harvard researchers.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">03</div>
                <div class="feature-text">
                  <h4>Exclusive Learning Environment</h4>
                  <p>Small-cohort live instruction with personalized feedback and access to Harvard's educational methodology.</p>
                </div>
              </div>
            </div>
            
            <RouterLink to="/courses" class="cta-button primary">View Academic Curriculum</RouterLink>
          </div>
          
          <div class="split-visual">
            <div class="education-image-container">
              <img src="@/assets/images/people/PavlosTeaching.jpeg" alt="Harvard Education" class="education-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits-section" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Key Benefits</span>
          <h2>What Sets Us <span class="gradient-text">Apart</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/education-icon.svg" alt="Education Icon" class="service-icon-img" />
            </div>
            <h3>Harvard Faculty Instruction</h3>
            <p>Direct mentorship from Harvard University's distinguished Scientific Program Director and faculty members</p>
            <RouterLink to="/courses" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/consulting-icon.svg" alt="Consulting Icon" class="service-icon-img" />
            </div>
            <h3>Academic Excellence</h3>
            <p>Rigorous curriculum designed to the exacting standards of Harvard University's renowned AI programs</p>
            <RouterLink to="/courses" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/education-icon.svg" alt="Education Icon" class="service-icon-img" />
            </div>
            <h3>Distinguished Mentorship</h3>
            <p>Individual guidance from Harvard-affiliated instructors in an exclusive academic environment with limited enrollment</p>
            <RouterLink to="/courses" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Preview Section -->
    <section id="courses-preview" class="section light-section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Programs</span>
          <h2>Academic <span class="gradient-text">Courses</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <!-- Course Level Tabs -->
        <div class="course-level-tabs">
          <button class="level-tab" :class="{ active: activeTab === 'high-school' }" @click="switchTab('high-school')">
            <span class="tab-text">High School</span>
          </button>
          <button class="level-tab" :class="{ active: activeTab === 'graduate' }" @click="switchTab('graduate')">
            <span class="tab-text">Graduate & Corporate</span>
          </button>
        </div>
        
        <!-- High School Level Courses -->
        <div class="courses-preview-grid" :class="{ active: activeTab === 'high-school' }">
          <div v-for="(course, index) in highSchoolCourses" :key="course.id" class="course-preview-card" :style="{'--card-index': index}">
            <div class="course-image">
              <img :src="getIconPath(course.iconLight || course.icon)" :alt="course.title" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" :alt="course.title" class="dark-mode-icon" />
            </div>
            <div class="course-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
        
        <!-- Graduate & Corporate Level Courses -->
        <div class="courses-preview-grid" :class="{ active: activeTab === 'graduate' }">
          <div v-for="(course, index) in graduateCourses" :key="course.id" class="course-preview-card" :style="{'--card-index': index}">
            <div class="course-image">
              <img :src="getIconPath(course.iconLight || course.icon)" :alt="course.title" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" :alt="course.title" class="dark-mode-icon" />
              <div class="advanced-badge">Advanced</div>
            </div>
            <div class="course-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
        
        <div class="education-cta">
          <RouterLink :to="activeTab === 'high-school' ? '/courses' : '/courses#graduate'" class="cta-button primary">
            <span v-if="activeTab === 'high-school'">View All High School Courses</span>
            <span v-else>View All Graduate Courses</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials-section" class="section">
      <div class="container narrow">
        <div class="section-header center">
          <span class="overline">Success Stories</span>
          <h2>Alumni <span class="gradient-text">Testimonials</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <TestimonialSlider />
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="education-cta" class="section dark-section">
      <!-- Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="cta-video-bg"
      >
        <source src="@/assets/2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Centered White CTA Card -->
      <div class="container">
        <div class="cta-content-overlay">
          <div class="section-header center">
            <span class="overline">Get Started</span>
            <h2>Ready to <span class="gradient-text-dark">Transform</span> Your Future?</h2>
            <div class="section-divider"></div>
          </div>
          <p class="large-text">Join a select cohort of exceptional students in our Harvard-led educational programs and unlock your potential in artificial intelligence.</p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="cta-button primary">Apply for Admission</RouterLink>
            <RouterLink to="/courses" class="cta-button secondary">View All Courses</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { courses } from '@/data/courses';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TestimonialSlider from '@/components/TestimonialSlider.vue';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Course tabs state
const activeTab = ref('high-school');

// Function to handle tab switching
function switchTab(tab) {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
  
  setTimeout(() => {
    const cards = document.querySelectorAll(`.courses-preview-grid.active .course-preview-card`);
    const tl = gsap.timeline();
    
    tl.set(cards, { 
      opacity: 0, 
      y: 30
    });
    
    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out"
    });
  }, 10);
}

// Get high school courses (first 3 for preview)
const highSchoolCourses = computed(() => {
  return courses.slice(0, 3);
});

// Get graduate courses (the next 3 courses starting from index 2)
const graduateCourses = computed(() => {
  return courses.slice(2, 5);
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

// Helper to truncate long descriptions
function truncateDescription(text, maxLength = 100) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Helper to get the correct icon path
function getIconPath(icon) {
  if (!icon) return '';
  
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
  
  if (iconMap[icon]) {
    return iconMap[icon];
  }
  
  if (icon.startsWith('/')) return icon;
  return icon;
}

onMounted(() => {
  // Initialize animations matching the Home page style
  const heroTimeline = gsap.timeline();
  
  // Animate hero text elements
  heroTimeline
    .fromTo('.hero-text-container h1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-text-container p',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo('.cta-container',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );
  
  // Animate hero visual
  heroTimeline.fromTo('.education-visual-wrapper',
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
    '-=1.8'
  );
  
  // Animate scroll indicator
  heroTimeline.fromTo('.scroll-indicator',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
  );
  
  // Animate section headers on scroll
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Animate split layouts
  gsap.utils.toArray('.split-layout').forEach(split => {
    const content = split.querySelector('.split-content');
    const visual = split.querySelector('.split-visual');
    
    const splitTl = gsap.timeline({
      scrollTrigger: {
        trigger: split,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    
    splitTl
      .fromTo(content, 
        { x: split.classList.contains('reverse') ? 30 : -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(visual,
        { x: split.classList.contains('reverse') ? -30 : 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
  });
  
  // Animate service cards with stagger
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Animate feature items
  gsap.utils.toArray('.feature-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
});
</script>

<style scoped>
/* Container System */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.container.narrow {
  max-width: 900px;
}

/* Section Base */
.section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.light-section {
  background-color: #F9FAFB;
}

.dark-section {
  background-color: #0F0F0F;
  color: #fff;
}

/* Typography System */
.overline {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #5842FF;
  margin-bottom: 20px;
  display: inline-block;
}

.dark-section .overline {
  color: #8B7BFF;
}

h2 {
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #0A0A0A;
}

.dark-section h2 {
  color: #FFFFFF;
}

.section-header {
  margin-bottom: 64px;
}

.section-header.center {
  text-align: center;
}

.section-header.left {
  text-align: left;
}

/* Section Divider */
.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #5842FF, #6585FE);
  margin: 24px auto 0;
  border-radius: 2px;
}

.section-header.left .section-divider {
  margin-left: 0;
}

.large-text {
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 48px;
  font-weight: 300;
  color: #4A4A4A;
  max-width: 680px;
}

.dark-section .large-text {
  color: rgba(255, 255, 255, 0.8);
}

.gradient-text {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.gradient-text-dark {
  background: linear-gradient(90deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #FFFFFF;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(88, 66, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(101, 133, 254, 0.02) 0%, transparent 50%);
}

.hero-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 66, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Education Visual Container */
.education-visual-wrapper {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  background: transparent;
  margin-left: -30px;
  margin-bottom: -300px;
}

.education-hero-video {
  width: 160%;
  height: 160%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  
  /* ULTRA aggressive blending - starts fading from 15% */
  mask: radial-gradient(circle at center, 
    black 0%, 
    black 15%, 
    rgba(0,0,0,0.9) 25%, 
    rgba(0,0,0,0.7) 35%, 
    rgba(0,0,0,0.5) 45%, 
    rgba(0,0,0,0.3) 55%,
    rgba(0,0,0,0.15) 65%,
    rgba(0,0,0,0.05) 75%,
    transparent 85%);
  -webkit-mask: radial-gradient(circle at center, 
    black 0%, 
    black 15%, 
    rgba(0,0,0,0.9) 25%, 
    rgba(0,0,0,0.7) 35%, 
    rgba(0,0,0,0.5) 45%, 
    rgba(0,0,0,0.3) 55%,
    rgba(0,0,0,0.15) 65%,
    rgba(0,0,0,0.05) 75%,
    transparent 85%);
    
  /* Much stronger blur and scale for ultra-soft edges */
  transform: scale(1.3);
  filter: blur(3px);
}

/* Background blend overlay that matches the hero background */
.education-visual-wrapper::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  background: 
    radial-gradient(circle at 20% 50%, rgba(88, 66, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(101, 133, 254, 0.02) 0%, transparent 50%);
  z-index: 2;
  pointer-events: none;
  
  /* Inverse mask - only show at the edges where video fades */
  mask: radial-gradient(circle at center, 
    transparent 0%, 
    transparent 40%, 
    rgba(0,0,0,0.3) 55%, 
    rgba(0,0,0,0.7) 70%, 
    rgba(0,0,0,0.9) 80%,
    black 90%);
  -webkit-mask: radial-gradient(circle at center, 
    transparent 0%, 
    transparent 40%, 
    rgba(0,0,0,0.3) 55%, 
    rgba(0,0,0,0.7) 70%, 
    rgba(0,0,0,0.9) 80%,
    black 90%);
}

/* Grid pattern overlay for seamless blending */
.education-visual-wrapper::after {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  background-image: 
    linear-gradient(rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 66, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 3;
  pointer-events: none;
  
  /* Same inverse mask as background */
  mask: radial-gradient(circle at center, 
    transparent 0%, 
    transparent 40%, 
    rgba(0,0,0,0.3) 55%, 
    rgba(0,0,0,0.7) 70%, 
    rgba(0,0,0,0.9) 80%,
    black 90%);
  -webkit-mask: radial-gradient(circle at center, 
    transparent 0%, 
    transparent 40%, 
    rgba(0,0,0,0.3) 55%, 
    rgba(0,0,0,0.7) 70%, 
    rgba(0,0,0,0.9) 80%,
    black 90%);
}

/* Hero Text Container */
.hero-text-container {
  flex: 1;
  max-width: 600px;
  min-width: 450px;
}

.hero-badge {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(88, 66, 255, 0.08);
  border-radius: 24px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #5842FF;
  margin-bottom: 32px;
}

.hero-heading {
  font-size: 56px;
  font-weight: 300;
  margin: 0 0 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0A0A0A;
}

.hero-heading .gradient-text {
  font-weight: 500;
}

.hero-paragraph {
  font-size: 19px;
  margin: 0 0 40px;
  line-height: 1.7;
  color: #4A4A4A;
  font-weight: 300;
}

/* CTA Buttons */
.cta-container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.cta-button.primary {
  background: #0A0A0A;
  color: white;
  border: 1px solid #0A0A0A;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #1A1A1A;
}

.cta-button.secondary {
  background: transparent;
  color: #0A0A0A;
  border: 1px solid #D8D8D8;
}

.cta-button.secondary:hover {
  border-color: #0A0A0A;
  background: rgba(0, 0, 0, 0.02);
}

.cta-button.large {
  padding: 18px 40px;
  font-size: 16px;
}

.cta-button.dark {
  background: #0A0A0A;
  color: white;
  border: 1px solid #0A0A0A;
}

.cta-button.dark:hover {
  background: #1A1A1A;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Text Links */
.text-link {
  color: #5842FF;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
}

.text-link:hover {
  gap: 10px;
}

.text-link .arrow {
  transition: transform 0.3s ease;
}

.text-link:hover .arrow {
  transform: translateX(3px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  transition: opacity 0.3s ease;
  text-align: center;
}

.scroll-indicator:hover {
  opacity: 0.7;
}

.scroll-dots {
  width: 1px;
  height: 50px;
  background: #D8D8D8;
  margin: 0 auto 12px;
  position: relative;
  overflow: hidden;
}

.scroll-dots::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 15px;
  background: #0A0A0A;
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% { transform: translateY(-15px); }
  50% { transform: translateY(50px); }
  100% { transform: translateY(50px); }
}

.scroll-indicator p {
  font-size: 11px;
  letter-spacing: 2px;
  color: #8A8A8A;
  margin: 0;
  font-weight: 600;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-top: 64px;
}

.service-card {
  padding: 48px;
  background: white;
  border-radius: 12px;
  border: 1px solid #E8E8E8;
  transition: all 0.3s ease;
  position: relative;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #5842FF, #6585FE);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.service-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
  background: rgba(88, 66, 255, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5842FF;
}

.service-icon-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.service-card h3 {
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  color: #0A0A0A;
}

.service-card p {
  color: #4A4A4A;
  margin: 0 0 24px;
  line-height: 1.7;
  font-weight: 300;
}

/* Split Layout Sections */
.split-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.split-layout.reverse {
  flex-direction: row-reverse;
}

.split-content {
  flex: 1;
  max-width: 520px;
}

.split-visual {
  flex: 1;
  max-width: 520px;
  position: relative;
}

/* Education Image Container */
.education-image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

.education-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

/* Feature List */
.feature-list {
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.feature-item {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 24px;
  background: rgba(88, 66, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(88, 66, 255, 0.06);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(88, 66, 255, 0.04);
  border-color: rgba(88, 66, 255, 0.1);
  transform: translateX(6px);
}

.feature-number {
  font-size: 14px;
  font-weight: 700;
  color: #5842FF;
  background: rgba(88, 66, 255, 0.1);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 8px;
  color: #0A0A0A;
}

.feature-text p {
  margin: 0;
  line-height: 1.6;
  color: #4A4A4A;
  font-weight: 300;
  font-size: 15px;
}

/* Course Tabs */
.course-level-tabs {
  display: flex;
  justify-content: center;
  margin: 3rem 0 4rem;
  position: relative;
  z-index: 3;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid #E8E8E8;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.level-tab {
  padding: 0.9rem 2.5rem;
  background: transparent;
  border: none;
  color: #4A4A4A;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  margin: 0;
  border-radius: 30px;
  z-index: 2;
}

.level-tab.active {
  color: white;
  background: #5842FF;
}

.level-tab:hover {
  color: #5842FF;
}

/* Course Cards Grid */
.courses-preview-grid {
  display: grid;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  margin-top: 0;
  margin-bottom: 3rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
}

.courses-preview-grid.active {
  visibility: visible;
  position: relative;
  opacity: 1;
  pointer-events: auto;
}

.course-preview-card {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s ease;
  position: relative;
  min-height: 340px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(calc(var(--card-index) * 20px));
  opacity: 0;
  animation: cardEntrance 0.8s forwards;
  animation-delay: calc(var(--card-index) * 0.1s);
}

.course-preview-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(88, 66, 255, 0.1);
  border-color: #5842FF;
}

@keyframes cardEntrance {
  from {
    transform: translateY(60px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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

.course-preview-card:hover .course-image::after {
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

.course-preview-card:hover .course-image img {
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
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.course-badge {
  display: inline-block;
  background: rgba(38, 128, 255, 0.1);
  color: #2680FF;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  border: 1px solid rgba(38, 128, 255, 0.2);
}

.course-badge.advanced {
  background: rgba(246, 144, 127, 0.1);
  color: #F6907F;
  border-color: rgba(246, 144, 127, 0.2);
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
  color: #5842FF;
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
  background: #5842FF;
  transition: width 0.3s ease;
}

.course-preview-card:hover .course-content h3::after {
  width: 60px;
}

.course-content p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  min-height: 48px;
  overflow: hidden;
  color: #4A4A4A;
  font-weight: 300;
}

.course-link {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 1.5px solid #5842FF;
  color: #5842FF;
  border-radius: 6px;
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

/* Education page course cards inspired by courses page */

/* Education CTA */
.education-cta {
  text-align: center;
  margin-top: 3rem;
}

/* Contact CTA Section */
#education-cta {
  position: relative;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
}

/* Background Video - Fixed positioning */
.cta-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}

/* Simple overlay for readability */
#education-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* White CTA Card */
.cta-content-overlay {
  position: relative;
  z-index: 2;
  background: white;
  padding: 60px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  max-width: 700px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.cta-content-overlay .section-header {
  margin-bottom: 32px;
}

.cta-content-overlay .large-text {
  margin-bottom: 40px;
  text-align: center;
  max-width: 100%;
  color: #4A4A4A;
}

.cta-content-overlay h2 {
  color: #0A0A0A;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 100%;
  }
  
  .education-visual-wrapper {
    width: 320px;
    height: 320px;
    margin-bottom: 0;
  }
  
  .split-visual {
    width: 480px;
  }
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    gap: 56px;
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .education-visual-wrapper {
    width: 100%;
    max-width: 400px;
    height: 400px;
  }
  
  .hero-text-container {
    max-width: 600px;
    text-align: center;
    align-items: center;
  }
  
  .hero-badge {
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-container {
    justify-content: center;
  }
  
  .split-layout,
  .split-layout.reverse {
    flex-direction: column;
    gap: 56px;
  }
  
  .split-visual {
    width: 100%;
    max-width: 600px;
  }
  
  .split-content {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
  }
  
  .section-header.left {
    text-align: center;
  }
  
  .section-header.left .section-divider {
    margin: 24px auto 0;
  }
  
  .feature-list {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  .courses-preview-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .hero {
    min-height: auto;
    padding: 60px 0;
  }
  
  .hero-heading {
    font-size: 42px;
  }
  
  .hero-paragraph {
    font-size: 17px;
  }
  
  h2 {
    font-size: 36px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .courses-preview-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cta-content-overlay {
    padding: 50px 40px;
  }
  
  .cta-content-overlay h2 {
    font-size: 36px;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }
  
  .hero .container {
    padding: 0 32px;
  }
  
  .hero-text-container {
    padding: 0 16px;
  }
  
  .hero-paragraph {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .hero-heading {
    font-size: 32px;
    margin-bottom: 24px;
  }
  
  .hero-paragraph {
    font-size: 16px;
    margin-bottom: 32px;
  }
  
  .hero-badge {
    font-size: 12px;
    padding: 8px 16px;
  }
  
  .cta-container {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    align-items: center;
  }
  
  .cta-button {
    width: auto;
    min-width: 220px;
    max-width: 280px;
    padding: 14px 28px;
    font-size: 14px;
    text-align: center;
  }
  
  h2 {
    font-size: 28px;
  }
  
  .large-text {
    font-size: 17px;
  }
  
  .service-card {
    padding: 32px;
  }
  
  .feature-item {
    padding: 16px;
  }
  
  .cta-content-overlay {
    padding: 40px 24px;
  }
  
  .cta-content-overlay h2 {
    font-size: 28px;
  }
  
  .cta-content-overlay p {
    font-size: 16px;
  }
  
  .education-visual-wrapper {
    width: 280px;
    height: 280px;
  }
  
  .course-preview-card {
    min-height: 320px;
  }
  
  .course-content {
    padding: 1.5rem;
  }
  
  .course-image {
    height: 180px;
    padding: 1.5rem;
  }
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