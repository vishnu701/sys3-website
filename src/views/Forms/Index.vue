<template>
  <div class="content">
    <!-- Hero Section -->
    <section id="forms-hero" class="section hero">
      <!-- Background Elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
        <div class="hero-particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1>System3 <span class="gradient-text">Forms</span></h1>
          <p>Access our specialized forms for various programs and activities</p>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <p>SCROLL</p>
      </div>
    </section>

    <!-- Forms Directory Section -->
    <section id="forms-directory" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Forms Directory</span>
          <h2>Available <span class="gradient-text">Forms</span></h2>
          <div class="section-divider"></div>
          <p class="section-description">Select a form from the list below to get started</p>
        </div>
        
        <div class="forms-grid">
          <div class="form-card">
            <div class="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <div class="form-info">
              <h3>AI5 Form</h3>
              <p>Complete this form to facilitate forming groups for the AI5 course</p>
              <router-link to="/forms/ai5-form" class="form-button">Open Form</router-link>
            </div>
          </div>
          
          <div class="form-card">
            <div class="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"></path>
                <path d="M12 12L20 7.5"></path>
                <path d="M12 12V21"></path>
                <path d="M12 12L4 7.5"></path>
              </svg>
            </div>
            <div class="form-info">
              <h3>Course Registration</h3>
              <p>Register for the System3 AI X TIS Course – July 2025 (Indian Cohort) for high school students</p>
              <router-link to="/forms/course-registration" class="form-button">Open Form</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Add forms-page class for specific styling
  document.documentElement.classList.add('forms-page');
});
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

.section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

/* Section Headers */
.section-header {
  margin-bottom: 64px;
}

.section-header.center {
  text-align: center;
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
  color: white;
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
  color: white;
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

/* Forms Grid */
.forms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.form-card {
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

.form-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(88, 66, 255, 0.1);
}

.form-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  color: #5842FF;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(88, 66, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.form-card:hover .form-icon {
  transform: scale(1.1);
  background: rgba(88, 66, 255, 0.15);
}

.form-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-info h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
  color: #545454;
}

.form-info p {
  font-size: 16px;
  color: #545454;
  margin-bottom: 24px;
  line-height: 1.6;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  flex-grow: 1;
}

.form-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: #5842FF;
  color: white;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.2);
}

.form-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(88, 66, 255, 0.35);
  background: linear-gradient(135deg, #5842FF, #6585FE);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .forms-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
  
  .hero-content h1 {
    font-size: 42px;
  }
  
  h2 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 60vh;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .forms-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-card {
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
}
</style>