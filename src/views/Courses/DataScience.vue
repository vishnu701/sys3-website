<template>
  <div>
    <!-- Course Sticky Navigation (appears on scroll) -->
    <div class="course-nav">
      <div class="course-nav-inner">
        <div class="course-title">Data Science</div>
        <div class="course-nav-links">
          <a href="#overview" class="active">Overview</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#instructors">Instructors</a>
          <a href="#details">Details</a>
          <a href="#cta">Enroll</a>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- Course Hero Section -->
      <section class="course-hero" :style="{ backgroundImage: `url('/public/data-science-hero.jpg')` }">
        <div class="course-hero-content">
          <h1><span class="hero-highlight">Data Science</span></h1>
          <p>Master the fundamentals of data analysis, statistics, and visualization needed to build a strong AI foundation.</p>
        </div>
      </section>

      <!-- Course Overview Section -->
      <section class="course-section course-overview" id="overview">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Overview</span></h2>
          
          <div class="overview-grid">
            <div class="overview-text">
              <p><strong>Data Science</strong> is a pre-requisite course for students who are looking to get into machine learning using Python. We start with the basics of Python, like data types, data structures, classes etc., and then move on to topics that cover libraries that are ML focused such as NumPy, Pandas, and Matplotlib.</p>
              
              <p>Through a blend of theoretical instruction and hands-on practice, you'll learn how to collect, clean, and analyze data, as well as how to create compelling visualizations that communicate your findings effectively. The course also includes a significant project component, where students work in teams to apply their skills to real-world Python problems.</p>
              
              <p>By the end of this module, students will have the necessary tools to undertake a basic course in machine learning successfully and embark on a data analytics project.</p>
            </div>
            
            <div class="overview-stats">
              <div class="stat-item">
                <div class="stat-number">12</div>
                <div class="stat-label">Weeks</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">36</div>
                <div class="stat-label">Hours</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">6</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="course-section" id="how-it-works">
        <div class="course-section-content">
          <h2>How It <span class="gradient-text">Works</span></h2>
          <p>Our teaching methodology integrates preparation, active learning, and assessment to maximize your learning experience.</p>
          
          <div class="learning-flow-container session-format-container">
            <img :src="sessionFormatImg" alt="Session Format Diagram" class="session-format-image">
          </div>
          
          <div class="learning-components">
            <div class="component-item">
              <h3>Pre-Class Preparation</h3>
              <p>Before each session, students complete assigned readings and tutorials, followed by a short quiz to gauge understanding of core concepts.</p>
            </div>
            
            <div class="component-item">
              <h3>Interactive Lecture</h3>
              <p>During class, instruction cycles between concise lecture segments, interactive Q&A periods, and guided hands-on exercises. This pattern repeats throughout each session to maintain engagement and reinforce learning.</p>
            </div>
            
            <div class="component-item">
              <h3>Post-Class Assessment</h3>
              <p>Following each session, students complete a comprehensive quiz to solidify their understanding and identify areas for further study.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Curriculum Section -->
      <section class="course-section" id="curriculum">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Curriculum</span></h2>
          <p>The Data Science curriculum (Autumn-24) is a comprehensive pre-requisite course for students looking to enter the field of machine learning using Python. We start with Python fundamentals and progressively build to data science libraries and techniques.</p>
          
          <div class="modules-list">
            <div v-for="(module, index) in modules" :key="index" class="module-item" :class="{ active: index === activeModule }">
              <div class="module-head" @click="toggleModule(index)">
                <div class="module-title">
                  <div class="module-number">{{ index + 1 }}</div>
                  <h3>{{ module.title }}</h3>
                </div>
                <div class="module-toggle"></div>
              </div>
              <div class="module-content">
                <ul class="module-list">
                  <li v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex">
                    <svg class="lesson-icon" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l6.16-3.42a12 12 0 01.2 1.38A12 12 0 0112 21a12 12 0 01-6.36-1.8c-.2-.46-.37-.94-.5-1.43L12 14z"></path>
                    </svg>
                    {{ lesson }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Instructors Section -->
      <section class="course-section" id="instructors">
        <div class="course-section-content">
          <h2>Meet Your <span class="gradient-text">Instructor</span></h2>
          <p>Learn from a world-class educator with extensive research and teaching experience in data science.</p>
          
          <div class="instructors-grid single-instructor">
            <div class="instructor-card">
              <div class="instructor-image">
                <img :src="pavlosImg" alt="Dr. Pavlos Protopapas" />
              </div>
              <div class="instructor-info">
                <div class="instructor-name">Dr. Pavlos Protopapas</div>
                <div class="instructor-role">CEO and Founder</div>
                <p class="instructor-bio">Pavlos is an educator and researcher. As an educator, Pavlos is teaching CS109A, CS109B, introduction to data science and advanced topics of data science. He also teaches a course in MLOps. In the past he has taught capstone courses in data science and computational science, introduction to deep reinforcement learning, and planning a course in physics informed neural networks.</p>
                <div class="instructor-links">
                  <a href="https://seas.harvard.edu/person/pavlos-protopapas" target="_blank" class="harvard-link" aria-label="Harvard Directory">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3L3 9V11H29V9L16 3Z" fill="currentColor"/>
                      <path d="M7 13V23H10V13H7Z" fill="currentColor"/>
                      <path d="M13 13V23H16V13H13Z" fill="currentColor"/>
                      <path d="M19 13V23H22V13H19Z" fill="currentColor"/>
                      <path d="M25 13V23H28V13H25Z" fill="currentColor"/>
                      <path d="M4 25V29H28V25H4Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Details Section -->
      <section class="course-section" id="details">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Details</span></h2>
          <p class="section-intro">Everything you need to know about our comprehensive Data Science program, designed to transform beginners into job-ready data scientists.</p>
          
          <div class="details-grid">
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>Prerequisites</h3>
              </div>
              <p>Basic programming knowledge is helpful but not required. The course includes Python fundamentals for beginners. A background in mathematics or statistics is beneficial but not essential.</p>
              <ul>
                <li>No prior coding experience needed</li>
                <li>Basic algebra and statistics concepts</li>
                <li>Curiosity and commitment to learn</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3>Format</h3>
              </div>
              <p>The course is delivered through a carefully designed blend of learning methods to maximize engagement and knowledge retention:</p>
              <ul>
                <li>Live virtual sessions with interactive Q&A</li>
                <li>Self-paced learning modules with hands-on exercises</li>
                <li>Real-world projects with industry datasets</li>
                <li>Mentor-guided review sessions and code reviews</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Tools & Technologies</h3>
              </div>
              <p>Students will build a comprehensive data science toolkit with industry-standard technologies:</p>
              <ul>
                <li>Python programming and Jupyter Notebooks</li>
                <li>Data analysis with Pandas and NumPy</li>
                <li>Data visualization with Matplotlib, Seaborn, and Plotly</li>
                <li>Statistical analysis with SciPy and StatsModels</li>
                <li>SQL fundamentals for database interactions</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3>Certification</h3>
              </div>
              <p>Upon successful completion of all course requirements, you'll earn the System3 Data Science Certification:</p>
              <ul>
                <li>Recognized credential by leading tech companies</li>
                <li>Digital certificate for your resume and LinkedIn profile</li>
                <li>Showcase of completed projects in a personal portfolio</li>
                <li>Access to System3 alumni network and job placement assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="course-section course-cta" id="cta">
        <div class="course-section-content">
          <div class="cta-box">
            <h2>Ready to <span class="gradient-text">Master</span> Data Science?</h2>
            <p>Join our next cohort and build the foundational skills for success in the world of AI and data analytics.</p>
            <div class="cta-container">
              <router-link to="/forms/course-registration" class="cta-button primary">Register Now</router-link>
              <router-link to="/courses" class="cta-button secondary">Explore Other Courses</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sessionFormatImg from '@/assets/images/session-format.png';
import pavlosImg from '@/assets/images/people/PavlosProtopapas.jpeg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Module accordion state
const activeModule = ref(null);
const toggleModule = (index) => {
  if (activeModule.value === index) {
    activeModule.value = null;
  } else {
    activeModule.value = index;
  }
};

// Course curriculum data
const modules = ref([
  {
    title: "Python Essentials",
    lessons: [
      "Data Types and Type Conversion",
      "Variables and Operators",
      "Arithmetic, Assignment, Comparison, Logical/Conditional Operators",
      "Flow Control"
    ]
  },
  {
    title: "Lists and Loops",
    lessons: [
      "Creating Lists, Indexing, and Slicing",
      "Mutability, List Methods, and Aliasing/Copying",
      "Common Sequence and Comparison Operations",
      "For and While Loops",
      "Mentoring Session: Iterables, Break vs Continue"
    ]
  },
  {
    title: "Data Structures and Pythonic Syntax",
    lessons: [
      "Tuples and Dictionaries",
      "List Comprehension",
      "Dictionary Comprehension",
      "Mentoring Session: Sets"
    ]
  },
  {
    title: "Functions and Function Scope",
    lessons: [
      "Intuition and Definition of Functions",
      "Types of Arguments: Keyword, Position, and Default",
      "Unknown Number of Arguments (* and **)",
      "Namespaces and Types of Scopes",
      "Mentoring Session: Zip and Enumerate Functions"
    ]
  },
  {
    title: "Classes",
    lessons: [
      "Class and Object Concepts",
      "Attributes and Methods",
      "Dunder Methods: __init__()",
      "Mentoring Session: Advanced Dunder Methods (__call__, __getitem__, __str__ etc.)"
    ]
  },
  {
    title: "Strings, Files and Regular Expressions",
    lessons: [
      "String Operations and Methods",
      "Types of Files",
      "Reading and Writing Files",
      "Regular Expressions",
      "Mentoring Session: Third Party Libraries"
    ]
  },
  {
    title: "NumPy",
    lessons: [
      "Creating ndarray Objects",
      "Dimensions and Shapes",
      "NumPy Methods (zeros, ones, arrange, vstack, etc.)",
      "Slicing, Accessing, Boolean Masks, and Reshaping",
      "Mentoring Session: Broadcasting"
    ]
  },
  {
    title: "Notations and Linear Algebra",
    lessons: [
      "Basics of Math Notations (Greek Letters, Summation, etc.)",
      "Log, Exponent, and Derivatives",
      "Vectors: Geometric Interpretation, Operations, and Cosine Similarity",
      "Matrices: Types, Access, Multiplication, Transpose, and Inverse",
      "Mentoring Session: Vector Span and Basis of Vectors"
    ]
  },
  {
    title: "Probability and Statistics",
    lessons: [
      "Random Variables: Motivation and Types",
      "Point Estimates: Mean, Median, Mode, Variance, and Standard Deviation",
      "Histograms and Confidence Intervals",
      "Common Distributions: Uniform, Binomial, and Normal"
    ]
  },
  {
    title: "Pandas",
    lessons: [
      "DataFrames and Series",
      "Indexing and Multi-Indexing",
      ".loc() and .iloc() Methods",
      "Groupby() Operations",
      "Debugging with Try and Except Blocks"
    ]
  },
  {
    title: "Linear Regression",
    lessons: [
      "Response vs Predictor Variables",
      "True vs Statistical Models",
      "Error Evaluation",
      "Train and Test Sets",
      "Regression Coefficients and Their Estimates"
    ]
  },
  {
    title: "Data Visualization with Matplotlib",
    lessons: [
      "Exploratory Data Analysis (EDA)",
      "Types of Visualizations",
      "Creating Basic Plots with Matplotlib",
      "Customizing and Styling Visualizations",
      "Communicating Insights Through Visualization"
    ]
  }
]);

// Initialize animations and course navigation
onMounted(() => {
  nextTick(() => {
    // Initialize fixed header for courses
    setupCourseNav();
    
    // Initialize animations
    initAnimations();

    // Add active class to the first module as initial state
    if (modules.value.length > 0) {
      activeModule.value = 0;
    }
  });
});

// Setup course navigation
const setupCourseNav = () => {
  const courseNav = document.querySelector('.course-nav');
  
  if (courseNav) {
    const courseHero = document.querySelector('.course-hero');
    
    if (courseHero) {
      // Create scroll trigger for the fixed course navigation
      ScrollTrigger.create({
        trigger: courseHero,
        start: "bottom top+=80",
        onEnter: () => {
          courseNav.classList.add('visible');
        },
        onLeaveBack: () => {
          courseNav.classList.remove('visible');
        }
      });
    }
    
    // Highlight active section in the course navigation
    const sections = document.querySelectorAll('.course-section');
    const navLinks = document.querySelectorAll('.course-nav-links a');
    
    if (sections.length > 0 && navLinks.length > 0) {
      // Use plain JavaScript for checking active section
      window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY;
        const headerOffset = 100; // Adjust based on your header height
        
        // Find the current section
        sections.forEach(section => {
          const sectionTop = section.offsetTop - headerOffset;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });
        
        // Update active class
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href && href.includes(current)) {
            link.classList.add('active');
          }
        });
      });
      
      // Set initial active link based on current position
      window.dispatchEvent(new Event('scroll'));
    }
  }
};

// Initialize animations for the page
const initAnimations = () => {
  // Animate page sections
  const sections = document.querySelectorAll('.course-section');
  
  sections.forEach(section => {
    // Animate section headings
    const heading = section.querySelector('h2');
    const content = section.querySelector('.course-section-content > *:not(h2):not(p:first-of-type)');
    const description = section.querySelector('.course-section-content > p:first-of-type');
    
    if (heading) {
      gsap.set(heading, { y: 30, opacity: 0 });
      gsap.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
    
    if (description) {
      gsap.set(description, { y: 20, opacity: 0 });
      gsap.to(description, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
    
    if (content) {
      gsap.set(content, { y: 20, opacity: 0 });
      gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
  });
  
  // Animate hero section
  const heroSection = document.querySelector('.course-hero');
  if (heroSection) {
    const heroContent = heroSection.querySelector('.course-hero-content');
    gsap.set(heroContent, { y: 40, opacity: 0 });
    gsap.to(heroContent, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });
  }
  
  // Animate stats items
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length) {
    gsap.set(statItems, { scale: 0.8, opacity: 0 });
    gsap.to(statItems, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: '.overview-stats',
        start: 'top 80%',
        once: true
      }
    });
  }
  
  // Animate module items
  const moduleItems = document.querySelectorAll('.module-item');
  if (moduleItems.length) {
    gsap.set(moduleItems, { y: 20, opacity: 0 });
    gsap.to(moduleItems, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.modules-list',
        start: 'top 80%',
        once: true
      }
    });
  }
};
</script>

<style scoped>
/* Specific styles for DataScience.vue */
.cta-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(138, 133, 255, 0.25);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(138, 133, 255, 0.35);
}

.cta-button.secondary {
  background: transparent;
  border: 1.5px solid var(--color-primary);
  color: var(--color-text);
}

.cta-button.secondary:hover {
  background: rgba(138, 133, 255, 0.1);
  transform: translateY(-3px);
}

/* Fix for module toggle state */
.module-item.active .module-toggle::after {
  transform: translateX(-50%) scaleY(0);
}

/* Ensure correct theme support */
:deep([data-theme="light"]) .course-hero::before {
  background: linear-gradient(145deg, 
    rgba(30, 30, 60, 0.7), 
    rgba(40, 40, 80, 0.65), 
    rgba(50, 50, 90, 0.6));
}

:deep([data-theme="light"]) .course-hero-content {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

:deep([data-theme="light"]) .course-overview {
  background-color: inherit;
}

:deep([data-theme="light"]) .stat-item,
:deep([data-theme="light"]) .component-item,
:deep([data-theme="light"]) .module-head,
:deep([data-theme="light"]) .instructor-card,
:deep([data-theme="light"]) .details-item {
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Make background overlay for course hero */
.course-hero {
  position: relative;
}

.course-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, 
    rgba(5, 5, 5, 0.85), 
    rgba(10, 10, 10, 0.8), 
    rgba(30, 30, 40, 0.75));
  z-index: 1;
}

.course-hero-content {
  position: relative;
  z-index: 2;
}

/* Fix for module toggle in light theme */
:deep([data-theme="light"]) .module-item.active .module-content {
  background: white;
}

/* Responsive styles */
@media (max-width: 992px) {
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .overview-text {
    padding-right: 0;
  }
  
  .course-nav-inner {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .course-nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .learning-components {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .cta-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .course-hero {
    height: 60vh;
  }
  
  .course-hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .course-hero {
    height: 50vh;
  }
  
  .course-hero h1 {
    font-size: 2rem;
  }
  
  .course-section {
    padding: 3rem 0;
  }
  
  .course-section-content {
    padding: 0 1rem;
  }
}
</style>