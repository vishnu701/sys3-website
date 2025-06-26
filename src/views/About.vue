<template>
  <div class="content">
    <!-- Hero Section - Premium Design -->
    <section id="about-hero" class="section hero">
      <!-- Subtle background elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
        <div class="hero-particles" id="about-particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1>About <span class="gradient-text">System3</span></h1>
          <p>Setting the global standard in AI education and driving innovation with world-class solutions</p>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <p>SCROLL</p>
      </div>
    </section>
    
    <!-- Vision Section - Clean Minimal -->
    <section id="vision-section" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Vision</span>
          <h2>Shaping the <span class="gradient-text">Future</span> of AI</h2>
          <div class="section-divider"></div>
        </div>
        
        <!-- Full width paragraphs -->
        <div class="vision-intro">
          <p class="large-text">
            At System3, we create an inspiring and innovative learning environment where students thrive. Our cutting-edge pedagogy ensures our courses are not only user-friendly but also equip students with the skills to excel in a rapidly evolving tech landscape.
          </p>
          <p class="large-text">
            We craft meticulously designed courses that ignite curiosity and passion, giving students the tools they need to excel, whether in healthcare, finance, art, or any field they choose. What sets us apart is our unwavering commitment to excellence.
          </p>
        </div>
        
        <!-- Feature list with aligned visual -->
        <div class="split-layout">
          <div class="split-content">
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-number">01</div>
                <div class="feature-text">
                  <h4>Innovation-Driven</h4>
                  <p>We consistently push boundaries in AI education with innovative teaching methods and curriculum design.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">02</div>
                <div class="feature-text">
                  <h4>Excellence-Focused</h4>
                  <p>We handpick top talent from premier institutions to ensure quality education at every level.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">03</div>
                <div class="feature-text">
                  <h4>Global Impact</h4>
                  <p>Our comprehensive approach ensures students are prepared to tackle real-world challenges across industries.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="split-visual">
            <div class="vision-animation-wrapper">
              <div class="ai-network-visualization">
                <!-- Central AI Node -->
                <div class="central-node">
                  <div class="node-core"></div>
                  <div class="node-ring"></div>
                  <div class="node-pulse"></div>
                </div>
                
                <!-- Orbiting Nodes -->
                <div class="orbit-container orbit-1">
                  <div class="orbit-node">
                    <div class="node-dot"></div>
                  </div>
                </div>
                <div class="orbit-container orbit-2">
                  <div class="orbit-node">
                    <div class="node-dot"></div>
                  </div>
                </div>
                <div class="orbit-container orbit-3">
                  <div class="orbit-node">
                    <div class="node-dot"></div>
                  </div>
                </div>
                <div class="orbit-container orbit-4">
                  <div class="orbit-node">
                    <div class="node-dot"></div>
                  </div>
                </div>
                <div class="orbit-container orbit-5">
                  <div class="orbit-node">
                    <div class="node-dot"></div>
                  </div>
                </div>
                
                <!-- Connecting Lines -->
                <div class="connection-lines">
                  <div class="connection-line line-1"></div>
                  <div class="connection-line line-2"></div>
                  <div class="connection-line line-3"></div>
                  <div class="connection-line line-4"></div>
                  <div class="connection-line line-5"></div>
                </div>
                
                <!-- Background Elements -->
                <div class="bg-particles">
                  <div class="particle"></div>
                  <div class="particle"></div>
                  <div class="particle"></div>
                  <div class="particle"></div>
                  <div class="particle"></div>
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Core Values Section - Premium Cards -->
    <section id="core-values-section" class="section light-section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Core Values</span>
          <h2>The <span class="gradient-text">Principles</span> That Guide Us</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in coreValues" :key="index">
            <div class="value-icon" v-html="value.icon"></div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section - Premium Profiles -->
    <section id="team-section" class="section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Our Team</span>
          <h2>Global <span class="gradient-text">Experts</span> Driving Excellence</h2>
          <div class="section-divider"></div>
          <p class="section-description">We're a global team from USA, India & Cyprus with diverse educational backgrounds and working experiences</p>
        </div>
        
        <!-- <div class="team-illustration-wrapper">
          <img src="/src/assets/images/team-illustration.svg" alt="Our Global Team" class="team-illustration">
        </div> -->
        
        <!-- Team Leaders -->
        <div class="team-leaders">
          <div class="team-leader" v-for="(leader, index) in teamLeaders" :key="index">
            <div class="leader-image">
              <img :src="leader.image" :alt="leader.name" :style="leader.imagePos ? `--pos-y: ${leader.imagePos};` : ''">
            </div>
            <div class="leader-info">
              <h3>{{ leader.name }}</h3>
              <p class="leader-title">{{ leader.title }}</p>
              <p class="leader-bio">{{ leader.bio }}</p>
              <div class="leader-links" v-if="leader.links">
                <a v-for="(link, linkIndex) in leader.links" :key="linkIndex" 
                   :href="link.url" target="_blank" class="harvard-link" :aria-label="link.label">
                  <span v-html="link.icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Team Members -->
        <div class="team-grid">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image">
              <img :src="member.image" :alt="member.name" :style="member.imagePos ? `--pos-y: ${member.imagePos};` : ''">
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-title">{{ member.title }}</p>
              <div class="member-social" v-if="member.socialLinks">
                <a v-for="(link, linkIndex) in member.socialLinks" :key="linkIndex"
                   :href="link.url" target="_blank" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA - Premium Design -->
    <!-- <section id="contact-cta" class="section dark-section">
      <div class="container narrow">
        <div class="cta-box">
          <h2>Ready to <span class="gradient-text">Connect</span> With Us?</h2>
          <p>Get in touch with our team to explore how we can help you achieve your AI education and consulting goals.</p>
          <RouterLink to="/contact" class="cta-button primary large">Contact Us</RouterLink>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink } from 'vue-router';

// Import team member images
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';
import vishnuImage from '@/assets/images/people/VishnuM.png';
import anshikaImage from '@/assets/images/people/AnshikaGupta.png';
import shibaniImage from '@/assets/images/people/ShibaniBudhraja.png';
import lakshayImage from '@/assets/images/people/LakshayChawla.png';
import nawangImage from '@/assets/images/people/NawangBhutia.png';
// import teamIllustration from '@/assets/images/team-illustration.svg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Core values data
const coreValues = ref([
  {
    title: "Integrity",
    description: "Transparency and ethical conduct in all our interactions.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>`
  },
  {
    title: "Collaboration",
    description: "Working together to achieve common goals with diverse perspectives.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`
  },
  {
    title: "Innovation",
    description: "Pushing boundaries in AI education and embracing new technologies.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>`
  },
  {
    title: "Accessibility",
    description: "Making AI education available to students of all backgrounds.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`
  },
  {
    title: "Expertise",
    description: "Combining academic excellence with practical experience.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`
  }
]);

// Harvard icon for leader links
const harvardIcon = `<svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3L3 9V11H29V9L16 3Z" fill="currentColor"/>
  <path d="M7 13V23H10V13H7Z" fill="currentColor"/>
  <path d="M13 13V23H16V13H13Z" fill="currentColor"/>
  <path d="M19 13V23H22V13H19Z" fill="currentColor"/>
  <path d="M25 13V23H28V13H25Z" fill="currentColor"/>
  <path d="M4 25V29H28V25H4Z" fill="currentColor"/>
</svg>`;

// LinkedIn icon - using simple text for now to test
const linkedInIcon = `in`;

// Team leaders data
const teamLeaders = ref([
  {
    name: "Dr. Pavlos Protopapas",
    title: "CEO and Founder",
    bio: "Pavlos is an educator and researcher. As an educator, Pavlos is teaching CS109A, CS109B, introduction to data science and advanced topics of data science. He also teaches a course in MLOps. In the past he has taught capstone courses in data science and computational science.",
    image: pavlosImage,
    imagePos: "15%",
    links: [
      {
        url: "https://seas.harvard.edu/person/pavlos-protopapas",
        label: "Harvard Directory",
        icon: harvardIcon
      }
    ]
  },
  {
    name: "Dr. Ignacio Becker",
    title: "Head of System3 Consulting",
    bio: "His main area of research is applied AI to astrophysical problems. Nowadays, he focuses on developing models to process the real-time data of the next generation of telescopes. He is the head of the consulting department in System 3.",
    image: ignacioImage,
    imagePos: "20%",
    links: [
      {
        url: "https://seas.harvard.edu/person/ignacio-becker-troncoso",
        label: "Harvard Directory",
        icon: harvardIcon
      }
    ]
  }
]);

// Team members data
const teamMembers = ref([
  {
    name: "Vishnu M",
    title: "Chief Technical Officer",
    image: vishnuImage,
    imagePos: "top",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/vishnu701/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Anshika Gupta",
    title: "AI Solutions Consultant | Head of Educational Programs",
    image: anshikaImage,
    imagePos: "10%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/iamanshika/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Shibani Budhraja",
    title: "Senior Data Scientist",
    image: shibaniImage,
    imagePos: "20%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/shibanibudhraja/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Lakshay Chawla",
    title: "Data Scientist",
    image: lakshayImage,
    imagePos: "15%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/lakshaychawla13/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Nawang Thinley Bhutia",
    title: "Data Scientist",
    image: nawangImage,
    imagePos: "10%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/nawang-thinley-bhutia-0158bb218/",
        icon: linkedInIcon
      }
    ]
  },
  // {
  //   name: "Nicholas Koundouros",
  //   title: "Market Head",
  //   image: "/src/assets/images/people/Nick.jpeg",
  //   imagePos: "25%",
  //   socialLinks: [
  //     {
  //       url: "#",
  //       icon: linkedInIcon
  //     }
  //   ]
  // }
]);

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
    .fromTo('#about-hero .hero-content h1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('#about-hero .hero-content p',
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
  
  // Animate split layout
  const splitLayout = document.querySelector('.split-layout');
  if (splitLayout) {
    const content = splitLayout.querySelector('.split-content');
    const visual = splitLayout.querySelector('.split-visual');
    
    const splitTl = gsap.timeline({
      scrollTrigger: {
        trigger: splitLayout,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    
    splitTl
      .fromTo(content, 
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(visual,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
  }
  
  // Animate value cards with stagger
  gsap.utils.toArray('.value-card').forEach((card, i) => {
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
  
  // Optimized team leaders animation
  const teamLeaders = gsap.utils.toArray('.team-leader');
  if (teamLeaders.length > 0) {
    gsap.set(teamLeaders, { y: 60, opacity: 0 });
    
    ScrollTrigger.create({
      trigger: '.team-leaders',
      start: 'top 80%',
      onEnter: () => {
        gsap.to(teamLeaders, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: {
            amount: 0.3,
            ease: 'power2.out'
          },
          ease: 'back.out(1.2)'
        });
      },
      once: true
    });
  }
  
  // Optimized team members animation
  const teamMembers = gsap.utils.toArray('.team-member');
  if (teamMembers.length > 0) {
    gsap.set(teamMembers, { y: 60, opacity: 0, scale: 0.9 });
    
    ScrollTrigger.create({
      trigger: '.team-grid',
      start: 'top 75%',
      onEnter: () => {
        gsap.to(teamMembers, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: {
            amount: 0.6,
            grid: [2, 3], // Assumes 2 columns on tablet, 3 on desktop
            from: 'start',
            ease: 'power2.out'
          },
          ease: 'back.out(1.1)'
        });
      },
      once: true
    });
  }
  
  // CTA box animation
  gsap.fromTo('.cta-box',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-box',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
};

// Parallax effects
const setupParallaxEffects = () => {
  // Subtle parallax for visual elements
  gsap.utils.toArray('.split-visual, .team-illustration-wrapper').forEach(element => {
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
      trigger: '#about-hero',
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
  color: #A39AF5;
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
  background: linear-gradient(to right, #5842FF, #6585FE);
  margin: 24px 0;
  border-radius: 1.5px;
}

.section-header.center .section-divider {
  margin: 24px auto;
}

.section-description {
  font-size: 18px;
  line-height: 1.6;
  max-width: 700px;
  margin: 20px auto 0;
  color: var(--color-text-secondary);
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.large-text {
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 48px;
  font-weight: 300;
  color: #545454;
  max-width: 680px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.dark-section .large-text {
  color: rgba(255, 255, 255, 0.8);
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

/* Vision Intro - Full Width */
.vision-intro {
  max-width: 100%;
  margin-bottom: 64px;
}

.vision-intro .large-text {
  max-width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* Split Layout */
.split-layout {
  display: flex;
  align-items: center;
  gap: 80px;
}

.split-layout.reverse {
  flex-direction: row-reverse;
}

.split-content {
  flex: 1;
}

.split-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vision-animation-wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}

.split-visual:hover .vision-animation-wrapper {
  transform: translateY(-5px);
}

/* AI Network Visualization - Performance Optimized */
.ai-network-visualization {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Central Node */
.central-node {
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 10;
  will-change: transform;
  transform: translateZ(0);
}

.node-core {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(88, 66, 255, 0.4);
  will-change: transform;
  transform: translateZ(0);
}

.node-ring {
  position: absolute;
  width: 120%;
  height: 120%;
  border: 2px solid rgba(88, 66, 255, 0.3);
  border-radius: 50%;
  top: -10%;
  left: -10%;
  animation: smoothRotate 30s linear infinite;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.node-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(88, 66, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: smoothPulse 6s ease-in-out infinite;
  will-change: opacity, transform;
  transform: translateZ(0);
}

/* Orbiting Nodes */
.orbit-container {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(88, 66, 255, 0.15);
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.orbit-1 {
  width: 160px;
  height: 160px;
  animation: smoothRotate 40s linear infinite;
}

.orbit-2 {
  width: 200px;
  height: 200px;
  animation: smoothRotateReverse 50s linear infinite;
}

.orbit-3 {
  width: 240px;
  height: 240px;
  animation: smoothRotate 60s linear infinite;
}

.orbit-4 {
  width: 280px;
  height: 280px;
  animation: smoothRotateReverse 70s linear infinite;
}

.orbit-5 {
  width: 320px;
  height: 320px;
  animation: smoothRotate 80s linear infinite;
}

.orbit-node {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.node-dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(88, 66, 255, 0.6);
  animation: subtleGlow 4s ease-in-out infinite alternate;
  will-change: opacity;
  transform: translateZ(0);
}

/* Connection Lines */
.connection-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: opacity;
  transform: translateZ(0);
}

.connection-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.4), transparent);
  transform-origin: center;
  will-change: opacity;
  backface-visibility: hidden;
}

.line-1 {
  width: 80px;
  top: 50%;
  left: 40px;
  transform: rotate(0deg) translateZ(0);
  animation: smoothFade 8s ease-in-out infinite;
}

.line-2 {
  width: 100px;
  top: 50%;
  left: 40px;
  transform: rotate(72deg) translateZ(0);
  animation: smoothFade 8s ease-in-out infinite 1.6s;
}

.line-3 {
  width: 120px;
  top: 50%;
  left: 40px;
  transform: rotate(144deg) translateZ(0);
  animation: smoothFade 8s ease-in-out infinite 3.2s;
}

.line-4 {
  width: 140px;
  top: 50%;
  left: 40px;
  transform: rotate(216deg) translateZ(0);
  animation: smoothFade 8s ease-in-out infinite 4.8s;
}

.line-5 {
  width: 160px;
  top: 50%;
  left: 40px;
  transform: rotate(288deg) translateZ(0);
  animation: smoothFade 8s ease-in-out infinite 6.4s;
}

/* Background Particles */
.bg-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(88, 66, 255, 0.3);
  border-radius: 50%;
  animation: gentleFloat 12s ease-in-out infinite;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 80%;
  left: 20%;
  animation-delay: 2s;
}

.particle:nth-child(3) {
  top: 30%;
  right: 10%;
  animation-delay: 4s;
}

.particle:nth-child(4) {
  bottom: 20%;
  right: 20%;
  animation-delay: 6s;
}

.particle:nth-child(5) {
  top: 60%;
  left: 50%;
  animation-delay: 8s;
}

.particle:nth-child(6) {
  bottom: 40%;
  left: 80%;
  animation-delay: 10s;
}

/* Hardware-Accelerated Animations */
@keyframes smoothRotate {
  from {
    transform: rotate(0deg) translateZ(0);
  }
  to {
    transform: rotate(360deg) translateZ(0);
  }
}

@keyframes smoothRotateReverse {
  from {
    transform: rotate(360deg) translateZ(0);
  }
  to {
    transform: rotate(0deg) translateZ(0);
  }
}

@keyframes smoothPulse {
  0%, 100% {
    transform: scale(1) translateZ(0);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.05) translateZ(0);
    opacity: 0.4;
  }
}

@keyframes subtleGlow {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes smoothFade {
  0%, 15%, 85%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.2;
  }
  25% {
    transform: translate3d(-3px, -5px, 0);
    opacity: 0.4;
  }
  50% {
    transform: translate3d(0, -8px, 0);
    opacity: 0.6;
  }
  75% {
    transform: translate3d(3px, -3px, 0);
    opacity: 0.3;
  }
}

/* Accessibility - Reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  .ai-network-visualization * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Feature List */
.feature-list {
  margin: 0;
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

.dark-section .feature-number {
  color: #A39AF5;
}

.feature-text h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 8px;
  color: #545454;
}

.feature-text p {
  margin: 0;
  line-height: 1.6;
  color: #545454;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.dark-section .feature-text p {
  color: rgba(255, 255, 255, 0.7);
}

/* Core Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.value-card {
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(88, 66, 255, 0.1);
}

.value-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  color: #5842FF;
}

.value-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: #202124;
}

.value-card p {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  line-height: 1.6;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Team Section */
.team-illustration-wrapper {
  max-width: 400px;
  margin: 0 auto 60px;
  text-align: center;
}

.team-illustration {
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: transform 0.5s ease;
}

.team-illustration-wrapper:hover .team-illustration {
  transform: scale(1.05);
}

.team-leaders {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

.team-leader {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 20px;
  will-change: transform;
  transform: translateZ(0); /* Enable hardware acceleration */
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-leader:hover {
  transform: translateY(-8px) translateZ(0);
  box-shadow: 0 15px 50px rgba(88, 66, 255, 0.1);
}

.leader-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  border: 3px solid #5842FF;
  box-shadow: 0 5px 15px rgba(88, 66, 255, 0.2);
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--pos-x, center) var(--pos-y, center);
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-leader:hover .leader-image img {
  transform: scale(1.08) translateZ(0);
}

.leader-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leader-info h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #202124;
  font-family: 'Nourd', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.leader-title {
  font-size: 16px;
  color: #5842FF;
  margin-bottom: 24px;
  font-weight: 600;
}

.leader-bio {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 24px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.leader-links {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.harvard-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5842FF;
  transition: all 0.3s ease;
}

.harvard-link:hover {
  background: #5842FF;
  color: white;
  transform: translateY(-3px);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

/* First 3 members take 2 columns each */
.team-grid .team-member:nth-child(1) {
  grid-column: 1 / 3;
}

.team-grid .team-member:nth-child(2) {
  grid-column: 3 / 5;
}

.team-grid .team-member:nth-child(3) {
  grid-column: 5 / 7;
}

/* Last 2 members centered in middle 4 columns */
.team-grid .team-member:nth-child(4) {
  grid-column: 2 / 4;
}

.team-grid .team-member:nth-child(5) {
  grid-column: 4 / 6;
}

/* Ensure all members have the same width */
.team-grid .team-member {
  width: 100%;
  max-width: none;
}

.team-member {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px 20px;
  will-change: transform;
  transform: translateZ(0); /* Enable hardware acceleration */
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-member:hover {
  transform: translateY(-8px) scale(1.01) translateZ(0);
  box-shadow: 0 15px 50px rgba(88, 66, 255, 0.1);
}

.member-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 3px solid #5842FF;
  box-shadow: 0 5px 15px rgba(88, 66, 255, 0.2);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--pos-x, center) var(--pos-y, center);
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-member:hover .member-image img {
  transform: scale(1.08) translateZ(0);
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-info h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #202124;
  font-family: 'Nourd', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.member-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 16px;
  line-height: 1.4;
  flex-grow: 1;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.member-social {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: auto;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5842FF;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(88, 66, 255, 0.2);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.social-link:hover {
  background: #5842FF;
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  display: block;
}


/* CTA Section */
.cta-box {
  text-align: center;
  padding: 80px 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(10, 15, 31, 0.8), rgba(20, 30, 60, 0.9));
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-box:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.05), rgba(101, 133, 254, 0.05));
  pointer-events: none;
}

.cta-box h2 {
  font-size: 36px;
  margin: 0 0 20px;
  color: white;
}

.cta-box p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.cta-button.large {
  padding: 16px 32px;
  font-size: 16px;
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

/* Responsive Styles */
@media (max-width: 1200px) {
  .team-leaders {
    gap: 30px;
  }
  
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .hero-content h1 {
    font-size: 48px;
  }
  
  .section {
    padding: 100px 0;
  }
}

@media (max-width: 992px) {
  .hero-content h1 {
    font-size: 42px;
  }
  
  .hero-content p {
    font-size: 18px;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }
  
  /* Reset grid positioning for mobile */
  .team-grid .team-member {
    grid-column: auto !important;
  }
  
  .team-leaders {
    grid-template-columns: 1fr;
  }
  
  .split-layout {
    flex-direction: column;
    gap: 40px;
  }
  
  .vision-intro {
    margin-bottom: 48px;
  }
  
  .large-text {
    font-size: 18px;
  }
  
  h2 {
    font-size: 36px;
  }
  
  .vision-animation-wrapper {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  /* Reset grid positioning for smaller screens */
  .team-grid .team-member {
    grid-column: auto !important;
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
  
  .feature-item {
    gap: 16px;
  }
  
  .vision-animation-wrapper {
    height: 320px;
  }
}



@media (max-width: 576px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .cta-box {
    padding: 40px 20px;
  }
  
  .cta-box h2 {
    font-size: 28px;
  }
  
  .cta-box p {
    font-size: 16px;
  }
  
  .vision-animation-wrapper {
    height: 280px;
  }
}
</style>