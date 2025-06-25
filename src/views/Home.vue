<template>
  <div class="content">
    <!-- Hero Section - Creative Split Layout -->
     <section id="hero-section" class="section hero">
      <!-- Background Elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <!-- Video Logo Mask -->
          <div class="masked-logo-video-wrapper">
            <video
              autoplay
              muted
              loop
              playsinline
              class="masked-logo-video"
              ref="maskedVideo"
            >
              <source :src="heroVideo" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          

          <!-- Right Text Section -->
          <div class="hero-text-container">
            <div class="hero-badge">Premium AI Solutions</div>
            <h1 class="hero-heading">
              <span class="gradient-text">Reshaping</span> Tomorrow with AI
            </h1>
            <p class="hero-paragraph">
              Education and consulting for organizations ready to transform the future with artificial intelligence.
            </p>
            <div class="cta-container">
              <RouterLink to="/education" class="cta-button primary">Explore Education</RouterLink>
              <RouterLink to="/consultancy" class="cta-button secondary">Explore Consulting</RouterLink>
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

    <!-- Services Section - Clean Minimal Layout -->
    <section id="services" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Services</span>
          <h2>How We <span class="gradient-text">Empower</span> You</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <img :src="educationIcon" alt="Education Icon" class="service-icon-img" loading="lazy" />
            </div>
            <h3>Premium Education</h3>
            <p>Expertly crafted AI education programs designed to empower individuals with actionable knowledge and skills.</p>
            <RouterLink to="/education" class="text-link">Explore programs <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img :src="consultingIcon" alt="Consulting Icon" class="service-icon-img" loading="lazy" />
            </div>
            <h3>Strategic Consulting</h3>
            <p>Tailored AI integration strategies to transform your organization with cutting-edge technology and expertise.</p>
            <RouterLink to="/consultancy" class="text-link">Our approach <span class="arrow">→</span></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section - Premium Minimalist Design -->
    <section id="education" class="section light-section">
      <div class="container">
        <div class="split-layout">
          <div class="split-content">
            <div class="section-header left">
              <span class="overline">Education</span>
              <h2>Exceptional <span class="gradient-text">Learning</span> Experience</h2>
              <div class="section-divider"></div>
            </div>
            
            <p class="large-text">Our innovative programs are designed to empower students with a premium and inspiring environment for mastering AI.</p>
            
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-number">01</div>
                <div class="feature-text">
                  <h4>Expert Faculty</h4>
                  <p>Learn directly from industry leaders and researchers with years of practical experience.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">02</div>
                <div class="feature-text">
                  <h4>Personalized Learning</h4>
                  <p>Custom-tailored courses that give you the competitive edge in today's market.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">03</div>
                <div class="feature-text">
                  <h4>Cutting-Edge Curriculum</h4>
                  <p>Meticulously designed content reflecting the latest advancements in AI technology.</p>
                </div>
              </div>
            </div>
            
            <RouterLink to="/education" class="cta-button primary">Explore Educational Programs</RouterLink>
          </div>
          
          <div class="split-visual">
            <div class="education-illustration-container">
              <video autoplay muted loop playsinline>
                <source :src="educationVideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <ChatAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consulting Section - Elegant Minimal Design -->
    <section id="consulting" class="section dark-section">
      <div class="container">
        <div class="split-layout reverse">
          <div class="split-content">
            <div class="section-header left">
              <span class="overline">Consulting</span>
              <h2>Strategic <span class="gradient-text">AI Integration</span></h2>
              <div class="section-divider"></div>
            </div>
            
            <p class="large-text">We provide tailored AI solutions to ensure your organization stays at the forefront of technological innovation.</p>
            
            <div class="service-grid">
              <div class="minimal-card">
                <h4>Strategic Guidance</h4>
                <p>Expert consultancy in AI integration and program development for forward-thinking organizations.</p>
              </div>
              
              <div class="minimal-card">
                <h4>Implementation Support</h4>
                <p>Hands-on assistance with seamless AI integration into your existing systems and workflows.</p>
              </div>
              
              <div class="minimal-card">
                <h4>Customized Solutions</h4>
                <p>Bespoke strategies designed specifically for your organization's unique challenges and goals.</p>
              </div>
              
              <div class="minimal-card">
                <h4>Ongoing Optimization</h4>
                <p>Continuous improvement of AI systems to maximize efficiency and return on investment.</p>
              </div>
            </div>
            
            <RouterLink to="/consultancy" class="cta-button primary">Discover Our Services</RouterLink>
          </div>
          
          <div class="split-visual">
            <div class="consulting-visualization-container">
              <video autoplay muted loop playsinline>
                <source :src="consultancyVideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <DataVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section - Ultra Minimal -->
    <section id="testimonials" class="section light-section">
      <div class="container narrow">
        <div class="section-header center">
          <span class="overline">Testimonials</span>
          <h2>What Our <span class="gradient-text">Clients</span> Say</h2>
          <div class="section-divider"></div>
        </div>
        
        <TestimonialSlider />
      </div>
    </section>

    <!-- FAQ Section - Clean and Minimal -->
    <section id="faq" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">FAQ</span>
          <h2>Common <span class="gradient-text">Questions</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <MinimalFaq :items="faqs" />
        
        <div class="cta-center">
          <RouterLink to="/contact" class="text-link large">Have more questions? Contact us <span class="arrow">→</span></RouterLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA - With Centered White Overlay -->
    <section id="contact-cta" class="section dark-section">
      <!-- Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="cta-video-bg"
      >
        <source :src="ctaVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Centered White CTA Card -->
      <div class="container">
        <div class="cta-content-overlay">
          <div class="section-header center">
            <span class="overline">Get Started</span>
            <h2>Ready to <span class="gradient-text-dark">Transform</span> Your Organization?</h2>
            <div class="section-divider"></div>
          </div>
          <p class="large-text">Connect with our experts to explore how our AI education and consulting services can drive your organization forward.</p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="cta-button primary">Get in Touch</RouterLink>
            <RouterLink to="/education" class="cta-button secondary">Explore Programs</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChatAnimation from '@/components/ChatAnimation.vue';
import DataVisualization from '@/components/DataVisualization.vue';
import TestimonialSlider from '@/components/TestimonialSlider.vue';
import MinimalFaq from '@/components/MinimalFaq.vue';
// import logoMask from '@/assets/logos/compact/logo_mask.svg';

// Import video assets
import heroVideo from '@/assets/hero.mp4';
import educationVideo from '@/assets/3.mp4';
import consultancyVideo from '@/assets/4.mp4';
import ctaVideo from '@/assets/2.mp4';

// Import image assets
import educationIcon from '@/assets/images/education-icon.svg';
import consultingIcon from '@/assets/images/consulting-icon.svg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// General FAQ data for homepage
const faqs = [
  {
    question: "What services does System3 offer?",
    answer: "We provide comprehensive AI education programs and strategic consulting services. Our education division offers expert-led courses and personalized learning experiences, while our consulting team helps organizations implement AI solutions tailored to their specific needs."
  },
  {
    question: "Who can benefit from your AI education programs?",
    answer: "Our programs are designed for professionals, students, and organizations looking to master AI technologies. Whether you're a beginner or have existing technical knowledge, we offer courses that match your skill level and career goals."
  },
  {
    question: "How does your consulting process work?",
    answer: "We follow a methodical approach: Discovery & Assessment, Strategy & Solution Design, Development & Implementation, and ongoing Monitoring & Optimization. Each project is tailored to your specific business objectives and technical requirements."
  },
  {
    question: "What makes System3 different from other AI companies?",
    answer: "We combine academic expertise with practical industry experience to deliver both education and implementation services. Our team of experts ensures you not only learn about AI but also successfully integrate it into your organization with ongoing support."
  }
];

// Initialize animations and particles
onMounted(() => {
  // Initialize premium minimal animations
  initializeAnimations();
});

// Premium animation system
const initializeAnimations = () => {
  // Hero section animations
  animateHeroSection();
  
  // Animate sections on scroll
  animateSectionsOnScroll();
  
  // Animate elements with parallax
  setupParallaxEffects();
};


// Hero animations
const animateHeroSection = () => {
  const heroTimeline = gsap.timeline();
  
  // Animate hero text elements
  heroTimeline
    .fromTo('.hero-text h1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-text p',
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
  heroTimeline.fromTo('.hero-visual',
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
    '-=1.8'
  );
  
  // Particles setup would go here
  // Simplified placeholder for particles
  setupMinimalParticles();
  
  // Animate scroll indicator
  heroTimeline.fromTo('.scroll-indicator',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
  );
};

// Simplified particles setup
const setupMinimalParticles = () => {
  // This would be implemented with a minimal particle library
  // or custom canvas-based particles for better performance
  console.log('Minimal particles initialized');
};

// Section animations on scroll
const animateSectionsOnScroll = () => {
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
  
  // Animate cards with stagger
  gsap.utils.toArray('.service-card, .minimal-card').forEach((card, i) => {
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
  
  // Feature items stagger animation
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
};

// Parallax effects
const setupParallaxEffects = () => {
  // Subtle parallax for visual elements
  gsap.utils.toArray('.split-visual, .illustration-placeholder').forEach(element => {
    gsap.to(element, {
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: element.closest('section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
  
  // Subtle parallax for grid backgrounds
  gsap.to('.hero-grid', {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
};


</script>

<style scoped>
/* Reset and Base */
* {
  box-sizing: border-box;
}

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

/* Typography System - Improved Hierarchy */
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
  color: #545454;
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

/* Section Divider - New Addition for Consistency */
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
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 48px;
  font-weight: 300;
  color: #545454;
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

/* Hero Section - Fixed Alignment & Improved Contrast */
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
  gap: 40px;
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Hero Video Container - Logo Mask with Soft Edges */
.masked-logo-video-wrapper {
  width: 480px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  overflow: hidden;
  
  /* Apply logo mask using direct path */
  -webkit-mask-image: url('@/assets/logos/compact/logo_mask.svg');
  mask-image: url('@/assets/logos/compact/logo_mask.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  
  /* Apply a subtle filter to soften the mask edges */
  filter: contrast(0.95) blur(0.5px);
}


.masked-logo-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
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
  font-family: 'Nourd', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-size: 56px;
  font-weight: 300;
  margin: 0 0 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #545454;
}

.hero-heading .gradient-text {
  font-weight: 500;
}

.hero-paragraph {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-size: 19px;
  margin: 0 0 40px;
  line-height: 1.7;
  color: #545454;
  font-weight: 300;
}

/* CTA Buttons - Improved Contrast */
.cta-container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-button {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 24px;
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
  color: #545454;
  border: 1px solid #D8D8D8;
}

.cta-button.secondary:hover {
  border-color: #545454;
  background: rgba(0, 0, 0, 0.02);
}

/* Dark Section Button Adjustments */
.dark-section .cta-button.primary {
  background: #FFFFFF;
  color: #545454;
  border-color: #FFFFFF;
}

.dark-section .cta-button.primary:hover {
  background: #F0F0F0;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
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

.text-link.large {
  font-size: 17px;
}

/* Scroll Indicator - Improved Visibility */
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

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  margin-top: 64px;
}

.service-card {
  padding: 48px;
  background: white;
  border-radius: 24px;
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
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #545454;
}

.service-card p {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  color: #545454;
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

/* Video Container for Split Sections */
.education-illustration-container,
.consulting-visualization-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 24px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

.education-illustration-container video,
.consulting-visualization-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  border-radius: 24px;
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
  color: #545454;
}

.feature-text p {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  margin: 0;
  line-height: 1.6;
  color: #545454;
  font-weight: 300;
  font-size: 15px;
}

/* Consulting Section - Dark Theme */
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 40px 0;
}

.minimal-card {
  padding: 36px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  transition: all 0.3s ease;
}

.minimal-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
}

.minimal-card h4 {
  font-size: 19px;
  font-weight: 500;
  margin: 0 0 12px;
  color: white;
}

.minimal-card p {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  font-size: 15px;
}

/* Testimonials */
.testimonial-slider-container {
  margin-top: 64px;
}

/* FAQ */
.minimal-faq {
  margin-top: 48px;
}

.cta-center {
  text-align: center;
  margin-top: 56px;
}

/* Contact CTA Section */
#contact-cta {
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
#contact-cta::before {
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
  border-radius: 24px;
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
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  margin-bottom: 40px;
  text-align: center;
  max-width: 100%;
  color: #545454;
}

.cta-content-overlay h2 {
  color: #545454;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Override dark section button styles for CTA section */
.cta-content-overlay .cta-button.primary {
  background: #0A0A0A;
  color: white;
  border: 1px solid #0A0A0A;
}

.cta-content-overlay .cta-button.primary:hover {
  background: #1A1A1A;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.cta-content-overlay .cta-button.secondary {
  background: transparent;
  color: #545454;
  border: 1px solid #D8D8D8;
}

.cta-content-overlay .cta-button.secondary:hover {
  border-color: #545454;
  background: rgba(0, 0, 0, 0.02);
}

.gradient-text-dark {
  background: linear-gradient(90deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CTA Button Variants */
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

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 100%;
  }
  
  .masked-logo-video-wrapper {
    width: 420px;
    height: 420px;
  }
  
  .split-visual {
    width: 480px;
  }
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    gap: 56px;
    max-width: 100%;
  }
  
  .masked-logo-video-wrapper {
    width: 100%;
    max-width: 480px;
    height: 480px;
  }
  
  .hero-text-container {
    max-width: 600px;
    min-width: auto;
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
  
  .service-grid {
    grid-template-columns: 1fr;
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
  }
  
  .cta-button {
    width: 100%;
    padding: 14px 28px;
    font-size: 14px;
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
  
  .minimal-card {
    padding: 24px;
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
  
  .masked-logo-video-wrapper {
    width: 320px;
    height: 320px;
  }
}
</style>