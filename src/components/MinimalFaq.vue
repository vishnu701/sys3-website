<template>
  <div class="minimal-faq">
    <div 
      v-for="(faq, index) in faqs" 
      :key="index" 
      class="faq-item"
      :class="{ active: activeIndex === index }"
      @click="toggleFaq(index)"
    >
      <div class="faq-header">
        <h4>{{ faq.question }}</h4>
        <div class="faq-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="vertical-line"/>
            <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="faq-body" :style="{ height: activeIndex === index ? itemHeights[index] : '0px' }">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Define props
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

// Use props data or fallback to empty array
const faqs = props.items;

const activeIndex = ref(0); // Start with first item open
const itemHeights = reactive(Array(faqs.length).fill('auto'));
const faqRefs = ref([]);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

onMounted(() => {
  // Measure and set heights after component is mounted
  setTimeout(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
      const body = item.querySelector('.faq-body');
      const p = body.querySelector('p');
      
      // Store content height + padding
      itemHeights[index] = `${p.offsetHeight + 32}px`;
    });
  }, 100);
});
</script>

<style scoped>
.minimal-faq {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin: 40px 0;
}

.faq-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.faq-item:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.faq-item.active {
  box-shadow: 0 10px 40px rgba(88, 66, 255, 0.07);
  border-color: rgba(88, 66, 255, 0.1);
}

.faq-header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-header h4 {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: #212121;
  transition: color 0.3s ease;
  line-height: 1.4;
  padding-right: 16px;
}

.faq-item.active .faq-header h4 {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-icon {
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.7), rgba(101, 133, 254, 0.7));
  opacity: 0.8;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(88, 66, 255, 0.15);
}

.faq-item.active .faq-icon {
  opacity: 1;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.25);
}

.vertical-line {
  transition: all 0.3s ease;
}

.faq-item.active .vertical-line {
  opacity: 0;
}

.faq-body {
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-body p {
  padding: 0 24px 24px;
  margin: 0;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 400;
}

@media (max-width: 768px) {
  .faq-header {
    padding: 20px;
  }
  
  .faq-header h4 {
    font-size: 16px;
  }
  
  .faq-body p {
    font-size: 15px;
    padding: 0 20px 20px;
  }
}
</style>