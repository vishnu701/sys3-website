<template>
  <div 
    class="education-card" 
    :data-index="index" 
    :style="{ '--card-index': index }"
  >
    <div class="card-overlay"></div>
    <div class="card-content">
      <div v-if="icon" class="card-icon">
        <img :src="getIconPath(icon)" :alt="title" class="dark-mode-icon">
        <img :src="getIconPath(icon, true)" :alt="title" class="light-mode-icon">
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <RouterLink v-if="link" :to="link" class="card-link">{{ buttonText || 'Learn More' }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Learn More'
  }
});

// Function to get the correct icon path based on light/dark mode
const getIconPath = (icon, isLight = false) => {
  if (!icon) return '';
  
  // Extract the base filename and extension
  const parts = icon.split('.');
  const ext = parts.pop();
  const baseName = parts.join('.');
  
  // Return the path with the appropriate suffix
  return isLight ? `${baseName}-light.${ext}` : `${baseName}-dark.${ext}`;
};
</script>