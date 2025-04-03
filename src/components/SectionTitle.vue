<template>
  <div class="section-header">
    <h2 v-if="title" :class="{ 'gradient-text': isGradient }">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
    <slot></slot> <!-- For custom content -->
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  isGradient: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
</style>