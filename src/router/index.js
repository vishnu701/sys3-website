import { createRouter, createWebHistory } from 'vue-router';

// Import page components
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Education from '@/views/Education.vue';
import Consultancy from '@/views/Consultancy.vue';
import Contact from '@/views/Contact.vue';
import NotFound from '@/views/NotFound.vue';

// Course pages
import Courses from '@/views/Courses/Courses.vue';
import DataScience from '@/views/Courses/DataScience.vue';

// Form pages
import FormsIndex from '@/views/Forms/Index.vue';
import CourseRegistration from '@/views/Forms/CourseRegistration.vue';
import AI5Form from '@/views/Forms/AI5Form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'System3 - AI Education and Consulting' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us - System3' }
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: { title: 'Education - System3' }
  },
  {
    path: '/consultancy',
    name: 'Consultancy',
    component: Consultancy,
    meta: { title: 'Consultancy - System3' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us - System3' }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: { title: 'Our Courses - System3' }
  },
  {
    path: '/courses/data-science',
    name: 'DataScience',
    component: DataScience,
    meta: { title: 'Data Science Course - System3' }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: FormsIndex,
    meta: { title: 'Forms - System3' }
  },
  {
    path: '/forms/course-registration',
    name: 'CourseRegistration',
    component: CourseRegistration,
    meta: { title: 'Course Registration - System3' }
  },
  {
    path: '/forms/ai5-form',
    name: 'AI5Form',
    component: AI5Form,
    meta: { title: 'AI5 Form - System3' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 Not Found - System3' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

// Update document title based on route and handle GitHub Pages paths
router.beforeEach((to, from, next) => {
  // Update page title
  document.title = to.meta.title || 'System3';

  // Handle GitHub Pages repository path
  // If we're on GitHub Pages and the URL contains the repository name twice
  // This can happen when navigating due to base URL issues
  if (window.location.hostname.includes('github.io')) {
    const path = to.path;
    const pathParts = path.split('/');
    const repoName = pathParts[1];

    // Check if repo name appears twice in path (e.g., /repo-name/repo-name/page)
    if (pathParts.length > 2 && pathParts[1] === pathParts[2]) {
      // Remove the duplicate repo name
      const fixedPath = '/' + pathParts.slice(2).join('/');
      next({ path: fixedPath, replace: true });
      return;
    }
  }
  
  next();
});

export default router;