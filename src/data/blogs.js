// Import all required assets
import PavlosProtopapasAvatar from '../assets/images/people/PavlosProtopapas.jpeg';
import VishnuMAvatar from '../assets/images/people/VishnuM.png';
import AINeural from '../assets/images/ai-neural-abstract.svg';
import EducationIcon from '../assets/images/education-icon.svg';
import ConsultingIcon from '../assets/images/consulting-icon.svg';
import TeamIllustration from '../assets/images/team-illustration.svg';

// Blog data structure - Add new blogs here
export const blogs = [
  {
    id: 'evolution-of-ai',
    title: 'The Evolution of AI: From Rule-Based Systems to Large Language Models',
    subtitle: 'Exploring the transformative journey of artificial intelligence, from early expert systems to today\'s sophisticated language models that are reshaping how we interact with technology.',
    excerpt: 'Exploring the transformative journey of artificial intelligence, from early expert systems to today\'s sophisticated language models that are reshaping how we interact with technology.',
    author: {
      name: 'Dr. Pavlos Protopapas',
      title: 'Professor, Harvard University',
      avatar: PavlosProtopapasAvatar
    },
    category: 'Research',
    date: 'December 2024',
    readTime: '8 min read',
    featured: true,
    image: AINeural,
    tags: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'LLMs', 'Research'],
    content: `
      <div class="article-image">
        <img src="${AINeural}" alt="AI Neural Network Visualization" />
        <p class="image-caption">The evolution of AI systems from simple rule-based approaches to complex neural networks</p>
      </div>

      <h2>The Foundation: Rule-Based Systems</h2>
      <p>
        The journey of artificial intelligence began in the 1950s with rule-based systems, also known as expert systems. These early AI implementations relied on explicitly programmed rules and logical statements to make decisions. While limited in scope, they represented humanity's first serious attempt at creating machines that could mimic human reasoning.
      </p>
      
      <p>
        Expert systems like MYCIN for medical diagnosis and DENDRAL for chemical analysis demonstrated the potential of AI in specialized domains. However, these systems faced significant limitations: they required extensive manual programming, struggled with uncertainty, and couldn't learn from new data.
      </p>

      <blockquote>
        "The transition from rule-based systems to machine learning marked a fundamental shift in how we approach artificial intelligence—from teaching machines what to think to teaching them how to learn."
      </blockquote>

      <h2>The Machine Learning Revolution</h2>
      <p>
        The 1980s and 1990s witnessed the emergence of machine learning as a dominant paradigm in AI. Instead of relying on hand-coded rules, these systems could automatically learn patterns from data. This shift was revolutionary because it allowed AI systems to improve their performance through experience.
      </p>

      <p>
        Key developments during this period included:
      </p>

      <ul>
        <li><strong>Neural Networks:</strong> Inspired by biological neurons, these systems could learn complex patterns through training</li>
        <li><strong>Support Vector Machines:</strong> Powerful algorithms for classification and regression tasks</li>
        <li><strong>Decision Trees:</strong> Interpretable models that could make decisions through a series of binary choices</li>
        <li><strong>Ensemble Methods:</strong> Combining multiple models to achieve better performance than any individual model</li>
      </ul>

      <h2>The Deep Learning Breakthrough</h2>
      <p>
        The 2010s marked the beginning of the deep learning revolution. With increased computational power and vast amounts of data, neural networks with many layers (hence "deep") began achieving unprecedented performance in tasks like image recognition, speech processing, and natural language understanding.
      </p>

      <p>
        The breakthrough came with convolutional neural networks (CNNs) for computer vision and recurrent neural networks (RNNs) for sequential data. These architectures could automatically learn hierarchical representations of data, eliminating the need for manual feature engineering that had been a bottleneck in traditional machine learning.
      </p>

      <div class="highlight-box">
        <h3>Key Milestones in Deep Learning</h3>
        <div class="milestone-list">
          <div class="milestone-item">
            <span class="year">2012</span>
            <span class="event">AlexNet wins ImageNet, sparking the deep learning revolution</span>
          </div>
          <div class="milestone-item">
            <span class="year">2014</span>
            <span class="event">GANs introduced, enabling generative AI capabilities</span>
          </div>
          <div class="milestone-item">
            <span class="year">2017</span>
            <span class="event">Transformer architecture published, revolutionizing NLP</span>
          </div>
          <div class="milestone-item">
            <span class="year">2018</span>
            <span class="event">BERT demonstrates bidirectional language understanding</span>
          </div>
        </div>
      </div>

      <h2>The Era of Large Language Models</h2>
      <p>
        The introduction of the transformer architecture in 2017 set the stage for the current era of large language models (LLMs). These models, trained on vast amounts of text data, demonstrated remarkable abilities in understanding and generating human-like text across a wide range of tasks.
      </p>

      <p>
        What makes LLMs particularly fascinating is their emergent capabilities—abilities that weren't explicitly programmed but emerged from scale and training. These include few-shot learning, reasoning, and even basic mathematical problem-solving.
      </p>

      <h2>The Current Landscape and Future Directions</h2>
      <p>
        Today's AI systems represent a convergence of multiple technological advances: massive computational resources, sophisticated architectures, vast datasets, and refined training techniques. Models like GPT-4, Claude, and others demonstrate capabilities that were unimaginable just a decade ago.
      </p>

      <p>
        Looking forward, several trends are shaping the future of AI:
      </p>

      <ul>
        <li><strong>Multimodal AI:</strong> Systems that can process and understand multiple types of data simultaneously</li>
        <li><strong>Efficient AI:</strong> Developing models that require less computational resources while maintaining performance</li>
        <li><strong>Specialized AI:</strong> Domain-specific models that excel in particular fields like science, medicine, or engineering</li>
        <li><strong>Ethical AI:</strong> Ensuring AI systems are fair, transparent, and beneficial to society</li>
      </ul>

      <h2>Implications for Education and Industry</h2>
      <p>
        This evolution has profound implications for how we approach AI education and implementation in industry. Understanding this historical progression helps us appreciate not just where we are, but where we might be headed.
      </p>

      <p>
        For educators, it's crucial to teach not just the latest techniques, but the fundamental principles that have driven AI's evolution. For industry practitioners, this historical perspective provides context for making informed decisions about which AI approaches to adopt for specific challenges.
      </p>

      <h2>Conclusion</h2>
      <p>
        The journey from rule-based systems to large language models represents more than just technological progress—it reflects a fundamental shift in how we think about intelligence, learning, and the relationship between humans and machines. As we continue to push the boundaries of what's possible with AI, this historical foundation provides the context necessary to navigate the future responsibly and effectively.
      </p>

      <p>
        The next chapter in AI's evolution is being written now, with developments in areas like artificial general intelligence, quantum computing, and neuromorphic computing. By understanding where we've come from, we're better positioned to shape where we're going.
      </p>
    `
  },
  {
    id: 'ai-literacy',
    title: 'Building AI Literacy in the Next Generation',
    subtitle: 'How educational institutions can prepare students for an AI-driven future through comprehensive curriculum design and hands-on learning.',
    excerpt: 'How educational institutions can prepare students for an AI-driven future through comprehensive curriculum design and hands-on learning.',
    author: {
      name: 'Dr. Vishnu Mishra',
      title: 'AI Education Specialist',
      avatar: VishnuMAvatar
    },
    category: 'Education',
    date: 'November 2024',
    readTime: '6 min read',
    featured: false,
    image: EducationIcon,
    tags: ['Education', 'AI Literacy', 'Curriculum', 'Students'],
    content: `
      <h2>The Imperative for AI Education</h2>
      <p>
        As artificial intelligence becomes increasingly integrated into every aspect of society, the need for comprehensive AI literacy has never been more critical. Educational institutions worldwide are grappling with how to prepare students for a future where AI fluency is not just advantageous—it's essential.
      </p>

      <p>
        AI literacy encompasses more than just technical skills. It includes understanding AI's capabilities and limitations, ethical implications, and societal impact. Students need to develop critical thinking skills to navigate an AI-enhanced world responsibly.
      </p>

      <h2>Core Components of AI Literacy</h2>
      <p>A comprehensive AI education program should include:</p>

      <ul>
        <li><strong>Foundational Knowledge:</strong> Understanding what AI is, how it works, and its various applications</li>
        <li><strong>Practical Skills:</strong> Hands-on experience with AI tools and programming</li>
        <li><strong>Ethical Reasoning:</strong> Critical analysis of AI's impact on society, privacy, and fairness</li>
        <li><strong>Creative Application:</strong> Using AI as a tool for innovation and problem-solving</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>
        Successful AI education requires a multi-faceted approach that integrates theoretical knowledge with practical experience. Institutions should consider project-based learning, interdisciplinary collaboration, and real-world applications.
      </p>

      <blockquote>
        "The goal isn't to create a generation of AI experts, but to develop AI-literate citizens who can thrive in an AI-augmented world."
      </blockquote>

      <h2>Challenges and Solutions</h2>
      <p>
        While the benefits of AI education are clear, implementation faces several challenges including teacher training, resource allocation, and keeping pace with rapidly evolving technology. However, with proper planning and support, these obstacles can be overcome.
      </p>
    `
  },
  {
    id: 'ethical-ai',
    title: 'Ethical AI Implementation in Enterprise',
    subtitle: 'A framework for organizations to deploy AI solutions responsibly while maintaining transparency and fairness.',
    excerpt: 'A framework for organizations to deploy AI solutions responsibly while maintaining transparency and fairness.',
    author: {
      name: 'Dr. Pavlos Protopapas',
      title: 'Professor, Harvard University',
      avatar: PavlosProtopapasAvatar
    },
    category: 'Industry',
    date: 'November 2024',
    readTime: '7 min read',
    featured: false,
    image: ConsultingIcon,
    tags: ['Ethics', 'AI Implementation', 'Enterprise', 'Responsible AI'],
    content: `
      <h2>The Business Case for Ethical AI</h2>
      <p>
        As organizations increasingly rely on AI systems for critical business decisions, the importance of ethical implementation cannot be overstated. Ethical AI isn't just about doing the right thing—it's about building sustainable, trustworthy systems that deliver long-term value.
      </p>

      <p>
        Companies that prioritize ethical AI practices often see improved customer trust, reduced regulatory risk, and better long-term performance. Conversely, organizations that ignore ethical considerations may face public backlash, legal challenges, and operational failures.
      </p>

      <h2>Key Principles of Ethical AI</h2>
      <p>Successful ethical AI implementation is built on several foundational principles:</p>

      <ul>
        <li><strong>Transparency:</strong> AI systems should be explainable and auditable</li>
        <li><strong>Fairness:</strong> AI should not discriminate or perpetuate bias</li>
        <li><strong>Privacy:</strong> Personal data should be protected and used responsibly</li>
        <li><strong>Accountability:</strong> Clear responsibility for AI decisions and outcomes</li>
        <li><strong>Human Oversight:</strong> Meaningful human control over AI systems</li>
      </ul>

      <h2>Implementation Framework</h2>
      <p>
        Organizations should establish clear governance structures, develop ethical guidelines, and implement regular auditing processes. This includes creating diverse teams, establishing clear accountability chains, and implementing robust testing procedures.
      </p>

      <blockquote>
        "Ethical AI isn't a destination—it's an ongoing journey that requires constant vigilance and continuous improvement."
      </blockquote>

      <h2>Measuring Success</h2>
      <p>
        Success in ethical AI implementation should be measured not just by technical performance, but by fairness metrics, stakeholder satisfaction, and long-term sustainability. Regular assessment and adjustment are crucial for maintaining ethical standards.
      </p>
    `
  },
  {
    id: 'human-ai-collaboration',
    title: 'The Future of Human-AI Collaboration',
    subtitle: 'Examining how artificial intelligence augments human capabilities rather than replacing them, creating new paradigms for work and creativity.',
    excerpt: 'Examining how artificial intelligence augments human capabilities rather than replacing them, creating new paradigms for work and creativity.',
    author: {
      name: 'Dr. Vishnu Mishra',
      title: 'AI Education Specialist',
      avatar: VishnuMAvatar
    },
    category: 'Technology',
    date: 'October 2024',
    readTime: '5 min read',
    featured: false,
    image: TeamIllustration,
    tags: ['Human-AI Collaboration', 'Future of Work', 'Augmentation', 'Technology'],
    content: `
      <h2>Beyond Replacement: The Augmentation Paradigm</h2>
      <p>
        The narrative around AI has often focused on replacement—which jobs will AI take over, which human capabilities will become obsolete. However, the most promising developments in AI point toward a different future: one of augmentation rather than replacement.
      </p>

      <p>
        Human-AI collaboration leverages the unique strengths of both humans and machines. While AI excels at processing large amounts of data, recognizing patterns, and performing repetitive tasks, humans bring creativity, emotional intelligence, ethical reasoning, and contextual understanding.
      </p>

      <h2>Successful Collaboration Models</h2>
      <p>Effective human-AI collaboration manifests in several key areas:</p>

      <ul>
        <li><strong>Creative Industries:</strong> AI assists with ideation and iteration while humans provide vision and meaning</li>
        <li><strong>Healthcare:</strong> AI analyzes data and suggests diagnoses while doctors provide care and make final decisions</li>
        <li><strong>Education:</strong> AI personalizes learning while teachers provide mentorship and emotional support</li>
        <li><strong>Research:</strong> AI processes data and generates hypotheses while researchers design experiments and interpret results</li>
      </ul>

      <h2>Building Effective Partnerships</h2>
      <p>
        Creating successful human-AI partnerships requires thoughtful design, clear role definition, and ongoing adaptation. Organizations must invest in training, establish clear communication protocols, and maintain human agency in decision-making processes.
      </p>

      <blockquote>
        "The future belongs not to humans or AI alone, but to the collaborative intelligence that emerges when they work together."
      </blockquote>

      <h2>Preparing for the Future</h2>
      <p>
        As AI capabilities continue to evolve, the nature of human-AI collaboration will also change. Success requires adaptability, continuous learning, and a commitment to maintaining human values in an increasingly AI-augmented world.
      </p>
    `
  }
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