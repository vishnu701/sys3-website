<template>
  <div class="minimal-vision">
    <svg class="circles-svg" width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
      <!-- Main circle -->
      <circle class="main-circle" cx="200" cy="200" r="80" />
      
      <!-- Orbiting circles -->
      <g class="orbit-group">
        <circle class="orbit-circle orbit-1" cx="300" cy="200" r="6" />
        <circle class="orbit-circle orbit-2" cx="200" cy="300" r="6" />
        <circle class="orbit-circle orbit-3" cx="100" cy="200" r="6" />
        <circle class="orbit-circle orbit-4" cx="200" cy="100" r="6" />
      </g>
      
      <!-- Connection lines -->
      <line class="connection-line" x1="200" y1="200" x2="300" y2="200" />
      <line class="connection-line" x1="200" y1="200" x2="200" y2="300" />
      <line class="connection-line" x1="200" y1="200" x2="100" y2="200" />
      <line class="connection-line" x1="200" y1="200" x2="200" y2="100" />
      
      <!-- Circle path for animation -->
      <circle class="path-circle" cx="200" cy="200" r="100" fill="none" />
    </svg>
    
    <!-- Words that appear and fade -->
    <div class="words-container">
      <div class="word word-1">Innovation</div>
      <div class="word word-2">Excellence</div>
      <div class="word word-3">Education</div>
      <div class="word word-4">Expertise</div>
    </div>
  </div>
</template>

<style scoped>
.minimal-vision {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.circles-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* Main central circle */
.main-circle {
  fill: rgba(88, 66, 255, 0.1);
  stroke: #5842FF;
  stroke-width: 2;
  stroke-dasharray: 505;
  stroke-dashoffset: 505;
  animation: dash 3s ease-in-out forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

/* Path circle - invisible but used for animation */
.path-circle {
  stroke: transparent;
}

/* Orbiting circles */
.orbit-circle {
  fill: #6585FE;
  r: 0;
  animation: grow 1s ease-out forwards;
}

.orbit-1 {
  animation-delay: 0.5s;
}

.orbit-2 {
  animation-delay: 1s;
}

.orbit-3 {
  animation-delay: 1.5s;
}

.orbit-4 {
  animation-delay: 2s;
}

@keyframes grow {
  from {
    r: 0;
  }
  to {
    r: 6;
  }
}

/* Connection lines */
.connection-line {
  stroke: #5842FF;
  stroke-width: 1;
  stroke-opacity: 0.6;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 2s ease-out forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Orbit group animation */
.orbit-group {
  animation: rotate 20s linear infinite;
  transform-origin: 200px 200px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Words animation */
.words-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.word {
  position: absolute;
  font-size: 18px;
  font-weight: 500;
  color: #5842FF;
  opacity: 0;
  animation: fadeWord 12s infinite;
}

.word-1 {
  animation-delay: 0s;
}

.word-2 {
  animation-delay: 3s;
}

.word-3 {
  animation-delay: 6s;
}

.word-4 {
  animation-delay: 9s;
}

@keyframes fadeWord {
  0%, 100% {
    opacity: 0;
    transform: translateY(10px);
  }
  3%, 22% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Light mode adjustments */
[data-theme="light"] .main-circle {
  fill: rgba(88, 66, 255, 0.05);
}

[data-theme="light"] .connection-line {
  stroke-opacity: 0.4;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .word {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .word {
    font-size: 14px;
  }
}
</style>