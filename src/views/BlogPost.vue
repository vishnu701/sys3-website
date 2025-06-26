<template>
  <div class="content">
    <!-- Article Header -->
    <section id="article-header" class="section hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container">
        <div class="article-header-content" v-if="currentBlog">
          <div class="breadcrumb">
            <RouterLink to="/blog">Blog</RouterLink>
            <span class="separator">→</span>
            <span>{{ currentBlog.category }}</span>
          </div>
          
          <div class="article-meta">
            <span class="article-date">{{ currentBlog.date }}</span>
            <span class="article-category">{{ currentBlog.category }}</span>
            <span class="read-time">{{ currentBlog.readTime }}</span>
          </div>
          
          <h1 class="article-title" v-html="currentBlog.title"></h1>
          
          <p class="article-subtitle">
            {{ currentBlog.subtitle }}
          </p>
          
          <div class="author-info">
            <div class="author-avatar">
              <img :src="currentBlog.author.avatar" :alt="currentBlog.author.name" />
            </div>
            <div class="author-details">
              <span class="author-name">{{ currentBlog.author.name }}</span>
              <span class="author-title">{{ currentBlog.author.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-dots">
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>
        <p>SCROLL</p>
      </div>
    </section>

    <!-- Article Content -->
    <section id="article-content" class="section" v-if="currentBlog">
      <div class="container narrow">
        <article class="article-body">
          <div class="article-text" v-html="currentBlog.content"></div>

          <!-- Article Footer -->
          <div class="article-footer">
            <div class="article-tags">
              <span 
                v-for="tag in currentBlog.tags" 
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
            
            <div class="article-share">
              <h4>Share this article</h4>
              <div class="share-buttons">
                <button class="share-btn twitter">Twitter</button>
                <button class="share-btn linkedin">LinkedIn</button>
                <button class="share-btn copy">Copy Link</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Related Articles -->
    <section id="related-articles" class="section light-section">
      <div class="container">
        <div class="section-header center">
          <span class="overline">Related Reading</span>
          <h2>More <span class="gradient-text">AI Insights</span></h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="related-grid">
          <article 
            v-for="blog in relatedBlogs" 
            :key="blog.id"
            class="related-post"
          >
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">{{ blog.date }}</span>
                <span class="post-category">{{ blog.category }}</span>
              </div>
              <h3>{{ blog.title }}</h3>
              <p class="post-excerpt">
                {{ blog.excerpt }}
              </p>
              <RouterLink :to="`/blog/${blog.id}`" class="read-more">
                Read More <span class="arrow">→</span>
              </RouterLink>
            </div>
          </article>
        </div>

        <div class="back-to-blog">
          <RouterLink to="/blog" class="cta-button secondary">
            ← Back to All Articles
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBlogById, getRelatedBlogs } from '@/data/blogs/index.js';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const scrollIndicator = ref(null);

// Get current blog data
const currentBlog = computed(() => getBlogById(route.params.id));
const relatedBlogs = computed(() => getRelatedBlogs(route.params.id, 3));

// Handle scroll to fade out scroll indicator
let animationComplete = false;
const handleScroll = () => {
  if (scrollIndicator.value && animationComplete) {
    const scrollY = window.scrollY;
    const opacity = Math.max(0, 1 - scrollY / 300); // Fade out over 300px of scroll
    scrollIndicator.value.style.opacity = opacity;
  }
};

onMounted(() => {
  // Add scroll listener for fade effect
  window.addEventListener('scroll', handleScroll);
  // Hero animations
  const headerTimeline = gsap.timeline();
  
  headerTimeline
    .fromTo('.article-header-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

  // Animate scroll indicator
  headerTimeline.fromTo('.scroll-indicator',
    { opacity: 0, y: -10 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: 'power2.out',
      onComplete: () => {
        animationComplete = true;
      }
    },
    '-=0.6'
  );

  // Animate article sections on scroll
  gsap.utils.toArray('.article-text h2').forEach((heading, i) => {
    gsap.fromTo(heading,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Animate related articles
  gsap.utils.toArray('.related-post').forEach((post, i) => {
    gsap.fromTo(post,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: post,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
});

onBeforeUnmount(() => {
  // Remove scroll listener
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Global styles for dynamic blog content */
.article-text :deep(h2) {
  font-size: 32px;
  font-weight: 500;
  margin: 64px 0 24px;
  color: #545454;
  line-height: 1.3;
}

.article-text :deep(h2:first-child) {
  margin-top: 0;
}

.article-text :deep(h3) {
  font-size: 24px;
  font-weight: 500;
  margin: 48px 0 20px;
  color: #545454;
  line-height: 1.3;
}

.article-text :deep(p) {
  margin: 0 0 24px;
  color: #2A2A2A;
  font-size: 18px;
  line-height: 1.7;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.article-text :deep(blockquote) {
  margin: 48px 0;
  padding: 32px;
  background: rgba(88, 66, 255, 0.03);
  border-left: 4px solid #5842FF;
  border-radius: 0 8px 8px 0;
  font-size: 20px;
  font-style: italic;
  color: #1A1A1A;
  position: relative;
}

.article-text :deep(blockquote::before) {
  content: '"';
  font-size: 64px;
  color: rgba(88, 66, 255, 0.2);
  position: absolute;
  top: 16px;
  left: 24px;
  line-height: 1;
  font-family: serif;
}

.article-text :deep(ul) {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

.article-text :deep(ul li) {
  margin: 12px 0;
  padding-left: 32px;
  position: relative;
}

.article-text :deep(ul li::before) {
  content: '→';
  position: absolute;
  left: 0;
  color: #5842FF;
  font-weight: 600;
}

.article-text :deep(.highlight-box) {
  margin: 48px 0;
  padding: 32px;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.05), rgba(101, 133, 254, 0.05));
  border: 1px solid rgba(88, 66, 255, 0.1);
  border-radius: 12px;
}

.article-text :deep(.highlight-box h3) {
  margin: 0 0 24px;
  color: #5842FF;
  font-size: 20px;
  font-weight: 600;
}

.article-text :deep(.milestone-list) {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-text :deep(.milestone-item) {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.article-text :deep(.year) {
  font-weight: 700;
  color: #5842FF;
  font-size: 16px;
  min-width: 60px;
}

.article-text :deep(.event) {
  color: #2A2A2A;
  font-size: 16px;
}

.article-text :deep(.article-image) {
  margin: 0 0 48px;
  text-align: center;
}

.article-text :deep(.article-image img) {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
}

.article-text :deep(.image-caption) {
  margin-top: 16px;
  font-size: 14px;
  color: #6C6C6C;
  font-style: italic;
}

/* Dark theme styles for dynamic content */
.dark-theme .article-text :deep(h2),
.dark-theme .article-text :deep(h3) {
  color: #FFFFFF;
}

.dark-theme .article-text :deep(p) {
  color: rgba(255, 255, 255, 0.8);
}

.dark-theme .article-text :deep(blockquote) {
  background: rgba(88, 66, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.dark-theme .article-text :deep(.highlight-box) {
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.08), rgba(101, 133, 254, 0.08));
  border-color: rgba(88, 66, 255, 0.2);
}

.dark-theme .article-text :deep(.milestone-item) {
  background: rgba(255, 255, 255, 0.05);
}

.dark-theme .article-text :deep(.event) {
  color: rgba(255, 255, 255, 0.8);
}

.dark-theme .article-text :deep(.image-caption) {
  color: rgba(255, 255, 255, 0.7);
}
/* Base Layout */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.container.narrow {
  max-width: 750px;
}

.section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

/* Hero section specific styling to account for fixed header */
#article-header {
  padding-top: 200px; /* 120px base + 80px header height */
}

/* Article Header */
.article-header-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.breadcrumb {
  margin-bottom: 24px;
  font-size: 14px;
  color: #6C6C6C;
}

.breadcrumb a {
  color: #5842FF;
  text-decoration: none;
}

.breadcrumb .separator {
  margin: 0 8px;
  color: #D8D8D8;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.article-date,
.read-time {
  font-size: 14px;
  color: #6C6C6C;
  font-weight: 500;
}

.article-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #5842FF;
  background: rgba(88, 66, 255, 0.08);
  padding: 4px 12px;
  border-radius: 12px;
}

.article-title {
  font-size: 48px;
  font-weight: 300;
  margin: 0 0 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #545454;
}

.article-title .gradient-text {
  font-weight: 500;
}

.article-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #545454;
  font-weight: 300;
  margin: 0 0 48px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(88, 66, 255, 0.1);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: #545454;
  margin-bottom: 4px;
}

.author-title {
  font-size: 14px;
  color: #6C6C6C;
}

/* Article Body */
.article-body {
  max-width: 750px;
  margin: 0 auto;
}

.article-text {
  font-size: 18px;
  line-height: 1.7;
  color: #2A2A2A;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
}


/* Article Footer */
.article-footer {
  margin-top: 64px;
  padding-top: 48px;
  border-top: 1px solid #E8E8E8;
}

.article-tags {
  margin-bottom: 32px;
}

.tag {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(88, 66, 255, 0.08);
  color: #5842FF;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  margin: 0 8px 8px 0;
}

.article-share h4 {
  margin: 0 0 16px;
  font-size: 16px;
  color: #545454;
}

.share-buttons {
  display: flex;
  gap: 12px;
}

.share-btn {
  padding: 8px 16px;
  border: 1px solid #D8D8D8;
  background: white;
  color: #545454;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px; /* Minimum touch target size */
  display: flex;
  align-items: center;
  justify-content: center;
}

.share-btn:hover {
  border-color: #5842FF;
  color: #5842FF;
}

.share-btn:active {
  transform: scale(0.98);
}

/* Related Articles */
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.related-post {
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
}

.related-post:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.related-post .post-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
}

.related-post h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 12px;
  color: #545454;
  line-height: 1.3;
}

.related-post .post-excerpt {
  font-size: 15px;
  line-height: 1.6;
  color: #545454;
  margin: 0 0 20px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.related-post .read-more {
  color: #5842FF;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  min-height: 44px; /* Better touch target */
  padding: 8px 0;
}

.back-to-blog {
  text-align: center;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  transition: opacity 0.3s ease;
  text-align: center;
  z-index: 10;
}

.scroll-indicator:hover {
  opacity: 0.7;
}

.scroll-dots {
  width: 1px;
  height: 50px;
  background: #D8D8D8;
  margin: 0 auto 12px;
  position: relative;
  overflow: hidden;
}

.scroll-dots::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 15px;
  background: #0A0A0A;
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% { transform: translateY(-15px); }
  50% { transform: translateY(50px); }
  100% { transform: translateY(50px); }
}

.scroll-indicator p {
  font-size: 11px;
  letter-spacing: 2px;
  color: #8A8A8A;
  margin: 0;
  font-weight: 600;
}

/* Dark Theme */
.dark-theme .article-title,
.dark-theme .author-name {
  color: #FFFFFF;
}

.dark-theme .article-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.dark-theme .related-post {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark-theme .related-post:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.dark-theme .related-post h3 {
  color: #FFFFFF;
}

.dark-theme .share-btn {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.dark-theme .scroll-indicator p {
  color: rgba(255, 255, 255, 0.6);
}

.dark-theme .scroll-dots {
  background: rgba(255, 255, 255, 0.3);
}

.dark-theme .scroll-dots::after {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Section spacing */
  .section {
    padding: 80px 0;
  }
  
  /* Hero section for mobile with header offset */
  #article-header {
    padding-top: 160px; /* 80px base + 80px header height */
  }
  
  /* Container padding */
  .container {
    padding: 0 20px;
  }
  
  /* Hero section */
  .article-header-content {
    padding: 0 20px;
  }
  
  .breadcrumb {
    margin-bottom: 20px;
    font-size: 13px;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }
  
  .article-title {
    font-size: 32px;
    margin: 0 0 24px;
    line-height: 1.2;
  }
  
  .article-subtitle {
    font-size: 18px;
    margin: 0 0 32px;
    line-height: 1.5;
  }
  
  .author-info {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .author-details {
    text-align: center;
  }
  
  .author-avatar {
    width: 56px;
    height: 56px;
  }
  
  /* Article body */
  .article-body {
    max-width: 100%;
  }
  
  .article-text {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .article-text :deep(h2) {
    font-size: 26px;
    margin: 40px 0 20px;
  }
  
  .article-text :deep(h3) {
    font-size: 22px;
    margin: 32px 0 16px;
  }
  
  .article-text :deep(p) {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .article-text :deep(blockquote) {
    margin: 32px 0;
    padding: 24px 20px;
    font-size: 18px;
    border-radius: 0 6px 6px 0;
  }
  
  .article-text :deep(ul) {
    margin: 20px 0;
  }
  
  .article-text :deep(ul li) {
    margin: 10px 0;
    padding-left: 28px;
  }
  
  .article-text :deep(.highlight-box) {
    margin: 32px 0;
    padding: 24px 20px;
    border-radius: 8px;
  }
  
  .article-text :deep(.milestone-item) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px;
  }
  
  .article-text :deep(.article-image) {
    margin: 32px 0;
  }
  
  /* Article footer */
  .article-footer {
    margin-top: 48px;
    padding-top: 32px;
  }
  
  .article-tags {
    margin-bottom: 24px;
  }
  
  .tag {
    font-size: 12px;
    padding: 4px 10px;
    margin: 0 6px 6px 0;
  }
  
  .share-buttons {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .share-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  /* Related articles */
  .related-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }
  
  .related-post {
    padding: 24px 20px;
  }
  
  .related-post h3 {
    font-size: 18px;
  }
  
  .related-post .post-excerpt {
    font-size: 14px;
  }
  
  /* Scroll indicator - moved lower to avoid author section */
  .scroll-indicator {
    bottom: 10px; /* Move lower to bottom edge */
    transform: translateX(-50%) scale(0.8); /* Make smaller */
  }
  
  .scroll-dots {
    height: 30px;
  }
  
  .scroll-indicator p {
    font-size: 9px;
    letter-spacing: 1px;
  }
}

@media (max-width: 576px) {
  /* Section spacing */
  .section {
    padding: 60px 0;
  }
  
  /* Hero section for small mobile with header offset */
  #article-header {
    padding-top: 140px; /* 60px base + 80px header height */
  }
  
  /* Container padding */
  .container {
    padding: 0 16px;
  }
  
  /* Hero section */
  .article-header-content {
    padding: 0 16px;
  }
  
  .breadcrumb {
    font-size: 12px;
    margin-bottom: 16px;
  }
  
  .article-meta {
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .article-date,
  .read-time {
    font-size: 13px;
  }
  
  .article-category {
    font-size: 11px;
    padding: 3px 10px;
  }
  
  .article-title {
    font-size: 28px;
    margin: 0 0 20px;
    line-height: 1.15;
  }
  
  .article-subtitle {
    font-size: 16px;
    margin: 0 0 28px;
    line-height: 1.4;
  }
  
  .author-avatar {
    width: 48px;
    height: 48px;
  }
  
  .author-name {
    font-size: 15px;
  }
  
  .author-title {
    font-size: 13px;
  }
  
  /* Article body */
  .article-text {
    font-size: 15px;
  }
  
  .article-text :deep(h2) {
    font-size: 24px;
    margin: 32px 0 16px;
  }
  
  .article-text :deep(h3) {
    font-size: 20px;
    margin: 28px 0 14px;
  }
  
  .article-text :deep(p) {
    font-size: 15px;
    margin: 0 0 18px;
    line-height: 1.5;
  }
  
  .article-text :deep(blockquote) {
    margin: 28px 0;
    padding: 20px 16px;
    font-size: 16px;
  }
  
  .article-text :deep(blockquote::before) {
    font-size: 48px;
    top: 12px;
    left: 16px;
  }
  
  .article-text :deep(.highlight-box) {
    margin: 28px 0;
    padding: 20px 16px;
  }
  
  .article-text :deep(.highlight-box h3) {
    font-size: 18px;
    margin: 0 0 16px;
  }
  
  .article-text :deep(.milestone-item) {
    padding: 10px;
  }
  
  .article-text :deep(.year) {
    font-size: 14px;
    min-width: 50px;
  }
  
  .article-text :deep(.event) {
    font-size: 14px;
  }
  
  /* Article footer */
  .article-footer {
    margin-top: 40px;
    padding-top: 24px;
  }
  
  .article-share h4 {
    font-size: 15px;
  }
  
  .share-btn {
    padding: 5px 10px;
    font-size: 12px;
  }
  
  .tag {
    font-size: 11px;
    padding: 3px 8px;
  }
  
  /* Related articles */
  .related-grid {
    gap: 20px;
  }
  
  .related-post {
    padding: 20px 16px;
  }
  
  .related-post h3 {
    font-size: 17px;
    line-height: 1.25;
  }
  
  .related-post .post-excerpt {
    font-size: 13px;
    line-height: 1.4;
  }
  
  .related-post .read-more {
    font-size: 13px;
  }
  
  /* Section headers */
  .section-header h2 {
    font-size: 28px;
  }
  
  .overline {
    font-size: 11px;
  }
  
  /* Back to blog button */
  .cta-button {
    padding: 12px 24px;
    font-size: 14px;
  }
  
  /* Scroll indicator - moved to very bottom to avoid interference */
  .scroll-indicator {
    bottom: -10px; /* Move to very bottom edge */
    transform: translateX(-50%) scale(1); /* Make smaller but still visible */
    opacity: 0.4; /* Keep reasonably visible */
  }
  
  .scroll-dots {
    height: 25px;
  }
  
  .scroll-indicator p {
    font-size: 8px;
    letter-spacing: 0.5px;
  }
}
</style>