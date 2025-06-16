<template>
  <div class="testimonial-slider-container">
    <div class="testimonial-track" ref="testimonialTrack" :style="trackStyle">
      <div 
        class="testimonial-slide" 
        v-for="(testimonial, index) in displayedTestimonials" 
        :key="`${index}-${testimonial.name}`"
        :class="{ 'clone': index < cloneCount || index >= cloneCount + testimonials.length }"
      >
        <div class="testimonial-quote">
          <div class="quote-symbol">"</div>
          <p>{{ testimonial.quote }}</p>
          <div class="testimonial-author">
            <div class="author-info">
              <h5>{{ testimonial.name }}</h5>
              <p>{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="slider-controls">
      <div class="slider-nav">
        <button class="nav-button prev" @click="prevSlide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="slider-dots">
          <span 
            v-for="(_, index) in testimonials" 
            :key="index" 
            class="dot" 
            :class="{ active: actualIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
        <button class="nav-button next" @click="nextSlide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

// Sample testimonials data
const testimonials = [
  {
    quote: "System3's strategic guidance has been instrumental in our AI transformation journey. Their expertise and personalized approach set them apart in the industry.",
    name: "Alexandra Chen",
    title: "CTO, InnovaTech Solutions"
  },
  {
    quote: "The AI training program from System3 elevated our team's capabilities to a new level. The curriculum's blend of theory and practical applications made complex concepts accessible and immediately applicable.",
    name: "Michael Rodriguez",
    title: "Head of Data Science, GlobalTech"
  },
  {
    quote: "Working with System3 gave us the competitive edge we needed. Their consultants didn't just implement solutions; they transferred knowledge that empowered our internal teams to innovate.",
    name: "Sarah Johnson",
    title: "CEO, Nexus Innovations"
  }
];

// Clone count for infinite scrolling (clone slides at start and end)
const cloneCount = 1;

// Create array with cloned slides at beginning and end (optimized for performance)
const displayedTestimonials = computed(() => {
  if (!testimonials.length) return [];
  return testimonials.slice(-cloneCount)
    .concat(testimonials)
    .concat(testimonials.slice(0, cloneCount));
});

const currentSlide = ref(cloneCount); // Start at first real slide (after clones)
const isTransitioning = ref(false);
const testimonialTrack = ref(null);
let autoplayInterval = null;

// Calculate the actual index (for dot indicators)
const actualIndex = computed(() => {
  return (currentSlide.value - cloneCount + testimonials.length) % testimonials.length;
});

// Track style with transition handling
const trackStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none'
  };
});

// Go to a specific slide (user clicked dot)
const goToSlide = (index) => {
  isTransitioning.value = true;
  currentSlide.value = index + cloneCount; // Adjust for clones
  clearAutoplay();
  startAutoplay();
};

// Handle infinite scrolling when reaching ends
const handleTransitionEnd = () => {
  isTransitioning.value = false;
  
  // If we're at the first clone, jump to the real last slide
  if (currentSlide.value === 0) {
    currentSlide.value = testimonials.length;
  }
  
  // If we're at the last clone, jump to the real first slide
  if (currentSlide.value === displayedTestimonials.value.length - 1) {
    currentSlide.value = 1;
  }
};

// Next slide with infinite scrolling
const nextSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentSlide.value++;
  clearAutoplay();
  startAutoplay();
};

// Previous slide with infinite scrolling
const prevSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentSlide.value--;
  clearAutoplay();
  startAutoplay();
};

// Start autoplay
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

// Clear autoplay
const clearAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Watch for transition end
watch(currentSlide, () => {
  if (isTransitioning.value) {
    setTimeout(() => {
      handleTransitionEnd();
    }, 500); // Match the transition duration
  }
});

onMounted(() => {
  startAutoplay();
  
  // Add event listeners with proper cleanup tracking
  if (testimonialTrack.value) {
    testimonialTrack.value.addEventListener('mouseenter', clearAutoplay, { passive: true });
    testimonialTrack.value.addEventListener('mouseleave', startAutoplay, { passive: true });
  }
});

onBeforeUnmount(() => {
  clearAutoplay();
  
  // Clean up event listeners
  if (testimonialTrack.value) {
    testimonialTrack.value.removeEventListener('mouseenter', clearAutoplay);
    testimonialTrack.value.removeEventListener('mouseleave', startAutoplay);
  }
});
</script>

<style scoped>
.testimonial-slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.testimonial-track {
  display: flex;
  width: 100%;
}

.testimonial-slide {
  min-width: 100%;
  flex: 0 0 100%;
  padding: 1rem 0;
}

.testimonial-quote {
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;
  margin: 0 auto;
  max-width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.quote-symbol {
  font-size: 80px;
  line-height: 0;
  color: rgba(88, 66, 255, 0.1);
  position: absolute;
  top: 30px;
  left: 30px;
  font-family: serif;
}

.testimonial-quote p {
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 30px;
  position: relative;
  z-index: 1;
  color: #333;
  flex-grow: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-info h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px;
  color: #333;
}

.author-info p {
  font-size: 14px;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
}

.slider-controls {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.slider-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.slider-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #5842FF;
  transform: scale(1.2);
}

.nav-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(88, 66, 255, 0.2);
  background: white;
  color: #5842FF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nav-button:hover {
  background: rgba(88, 66, 255, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.1);
}

.nav-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .testimonial-quote {
    padding: 30px 20px;
  }
  
  .testimonial-quote p {
    font-size: 18px;
  }
  
  .quote-symbol {
    font-size: 60px;
    top: 20px;
    left: 20px;
  }
  
  .nav-button {
    width: 36px;
    height: 36px;
  }
}
</style>