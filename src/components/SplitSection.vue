<template>
  <div class="split-section" :class="{ reverse }">
    <div class="section-text-column">
      <slot name="text"></slot>
    </div>
    <div class="section-image-column">
      <div class="section-illustration-container">
        <img :src="illustration" :alt="altText" class="section-illustration">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  illustration: {
    type: [String, Object], // Allow both string paths and imported images
    required: true
  },
  altText: {
    type: String,
    default: 'Section illustration'
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>