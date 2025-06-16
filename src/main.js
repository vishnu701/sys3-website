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

// Initialize document scrollability once on app mount - moved to App.vue for better performance

app.mount('#app');