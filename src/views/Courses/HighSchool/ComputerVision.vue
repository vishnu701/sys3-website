<template>
  <CourseTemplate
    courseTitle="COMPUTER VISION"
    heroImage=""
    heroTagline="Teach computers to see: Build intelligent systems that understand and interpret visual data."
    overviewTitle="Computer Vision for High School"
    overviewParagraph1="is an accessible introduction to the fascinating world of computer vision. This course teaches students how to build systems that can understand and interpret visual information from images and videos."
    overviewParagraph2="Through hands-on projects and guided tutorials, you'll learn the fundamentals of image processing, object detection, and simple neural networks for image classification. We emphasize practical applications and intuitive understanding of complex concepts with minimal mathematics."
    overviewParagraph3="By the end of the course, students will have built several computer vision applications, including an image classifier, an object detector, and a simple facial recognition system."
    weeksDuration="10"
    hoursDuration="30"
    projectsCount="5"
    curriculumIntro="The High School Computer Vision curriculum (Autumn-24) introduces the fundamental concepts of computer vision in an accessible way, focusing on practical applications and hands-on learning."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our Computer Vision program designed specifically for high school students."
    prerequisitesDescription="Basic programming experience and familiarity with Python are required. Some background in mathematics (algebra and basic statistics) is helpful but not essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will learn to use industry-standard computer vision tools and libraries:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and learn to build intelligent systems that can see and understand the world."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';

const modules = [
  {
    title: "Neural Networks - 1",
    lessons: [
      "Linear to Logistic Regression",
      "Logistic Regression to ANN",
      "Perceptron - Single neuron network",
      "Multi-Layer Perceptron (MLP)"
    ]
  },
  {
    title: "Neural Networks - 2",
    lessons: [
      "Anatomy of a NN",
      "Design choices",
      "Activation function",
      "Loss function",
      "Output units",
      "Architecture",
      "A brief introduction to Gradient Descent, Stochastic Gradient Descent and Backpropagation"
    ]
  },
  {
    title: "Neural Networks - 3",
    lessons: [
      "Challenges in Optimization",
      "Momentum",
      "Adaptive Learning Rate",
      "Adam"
    ]
  },
  {
    title: "Neural Networks - 4",
    lessons: [
      "Overfitting",
      "Regularization of NN",
      "Norm Penalties",
      "Early Stopping",
      "Data Augmentation",
      "Dropout",
      "Batch Normalization"
    ]
  },
  {
    title: "CNN - 1",
    lessons: [
      "CNN basic ideas",
      "Kernels, Dimensions, Number of parameters",
      "What activation functions do we use?",
      "What is pooling?"
    ]
  },
  {
    title: "CNN - 2",
    lessons: [
      "Building a CNN",
      "Training a CNN",
      "Regularization for CNN"
    ]
  },
  {
    title: "CNN - 3",
    lessons: [
      "SOTA",
      "LeNet",
      "VGG",
      "GoogleNet",
      "ResNet",
      "MobileNet",
      "Transfer Learning",
      "Motivation and Basic Idea",
      "Transfer Learning Strategies"
    ]
  }
];

const instructors = [
  {
    name: "Dr. Pavlos Protopapas",
    role: "CEO and Founder",
    bio: "Pavlos is an educator and researcher. As an educator, Pavlos is teaching CS109A, CS109B, introduction to data science and advanced topics of data science. He also teaches a course in MLOps. In the past he has taught capstone courses in data science and computational science, introduction to deep reinforcement learning, and planning a course in physics informed neural networks.",
    imagePath: pavlosImage,
    linkedin: "#",
    website: "https://seas.harvard.edu/person/pavlos-protopapas"
  }
];

const prerequisites = [
  "Basic Python programming knowledge",
  "Familiarity with loops, functions, and data structures",
  "High school algebra and basic statistics",
  "Curiosity about computer vision and AI applications",
  "No prior machine learning experience required"
];

const formatItems = [
  "Interactive virtual sessions with practical demonstrations",
  "Hands-on coding exercises with immediate feedback",
  "Visual learning aids and simulations",
  "Step-by-step project guides with checkpoints",
  "Peer collaboration on vision challenges",
  "Mentor support during programming sessions"
];

const toolsItems = [
  "Python with OpenCV for image processing",
  "Simplified TensorFlow/Keras for neural networks",
  "Google Colab notebooks for easy setup",
  "Pre-configured environments for computer vision",
  "User-friendly visualization tools",
  "Accessible datasets for computer vision projects"
];

const certificationItems = [
  "High School Computer Vision Certification",
  "Digital project portfolio showcasing CV applications",
  "Certificate for college applications and internships",
  "Access to System3 student network",
  "Continued learning resources and community access"
];
</script>