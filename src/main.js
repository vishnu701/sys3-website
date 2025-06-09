import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import './styles/courses.css';
import './styles/forms.css';
// Import custom fonts stylesheet for Söhne family
import './styles/fonts.css';

// Comment out animations plugin to prevent GSAP conflicts
// import AnimationsPlugin from './plugins/animations';

const app = createApp(App);

// Use plugins
app.use(router);
// Disable animations plugin to fix white screen issue
// app.use(AnimationsPlugin);

// Force document scrollability after mount
app.mixin({
  mounted() {
    // This runs for every component
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    
    // Make sure all elements that might get hidden are visible
    document.querySelectorAll('.section, .hero, .content, #app, .app, main').forEach(el => {
      if (el) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.overflow = 'visible';
        el.style.height = 'auto';
        el.style.transform = 'none';
        el.style.position = 'relative';
      }
    });
  }
});

app.mount('#app');