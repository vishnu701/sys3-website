<template>
  <div class="content">
    <!-- Hero Section -->
    <section id="blog-hero" class="section hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container">
        <div class="blog-hero-content">
          <div class="hero-badge">Insights & Research</div>
          <h1 class="hero-heading">
            <span class="gradient-text">AI</span> Insights & Perspectives
          </h1>
          <p class="hero-paragraph">
            Exploring the frontiers of artificial intelligence through research, analysis, and practical applications.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section id="blog-posts" class="section blog-posts-section">
      <div class="container">
        <div class="blog-grid">
          <!-- Featured Post -->
          <article class="blog-post featured" v-if="featuredBlog">
            <div class="post-image">
              <img :src="featuredBlog.image" :alt="featuredBlog.title" />
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">{{ featuredBlog.date }}</span>
                <span class="post-category">{{ featuredBlog.category }}</span>
              </div>
              <h2>{{ featuredBlog.title }}</h2>
              <p class="post-excerpt">
                {{ featuredBlog.excerpt }}
              </p>
              <RouterLink :to="`/blog/${featuredBlog.id}`" class="read-more">
                Read Full Article <span class="arrow">→</span>
              </RouterLink>
            </div>
          </article>

          <!-- Additional Posts -->
          <article 
            v-for="blog in otherBlogs" 
            :key="blog.id"
            class="blog-post"
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
      </div>
    </section>

    <!-- Newsletter Section -->
    <!-- <section id="newsletter" class="section light-section">
      <div class="container narrow">
        <div class="newsletter-content">
          <div class="section-header center">
            <span class="overline">Stay Updated</span>
            <h2>Get the Latest <span class="gradient-text">AI Insights</span></h2>
            <div class="section-divider"></div>
          </div>
          
          <p class="large-text">
            Subscribe to our newsletter for cutting-edge research, industry trends, and educational resources delivered directly to your inbox.
          </p>
          
          <div class="newsletter-form">
            <div class="form-group">
              <input type="email" placeholder="Enter your email address" class="newsletter-input" />
              <button class="cta-button primary">Subscribe</button>
            </div>
            <p class="form-note">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAllBlogs, getFeaturedBlogs } from '@/data/blogs/index.js';

gsap.registerPlugin(ScrollTrigger);

// Get blog data
const allBlogs = ref(getAllBlogs());
const featuredBlogs = ref(getFeaturedBlogs());

// Get featured blog (first one) and other blogs
const featuredBlog = computed(() => featuredBlogs.value[0] || allBlogs.value[0]);
const otherBlogs = computed(() => allBlogs.value.filter(blog => !blog.featured).slice(0, 3));

onMounted(() => {
  // Hero animations
  const heroTimeline = gsap.timeline();
  
  heroTimeline
    .fromTo('.blog-hero-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

  // Animate blog posts on scroll
  gsap.utils.toArray('.blog-post').forEach((post, i) => {
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

  // Newsletter section animation
  gsap.fromTo('.newsletter-content',
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.newsletter-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
});
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #FFFFFF;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(88, 66, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(101, 133, 254, 0.02) 0%, transparent 50%);
}

.hero-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 66, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.blog-hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(88, 66, 255, 0.08);
  border-radius: 24px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #5842FF;
  margin-bottom: 32px;
}

.hero-heading {
  font-size: 48px;
  font-weight: 300;
  margin: 0 0 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #545454;
}

.hero-heading .gradient-text {
  font-weight: 500;
}

.hero-paragraph {
  font-size: 19px;
  margin: 0;
  line-height: 1.7;
  color: #545454;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Blog Posts Section */
.blog-posts-section {
  padding-bottom: 80px;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Blog Posts */
.blog-post {
  background: white;
  border-radius: 24px;
  border: 1px solid #E8E8E8;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.blog-post::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #5842FF, #6585FE);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.blog-post:hover::before {
  transform: scaleX(1);
}

.blog-post:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.blog-post.featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: center;
}

.post-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: rgba(88, 66, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-image img {
  width: 80%;
  height: auto;
  object-fit: contain;
}

.post-content {
  padding: 48px;
}

.blog-post:not(.featured) .post-content {
  padding: 36px;
}

.post-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;
}

.post-date {
  font-size: 14px;
  color: #6C6C6C;
  font-weight: 500;
}

.post-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #5842FF;
  background: rgba(88, 66, 255, 0.08);
  padding: 4px 12px;
  border-radius: 24px;
}

.blog-post h2 {
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 20px;
  line-height: 1.3;
  color: #545454;
}

.blog-post h3 {
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 16px;
  line-height: 1.3;
  color: #545454;
}

.post-excerpt {
  font-size: 16px;
  line-height: 1.6;
  color: #545454;
  margin: 0 0 24px;
  font-weight: 300;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.read-more {
  color: #5842FF;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.read-more:hover {
  gap: 10px;
}

.read-more .arrow {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(3px);
}

/* Newsletter Section */
.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-form {
  margin-top: 40px;
}

.form-group {
  display: flex;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto 16px;
}

.newsletter-input {
  flex: 1;
  padding: 16px 20px;
  border: 1px solid #D8D8D8;
  border-radius: 24px;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.newsletter-input:focus {
  outline: none;
  border-color: #5842FF;
  box-shadow: 0 0 0 3px rgba(88, 66, 255, 0.1);
}

.newsletter-input::placeholder {
  color: #8A8A8A;
}

.form-note {
  font-size: 13px;
  color: #6C6C6C;
  margin: 0;
}

/* Dark Theme */
.dark-theme .blog-post {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark-theme .blog-post:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.dark-theme .post-image {
  background: rgba(88, 66, 255, 0.08);
}

.dark-theme .blog-post h2,
.dark-theme .blog-post h3 {
  color: #FFFFFF;
}

.dark-theme .post-excerpt {
  color: rgba(255, 255, 255, 0.8);
}

.dark-theme .post-date {
  color: rgba(255, 255, 255, 0.7);
}

.dark-theme .newsletter-input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.dark-theme .newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.dark-theme .newsletter-input:focus {
  border-color: #8B7BFF;
  background: rgba(255, 255, 255, 0.08);
}

/* Responsive Design */
@media (max-width: 992px) {
  .blog-post.featured {
    grid-template-columns: 1fr;
  }
  
  .post-image {
    height: 250px;
  }
  
  .hero-heading {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .blog-posts-section {
    padding-bottom: 60px;
  }
  
  .blog-grid {
    gap: 32px;
  }
  
  .post-content {
    padding: 32px !important;
  }
  
  .blog-post h2 {
    font-size: 26px;
  }
  
  .blog-post h3 {
    font-size: 20px;
  }
  
  .hero-heading {
    font-size: 32px;
  }
  
  .hero-paragraph {
    font-size: 17px;
  }
  
  .form-group {
    flex-direction: column;
  }
  
  .newsletter-input,
  .cta-button {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .blog-posts-section {
    padding-bottom: 40px;
  }
  
  .post-content {
    padding: 24px !important;
  }
  
  .blog-post h2 {
    font-size: 22px;
  }
  
  .blog-post h3 {
    font-size: 18px;
  }
  
  .hero-heading {
    font-size: 28px;
  }
  
  .post-image {
    height: 200px;
  }
}
</style>