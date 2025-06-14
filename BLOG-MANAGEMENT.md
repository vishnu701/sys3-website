# Blog Management Guide

## Overview
The blog system is designed to be easily manageable through a simple data structure. All blog posts are stored in `/src/data/blogs.js` and can be added or modified by editing this file.

## File Structure
```
src/
├── data/
│   └── blogs.js          # Blog data and management functions
├── views/
│   ├── Blog.vue          # Main blog listing page
│   └── BlogPost.vue      # Individual blog post template
└── router/
    └── index.js          # Contains dynamic blog routes
```

## Adding a New Blog Post

### Step 1: Edit the Blog Data File
Open `/src/data/blogs.js` and add a new blog object to the `blogs` array:

```javascript
{
  id: 'your-blog-slug',                    // URL-friendly unique identifier
  title: 'Your Blog Title',               // Main title (can include HTML)
  subtitle: 'Brief description...',       // Subtitle/description
  excerpt: 'Short excerpt for cards...',  // Summary for blog listing
  author: {
    name: 'Author Name',
    title: 'Author Title/Position',
    avatar: '/src/assets/images/people/AuthorImage.jpg'
  },
  category: 'Research',                    // Category (Research, Education, Industry, Technology)
  date: 'Month Year',                      // Publication date
  readTime: 'X min read',                  // Estimated reading time
  featured: false,                         // Set to true for featured posts
  image: '/src/assets/images/blog-image.svg', // Hero image for the post
  tags: ['Tag1', 'Tag2', 'Tag3'],         // Array of tags
  content: `
    <!-- HTML content goes here -->
    <h2>Section Heading</h2>
    <p>Your content...</p>
    
    <blockquote>
      "Quote text here"
    </blockquote>
    
    <ul>
      <li><strong>Bold text:</strong> Description</li>
    </ul>
    
    <div class="highlight-box">
      <h3>Highlight Title</h3>
      <p>Special content in highlighted box</p>
    </div>
  `
}
```

### Step 2: Blog Content HTML Structure

The content field accepts HTML and supports these special elements:

#### Basic Elements
- `<h2>`, `<h3>` - Section headings
- `<p>` - Paragraphs
- `<ul>`, `<li>` - Lists
- `<strong>`, `<em>` - Text formatting

#### Special Components
- `<blockquote>` - Styled quote blocks
- `<div class="highlight-box">` - Highlighted content boxes
- `<div class="milestone-list">` - Timeline/milestone lists

#### Images
```html
<div class="article-image">
  <img src="/src/assets/images/your-image.svg" alt="Description" />
  <p class="image-caption">Caption text</p>
</div>
```

#### Milestone Timeline
```html
<div class="highlight-box">
  <h3>Timeline Title</h3>
  <div class="milestone-list">
    <div class="milestone-item">
      <span class="year">2024</span>
      <span class="event">Event description</span>
    </div>
  </div>
</div>
```

## Blog Categories
Available categories:
- **Research** - Academic research, studies, analysis
- **Education** - Educational content, teaching methods
- **Industry** - Business applications, case studies
- **Technology** - Technical developments, tools

## Features

### Automatic Features
- **Dynamic routing**: Blog posts are automatically accessible at `/blog/{id}`
- **Related posts**: System automatically suggests related posts based on category and tags
- **Featured posts**: Set `featured: true` to highlight posts on the main blog page
- **Responsive design**: All blog content is mobile-friendly
- **Dark mode support**: Blog posts automatically adapt to dark/light themes

### Helper Functions
Available in `blogs.js`:
- `getAllBlogs()` - Get all blogs sorted by date
- `getFeaturedBlogs()` - Get only featured blogs
- `getBlogById(id)` - Get specific blog by ID
- `getBlogsByCategory(category)` - Filter by category
- `getRelatedBlogs(id, limit)` - Get related posts
- `getBlogCategories()` - Get all unique categories
- `getBlogTags()` - Get all unique tags

## Best Practices

### Content Guidelines
1. **Keep excerpts concise** (under 200 characters)
2. **Use descriptive IDs** (lowercase, dash-separated)
3. **Optimize images** for web (SVG preferred for illustrations)
4. **Include reading time** estimate
5. **Tag appropriately** (3-5 relevant tags)

### SEO Optimization
- Use descriptive titles and subtitles
- Include relevant keywords in content
- Ensure proper heading hierarchy (h2, h3)
- Add alt text to images

### Styling Tips
- Use `<strong>` for emphasis within lists
- Wrap important sections in `highlight-box` class
- Use blockquotes for key insights or quotes
- Keep paragraphs concise for readability

## Example Complete Blog Post

```javascript
{
  id: 'ai-in-healthcare',
  title: 'Transforming Healthcare with <span class="gradient-text">Artificial Intelligence</span>',
  subtitle: 'Exploring how AI is revolutionizing medical diagnosis, treatment, and patient care.',
  excerpt: 'An in-depth look at AI applications in healthcare and their impact on patient outcomes.',
  author: {
    name: 'Dr. Sarah Johnson',
    title: 'Healthcare AI Researcher',
    avatar: '/src/assets/images/people/SarahJohnson.jpg'
  },
  category: 'Research',
  date: 'January 2025',
  readTime: '7 min read',
  featured: true,
  image: '/src/assets/images/healthcare-ai.svg',
  tags: ['Healthcare', 'AI Applications', 'Medical Technology', 'Research'],
  content: `
    <div class="article-image">
      <img src="/src/assets/images/healthcare-ai.svg" alt="AI in Healthcare" />
      <p class="image-caption">AI-powered diagnostic tools are transforming medical practice</p>
    </div>

    <h2>The Current State of AI in Healthcare</h2>
    <p>
      Artificial intelligence is rapidly transforming the healthcare landscape...
    </p>

    <blockquote>
      "AI has the potential to augment human expertise and improve patient outcomes across all areas of medicine."
    </blockquote>

    <h2>Key Applications</h2>
    <ul>
      <li><strong>Diagnostic Imaging:</strong> AI algorithms can detect patterns in medical images</li>
      <li><strong>Drug Discovery:</strong> Machine learning accelerates pharmaceutical research</li>
      <li><strong>Personalized Treatment:</strong> AI enables tailored treatment plans</li>
    </ul>
  `
}
```

## Deployment
After adding or modifying blog posts:
1. Save the `/src/data/blogs.js` file
2. The changes will be automatically reflected on the website
3. No additional deployment steps required

## Accessing Blog Posts
- Main blog page: `/blog`
- Individual posts: `/blog/{post-id}`
- All routes are automatically generated from the blog data