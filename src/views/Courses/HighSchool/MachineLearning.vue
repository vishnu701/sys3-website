<template>
  <CourseTemplate
    courseTitle="Machine Learning"
    heroImage=""
    heroTagline="From algorithms to applied intelligence: Build, train, and deploy powerful machine learning models."
    overviewTitle="Machine Learning for High School"
    overviewParagraph1="is a comprehensive course designed specifically for high school students. This course introduces the fundamental concepts, algorithms, and techniques that power modern machine learning systems in an accessible way."
    overviewParagraph2="Through a blend of theoretical instruction and hands-on projects, you'll learn to design, implement and evaluate machine learning solutions for complex problems. The course covers both supervised and unsupervised learning approaches, as well as neural network fundamentals and model evaluation strategies."
    overviewParagraph3="By the end of this module, students will be able to apply machine learning techniques to real-world problems, select appropriate models for specific tasks, and evaluate their performance effectively."
    weeksDuration="12"
    hoursDuration="36"
    projectsCount="6"
    curriculumIntro="The High School Machine Learning curriculum (Autumn-24) introduces essential machine learning concepts through practical applications and intuitive explanations. We focus on building strong foundations with appropriate mathematical depth for high school students."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our comprehensive Machine Learning program, designed for high school students interested in AI and data science."
    prerequisitesDescription="Basic programming knowledge and fundamental math concepts are required. Familiarity with Python and algebra is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will build a comprehensive machine learning toolkit with industry-standard technologies:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and build the skills for success in the world of AI and machine learning."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';

const modules = [
  {
    title: "Introduction to Regression",
    lessons: [
      "Statistical Modeling - kNN",
      "Model Fitness - How does the model perform predictions",
      "Comparison of 2 models - How do we choose from 2 different models"
    ]
  },
  {
    title: "Linear Regression and Multi-Linear Regression",
    lessons: [
      "Linear Models – An introduction to linear regression",
      "Multi-linear regression",
      "Interpreting Model Parameters",
      "Scaling",
      "Collinearity",
      "Qualitative Predictors",
      "Residual Analysis"
    ]
  },
  {
    title: "Polynomial Regression and Model Selection",
    lessons: [
      "Overfitting and Underfitting",
      "Assumptions of Linear Regression",
      "Interaction Effects in Regression Models",
      "Polynomial Regression",
      "Model Selection Techniques",
      "Exhaustive",
      "Greedy",
      "Fine-tuning hyper-parameters",
      "Cross-Validation"
    ]
  },
  {
    title: "Bias-Variance Tradeoff and Regularization",
    lessons: [
      "Generalization Error and Bias Variance Tradeoff",
      "Regularization Techniques",
      "Lasso",
      "Ridge"
    ]
  },
  {
    title: "Inference, Hypothesis Testing and Predictive Intervals",
    lessons: [
      "Assessing the accuracy of the coefficient estimates",
      "Bootstrapping",
      "How well do we know f - The confidence intervals of f"
    ]
  },
  {
    title: "Logistic Regression",
    lessons: [
      "What is Classification",
      "Why not Linear Regression",
      "Estimating the Simple Logistic Model",
      "Inference"
    ]
  },
  {
    title: "Multiclass Logistic Regression, Regularization and Metrics",
    lessons: [
      "Multiple Logistic Regression",
      "Classification Decision Boundaries",
      "Multiclass Classification",
      "Classification Metrics"
    ]
  },
  {
    title: "Decision Trees - Classification",
    lessons: [
      "Decision Trees",
      "Intuition",
      "Predictions",
      "Splitting Criteria",
      "Classification Error",
      "Gini Index",
      "Entropy",
      "Stopping Conditions"
    ]
  },
  {
    title: "Decision Trees – Pruning and Regression",
    lessons: [
      "Regression – Splitting Criteria",
      "Numerical vs Categorical Attributes",
      "Pruning – Stopping Conditions Drawback"
    ]
  },
  {
    title: "Introduction to Bagging",
    lessons: [
      "Ensemble Learning and Bootstrapping",
      "Bagging",
      "Out-of-bag Error"
    ]
  },
  {
    title: "Random Forest",
    lessons: [
      "Random Forest",
      "Variable Importance",
      "Mean Decrease in Impurity",
      "Permutation Importance",
      "Missing Data",
      "Data Imbalance"
    ]
  },
  {
    title: "Boosting and Gradient Boosting",
    lessons: [
      "Introduction to boosting",
      "Gradient Boosting"
    ]
  },
  {
    title: "Adaboost",
    lessons: [
      "Adaboost",
      "Final Thoughts on Boosting"
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
  "Python programming experience",
  "Understanding of basic statistics",
  "Algebra fundamentals",
  "Prior completion of Data Science course recommended"
];

const formatItems = [
  "Live virtual sessions with interactive Q&A",
  "Self-paced learning modules with hands-on exercises",
  "Real-world projects with curated datasets",
  "Mentor-guided review sessions and code reviews",
];

const toolsItems = [
  "Python with scikit-learn and simplified TensorFlow",
  "Jupyter notebooks for experiment tracking",
  "Data visualization tools for model analysis",
  "Feature engineering techniques",
  "Model evaluation frameworks for beginners",
  "Basic deployment platforms for student projects"
];

const certificationItems = [
  "Recognized high school certification in Machine Learning",
  "Digital certificate for college applications and portfolios",
  "Showcase of completed ML projects in a personal portfolio",
  "Access to System3 student network and mentorship program",
  "Continued learning resources and community access"
];
</script>