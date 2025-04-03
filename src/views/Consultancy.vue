<template>
  <div class="content">
    <!-- Consultancy Hero Section -->
    <section id="consultancy-hero" class="section hero consultancy-hero">
      <div class="hero-content">
        <h1>AI <span class="gradient-text">Consultancy</span></h1>
        <p>Expert guidance to implement AI solutions tailored for your business challenges</p>
      </div>
    </section>

    <!-- About Consultancy Section -->
    <section id="about-consultancy" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">AI Solutions for Business</span></h2>
        <p class="section-description">Strategic AI implementation to revolutionize your operations</p>
        
        <div class="consultancy-about">
          <div class="about-text">
            <p>System3 Consultancy provides end-to-end AI implementation services to help businesses harness the transformative power of artificial intelligence. Our team of experts combines academic expertise with practical industry experience to deliver solutions that drive real business value.</p>
            <p>We take a strategic approach to AI implementation, ensuring that every solution is aligned with your business objectives and integrated seamlessly with your existing systems. From initial assessment and strategy development to implementation and ongoing support, we guide you through every step of your AI journey.</p>
            <div class="about-cta">
              <RouterLink to="/contact" class="cta-button primary">Get Started</RouterLink>
            </div>
          </div>
          <div class="about-image">
            <img src="@/assets/images/consulting-illustration.svg" alt="AI Consultancy Dashboard" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Our Services</span></h2>
        <p class="section-description">Comprehensive AI consultancy for every stage of your business</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-number">01</div>
            <h3>Strategy Development</h3>
            <p>Create a comprehensive AI roadmap aligned with your business objectives and industry positioning. We identify high-impact opportunities and develop a phased implementation plan.</p>
          </div>
          
          <div class="service-card">
            <div class="service-number">02</div>
            <h3>Custom Solutions</h3>
            <p>Develop tailored AI applications to solve your unique business challenges, from predictive analytics and natural language processing to computer vision and recommendation systems.</p>
          </div>
          
          <div class="service-card">
            <div class="service-number">03</div>
            <h3>Implementation Support</h3>
            <p>End-to-end guidance from conceptualization to deployment and maintenance. Our team works closely with yours to ensure smooth integration and knowledge transfer.</p>
          </div>
          
          <div class="service-card">
            <div class="service-number">04</div>
            <h3>Ethical AI Framework</h3>
            <p>Ensure your AI systems adhere to ethical standards and regulatory requirements. We help you build responsible AI systems that maintain trust with your customers and stakeholders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach Section -->
    <section id="approach-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Our Approach</span></h2>
        <p class="section-description">A methodical process for successful AI implementation</p>
        
        <div class="approach-steps">
          <div class="approach-step">
            <div class="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3>Discovery & Assessment</h3>
            <p>We start by understanding your business, its challenges, and objectives. Our experts conduct a comprehensive assessment of your existing systems, data infrastructure, and AI readiness.</p>
          </div>
          
          <div class="approach-step">
            <div class="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3>Strategy & Solution Design</h3>
            <p>Based on our findings, we develop a strategic roadmap and design custom AI solutions aligned with your business goals. This includes selecting the right technologies, algorithms, and implementation approach.</p>
          </div>
          
          <div class="approach-step">
            <div class="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>Development & Implementation</h3>
            <p>Our team of experts develops and implements the AI solutions, ensuring integration with your existing systems. We follow agile methodologies to deliver value incrementally and adapt to changing requirements.</p>
          </div>
          
          <div class="approach-step">
            <div class="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3>Monitoring & Optimization</h3>
            <p>We continuously monitor the performance of your AI systems, making necessary adjustments to improve accuracy and efficiency. Our team provides ongoing support to ensure long-term success.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section id="case-studies" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Success Stories</span></h2>
        <p class="section-description">Real-world AI implementations that delivered exceptional results</p>
        
        <div class="case-studies-grid">
          <div class="case-study-card">
            <div class="case-study-content">
              <h3>Retail Analytics Platform</h3>
              <p class="case-study-industry">Retail & E-commerce</p>
              <p class="case-study-description">Implemented a predictive analytics system that increased conversion rates by 24% and reduced inventory costs by 18% through accurate demand forecasting.</p>
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
          </div>
          
          <div class="case-study-card">
            <div class="case-study-content">
              <h3>Healthcare Diagnostic Tool</h3>
              <p class="case-study-industry">Healthcare</p>
              <p class="case-study-description">Developed an AI-powered diagnostic system that improved early detection rates by 35% and reduced diagnostic time by 60% for medical professionals.</p>
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
          </div>
          
          <div class="case-study-card">
            <div class="case-study-content">
              <h3>Financial Risk Assessment</h3>
              <p class="case-study-industry">Financial Services</p>
              <p class="case-study-description">Created a machine learning system for risk assessment that reduced fraud by 42% and improved credit decision accuracy by 28% for a leading financial institution.</p>
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
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="consultancy-faq" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Frequently Asked Questions</span></h2>
        <p class="section-description">Answers to common questions about our AI consultancy services</p>
        
        <div class="faq-container">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item" :class="{ 'active': activeFaq === index }">
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

    <!-- CTA Section -->
    <section id="consultancy-cta" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Transform Your Business</span></h2>
        <p class="section-description">Start your AI journey with expert guidance</p>
        
        <div class="cta-box">
          <h3>Ready to leverage the power of AI?</h3>
          <p>Schedule a consultation with our experts to discuss your business needs and explore how AI can drive growth and innovation for your organization.</p>
          <div class="cta-container">
            <RouterLink to="/contact" class="cta-button primary">Schedule Consultation</RouterLink>
            <RouterLink to="/about" class="cta-button secondary">Learn About Our Team</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initSectionAnimations, initCardAnimations, initHeroAnimation } from '@/utils/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// FAQ functionality
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

const activeFaq = ref(null);

function toggleFaq(index) {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
}

// Initialize animations
onMounted(() => {
  // Initialize standard animations
  initHeroAnimation('#consultancy-hero');
  initSectionAnimations();
  
  // Wait for layout to be fully ready
  setTimeout(() => {
    // Use GSAP's ScrollTrigger batch for better performance
    ScrollTrigger.batch('.service-card', {
      interval: 0.05, // time between batches
      batchMax: 4,    // maximum batch size
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
          force3D: true
        });
      },
      start: "top 85%"
    });
    
    // Pre-set the initial state
    gsap.set('.service-card', { opacity: 0, y: 30 });
    gsap.set('.approach-step', { opacity: 0, x: (i) => i % 2 === 0 ? -30 : 30 });
    gsap.set('.case-study-card', { opacity: 0, y: 30 });
    
    // Approach steps animation with simpler transform
    ScrollTrigger.batch('.approach-step', {
      interval: 0.05,
      batchMax: 4,
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
          force3D: true
        });
      },
      start: "top 85%"
    });
    
    // Case studies animation
    ScrollTrigger.batch('.case-study-card', {
      interval: 0.05,
      batchMax: 3,
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
          force3D: true
        });
      },
      start: "top 85%"
    });
    
    // FAQ items with simpler animation
    const faqItems = document.querySelectorAll('.faq-item');
    gsap.set(faqItems, { opacity: 0, y: 20 });
    gsap.to(faqItems, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.faq-container',
        start: "top 85%"
      }
    });
    
  }, 100); // Small delay to ensure DOM is ready
});
</script>

<style scoped>
/* Consultancy Hero Section */
.consultancy-hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-bg);
  overflow: hidden;
}

.consultancy-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.15), transparent 80%);
  opacity: 1;
  z-index: -1;
}

.consultancy-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(200, 180, 255, 0.1), transparent 70%);
  opacity: 0.8;
  z-index: -1;
}

.consultancy-hero .hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 5;
}

.consultancy-hero .hero-content h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.consultancy-hero .hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* About Consultancy Section */
.consultancy-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.about-cta {
  margin-top: 2rem;
}

.about-image img {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.about-image:hover img {
  transform: translateY(-10px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2.5rem;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.3s ease;
  position: relative;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-color: var(--color-primary);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.3s ease;
  will-change: transform, box-shadow;
}

.service-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.service-number::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--color-primary);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.service-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Approach Section */
.approach-steps {
  margin-top: 3rem;
}

.approach-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 4rem;
  position: relative;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.approach-step:last-child {
  margin-bottom: 0;
}

.step-icon {
  min-width: 60px;
  min-height: 60px;
  background: rgba(138, 133, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  color: var(--color-primary);
  transition: transform 0.3s ease, background 0.3s ease;
  border: 2px solid rgba(138, 133, 255, 0.3);
}

.step-icon svg {
  width: 30px;
  height: 30px;
}

.approach-step:hover .step-icon {
  transform: scale(1.1);
  background: rgba(138, 133, 255, 0.2);
}

.approach-step h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.approach-step p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Case Studies Section */
.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
}

.case-study-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2.5rem;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.3s ease;
  position: relative;
  overflow: hidden;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.case-study-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-color: var(--color-primary);
}

.case-study-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.case-study-industry {
  font-size: 0.9rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1.5rem;
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
  background: var(--color-primary);
}

.case-study-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.case-study-results {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
}

.result-item {
  display: flex;
  flex-direction: column;
}

.result-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.result-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}

/* FAQ Section */
.faq-container {
  margin-top: 3rem;
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-primary);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  position: relative;
}

.faq-question h3 {
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
  color: var(--color-text);
}

.faq-toggle {
  width: 20px;
  height: 20px;
  position: relative;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background: var(--color-primary);
  transition: all 0.3s ease;
}

.faq-toggle::before {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.faq-toggle::after {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.faq-item.active .faq-toggle::after {
  transform: translateX(-50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* CTA Section */
.cta-box {
  background: rgba(138, 133, 255, 0.05);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  padding: 3rem 2rem;
  margin-top: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(138, 133, 255, 0.15), transparent 70%);
  z-index: -1;
}

.cta-box h3 {
  font-size: 1.8rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.cta-box p {
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.cta-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .consultancy-about {
    gap: 3rem;
  }
  
  .case-studies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .consultancy-hero .hero-content h1 {
    font-size: 3.5rem;
  }
  
  .consultancy-about {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .approach-step {
    flex-direction: column;
  }
  
  .step-icon {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .consultancy-hero {
    height: 60vh;
  }
  
  .consultancy-hero .hero-content h1 {
    font-size: 3rem;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .case-study-results {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .consultancy-hero {
    height: 50vh;
  }
  
  .consultancy-hero .hero-content h1 {
    font-size: 2.5rem;
  }
}

/* Dark/Light mode specific styles */
:root .dark-theme .service-card,
:root .dark-theme .case-study-card,
:root .dark-theme .faq-item {
  background: rgba(30, 30, 40, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

:root .light-theme .service-card,
:root .light-theme .case-study-card,
:root .light-theme .faq-item {
  background: white;
  box-shadow: 0 8px 30px rgba(100, 100, 230, 0.08);
  border: 1px solid rgba(220, 220, 250, 0.5);
}

:root .light-theme .service-card h3,
:root .light-theme .case-study-card h3,
:root .light-theme .approach-step h3,
:root .light-theme .faq-question h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .service-card p,
:root .light-theme .case-study-description,
:root .light-theme .approach-step p,
:root .light-theme .faq-answer p {
  color: #2c3e50;
}

:root .light-theme .step-icon {
  background: rgba(235, 235, 255, 0.5);
  border: 2px solid rgba(138, 133, 255, 0.5);
}

:root .light-theme .cta-box {
  background: linear-gradient(135deg, rgba(245, 245, 255, 1) 0%, rgba(235, 235, 255, 1) 100%);
  border: 1px solid rgba(138, 133, 255, 0.5);
  box-shadow: 0 15px 40px rgba(100, 100, 230, 0.1);
}
</style>