import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Determine repository name with multiple fallbacks for maximum flexibility
let repoName = process.env.VITE_REPO_NAME; // First try from GitHub Actions

// If not set, try from package.json
if (!repoName) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    repoName = packageJson.name;
  } catch (e) {
    console.warn('Could not read package.json for repo name');
  }
}

// Default fallback
if (!repoName) {
  repoName = 'System3-Vue';
  console.warn('Using default repo name:', repoName);
}

// Get base URL - for Hostinger deployment, use relative paths
const base = './';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: base,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          animations: ['gsap'],
          'course-pages': [
            './src/views/Courses/Graduate/MachineLearning.vue',
            './src/views/Courses/Graduate/ComputerVision.vue',
            './src/views/Courses/Graduate/DataScience.vue',
            './src/views/Courses/Graduate/NLP.vue',
            './src/views/Courses/Graduate/ReinforcementLearning.vue',
            './src/views/Courses/Graduate/LLMOps.vue',
            './src/views/Courses/HighSchool/MachineLearning.vue',
            './src/views/Courses/HighSchool/ComputerVision.vue',
            './src/views/Courses/HighSchool/DataScience.vue'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'esbuild'
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'gsap']
  }
});