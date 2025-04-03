<template>
  <div class="content">
    <section class="section not-found-section">
      <div class="section-content">
        <div class="not-found-container">
          <h1 class="not-found-title"><span class="gradient-text">404</span></h1>
          <h2>Page Not Found</h2>
          <p>We couldn't find the page you were looking for. It might have been moved or deleted.</p>
          <div class="not-found-actions">
            <RouterLink to="/" class="cta-button primary">Return Home</RouterLink>
            <RouterLink to="/contact" class="cta-button secondary">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.not-found-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height));
  text-align: center;
}

.not-found-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.not-found-title {
  font-size: 6rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .not-found-title {
    font-size: 4rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .not-found-actions {
    flex-direction: column;
  }
}
</style>