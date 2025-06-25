<template>
  <div class="content">
    <!-- Hero Section - Premium Design -->
    <section id="contact-hero" class="section hero">
      <!-- Subtle background elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
        <div class="hero-particles" id="contact-particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1>Get in <span class="gradient-text">Touch</span></h1>
          <p>We'd love to hear from you. Let's discuss how we can collaborate.</p>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <p>SCROLL</p>
      </div>
    </section>

    <!-- Contact Info Section - Premium Cards -->
    <section id="contact-info" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Contact Information</span>
          <h2>How to <span class="gradient-text">Reach</span> Us</h2>
          <div class="section-divider"></div>
          <p class="section-description">Reach out to us through any of these channels. Our team is ready to assist you.</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries: <a href="mailto:info@system3.company">info@system3.company</a></p>
            <p>For educational programs: <a href="mailto:anshika@system3.company">anshika@system3.company</a></p>
            <p>For consulting services: <a href="mailto:ignacio@system3.company">ignacio@system3.company</a></p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Harvard University</p>
            <p>Cambridge, MA 02138</p>
            <p>United States</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Connect</h3>
            <div class="social-links">
              <a href="https://linkedin.com/company/system3ai" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/system3ai" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section - Premium Design -->
    <section id="contact-form" class="section light-section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Get In Touch</span>
          <h2>Send Us a <span class="gradient-text">Message</span></h2>
          <div class="section-divider"></div>
          <p class="section-description">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>
        
        <!-- Contact Form Container -->
        <div class="form-container">
          <form id="contact-form-element" class="contact-form" @submit.prevent="handleSubmit">
            <!-- Name field -->
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="Your full name">
            </div>
            
            <!-- Email field -->
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="formData.email" required placeholder="Your email address">
            </div>
            
            <!-- Two column layout for phone and interest -->
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" v-model="formData.phone" placeholder="Your phone number (optional)">
              </div>
              
              <div class="form-group">
                <label for="interest">I'm interested in</label>
                <select id="interest" v-model="formData.interest" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="education">AI Education</option>
                  <option value="consulting">AI Consulting</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <!-- Message field -->
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="formData.message" rows="5" required placeholder="How can we help you?"></textarea>
            </div>
            
            <!-- Submit button -->
            <div class="form-submit">
              <button type="submit" class="cta-button primary" :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
          
          <!-- Success message (hidden initially) -->
          <div v-if="showSuccess" class="form-success-message">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Thank you for reaching out!</h3>
            <p>Your message has been received. We'll get back to you as soon as possible.</p>
            <button @click="resetForm" class="cta-button primary">Send Another Message</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section - Premium Design -->
    <section id="faq-section" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">FAQ</span>
          <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="faq-container">
          <div class="faq-item" 
               v-for="(faq, index) in faqs" 
               :key="index"
               :class="{ 'active': activeFaq === index }">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Contact form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
});

const submitting = ref(false);
const showSuccess = ref(false);

// Handle form submission
const handleSubmit = () => {
  submitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    // Store in localStorage for reference (simulates backend storage)
    localStorage.setItem('system3_contact_submission', JSON.stringify({
      timestamp: new Date().toISOString(),
      data: formData.value
    }));
    
    // Log form data to console
    console.log('Contact form submitted:', formData.value);
    
    // Show success message
    submitting.value = false;
    showSuccess.value = true;
  }, 1000);
};

// Reset form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };
  showSuccess.value = false;
};

// FAQ data
const faqs = ref([
  {
    question: "How quickly can you respond to inquiries?",
    answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate this in your message subject line."
  },
  {
    question: "Do you offer customized AI training programs?",
    answer: "Yes, we specialize in developing customized AI training programs tailored to your organization's specific needs and skill levels. Contact us with your requirements for a personalized consultation."
  },
  {
    question: "What information should I include in my initial inquiry?",
    answer: "For the most efficient response, please include details about your organization, the specific services you're interested in, your timeline, and any particular goals or challenges you're looking to address."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients globally and have experience delivering both remote and on-site services internationally. Our team spans multiple time zones to ensure responsive communication."
  }
]);

const activeFaq = ref(null);

// Toggle FAQ
const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

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
    .fromTo('#contact-hero .hero-content h1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('#contact-hero .hero-content p',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );
  
  // Animate scroll indicator
  heroTimeline.fromTo('.scroll-indicator',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
  );
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
  
  // Animate contact cards with stagger
  gsap.utils.toArray('.contact-card').forEach((card, i) => {
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
  
  // Form animation
  gsap.fromTo('.form-container',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.form-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  // FAQ items stagger animation
  gsap.utils.toArray('.faq-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1,
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
  // Subtle parallax for grid backgrounds
  gsap.to('.hero-grid', {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#contact-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
};
</script>

<style scoped>
/* Base styles for the minimal premium design */
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.container.narrow {
  max-width: 800px;
}

.section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.light-section {
  background-color: rgba(245, 247, 250, 0.5);
}

.dark-section {
  background-color: #0A0F1F;
  color: #fff;
}

/* Section Headers */
.section-header {
  margin-bottom: 64px;
}

.section-header.center {
  text-align: center;
}

.section-header.left {
  text-align: left;
}

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

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #5842FF, #6585FE);
  margin: 24px auto 0;
  border-radius: 2px;
}

.section-header.center .section-divider {
  margin: 24px auto 0;
}

.section-description {
  font-size: 19px;
  line-height: 1.8;
  max-width: 700px;
  margin: 20px auto 0;
  color: #545454;
  font-weight: 300;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: -30%;
  right: -20%;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(88, 66, 255, 0.05) 0%, rgba(101, 133, 254, 0.03) 50%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
}

.hero-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(88, 66, 255, 0.03) 1px, transparent 1px);
  opacity: 0.5;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 15;
}

.hero-content h1 {
  font-size: 56px;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #545454;
  position: relative;
  z-index: 5;
}

.hero-content h1 .gradient-text {
  font-weight: 500;
}

.hero-content p {
  font-size: 19px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
  color: #545454;
  font-weight: 300;
  text-align: center;
  position: relative;
  z-index: 5;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.gradient-text {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

[data-theme="light"] .hero {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(250, 250, 252, 0.97)) !important;
  box-shadow: inset 0 0 100px rgba(138, 133, 255, 0.08);
}

[data-theme="light"] .hero-content p {
  color: rgba(32, 33, 36, 0.85);
  font-weight: 500;
}

[data-theme="light"] .hero-content h1 {
  color: #545454;
  text-shadow: 0 2px 10px rgba(138, 133, 255, 0.08);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background-color: rgba(88, 66, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5842FF;
  animation: scrollDown 2s infinite;
}

.scroll-indicator p {
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

@keyframes scrollDown {
  0% {
    transform: translateY(-100%);
  }
  50%, 100% {
    transform: translateY(100%);
  }
}

/* Contact Info Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.contact-card {
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(88, 66, 255, 0.1);
}

.contact-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
  color: #5842FF;
}

.contact-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: #545454;
}

.contact-card p {
  font-size: 16px;
  color: #545454;
  margin-bottom: 8px;
  line-height: 1.6;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.contact-card a {
  color: #5842FF;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-card a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  justify-content: center;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5842FF;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #5842FF;
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Contact Form Section */
.form-container {
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  background: white;
  padding: 40px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.form-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(88, 66, 255, 0.1);
}

/* Form styling */
.contact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 24px;
  position: relative;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #545454;
  font-size: 15px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  color: #333;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #5842FF;
  box-shadow: 0 0 0 3px rgba(88, 66, 255, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transform: translateY(-1px);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, 0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 40px;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-submit {
  margin-top: 32px;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;
}

.cta-button.primary {
  background: #5842FF;
  color: white;
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.2);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(88, 66, 255, 0.35);
  background: linear-gradient(135deg, #5842FF, #6585FE);
}

.cta-button.primary:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(88, 66, 255, 0.25);
}

.cta-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Success message styling */
.form-success-message {
  text-align: center;
  padding: 20px 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: rgba(88, 66, 255, 0.1);
  border-radius: 50%;
  margin-bottom: 24px;
  position: relative;
  color: #5842FF;
}

.success-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.05);
  animation: pulse 2s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

.form-success-message h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #545454;
  font-weight: 600;
}

.form-success-message p {
  margin-bottom: 24px;
  font-size: 16px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: #545454;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* FAQ Section */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  overflow: hidden;
  background: white;
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(88, 66, 255, 0.08);
  border-color: rgba(88, 66, 255, 0.2);
}

.faq-question {
  padding: 20px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding-right: 32px;
  color: #545454;
  transition: color 0.3s ease;
}

.faq-item.active .faq-question h3 {
  color: #5842FF;
}

.faq-toggle {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background-color: #5842FF;
  transition: all 0.3s ease;
}

.faq-toggle::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
}

.faq-toggle::after {
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
}

.faq-item.active .faq-toggle::after {
  transform: translateX(-50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
  padding: 0 24px 24px;
  max-height: 300px;
}

.faq-answer p {
  color: #545454;
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Dark Theme Adjustments */
[data-theme="dark"] .contact-card,
[data-theme="dark"] .form-container,
[data-theme="dark"] .faq-item {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .contact-card h3,
[data-theme="dark"] .form-group label,
[data-theme="dark"] .faq-question h3,
[data-theme="dark"] .form-success-message h3 {
  color: white;
}

[data-theme="dark"] .contact-card p,
[data-theme="dark"] .faq-answer p,
[data-theme="dark"] .form-success-message p {
  color: rgba(255, 255, 255, 0.7);
}

[data-theme="dark"] .form-group input,
[data-theme="dark"] .form-group select,
[data-theme="dark"] .form-group textarea {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: white;
}

[data-theme="dark"] .form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .hero-content h1 {
    font-size: 48px;
  }
  
  .section {
    padding: 100px 0;
  }
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-content h1 {
    font-size: 42px;
  }
  
  .hero-content p {
    font-size: 18px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  h2 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .hero {
    height: 60vh;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .form-container {
    padding: 30px 20px;
  }
  
  .contact-card {
    padding: 30px 20px;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 50vh;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .cta-button {
    width: 100%;
  }
}
</style>