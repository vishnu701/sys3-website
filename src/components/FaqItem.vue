<template>
  <div class="faq-item" :class="{ active: isOpen }">
    <div class="faq-question" @click="toggleFaq">
      <h3>{{ question }}</h3>
      <div class="faq-toggle"></div>
    </div>
    <div class="faq-answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String, 
    required: true
  }
});

const isOpen = ref(false);

const toggleFaq = () => {
  isOpen.value = !isOpen.value;
};
</script>