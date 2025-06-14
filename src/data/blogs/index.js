// Import all blog posts
import evolutionOfAI from './evolution-of-ai.js';
import aiLiteracy from './ai-literacy.js';
import agenticWorkflows from './agentic-workflows.js';
import humanAICollaboration from './human-ai-collaboration.js';
import aiInClimateScience from './ai-in-climate-science.js';
import ragSystemsAI from './rag-systems-ai.js';

// Export all blogs as an array
export const blogs = [
  ragSystemsAI,
  agenticWorkflows,
  evolutionOfAI,
  aiLiteracy,
  humanAICollaboration,
  aiInClimateScience
];

// Helper functions for blog data
export function getAllBlogs() {
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getFeaturedBlogs() {
  return blogs.filter(blog => blog.featured);
}

export function getBlogById(id) {
  return blogs.find(blog => blog.id === id);
}

export function getBlogsByCategory(category) {
  return blogs.filter(blog => blog.category === category);
}

export function getRelatedBlogs(currentBlogId, limit = 3) {
  const currentBlog = getBlogById(currentBlogId);
  if (!currentBlog) return [];
  
  return blogs
    .filter(blog => blog.id !== currentBlogId)
    .filter(blog => 
      blog.category === currentBlog.category || 
      blog.tags.some(tag => currentBlog.tags.includes(tag))
    )
    .slice(0, limit);
}

export function getBlogCategories() {
  const categories = [...new Set(blogs.map(blog => blog.category))];
  return categories;
}

export function getBlogTags() {
  const tags = [...new Set(blogs.flatMap(blog => blog.tags))];
  return tags;
}