<template>
  <div class="content">
    <!-- Consultancy Hero Section - Clean Minimal Design -->
    <section id="consultancy-hero" class="section hero">
      <!-- Background Elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <!-- Left Text Section -->
          <div class="hero-text-container">
            <div class="hero-badge">Premium Service</div>
            <h1 class="hero-heading">
              AI <span class="gradient-text">Consultancy</span>
            </h1>
            <p class="hero-paragraph">
              Expert guidance to implement AI solutions tailored for your business challenges
            </p>
            <div class="cta-container">
              <RouterLink to="/contact" class="cta-button primary">Get Started</RouterLink>
              <RouterLink to="/about" class="cta-button secondary">Learn More</RouterLink>
            </div>
          </div>

          <!-- Right Consultancy Video Visual -->
          <div class="consultancy-visual-wrapper">
            <video
              autoplay
              muted
              loop
              playsinline
              class="consultancy-hero-video"
            >
              <source src="@/assets/4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

    <!-- About Consultancy Section - Clean Layout -->
    <section id="about-consultancy" class="section light-section">
      <div class="container">
        <div class="split-layout">
          <div class="split-content">
            <div class="section-header left">
              <span class="overline">Our Focus</span>
              <h2>AI <span class="gradient-text">Solutions</span> for Business</h2>
              <div class="section-divider"></div>
            </div>
            
            <p class="large-text">System3 Consultancy provides end-to-end AI implementation services to help businesses harness the transformative power of artificial intelligence.</p>
            
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-number">01</div>
                <div class="feature-text">
                  <h4>Strategic Expertise</h4>
                  <p>Our team combines academic expertise with practical industry experience to deliver solutions that drive real business value.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">02</div>
                <div class="feature-text">
                  <h4>Seamless Integration</h4>
                  <p>We ensure every solution is aligned with your business objectives and integrated seamlessly with your existing systems.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">03</div>
                <div class="feature-text">
                  <h4>End-to-End Support</h4>
                  <p>From initial assessment and strategy development to implementation and ongoing support, we guide you through every step.</p>
                </div>
              </div>
            </div>
            
            <RouterLink to="/contact" class="cta-button primary">Start Your AI Journey</RouterLink>
          </div>
          
          <div class="split-visual">
              <DataVisualization />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section - Clean Minimal Layout -->
    <section id="services-section" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Services</span>
          <h2>Comprehensive <span class="gradient-text">AI Solutions</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/consulting-icon.svg" alt="Strategy Icon" class="service-icon-img" />
            </div>
            <h3>Strategy Development</h3>
            <p>Create a comprehensive AI roadmap aligned with your business objectives and industry positioning. We identify high-impact opportunities and develop a phased implementation plan.</p>
            <RouterLink to="/contact" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/machine-learning-icon.svg" alt="Custom Solutions Icon" class="service-icon-img" />
            </div>
            <h3>Custom Solutions</h3>
            <p>Develop tailored AI applications to solve your unique business challenges, from predictive analytics and natural language processing to computer vision and recommendation systems.</p>
            <RouterLink to="/contact" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/data-science-icon.svg" alt="Implementation Icon" class="service-icon-img" />
            </div>
            <h3>Implementation Support</h3>
            <p>End-to-end guidance from conceptualization to deployment and maintenance. Our team works closely with yours to ensure smooth integration and knowledge transfer.</p>
            <RouterLink to="/contact" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="@/assets/images/computer-vision-icon.svg" alt="Ethics Icon" class="service-icon-img" />
            </div>
            <h3>Ethical AI Framework</h3>
            <p>Ensure your AI systems adhere to ethical standards and regulatory requirements. We help you build responsible AI systems that maintain trust with your customers and stakeholders.</p>
            <RouterLink to="/contact" class="text-link">Learn more <span class="arrow">→</span></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach Section - Clean Layout -->
    <section id="approach-section" class="section light-section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Approach</span>
          <h2>A <span class="gradient-text">Methodical</span> Process</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-number">01</div>
            <div class="feature-text">
              <h4>Discovery & Assessment</h4>
              <p>We start by understanding your business, its challenges, and objectives. Our experts conduct a comprehensive assessment of your existing systems, data infrastructure, and AI readiness.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-number">02</div>
            <div class="feature-text">
              <h4>Strategy & Solution Design</h4>
              <p>Based on our findings, we develop a strategic roadmap and design custom AI solutions aligned with your business goals. This includes selecting the right technologies, algorithms, and implementation approach.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-number">03</div>
            <div class="feature-text">
              <h4>Development & Implementation</h4>
              <p>Our team of experts develops and implements the AI solutions, ensuring integration with your existing systems. We follow agile methodologies to deliver value incrementally and adapt to changing requirements.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-number">04</div>
            <div class="feature-text">
              <h4>Monitoring & Optimization</h4>
              <p>We continuously monitor the performance of your AI systems, making necessary adjustments to improve accuracy and efficiency. Our team provides ongoing support to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section - Clean Design -->
    <section id="case-studies" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Success Stories</span>
          <h2>Real <span class="gradient-text">Results</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="services-grid case-studies-grid">
          <div class="service-card case-study-card">
            <h3>Retail Analytics Platform</h3>
            <p class="case-study-industry">Retail & E-commerce</p>
            <p>Implemented a predictive analytics system that increased conversion rates by 24% and reduced inventory costs by 18% through accurate demand forecasting.</p>
            <div class="case-study-results">
              <div class="result-item">
                <span class="result-number">24%</span>
                <span class="result-label">Increased Conversions</span>
              </div>
              <div class="result-item">
                <span class="result-number">18%</span>
                <span class="result-label">Cost Reduction</span>
              </div>
            </div>
          </div>
          
          <div class="service-card case-study-card">
            <h3>Healthcare Diagnostic Tool</h3>
            <p class="case-study-industry">Healthcare</p>
            <p>Developed an AI-powered diagnostic system that improved early detection rates by 35% and reduced diagnostic time by 60% for medical professionals.</p>
            <div class="case-study-results">
              <div class="result-item">
                <span class="result-number">35%</span>
                <span class="result-label">Better Detection</span>
              </div>
              <div class="result-item">
                <span class="result-number">60%</span>
                <span class="result-label">Time Saved</span>
              </div>
            </div>
          </div>
          
          <div class="service-card case-study-card">
            <h3>Financial Risk Assessment</h3>
            <p class="case-study-industry">Financial Services</p>
            <p>Created a machine learning system for risk assessment that reduced fraud by 42% and improved credit decision accuracy by 28% for a leading financial institution.</p>
            <div class="case-study-results">
              <div class="result-item">
                <span class="result-number">42%</span>
                <span class="result-label">Fraud Reduction</span>
              </div>
              <div class="result-item">
                <span class="result-number">28%</span>
                <span class="result-label">Accuracy Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section - Using Minimal FAQ Component -->
    <section id="consultancy-faq" class="section">
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

    <!-- Contact CTA Section -->
    <section id="contact-cta" class="section dark-section">
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
            <h2>Ready to <span class="gradient-text-dark">Transform</span> Your Business?</h2>
            <div class="section-divider"></div>
          </div>
          <p class="large-text">Schedule a consultation with our experts to discuss your business needs and explore how AI can drive growth and innovation for your organization.</p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="cta-button primary">Schedule Consultation</RouterLink>
            <RouterLink to="/about" class="cta-button secondary">Learn About Us</RouterLink>
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
import MinimalFaq from '@/components/MinimalFaq.vue';
import DataVisualization from '@/components/DataVisualization.vue';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// FAQ items
const faqs = [
  {
    question: "How do I know if my organization is ready for AI?",
    answer: "We offer a comprehensive AI readiness assessment to evaluate your data infrastructure, technical capabilities, and strategic alignment. This helps determine your organization's preparedness and identifies areas for development."
  },
  {
    question: "What kind of ROI can we expect from AI implementation?",
    answer: "ROI varies based on your specific use case, industry, and implementation scope. Our clients typically see returns through efficiency gains, cost reduction, or revenue enhancement. We work with you to define clear KPIs and track performance."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines range from 2-6 months for initial solutions to 12+ months for enterprise-wide transformations. We follow an agile methodology with regular deliverables to ensure continuous progress and value creation."
  },
  {
    question: "Do you offer custom training for our team?",
    answer: "Yes, we offer customized training programs to help your team understand and work with the implemented AI solutions. Knowledge transfer is a key component of our approach to ensure long-term success and self-sufficiency."
  }
];

// Initialize animations
onMounted(() => {
  // Initialize animations matching the Home page style
  initializeAnimations();
});

// Animation system
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
  heroTimeline.fromTo('.consultancy-visual-wrapper',
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
    '-=1.8'
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
  
  // Case study cards with stagger
  gsap.utils.toArray('.case-study-card').forEach((card, i) => {
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
  
  // CTA box animation
  const ctaBox = document.querySelector('.cta-box');
  if (ctaBox) {
    gsap.fromTo(ctaBox,
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaBox,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
};

// Parallax effects
const setupParallaxEffects = () => {
  // Subtle parallax for visual elements
  gsap.utils.toArray('.split-visual').forEach(element => {
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
      trigger: '#consultancy-hero',
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
}

.container.narrow {
  max-width: 900px;
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
  color: #0A0A0A;
}

.dark-section h2 {
  color: #FFFFFF;
}

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

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.125rem;
  line-height: 1.5;
}

.dark-section .section-description {
  color: rgba(255, 255, 255, 0.8);
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

/* Hero Section - Clean Minimal Design */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #FFFFFF;
  padding: 120px 0;
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
  background: radial-gradient(circle at 80% 20%, rgba(88, 66, 255, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(101, 133, 254, 0.03) 0%, transparent 50%);
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

.hero-data-points {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(88, 66, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.2;
}

.hero-geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  overflow: hidden;
}

.hero-geometric-shapes::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 15%;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(88, 66, 255, 0.2);
  transform: rotate(45deg);
  opacity: 0.6;
  animation: float 12s ease-in-out infinite;
}

.hero-geometric-shapes::after {
  content: '';
  position: absolute;
  bottom: 25%;
  right: 12%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(101, 133, 254, 0.2);
  opacity: 0.6;
  animation: float 15s ease-in-out infinite reverse;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
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

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
}

.visual-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.visual-glow {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(88, 66, 255, 0.1) 0%, rgba(88, 66, 255, 0.03) 50%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(30px);
  z-index: -1;
  opacity: 0.8;
  animation: pulse 8s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.data-node {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #5842FF;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(88, 66, 255, 0.5);
  z-index: 2;
}

.node-1 {
  top: 30%;
  left: 30%;
  animation: float 10s ease-in-out infinite;
}

.node-2 {
  top: 70%;
  left: 20%;
  animation: float 8s ease-in-out infinite reverse;
}

.node-3 {
  top: 40%;
  right: 25%;
  animation: float 12s ease-in-out infinite 2s;
}

.data-connector {
  position: absolute;
  background: linear-gradient(90deg, #5842FF, rgba(101, 133, 254, 0.3));
  height: 1px;
  transform-origin: left center;
  z-index: 1;
}

.connector-1 {
  top: 35%;
  left: 35%;
  width: 120px;
  transform: rotate(30deg);
  animation: pulse-opacity 4s ease-in-out infinite;
}

.connector-2 {
  top: 65%;
  left: 25%;
  width: 150px;
  transform: rotate(-15deg);
  animation: pulse-opacity 6s ease-in-out infinite 1s;
}

.connector-3 {
  top: 45%;
  right: 30%;
  width: 100px;
  transform: rotate(-45deg);
  animation: pulse-opacity 5s ease-in-out infinite 0.5s;
}

@keyframes pulse-opacity {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, 10px); }
}

/* Premium Abstract AI Visualization */
.premium-ai-visual {
  width: 480px;
  height: 480px;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  perspective: 1200px;
  transform-style: preserve-3d;
  border-radius: 4px;
  overflow: hidden;
}

/* Premium Central Orb */
.central-orb {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  transform-style: preserve-3d;
  will-change: transform;
}

.orb-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.8), rgba(101, 133, 254, 0.7));
  box-shadow: 0 0 30px rgba(88, 66, 255, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.4);
  transform-style: preserve-3d;
  backdrop-filter: blur(5px);
  animation: subtle-float 12s ease-in-out infinite alternate;
}

.orb-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 20%,
    transparent 60%
  );
  border-radius: 50%;
}

.orb-glow {
  position: absolute;
  width: 180px;
  height: 180px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(88, 66, 255, 0.15) 0%,
    rgba(101, 133, 254, 0.08) 40%,
    transparent 70%
  );
  opacity: 0.7;
  animation: subtle-pulse 8s ease-in-out infinite alternate;
  will-change: opacity, transform;
}

/* Floating Planes */
.floating-plane {
  position: absolute;
  border-radius: 1px;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.07), rgba(255, 255, 255, 0.03));
  transform-style: preserve-3d;
  box-shadow: 0 0 20px rgba(88, 66, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: transform;
}

.plane-1 {
  width: 140px;
  height: 100px;
  top: 32%;
  left: 28%;
  transform: rotateX(60deg) rotateZ(15deg) translateZ(20px);
  animation: float-plane-1 15s ease-in-out infinite alternate;
}

.plane-2 {
  width: 120px;
  height: 90px;
  bottom: 32%;
  right: 28%;
  transform: rotateX(-50deg) rotateZ(-10deg) translateZ(30px);
  animation: float-plane-2 18s ease-in-out infinite alternate-reverse;
}

.plane-3 {
  width: 100px;
  height: 70px;
  bottom: 38%;
  left: 30%;
  transform: rotateX(40deg) rotateY(15deg) rotateZ(5deg) translateZ(15px);
  animation: float-plane-3 20s ease-in-out infinite alternate;
}

/* Data Paths */
.data-paths {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  z-index: 3;
}

.path {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.4), rgba(88, 66, 255, 0.01));
  overflow: visible;
  transform-style: preserve-3d;
  will-change: opacity;
}

.path-pulse {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #5842FF;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 8px rgba(88, 66, 255, 0.6);
  will-change: transform, opacity;
}

.path-1 {
  width: 140px;
  top: 42%;
  left: 30%;
  transform: rotate(-15deg);
}

.path-1 .path-pulse {
  animation: path-pulse-1 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.path-2 {
  width: 150px;
  bottom: 42%;
  right: 30%;
  transform: rotate(10deg);
}

.path-2 .path-pulse {
  animation: path-pulse-2 8s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s;
}

.path-3 {
  width: 120px;
  top: 30%;
  right: 35%;
  transform: rotate(-30deg);
}

.path-3 .path-pulse {
  animation: path-pulse-3 9s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.5s;
}

.path-4 {
  width: 130px;
  bottom: 38%;
  left: 33%;
  transform: rotate(25deg);
}

.path-4 .path-pulse {
  animation: path-pulse-4 7.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.5s;
}

/* Data Points */
.data-point {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(88, 66, 255, 0.8);
  border-radius: 50%;
  z-index: 6;
  box-shadow: 0 0 15px rgba(88, 66, 255, 0.4);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  will-change: transform;
}

.data-point:hover {
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(88, 66, 255, 0.6);
}

.data-point::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.point-1 {
  top: 42%;
  left: 22%;
  animation: float-subtle 10s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

.point-2 {
  top: 30%;
  right: 20%;
  animation: float-subtle 11s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate-reverse 0.7s;
}

.point-3 {
  bottom: 42%;
  right: 22%;
  animation: float-subtle 9s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate 1.3s;
}

.point-label {
  position: absolute;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.2px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.point-1 .point-label {
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
}

.point-2 .point-label {
  top: -15px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
}

.point-3 .point-label {
  top: 15px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
}

.data-point:hover .point-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Backdrop Elements */
.backdrop-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  z-index: 1;
  background: radial-gradient(circle, rgba(88, 66, 255, 0.3) 0%, rgba(101, 133, 254, 0.1) 70%, transparent 100%);
  animation: pulse-subtle 10s ease-in-out infinite alternate;
}

.element-1 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 10%;
  opacity: 0.08;
}

.element-2 {
  width: 250px;
  height: 250px;
  top: 20%;
  right: 5%;
  opacity: 0.05;
  animation-delay: 1s;
}

.element-3 {
  width: 150px;
  height: 150px;
  top: 75%;
  right: 20%;
  opacity: 0.06;
  animation-delay: 2s;
}

/* Insights Panel */
.insights-panel {
  position: absolute;
  bottom: 40px;
  right: 20px;
  width: 160px;
  height: 28px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
  border: 1px solid rgba(88, 66, 255, 0.1);
  animation: float-subtle 6s ease-in-out infinite alternate;
}

.panel-line {
  width: 2px;
  height: 14px;
  background: #5842FF;
  border-radius: 1px;
  margin-right: 10px;
}

.panel-label {
  font-size: 10px;
  color: #5842FF;
  font-weight: 600;
  letter-spacing: 0.5px;
  flex-grow: 1;
}

.panel-dots {
  display: flex;
  gap: 4px;
}

.panel-dots span {
  width: 4px;
  height: 4px;
  background: #5842FF;
  border-radius: 50%;
  opacity: 0.5;
}

.panel-dots span:nth-child(1) {
  animation: pulse-dot 2s ease-in-out infinite;
}

.panel-dots span:nth-child(2) {
  animation: pulse-dot 2s ease-in-out infinite 0.3s;
}

.panel-dots span:nth-child(3) {
  animation: pulse-dot 2s ease-in-out infinite 0.6s;
}

/* Accessibility Toggle */
.a11y-toggle {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(88, 66, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease;
  padding: 0;
}

.a11y-toggle:hover {
  background: white;
}

.premium-ai-visual.reduced-motion * {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}

/* Premium Animation Keyframes */
@keyframes float-plane-1 {
  0%, 100% {
    transform: rotateX(60deg) rotateZ(15deg) translateZ(20px);
  }
  50% {
    transform: rotateX(62deg) rotateZ(17deg) translateZ(25px) translateY(-5px);
  }
}

@keyframes float-plane-2 {
  0%, 100% {
    transform: rotateX(-50deg) rotateZ(-10deg) translateZ(30px);
  }
  50% {
    transform: rotateX(-53deg) rotateZ(-12deg) translateZ(35px) translateY(5px);
  }
}

@keyframes float-plane-3 {
  0%, 100% {
    transform: rotateX(40deg) rotateY(15deg) rotateZ(5deg) translateZ(15px);
  }
  50% {
    transform: rotateX(42deg) rotateY(17deg) rotateZ(7deg) translateZ(20px) translateX(-5px);
  }
}

@keyframes path-pulse-1 {
  0% {
    left: 0;
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

@keyframes path-pulse-2 {
  0% {
    right: 0;
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
}

@keyframes path-pulse-3 {
  0% {
    left: 0;
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

@keyframes path-pulse-4 {
  0% {
    right: 0;
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
}

@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
    opacity: 0.05;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

/* Strategic Node Positioning */
.node-1 {
  top: 25%;
  left: 30%;
  animation: subtle-float 8s ease-in-out infinite alternate;
}

.node-2 {
  top: 25%;
  right: 30%;
  animation: subtle-float 9s ease-in-out infinite alternate reverse;
}

.node-3 {
  bottom: 25%;
  left: 30%;
  animation: subtle-float 7s ease-in-out infinite alternate 1s;
}

.node-4 {
  bottom: 25%;
  right: 30%;
  animation: subtle-float 10s ease-in-out infinite alternate 1.5s;
}

.node-5 {
  top: 50%;
  right: 20%;
  animation: subtle-float 8s ease-in-out infinite alternate 0.5s;
}

/* Simplified Connection Lines */
.connection-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.connection-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.5), rgba(88, 66, 255, 0.1));
  transform-origin: center center;
  z-index: 1;
  opacity: 0.7;
}

/* Direct connections from hub to each node */
.line-1 {
  width: 90px;
  top: 26%;
  left: 36%;
  transform: rotate(-15deg) translateY(-50%);
  animation: elegant-pulse 10s ease-in-out infinite alternate;
}

.line-2 {
  width: 90px;
  top: 26%;
  right: 36%;
  transform: rotate(15deg) translateY(-50%);
  animation: elegant-pulse 12s ease-in-out infinite alternate 0.5s;
}

.line-3 {
  width: 90px;
  bottom: 26%;
  left: 36%;
  transform: rotate(15deg) translateY(50%);
  animation: elegant-pulse 11s ease-in-out infinite alternate 1s;
}

.line-4 {
  width: 90px;
  bottom: 26%;
  right: 36%;
  transform: rotate(-15deg) translateY(50%);
  animation: elegant-pulse 9s ease-in-out infinite alternate 1.5s;
}

.line-5 {
  width: 70px;
  top: 50%;
  right: 29%;
  transform: rotate(0deg) translateY(-50%);
  animation: elegant-pulse 10s ease-in-out infinite alternate 0.7s;
}

/* Motion Toggle Button */
.motion-toggle {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(88, 66, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
  z-index: 10;
}

.motion-toggle:hover {
  background: white;
}

.motion-icon {
  position: relative;
  width: 14px;
  height: 14px;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  border-radius: 50%;
}

.motion-icon::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 2px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.paused .motion-icon::after {
  content: '';
  position: absolute;
  height: 6px;
  width: 2px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Minimal Dashboard Element */
.dashboard {
  position: absolute;
  width: 130px;
  height: 60px;
  border: 1px solid rgba(88, 66, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 3;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 5px 15px rgba(88, 66, 255, 0.08);
}

.dashboard-header {
  font-size: 11px;
  font-weight: 600;
  color: #5842FF;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.dashboard.left {
  top: 20%;
  left: 10px;
  animation: subtle-float-dash 12s ease-in-out infinite alternate;
}

.dashboard-bar {
  position: relative;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.5), rgba(88, 66, 255, 0.2));
  border-radius: 2px;
  margin: 12px 0;
  overflow: hidden;
}

.dashboard-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  animation: elegant-scan 5s ease-in-out infinite;
}

.dashboard-indicator {
  position: relative;
  height: 16px;
  width: 16px;
  border: 1px solid rgba(88, 66, 255, 0.3);
  border-radius: 50%;
  background: white;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}

.dashboard-indicator::after {
  content: 'Active';
  font-size: 9px;
  color: #5842FF;
  font-weight: 600;
  position: relative;
  top: -4px;
  left: 2px;
}

/* Focused Data Particles */
.data-particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #5842FF;
  border-radius: 50%;
  opacity: 0.6;
  z-index: 4;
  box-shadow: 0 0 8px rgba(88, 66, 255, 0.4);
}

/* Position particles along connection lines for clear information flow */
.p1 {
  top: 26%;
  left: 36%;
  animation: elegant-flow 8s ease-in-out infinite alternate;
}

.p2 {
  top: 26%;
  right: 36%;
  animation: elegant-flow 9s ease-in-out infinite alternate 1s;
}

.p3 {
  bottom: 26%;
  left: 36%;
  animation: elegant-flow 8.5s ease-in-out infinite alternate 0.5s;
}

.p4 {
  bottom: 26%;
  right: 36%;
  animation: elegant-flow 9.5s ease-in-out infinite alternate 1.5s;
}

.p5 {
  top: 50%;
  right: 29%;
  animation: elegant-flow 8s ease-in-out infinite alternate 0.8s;
}

/* Reduced Motion Class for Accessibility */
.reduced-motion * {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}

/* Premium Animations */
@keyframes elegant-ripple {
  0% {
    width: 80px;
    height: 80px;
    opacity: 0.4;
  }
  100% {
    width: 180px;
    height: 180px;
    opacity: 0;
  }
}

@keyframes elegant-pulse-expand {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(3.5);
    opacity: 0;
  }
}

@keyframes elegant-flow {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0.6;
  }
  75% {
    transform: scale(0.6) translate(60px, 35px);
    opacity: 0.3;
  }
  100% {
    transform: scale(0) translate(120px, 70px);
    opacity: 0;
  }
}

@keyframes subtle-float-dash {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(5px);
  }
}

@keyframes soft-rotate {
  0% {
    transform: translate(-50%, -50%) rotateY(0) rotateX(0);
  }
  25% {
    transform: translate(-50%, -50%) rotateY(60deg) rotateX(5deg);
  }
  50% {
    transform: translate(-50%, -50%) rotateY(120deg) rotateX(0);
  }
  75% {
    transform: translate(-50%, -50%) rotateY(180deg) rotateX(-5deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateY(360deg) rotateX(0);
  }
}

@keyframes gentle-spin {
  0% {
    transform: translate(-50%, -50%) rotateX(60deg) rotateZ(0);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(60deg) rotateZ(360deg);
  }
}

@keyframes elegant-scan {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes elegant-stream {
  0% {
    left: -80%;
  }
  100% {
    left: 100%;
  }
}

@keyframes elegant-processing {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes elegant-trail-pulse {
  0%, 100% {
    opacity: 0.08;
    width: 75%;
  }
  50% {
    opacity: 0.3;
    width: 100%;
  }
}

@keyframes subtle-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.98);
    opacity: 0.9;
  }
}

@keyframes subtle-float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 5px);
  }
}

@keyframes elegant-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes shine {
  0% {
    transform: rotate(45deg) translateX(-100%);
  }
  20%, 100% {
    transform: rotate(45deg) translateX(150%);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}


/* CTA Buttons - Clean Home Page Style */
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

/* Text Links - Clean Home Page Style */
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

/* Scroll Indicator - Clean Home Page Style */
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

/* Services Grid - Clean Home Page Style */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

/* Split Layout - Clean Home Page Style */
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

/* Visualization Container for Split Sections */
.consulting-visualization-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

/* Feature List - Clean Home Page Style */
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

/* Service Grid for Case Studies - Clean Home Page Style */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0;
}

.minimal-card {
  padding: 36px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
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
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  font-size: 15px;
}

/* Case Study Cards - Clean Style */
.case-study-card {
  position: relative;
  overflow: hidden;
}

.case-study-industry {
  font-size: 14px;
  color: #5842FF;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

.case-study-industry::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: #5842FF;
}

.case-study-results {
  display: flex;
  gap: 24px;
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

.result-item {
  display: flex;
  flex-direction: column;
}

.result-number {
  font-size: 24px;
  font-weight: 700;
  color: #5842FF;
  line-height: 1;
}

.result-label {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 8px;
}

/* Contact CTA Section - Clean Home Page Style */
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
  color: #0A0A0A;
  border: 1px solid #D8D8D8;
}

.cta-content-overlay .cta-button.secondary:hover {
  border-color: #0A0A0A;
  background: rgba(0, 0, 0, 0.02);
}

.gradient-text-dark {
  background: linear-gradient(90deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-center {
  text-align: center;
  margin-top: 60px;
}

/* Hero Illustration */
.hero-illustration {
  width: 500px;
  height: auto;
  max-width: 100%;
}

/* Consultancy Video Container - Exact Education Style */
.consultancy-visual-wrapper {
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

.consultancy-hero-video {
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


/* Responsive Design - Clean Home Page Style */
@media (max-width: 1200px) {
  .container {
    max-width: 100%;
  }
  
  .consultancy-visual-wrapper {
    max-width: 450px;
    height: 350px;
  }
  .split-visual {
    width: 480px;
  }
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column-reverse;
    gap: 56px;
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .consultancy-visual-wrapper {
    width: 100%;
    max-width: 400px;
    height: 400px;
    margin-left: 0;
    margin-bottom: 0;
  }
  
  .scroll-indicator {
    display: none;
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
  
  .case-studies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .service-grid {
    grid-template-columns: 1fr;
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
  
  .services-grid,
  .case-studies-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content-overlay {
    padding: 60px 40px;
  }
  
  .cta-content-overlay h2 {
    font-size: 36px;
  }
  
  .feature-item {
    padding: 16px;
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

  .consultancy-visual-wrapper {
     width: 280px;
     height: 280px;
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
</style>