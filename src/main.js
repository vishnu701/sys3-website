import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import './styles/courses.css';
import './styles/forms.css';

// Import animations plugin for professional animations across all pages
import AnimationsPlugin from './plugins/animations';

const app = createApp(App);

// Use plugins
app.use(router);
app.use(AnimationsPlugin);

app.mount('#app');