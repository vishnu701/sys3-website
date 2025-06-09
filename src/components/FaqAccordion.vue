<template>
  <div class="faq-accordion">
    <div 
      v-for="(faq, index) in faqs" 
      :key="index" 
      class="faq-item"
      :class="{ active: activeIndex === index }"
    >
      <div class="faq-question" @click="toggleFaq(index)">
        <h4>{{ faq.question }}</h4>
        <div class="faq-toggle"></div>
      </div>
      <div 
        class="faq-answer" 
        ref="faqAnswers"
        :style="getAnswerStyle(index)"
      >
        <div class="faq-answer-content">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Sample FAQ data
const faqs = [
  {
    question: "What age groups do you serve for educational programs?",
    answer: "We primarily serve high school students, graduate students, and professionals. Our courses are curated based on the individuals we teach, ensuring relevant content for all skill levels."
  },
  {
    question: "What consultancy services do you offer?",
    answer: "We offer tailored consultancy services for AI integration and innovative program development for companies of all sizes. Our expertise spans across diverse industries, ensuring solutions that are both cutting-edge and industry-specific."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines range from 2-6 months for initial solutions to 12+ months for enterprise-wide transformations. We follow an agile methodology with regular deliverables to ensure continuous progress."
  },
  {
    question: "What makes your AI education programs different?",
    answer: "Our programs are led by Harvard faculty and combine academic rigor with practical applications. We place emphasis on personalized learning paths, hands-on projects with real-world datasets, and continuous mentorship from industry experts."
  }
];

// Reactive state
const activeIndex = ref(null);
const faqAnswers = ref([]);
const answerHeights = reactive(Array(faqs.length).fill(0));

// Toggle FAQ accordion
const toggleFaq = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
    
    // Calculate heights on open
    if (faqAnswers.value && faqAnswers.value[index]) {
      const content = faqAnswers.value[index].querySelector('.faq-answer-content');
      answerHeights[index] = content ? content.offsetHeight + 'px' : 'auto';
    }
  }
};

// Get dynamic style for answer height
const getAnswerStyle = (index) => {
  return {
    height: activeIndex.value === index ? answerHeights[index] : '0px',
    opacity: activeIndex.value === index ? 1 : 0
  };
};

onMounted(() => {
  // Initialize heights
  setTimeout(() => {
    if (faqAnswers.value) {
      faqAnswers.value.forEach((el, index) => {
        if (el) {
          const content = el.querySelector('.faq-answer-content');
          answerHeights[index] = content ? content.offsetHeight + 'px' : 'auto';
        }
      });
    }
    
    // Open first item by default
    toggleFaq(0);
  }, 100);
});
</script>

<style scoped>
.faq-accordion {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.faq-question {
  padding: 24px 16px 24px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-question h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
  flex: 1;
  text-align: left;
  line-height: 1.4;
}

.faq-toggle {
  width: 20px;
  height: 20px;
  position: relative;
  flex-shrink: 0;
  margin-left: 24px;
}

.faq-toggle:before, .faq-toggle:after {
  content: '';
  position: absolute;
  background: #5842FF;
  transition: all 0.3s ease;
}

.faq-toggle:before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
}

.faq-toggle:after {
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
}

.faq-item.active .faq-toggle:after {
  opacity: 0;
  transform: translateX(-50%) rotate(90deg);
}

.faq-item.active .faq-question h4 {
  color: #5842FF;
}

.faq-answer {
  overflow: hidden;
  transition: height 0.4s ease, opacity 0.3s ease;
}

.faq-answer-content {
  padding: 0 44px 24px 0;
}

.faq-answer p {
  margin: 0;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
}

/* Hover effects */
.faq-question:hover h4 {
  color: #5842FF;
}

@media (max-width: 768px) {
  .faq-question {
    padding: 20px 0 20px 0;
  }
  
  .faq-question h4 {
    font-size: 16px;
  }
  
  .faq-toggle {
    width: 18px;
    height: 18px;
    margin-left: 16px;
  }
  
  .faq-answer-content {
    padding: 0 34px 20px 0;
  }
}
</style>