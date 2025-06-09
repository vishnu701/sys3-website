import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger and other necessary plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize all page animations and interactions
export const initPageAnimations = () => {
  // Ensure scrolling works
  document.documentElement.style.overflow = 'auto';
  document.documentElement.style.height = 'auto';
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
  
  // Remove any classes that might interfere with scrolling
  document.body.classList.remove('no-scroll', 'smooth-scroll', 'loading');
  
  // Set all sections as visible
  document.querySelectorAll('.section, .hero, .content, #app, .app, main').forEach(el => {
    if (el) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.overflow = 'visible';
      el.style.height = 'auto';
      el.style.transform = 'none';
      el.style.position = 'relative';
    }
  });

  // Initialize premium animation effects
  initCardAnimations();
  initButtonAnimations();
  initSectionAnimations();
  initHeroAnimation();
  initMagneticElements();
  initParallaxEffects();
  animateDecorativeElements();
  initEducationPageAnimations();
};

// Enhanced 3D tilt effect for premium cards
export const initCardAnimations = () => {
  const cards = document.querySelectorAll('.premium-card');
  
  cards.forEach(card => {
    // Create a more sophisticated transform effect system
    
    // Set initial transform properties for consistent 3D rendering
    gsap.set(card, {
      transformPerspective: 1000,
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center'
    });
    
    // Add subtle shadow animation on hover
    card.addEventListener('mouseenter', () => {
      // Remove any existing transitions for smoother GSAP control
      card.style.transition = 'none';
      
      // Enhanced hover state with shadow and subtle lift
      gsap.to(card, {
        y: -6, // Reduced lift for subtlety
        scale: 1.01, // Minimal scale for elegance
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.08), 0 8px 8px rgba(0, 0, 0, 0.03), 0 0 15px rgba(138, 133, 255, 0.1)',
        duration: 0.5, // Slightly slower for premium feel
        ease: 'power2.out'
      });
      
      // Add entrance animation for shine effect
      const shine = card.querySelector('.card-shine');
      if (shine) {
        gsap.fromTo(shine,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power1.out' }
        );
      }
      
      // Find and animate card elements for depth effect
      const cardTitle = card.querySelector('h3, h4');
      const cardIcon = card.querySelector('.feature-icon, .service-number, .faq-number');
      const cardBtn = card.querySelector('.cta-button');
      
      // Add subtle depth animations to these elements - more refined and subtle
      if (cardTitle) {
        gsap.to(cardTitle, {
          z: 12, // Reduced depth for subtlety
          scale: 1.02, // Minimal scale for refinement
          duration: 0.5, // Slightly slower animation
          ease: 'power2.out'
        });
      }
      
      if (cardIcon) {
        gsap.to(cardIcon, {
          z: 18, // Reduced depth while maintaining hierarchy
          scale: 1.05, // Still noticeable but more refined
          duration: 0.5,
          ease: 'power2.out'
        });
      }
      
      if (cardBtn) {
        gsap.to(cardBtn, {
          z: 15, 
          scale: 1.02, // Subtle scale change
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });
    
    // Sophisticated tilt effect on mousemove with GSAP
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the card
      const y = e.clientY - rect.top; // y position within the card
      
      // Calculate rotation angles based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate distance from center (0-1 range)
      const distanceX = Math.abs((x - centerX) / centerX);
      const distanceY = Math.abs((y - centerY) / centerY);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Tilt percentages - significantly more subtle for premium aesthetics
      const tiltX = ((y - centerY) / centerY) * 2; // Max 2 degrees rotation
      const tiltY = ((centerX - x) / centerX) * 2; // Max 2 degrees rotation
      
      // Apply transformation with GSAP for smoother animation
      gsap.to(card, {
        rotationX: tiltX,
        rotationY: tiltY,
        duration: 0.5,
        ease: 'power1.out'
      });
      
      // Create dynamic shine effect based on cursor position
      const shine = card.querySelector('.card-shine');
      if (shine) {
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        
        // Create a more nuanced gradient
        const gradientSize = 100 * (1 - distance * 0.5); // Size adjusts based on distance from center
        
        shine.style.background = `
          radial-gradient(
            circle at ${shineX}% ${shineY}%, 
            rgba(255,255,255,0.15) 0%, 
            rgba(255,255,255,0.08) ${gradientSize * 0.3}%, 
            rgba(255,255,255,0.03) ${gradientSize * 0.5}%, 
            rgba(255,255,255,0) ${gradientSize}%
          )
        `;
        
        // Add an extremely subtle glow effect to card borders based on mouse position
        const borderGlow = `
          0 0 8px rgba(138, 133, 255, ${0.06 * (1 - distance)}),
          0 0 12px rgba(138, 133, 255, ${0.03 * (1 - distance)})
        `;
        
        gsap.to(card, {
          boxShadow: `0 15px 25px rgba(0, 0, 0, 0.08), ${borderGlow}`,
          duration: 0.3
        });
      }
      
      // Animate inner elements to enhance 3D depth effect
      const innerElements = card.querySelectorAll('h3, h4, p, .feature-icon, .service-number, .faq-number, .cta-button');
      
      innerElements.forEach(el => {
        // Calculate offset based on element position relative to mouse
        const elRect = el.getBoundingClientRect();
        const elCenterX = elRect.left + elRect.width / 2;
        const elCenterY = elRect.top + elRect.height / 2;
        
        // Subtle movement based on distance from mouse
        const moveX = (e.clientX - elCenterX) * 0.01; // Extremely subtle
        const moveY = (e.clientY - elCenterY) * 0.01; // Extremely subtle
        
        // Apply different depths based on element type
        let depth = 10; // Default depth
        
        if (el.tagName === 'H3' || el.tagName === 'H4') depth = 20;
        if (el.classList.contains('feature-icon') || 
            el.classList.contains('service-number') || 
            el.classList.contains('faq-number')) depth = 30;
        if (el.classList.contains('cta-button')) depth = 25;
        
        // Apply transformation
        gsap.to(el, {
          x: moveX,
          y: moveY,
          z: depth,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
    });
    
    // Reset all effects on mouseout with smooth transition
    card.addEventListener('mouseleave', () => {
      // Reset card
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.6,
        ease: 'power2.out'
      });
      
      // Reset shine
      const shine = card.querySelector('.card-shine');
      if (shine) {
        gsap.to(shine, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
      
      // Reset all inner elements
      const innerElements = card.querySelectorAll('h3, h4, p, .feature-icon, .service-number, .faq-number, .cta-button');
      innerElements.forEach(el => {
        gsap.to(el, {
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    });
    
    // Add click animation for feedback
    card.addEventListener('mousedown', () => {
      gsap.to(card, {
        scale: 0.98,
        duration: 0.1,
        ease: 'power1.in'
      });
    });
    
    card.addEventListener('mouseup', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.2,
        ease: 'power1.out'
      });
    });
  });
  
  // Special effect for feature cards to make numbers pop
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    const number = card.querySelector('.feature-number');
    if (number) {
      card.addEventListener('mouseenter', () => {
        gsap.to(number, {
          scale: 1.3,
          color: 'var(--clr-lavender)',
          textShadow: '0 0 10px rgba(138, 133, 255, 0.4)',
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(number, {
          scale: 1,
          color: 'var(--color-primary)',
          textShadow: 'none',
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }
  });
  
  // Special effect for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    const divider = card.querySelector('.service-divider');
    if (divider) {
      card.addEventListener('mouseenter', () => {
        gsap.to(divider, {
          width: '60px',
          background: 'var(--clr-lavender)',
          duration: 0.4,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(divider, {
          width: '40px',
          background: 'var(--clr-azure)',
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }
  });
};

// Add magnetic effect to buttons for premium feel
export const initMagneticElements = () => {
  const buttons = document.querySelectorAll('.cta-button');
  
  buttons.forEach(button => {
    // Magnetic hover effect
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate the pull amount (scaled down further for extreme subtlety)
      const pullX = (x - centerX) * 0.025; // Even more subtle
      const pullY = (y - centerY) * 0.025; // Even more subtle
      
      // Apply the pull transformation
      button.style.transform = `translate(${pullX}px, ${pullY}px)`;
    });
    
    // Reset position on mouseout with gentle transition
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0px, 0px)';
      button.style.transition = 'transform 0.5s ease-out';
    });
    
    // Remove transition on mouseenter for immediate response
    button.addEventListener('mouseenter', () => {
      button.style.transition = 'transform 0.1s ease-out';
    });
  });
};

// Add staggered reveal animations for section content
export const initSectionAnimations = () => {
  // Use GSAP to create scroll-triggered reveal animations
  const sections = document.querySelectorAll('.section:not(.hero)');
  
  // Enhanced staggered entrance for feature cards with scale and rotation
  gsap.utils.toArray('.feature-card, .service-card').forEach((card, index) => {
    // Create a unique animation for each card
    const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
    
    gsap.fromTo(card, 
      { 
        y: 40, // Reduced distance for more subtle entrance
        opacity: 0, 
        scale: 0.95, // Less scale change for subtlety
        rotateY: direction * 5, // Significantly reduced rotation for premium feel
        transformOrigin: index % 2 === 0 ? 'left center' : 'right center' 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotateY: 0,
        duration: 0.7, // Slightly faster for better perceived performance
        delay: index * 0.08, // Tighter timing between cards for better cohesion
        ease: 'power2.out', // Smoother easing
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reset'
        }
      }
    );
    
    // Add an extremely subtle continuous animation to each card
    gsap.to(card, {
      y: 'random(-3, 3)', // Reduced range for minimal movement
      duration: 'random(4, 6)', // Slower animation for elegance
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.5 + (index * 0.05), // Slightly increased initial delay with tighter stagger
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
      }
    });
    
    // Add a subtle glow animation to card shine
    const shine = card.querySelector('.card-shine');
    if (shine) {
      gsap.fromTo(shine,
        { opacity: 0 },
        {
          opacity: 0.2,
          duration: 2,
          delay: 1 + (index * 0.1),
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    }
  });
  
  // Enhanced fade in for section headings with text reveal effect
  sections.forEach((section, sectionIndex) => {
    const sectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reset'
      }
    });
    
    // Handle headings with gradient text
    const heading = section.querySelector('h2');
    if (heading) {
      // Create clip path reveal for gradient text
      const gradientText = heading.querySelector('.gradient-text');
      if (gradientText) {
        sectionTimeline
          .fromTo(heading,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
          )
          .fromTo(gradientText,
            { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.inOut' },
            '-=0.6' // Increased overlap for smoother transition
          );
      } else {
        sectionTimeline.fromTo(heading,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
      }
    }
    
    // Enhanced description animation
    const description = section.querySelector('.section-description');
    if (description) {
      sectionTimeline.fromTo(description,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.4'
      );
    }
    
    // Section-specific animations
    if (section.id === 'education-preview') {
      // Education illustration fade and float
      const illustration = section.querySelector('.education-illustration');
      if (illustration) {
        sectionTimeline.fromTo(illustration,
          { scale: 0.8, opacity: 0, rotation: -2 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 0, 
            duration: 1.2, 
            ease: 'back.out(1.2)' 
          },
          '-=0.6'
        );
        
        // Add smooth floating animation without glitches
        // Use a more consistent animation pattern with minimal rotation
        gsap.to(illustration, {
          y: 8, // Reduced movement
          rotation: 0.5, // Minimal rotation to prevent glitchiness
          duration: 6, // Longer, smoother cycle
          ease: 'power1.inOut', // More linear smooth easing
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.1, // Small delay at transitions for smoother reversal
          // Remove scroll trigger to prevent interference with page scrolling
        });
      }
      
      // Staggered animation for education section visual elements
      const visualOverlays = section.querySelectorAll('.visual-overlay-shape, .visual-overlay-grid, .visual-accent-shape');
      visualOverlays.forEach((overlay, index) => {
        sectionTimeline.fromTo(overlay,
          { scale: 0.6, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.8, 
            delay: 0.1 * index,
            ease: 'power2.out' 
          },
          '-=0.6'
        );
      });
    }
    
    if (section.id === 'consultancy-preview') {
      // Consulting illustration reveal
      const consultingVisual = section.querySelector('.consulting-visual');
      if (consultingVisual) {
        sectionTimeline.fromTo(consultingVisual,
          { y: 50, opacity: 0, scale: 0.9 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            ease: 'power3.out' 
          },
          '-=0.4'
        );
      }
      
      // Shape decorators with staggered animation
      const decorators = section.querySelectorAll('.shape-decorator');
      decorators.forEach((decorator, index) => {
        sectionTimeline.fromTo(decorator,
          { 
            scale: 0, 
            opacity: 0, 
            rotation: 'random(-45, 45)' 
          },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 'random(-15, 15)', 
            duration: 0.7, 
            delay: 0.15 * index,
            ease: 'back.out(2)' 
          },
          '-=0.5'
        );
      });
    }
    
    if (section.id === 'faq-section') {
      // FAQ item staggered entrance
      const faqItems = section.querySelectorAll('.faq-item');
      faqItems.forEach((item, index) => {
        gsap.fromTo(item,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            delay: 0.1 * index,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        );
      });
      
      // FAQ CTA special animation
      const faqCta = section.querySelector('.faq-cta');
      if (faqCta) {
        gsap.fromTo(faqCta,
          { y: 30, opacity: 0, scale: 0.95 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1,
            ease: 'elastic.out(1, 0.75)',
            scrollTrigger: {
              trigger: faqCta,
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        );
        
        // Pulse animation for icon
        const iconCircle = faqCta.querySelector('.icon-circle');
        if (iconCircle) {
          gsap.to(iconCircle, {
            scale: 1.1,
            boxShadow: '0 0 20px rgba(138, 133, 255, 0.6)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: faqCta,
              start: 'top 90%'
            }
          });
        }
      }
    }
    
    if (section.id === 'contact-section') {
      // Contact card special reveal
      const contactCard = section.querySelector('.simple-contact');
      if (contactCard) {
        sectionTimeline.fromTo(contactCard,
          { y: 40, opacity: 0, scale: 0.95 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            ease: 'power3.out' 
          },
          '-=0.2'
        );
        
        // Add subtle float animation
        gsap.to(contactCard, {
          y: -10,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 1,
          scrollTrigger: {
            trigger: contactCard,
            start: 'top 85%'
          }
        });
      }
    }
  });
  
  // Add scroll-triggered background effects
  document.querySelectorAll('.premium-bg-shine').forEach((bg, index) => {
    gsap.fromTo(bg,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.4,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none reset'
        }
      }
    );
    
    // Add subtle movement based on scroll position
    ScrollTrigger.create({
      trigger: bg.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(bg, {
          x: (progress - 0.5) * 50, // Move based on scroll progress
          y: (progress - 0.5) * 30,
          duration: 0.5,
          ease: 'power1.out'
        });
      }
    });
  });
};

// Hero animation with premium effects
export const initHeroAnimation = () => {
  const heroContent = document.querySelector('.hero-content');
  const heroIllustration = document.querySelector('.hero-illustration');
  const heroSection = document.querySelector('#hero-section');
  const heroGlowPrimary = document.querySelector('.hero-glow.primary');
  const heroGlowSecondary = document.querySelector('.hero-glow.secondary');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  // Create a timeline for coordinated animations
  const heroTimeline = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });
  
  if (heroContent) {
    // Use a more refined animation for heading that preserves formatting
    if (heroContent.querySelector('h1')) {
      const heading = heroContent.querySelector('h1');
      
      // Save the original HTML to preserve spans, colors, and formatting
      const originalHTML = heading.innerHTML;
      
      // Create a wrapper to animate the whole heading
      const headingWrapper = document.createElement('div');
      headingWrapper.style.overflow = 'hidden';
      headingWrapper.style.display = 'inline-block';
      headingWrapper.style.width = '100%';
      
      // Move the heading into the wrapper but keep original styling
      heading.style.transform = 'translateY(40px)';
      heading.style.opacity = '0';
      
      // Animate the whole heading as one unit to preserve formatting
      gsap.to(heading, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
      });
    }
    
    // Subtitle and CTA fade in
    heroTimeline
      .fromTo(heroContent.querySelector('p'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
      )
      .fromTo(heroContent.querySelector('.cta-container'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
  }
  
  if (heroIllustration) {
    // More dramatic reveal of hero illustration
    heroTimeline.fromTo(heroIllustration,
      { scale: 0.85, opacity: 0, rotate: -3 },
      { 
        scale: 1, 
        opacity: 1, 
        rotate: 0, 
        duration: 1.8, 
        ease: 'elastic.out(1, 0.7)',
        onComplete: () => {
          // Start floating animation after reveal
          gsap.to(heroIllustration, {
            y: '15px',
            rotation: 2,
            duration: 3.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          });
        }
      },
      '-=1'
    );
  }
  
  // Animate glow effects with random movement
  if (heroGlowPrimary) {
    gsap.fromTo(heroGlowPrimary,
      { scale: 0.7, opacity: 0 },
      { 
        scale: 1, 
        opacity: 0.3, 
        duration: 2,
        ease: 'power2.out',
        onComplete: () => {
          // Random motion after appearing
          gsap.to(heroGlowPrimary, {
            x: 'random(-40, 40)',
            y: 'random(-40, 40)',
            scale: 'random(0.95, 1.1)',
            duration: 10,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            repeatRefresh: true // Use different random values each cycle
          });
        }
      }
    );
  }
  
  if (heroGlowSecondary) {
    gsap.fromTo(heroGlowSecondary,
      { scale: 0.7, opacity: 0 },
      { 
        scale: 1, 
        opacity: 0.3, 
        duration: 2,
        delay: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          // Random motion after appearing
          gsap.to(heroGlowSecondary, {
            x: 'random(-30, 30)',
            y: 'random(-30, 30)',
            scale: 'random(0.9, 1.05)',
            duration: 8,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            repeatRefresh: true // Use different random values each cycle
          });
        }
      }
    );
  }
  
  // Enhance the particles effect
  const particlesContainer = document.getElementById('particles-container');
  if (particlesContainer) {
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create more particles with enhanced animation
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 8 + 2; // 2-10px
      const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
      const delay = Math.random() * 5; // 0-5s
      
      // Apply styling
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = opacity.toString();
      
      // Add to container
      particlesContainer.appendChild(particle);
      
      // Custom animation with GSAP for each particle
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        scale: `random(0.5, 1.5)`,
        opacity: `random(${opacity * 0.5}, ${opacity * 1.5})`,
        duration: Math.random() * 20 + 15, // 15-35s
        delay,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
      });
    }
  }
  
  // Animate scroll indicator
  if (scrollIndicator) {
    gsap.fromTo(scrollIndicator,
      { opacity: 0, y: -20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 2,
        ease: 'power2.out'
      }
    );
    
    // Pulse animation for scroll line
    const scrollLine = scrollIndicator.querySelector('.scroll-line');
    if (scrollLine) {
      gsap.to(scrollLine, {
        height: '+=5',
        opacity: 0.5,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    }
    
    // Text fade animation
    const scrollText = scrollIndicator.querySelector('p');
    if (scrollText) {
      gsap.to(scrollText, {
        opacity: 0.5,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    }
  }
  
  // Add interactive parallax effect on mouse move
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { width, height } = heroSection.getBoundingClientRect();
      
      // Calculate mouse position relative to center (-1 to 1 range)
      const xPos = (clientX / width - 0.5) * 2;
      const yPos = (clientY / height - 0.5) * 2;
      
      // Apply subtle movement to illustration and glows
      if (heroIllustration) {
        gsap.to(heroIllustration, {
          x: xPos * 20, // 20px max movement
          y: yPos * 15, // 15px max movement
          rotationY: xPos * 3, // 3deg max rotation
          rotationX: -yPos * 3, // 3deg max rotation
          duration: 1,
          ease: 'power2.out'
        });
      }
      
      if (heroGlowPrimary) {
        gsap.to(heroGlowPrimary, {
          x: xPos * -35, // Move opposite to mouse
          y: yPos * -25,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
      
      if (heroGlowSecondary) {
        gsap.to(heroGlowSecondary, {
          x: xPos * 30,
          y: yPos * 20,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  }
};

// CTA button animations for premium interactions
export const initButtonAnimations = () => {
  const buttons = document.querySelectorAll('.cta-button');
  
  buttons.forEach(button => {
    // Add ripple effect on click
    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create ripple element
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      // Add and remove ripple element
      button.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

// Add enhanced parallax effects to illustrations and backgrounds
export const initParallaxEffects = () => {
  // Add parallax scroll effect to all sections
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Hero section parallax
    const heroIllustration = document.querySelector('.hero-illustration');
    const heroGlowPrimary = document.querySelector('.hero-glow.primary');
    const heroGlowSecondary = document.querySelector('.hero-glow.secondary');
    const heroBackdrop = document.querySelector('.hero-backdrop');
    
    if (heroIllustration) {
      // More pronounced movement with better curve
      const moveY = scrollY * 0.15;
      const rotation = Math.sin(scrollY * 0.001) * 2; // Subtle sine wave rotation
      heroIllustration.style.transform = `translateY(${moveY}px) rotate(${rotation}deg)`;
    }
    
    if (heroGlowPrimary) {
      // Enhanced movement with depth
      heroGlowPrimary.style.transform = `translate(${scrollY * -0.12}px, ${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})`;
      heroGlowPrimary.style.filter = `blur(${60 + scrollY * 0.05}px)`;
    }
    
    if (heroGlowSecondary) {
      // Different direction movement to create depth
      heroGlowSecondary.style.transform = `translate(${scrollY * 0.15}px, ${scrollY * -0.08}px) scale(${1 + scrollY * 0.0003})`;
      heroGlowSecondary.style.filter = `blur(${60 + scrollY * 0.03}px)`;
    }
    
    if (heroBackdrop) {
      // Scale and rotate slightly for dynamic feel
      heroBackdrop.style.transform = `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.001}deg)`;
      heroBackdrop.style.opacity = Math.max(0.1, 0.5 - scrollY * 0.0005);
    }
    
    // Education section parallax with enhanced depth
    const educationIllustration = document.querySelector('.education-illustration');
    const visualOverlayShape = document.querySelector('.visual-overlay-shape');
    const visualOverlayGrid = document.querySelector('.visual-overlay-grid');
    
    if (educationIllustration) {
      // Calculate based on element position for better effect
      const rect = educationIllustration.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.05;
      
      // Add slight rotation for more dynamic feel
      const rotation = offsetY * 0.1;
      educationIllustration.style.transform = `translateY(${offsetY}px) rotate(${rotation}deg) scale(${1 + Math.abs(offsetY) * 0.001})`;
    }
    
    if (visualOverlayShape) {
      const rect = visualOverlayShape.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.08;
      
      // Add scale effect for depth
      const scale = 1 + Math.abs(offsetY) * 0.002;
      visualOverlayShape.style.transform = `translate(${offsetY * -0.6}px, ${offsetY}px) scale(${scale})`;
      visualOverlayShape.style.opacity = Math.min(0.6, 0.3 + Math.abs(offsetY) * 0.005);
    }
    
    if (visualOverlayGrid) {
      const rect = visualOverlayGrid.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.1;
      
      // Rotate slightly for more dynamic feel
      const rotation = offsetY * 0.02;
      visualOverlayGrid.style.transform = `translate(${offsetY * 0.5}px, ${offsetY * -0.6}px) rotate(${rotation}deg)`;
    }
    
    // Consulting section parallax with enhanced depth
    const consultingIllustration = document.querySelector('.section-illustration');
    const consultingGlowEffect = document.querySelector('.consulting-glow-effect');
    const shapeDecorators = document.querySelectorAll('.shape-decorator');
    
    if (consultingIllustration) {
      const rect = consultingIllustration.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.04;
      
      // Add slight perspective tilt
      const tiltX = offsetY * 0.02;
      consultingIllustration.style.transform = `translateY(${offsetY}px) perspective(1000px) rotateX(${tiltX}deg)`;
    }
    
    if (consultingGlowEffect) {
      const rect = consultingGlowEffect.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.07;
      
      // Dynamic blur based on position
      const blurAmount = 40 + Math.abs(offsetY) * 0.2;
      consultingGlowEffect.style.transform = `translate(${offsetY * 0.4}px, ${offsetY}px) scale(${1 + Math.abs(offsetY) * 0.003})`;
      consultingGlowEffect.style.filter = `blur(${blurAmount}px)`;
    }
    
    shapeDecorators.forEach((decorator, index) => {
      const rect = decorator.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.05;
      
      // Create more varied movement based on index
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.3 + (index % 3) * 0.1; // Varied speed for each decorator
      
      // Different rotation for each item
      const baseRotation = index * 15; // Each has different base rotation
      const dynamicRotation = baseRotation + offsetY * 0.08;
      
      decorator.style.transform = `translate(${offsetY * direction * speed}px, ${offsetY * 0.6}px) rotate(${dynamicRotation}deg)`;
    });
    
    // FAQ section parallax for premium grid background
    const premiumBgGrid = document.querySelector('.premium-bg-grid');
    if (premiumBgGrid) {
      // Add slight rotation for more interesting parallax
      const rotation = scrollY * 0.003;
      premiumBgGrid.style.transform = `translateY(${scrollY * 0.02}px) rotate(${rotation}deg)`;
      premiumBgGrid.style.backgroundPosition = `${scrollY * 0.05}px ${scrollY * 0.05}px`;
      
      // Subtle scaling
      const scale = 1 + scrollY * 0.0001;
      premiumBgGrid.style.backgroundSize = `${40 * scale}px ${40 * scale}px`;
    }
    
    // Add parallax to decorative elements if any exist
    document.querySelectorAll('.decorative-elements > *').forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const offsetY = (window.innerHeight / 2 - rect.top) * 0.03;
      
      // Different movement based on position in the list
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.4 + (index % 4) * 0.1;
      
      element.style.transform = `translate(${offsetY * direction * speed}px, ${offsetY * 0.4}px)`;
    });
  });
};

// Add animations to decorative elements across the site
export const animateDecorativeElements = () => {
  // Create and animate dynamic decorative elements across the page
  const sections = document.querySelectorAll('.section');
  
  // Add unique animated backdrop elements to each section
  sections.forEach((section, index) => {
    // Create unique decorative elements based on section type
    const sectionId = section.id || `section-${index}`;
    
    // Skip hero section as it already has particles
    if (sectionId === 'hero-section') return;
    
    // Create container for decorative elements if it doesn't exist
    let decorContainer = section.querySelector('.decorative-elements');
    
    if (!decorContainer) {
      decorContainer = document.createElement('div');
      decorContainer.className = 'decorative-elements';
      decorContainer.style.position = 'absolute';
      decorContainer.style.inset = '0';
      decorContainer.style.overflow = 'hidden';
      decorContainer.style.pointerEvents = 'none';
      decorContainer.style.zIndex = '0';
      section.prepend(decorContainer);
    }
    
    // Clear existing elements to avoid duplicates on re-initialization
    decorContainer.innerHTML = '';
    
    // Create different types of decorative elements based on section
    if (sectionId === 'education-preview') {
      // Create floating geometric shapes for education section
      createFloatingShapes(decorContainer, 6, 'education');
      
      // Create subtle grid pattern
      createGridPattern(decorContainer);
      
    } else if (sectionId === 'consultancy-preview') {
      // Create floating dots for consulting section
      createFloatingDots(decorContainer, 15);
      
      // Enhance the existing shape decorators with more animations
      const decorators = section.querySelectorAll('.shape-decorator');
      
      decorators.forEach(decorator => {
        gsap.to(decorator, {
          y: 'random(-20, 20)',
          x: 'random(-10, 10)',
          rotation: 'random(-5, 5)',
          duration: 'random(8, 12)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });
      
    } else if (sectionId === 'faq-section') {
      // Create floating question mark shapes
      createQuestionMarks(decorContainer, 5);
      
      // Enhance the premium grid backdrop
      const grid = section.querySelector('.premium-bg-grid');
      if (grid) {
        // Animate grid opacity subtly
        gsap.to(grid, {
          opacity: 'random(0.3, 0.6)',
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
      
    } else if (sectionId === 'contact-section') {
      // Create soft glowing orbs for contact section
      createGlowingOrbs(decorContainer, 4);
    }
  });
  
  // Function to create floating geometric shapes
  function createFloatingShapes(container, count, theme) {
    const shapes = ['square', 'circle', 'triangle'];
    const colors = theme === 'education' ? 
      ['rgba(154, 142, 255, 0.15)', 'rgba(90, 174, 255, 0.12)', 'rgba(246, 144, 127, 0.1)'] : 
      ['rgba(154, 142, 255, 0.12)', 'rgba(90, 174, 255, 0.08)', 'rgba(246, 144, 127, 0.08)'];
    
    for (let i = 0; i < count; i++) {
      const shape = document.createElement('div');
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 40 + 20; // 20-60px
      
      // Base styling
      shape.style.position = 'absolute';
      shape.style.opacity = '0';
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.zIndex = '1';
      shape.style.pointerEvents = 'none';
      
      // Shape-specific styling
      if (shapeType === 'square') {
        shape.style.backgroundColor = color;
        shape.style.borderRadius = '4px';
        shape.style.transform = `rotate(${Math.random() * 45}deg)`;
      } else if (shapeType === 'circle') {
        shape.style.backgroundColor = color;
        shape.style.borderRadius = '50%';
      } else if (shapeType === 'triangle') {
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = `${size/2}px solid transparent`;
        shape.style.borderRight = `${size/2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${color}`;
        shape.style.backgroundColor = 'transparent';
      }
      
      // Add to container
      container.appendChild(shape);
      
      // Animate with GSAP
      gsap.fromTo(shape,
        { 
          opacity: 0,
          scale: 0.6,
          rotation: 'random(-30, 30)'
        },
        {
          opacity: 0.6,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%'
          },
          onComplete: () => {
            // Start floating animation
            gsap.to(shape, {
              x: 'random(-50, 50)',
              y: 'random(-40, 40)',
              rotation: 'random(-45, 45)',
              scale: 'random(0.8, 1.2)',
              opacity: 'random(0.3, 0.7)',
              duration: 'random(15, 25)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              repeatRefresh: true  // Use different random values for each iteration
            });
          }
        }
      );
    }
  }
  
  // Function to create subtle grid pattern
  function createGridPattern(container) {
    const grid = document.createElement('div');
    grid.className = 'backdrop-grid';
    grid.style.position = 'absolute';
    grid.style.inset = '0';
    grid.style.backgroundImage = 'linear-gradient(to right, rgba(138, 133, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(138, 133, 255, 0.05) 1px, transparent 1px)';
    grid.style.backgroundSize = '30px 30px';
    grid.style.opacity = '0';
    grid.style.pointerEvents = 'none';
    grid.style.zIndex = '0';
    
    container.appendChild(grid);
    
    // Animate grid in
    gsap.fromTo(grid,
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 0.4, 
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%'
        }
      }
    );
    
    // Add subtle movement to grid
    gsap.to(grid, {
      backgroundPosition: '30px 30px',
      duration: 40,
      ease: 'linear', // Use linear for smooth continuous movement
      repeat: -1
    });
  }
  
  // Function to create floating dots
  function createFloatingDots(container, count) {
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 6 + 2; // 2-8px
      const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6
      
      // Styling
      dot.style.position = 'absolute';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = i % 2 === 0 ? 'rgba(154, 142, 255, 0.4)' : 'rgba(90, 174, 255, 0.4)';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.opacity = '0';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = '1';
      dot.style.filter = 'blur(1px)';
      
      container.appendChild(dot);
      
      // Animation
      gsap.fromTo(dot,
        { opacity: 0, scale: 0 },
        {
          opacity: opacity,
          scale: 1,
          duration: 1,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%'
          },
          onComplete: () => {
            // Start floating animation
            gsap.to(dot, {
              x: 'random(-80, 80)',
              y: 'random(-60, 60)',
              scale: 'random(0.8, 1.5)',
              opacity: 'random(0.2, 0.6)',
              duration: 'random(10, 20)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              repeatRefresh: true
            });
          }
        }
      );
    }
  }
  
  // Function to create question mark decorations
  function createQuestionMarks(container, count) {
    for (let i = 0; i < count; i++) {
      const qMark = document.createElement('div');
      const size = Math.random() * 40 + 20; // 20-60px
      
      // Basic styling
      qMark.style.position = 'absolute';
      qMark.style.width = `${size}px`;
      qMark.style.height = `${size}px`;
      qMark.style.left = `${Math.random() * 90 + 5}%`;
      qMark.style.top = `${Math.random() * 90 + 5}%`;
      qMark.style.opacity = '0';
      qMark.style.fontFamily = 'var(--font-heading)';
      qMark.style.fontSize = `${size}px`;
      qMark.style.fontWeight = 'bold';
      qMark.style.color = 'rgba(138, 133, 255, 0.07)';
      qMark.style.pointerEvents = 'none';
      qMark.style.zIndex = '1';
      qMark.textContent = '?';
      
      container.appendChild(qMark);
      
      // Animation
      gsap.fromTo(qMark,
        { opacity: 0, scale: 0.5, rotation: -30 },
        {
          opacity: 0.15,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%'
          },
          onComplete: () => {
            // Start floating animation
            gsap.to(qMark, {
              y: 'random(-30, 30)',
              x: 'random(-20, 20)',
              rotation: 'random(-15, 15)',
              scale: 'random(0.9, 1.1)',
              opacity: 'random(0.07, 0.15)',
              duration: 'random(8, 15)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              repeatRefresh: true
            });
          }
        }
      );
    }
  }
  
  // Function to create glowing orbs
  function createGlowingOrbs(container, count) {
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      const size = Math.random() * 100 + 50; // 50-150px
      
      // Define colors
      const colors = [
        'rgba(154, 142, 255, 0.15)',  // Lavender
        'rgba(90, 174, 255, 0.12)',   // Azure
        'rgba(246, 144, 127, 0.1)'    // Coral
      ];
      const color = colors[i % colors.length];
      
      // Styling
      orb.style.position = 'absolute';
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.borderRadius = '50%';
      orb.style.background = `radial-gradient(circle at center, ${color.replace(')', ', 0.4)')} 0%, ${color} 50%, transparent 70%)`;
      orb.style.left = `${Math.random() * 90 + 5}%`;
      orb.style.top = `${Math.random() * 90 + 5}%`;
      orb.style.opacity = '0';
      orb.style.filter = 'blur(20px)';
      orb.style.pointerEvents = 'none';
      orb.style.zIndex = '0';
      
      container.appendChild(orb);
      
      // Animation
      gsap.fromTo(orb,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.6,
          scale: 1,
          duration: 1.5,
          delay: i * 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%'
          },
          onComplete: () => {
            // Pulsing glow animation
            gsap.to(orb, {
              scale: 'random(0.9, 1.1)',
              opacity: 'random(0.4, 0.7)',
              duration: 'random(4, 7)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              repeatRefresh: true
            });
            
            // Slow drift movement
            gsap.to(orb, {
              x: 'random(-50, 50)',
              y: 'random(-50, 50)',
              duration: 'random(20, 30)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              repeatRefresh: true
            });
          }
        }
      );
    }
  }
  
  // Animate the existing decorative elements
  const existingDecorators = document.querySelectorAll('.shape-decorator');
  existingDecorators.forEach(decorator => {
    gsap.to(decorator, {
      y: 'random(-20, 20)',
      x: 'random(-10, 10)',
      rotation: 'random(-5, 5)',
      duration: 'random(8, 12)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      repeatRefresh: true
    });
  });
};

// Enhanced animations for the Education page
export const initEducationPageAnimations = () => {
  // Education Hero - More refined, subtle effect
  const educationHero = document.querySelector('.education-hero');
  if (educationHero) {
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    educationHero.appendChild(particleContainer);

    // Create fewer, more elegant particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // More refined properties
      const size = Math.random() * 3 + 1; // 1-4px (smaller)
      const posX = Math.random() * 100; // 0-100%
      const posY = Math.random() * 100; // 0-100%
      const delay = Math.random() * 5; // 0-5s delay
      const duration = Math.random() * 15 + 30; // 30-45s animation (slower)
      
      // Apply properties
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = '0.4'; // More subtle
      
      // Add particle to container
      particleContainer.appendChild(particle);
    }
  }

  // Animate Benefits Cards with Staggered Entrance and 3D Hover
  const benefitCards = document.querySelectorAll('.benefit-card');
  
  benefitCards.forEach((card, index) => {
    // Initial state
    gsap.set(card, { 
      y: 50, 
      opacity: 0,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 1000,
      transformOrigin: "center center"
    });
    
    // Entrance animation with staggered delay
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.15 * index,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      }
    });
    
    // Interactive 3D hover effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the card
      const y = e.clientY - rect.top; // y position within the card
      
      // Calculate rotation angles based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Tilt percentages (extremely subtle for benefit cards)
      const tiltX = ((y - centerY) / centerY) * 0.7; // Reduced even further
      const tiltY = ((centerX - x) / centerX) * 0.7; // Reduced even further
      
      // Apply transform with GSAP for smoother animation
      gsap.to(card, {
        rotateX: tiltX,
        rotateY: tiltY,
        duration: 0.5,
        ease: "power2.out",
        scale: 1.005 // Very subtle scale
      });
      
      // Animate icon for extra premium feel
      const icon = card.querySelector('.benefit-icon');
      if (icon) {
        gsap.to(icon, {
          y: -5,
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Reset icon
      const icon = card.querySelector('.benefit-icon');
      if (icon) {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  });

  // How It Works Step Animation
  const steps = document.querySelectorAll('.step-item');
  
  steps.forEach((step, index) => {
    // Create timeline for each step
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 75%"
      }
    });
    
    // Add animations to timeline
    tl.fromTo(step.querySelector('.step-number'), 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    .fromTo(step.querySelector('.step-content h3'),
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(step.querySelector('.step-content p'),
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );
    
    // Add connector line animation for all but the last step
    if (index < steps.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'step-connector';
      step.appendChild(connector);
      
      tl.fromTo(connector,
        { height: 0, opacity: 0 },
        { height: "100%", opacity: 1, duration: 0.8, ease: "power1.inOut" },
        "-=0.4"
      );
    }
  });

  // Testimonial Animation Enhancement
  const testimonials = document.querySelectorAll('.testimonial-card');
  const indicators = document.querySelectorAll('.indicator');
  
  if (testimonials.length > 0) {
    // Enhanced transition between testimonials
    function animateTestimonialTransition(current, next) {
      // Current slide out
      gsap.to(current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      
      // Next slide in
      gsap.fromTo(next,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, delay: 0.1, ease: "power2.out" }
      );
      
      // Animate the quote icon
      const nextQuoteIcon = next.querySelector('.testimonial-quote-icon');
      if (nextQuoteIcon) {
        gsap.fromTo(nextQuoteIcon,
          { scale: 0, rotation: -45 },
          { scale: 1, rotation: 0, duration: 0.5, delay: 0.2, ease: "back.out(1.7)" }
        );
      }
      
      // Animate the author info
      const nextAuthor = next.querySelector('.testimonial-author');
      if (nextAuthor) {
        gsap.fromTo(nextAuthor,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.4, ease: "power2.out" }
        );
      }
    }
    
    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        const current = document.querySelector('.testimonial-card.active');
        const next = testimonials[index];
        
        if (current !== next) {
          // Update active classes
          document.querySelector('.indicator.active').classList.remove('active');
          indicator.classList.add('active');
          
          current.classList.remove('active');
          next.classList.add('active');
          
          // Animate the transition
          animateTestimonialTransition(current, next);
        }
      });
    });
    
    // Add navigation button handlers
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        const current = document.querySelector('.testimonial-card.active');
        const currentIndex = Array.from(testimonials).indexOf(current);
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        
        // Update active classes
        document.querySelector('.indicator.active').classList.remove('active');
        indicators[prevIndex].classList.add('active');
        
        current.classList.remove('active');
        testimonials[prevIndex].classList.add('active');
        
        // Animate the transition
        animateTestimonialTransition(current, testimonials[prevIndex]);
      });
      
      nextButton.addEventListener('click', () => {
        const current = document.querySelector('.testimonial-card.active');
        const currentIndex = Array.from(testimonials).indexOf(current);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        
        // Update active classes
        document.querySelector('.indicator.active').classList.remove('active');
        indicators[nextIndex].classList.add('active');
        
        current.classList.remove('active');
        testimonials[nextIndex].classList.add('active');
        
        // Animate the transition
        animateTestimonialTransition(current, testimonials[nextIndex]);
      });
    }
  }

  // Course Tab Animation Enhancement
  const courseTabButtons = document.querySelectorAll('.level-tab');
  
  courseTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Animate the tab buttons
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power1.in"
          });
        }
      });
    });
  });

  // CTA Button Animation
  const ctaBox = document.querySelector('.cta-box');
  if (ctaBox) {
    // Create a premium effect on scroll
    gsap.from(ctaBox, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaBox,
        start: "top 80%"
      },
      onComplete: () => {
        // Add a subtle float animation after entrance
        gsap.to(ctaBox, {
          y: "-6px", // Reduced float height
          duration: 2.5, // Slightly slower
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    });
    
    // Add subtle glow effect
    const glow = document.createElement('div');
    glow.className = 'cta-glow';
    ctaBox.appendChild(glow);
    
    // Animate the glow
    gsap.to(glow, {
      opacity: 0.3, // Reduced opacity
      scale: 1.05, // Reduced scale
      duration: 3, // Slower animation
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }
};

// Default export with all animation functions
export default {
  initPageAnimations,
  initCardAnimations,
  initButtonAnimations,
  initSectionAnimations,
  initHeroAnimation,
  initMagneticElements,
  initParallaxEffects,
  animateDecorativeElements,
  initEducationPageAnimations
};