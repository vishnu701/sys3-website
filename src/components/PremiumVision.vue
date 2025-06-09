<template>
  <div class="premium-vision">
    <!-- Abstract background with subtle grid and gradient -->
    <div class="vision-bg">
      <div class="vision-grid"></div>
      <div class="vision-gradient"></div>
    </div>
    
    <!-- Main SVG animation -->
    <svg class="vision-svg" width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
      <!-- Central node -->
      <circle class="central-node" cx="250" cy="200" r="18"></circle>
      
      <!-- Outer ring -->
      <circle class="outer-ring" cx="250" cy="200" r="70" fill="none" stroke="#5842FF" stroke-width="1" stroke-opacity="0.2"></circle>
      
      <!-- Connecting nodes and paths -->
      <g class="nodes-group">
        <!-- Node 1 (Innovation) -->
        <g class="node-group node-1">
          <circle class="node" cx="320" cy="150" r="8"></circle>
          <path class="connector" d="M250 200 L320 150" stroke="#5842FF" stroke-width="1" stroke-dasharray="60" stroke-dashoffset="60"></path>
          <text class="node-label" x="340" y="150" text-anchor="start">Innovation</text>
        </g>
        
        <!-- Node 2 (Excellence) -->
        <g class="node-group node-2">
          <circle class="node" cx="320" cy="250" r="8"></circle>
          <path class="connector" d="M250 200 L320 250" stroke="#5842FF" stroke-width="1" stroke-dasharray="60" stroke-dashoffset="60"></path>
          <text class="node-label" x="340" y="250" text-anchor="start">Excellence</text>
        </g>
        
        <!-- Node 3 (Education) -->
        <g class="node-group node-3">
          <circle class="node" cx="180" cy="250" r="8"></circle>
          <path class="connector" d="M250 200 L180 250" stroke="#5842FF" stroke-width="1" stroke-dasharray="60" stroke-dashoffset="60"></path>
          <text class="node-label" x="160" y="250" text-anchor="end">Education</text>
        </g>
        
        <!-- Node 4 (Expertise) -->
        <g class="node-group node-4">
          <circle class="node" cx="180" cy="150" r="8"></circle>
          <path class="connector" d="M250 200 L180 150" stroke="#5842FF" stroke-width="1" stroke-dasharray="60" stroke-dashoffset="60"></path>
          <text class="node-label" x="160" y="150" text-anchor="end">Expertise</text>
        </g>
      </g>
      
      <!-- Accent decorative elements -->
      <g class="accents">
        <!-- Subtle orbit path -->
        <circle class="orbit-path" cx="250" cy="200" r="120" fill="none" stroke="#6585FE" stroke-width="0.5" stroke-opacity="0.2"></circle>
        
        <!-- Pulsing dots -->
        <circle class="pulse-dot pulse-1" cx="250" cy="80" r="3"></circle>
        <circle class="pulse-dot pulse-2" cx="370" cy="200" r="3"></circle>
        <circle class="pulse-dot pulse-3" cx="250" cy="320" r="3"></circle>
        <circle class="pulse-dot pulse-4" cx="130" cy="200" r="3"></circle>
      </g>
      
      <!-- Moving particle along orbit -->
      <circle class="orbit-particle" cx="250" cy="80" r="4"></circle>
    </svg>
    
    <!-- Central message that changes -->
    <div class="central-message">
      <div class="message active" id="message-1">Shaping the future</div>
      <div class="message" id="message-2">Driving innovation</div>
      <div class="message" id="message-3">Expanding knowledge</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let messageInterval;
let currentMessage = 1;

onMounted(() => {
  // Start the message rotation
  rotateMessages();
  
  // Animate the orbit particle
  animateOrbitParticle();
});

onBeforeUnmount(() => {
  if (messageInterval) {
    clearInterval(messageInterval);
  }
});

const rotateMessages = () => {
  messageInterval = setInterval(() => {
    // Hide current message
    document.getElementById(`message-${currentMessage}`).classList.remove('active');
    
    // Update to next message
    currentMessage = currentMessage === 3 ? 1 : currentMessage + 1;
    
    // Show new message
    document.getElementById(`message-${currentMessage}`).classList.add('active');
  }, 3000);
};

const animateOrbitParticle = () => {
  const particle = document.querySelector('.orbit-particle');
  if (!particle) return;

  // Animation parameters
  const radius = 120;
  const centerX = 250;
  const centerY = 200;
  const duration = 20000; // ms for a full orbit
  
  // Start the animation
  let startTime = null;
  
  const animateFrame = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) % duration;
    const progress = elapsed / duration;
    
    // Calculate position on the circle
    const angle = progress * 2 * Math.PI;
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);
    
    // Update particle position
    particle.setAttribute('cx', x);
    particle.setAttribute('cy', y);
    
    // Continue animation
    requestAnimationFrame(animateFrame);
  };
  
  requestAnimationFrame(animateFrame);
};
</script>

<style scoped>
.premium-vision {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Background elements */
.vision-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.vision-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at center, rgba(88, 66, 255, 0.03) 1px, transparent 1px),
    radial-gradient(circle at center, rgba(88, 66, 255, 0.02) 1px, transparent 1px);
  background-size: 20px 20px, 10px 10px;
  background-position: 0 0, 10px 10px;
  opacity: 0.8;
}

.vision-gradient {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background: radial-gradient(circle, rgba(88, 66, 255, 0.04) 0%, rgba(101, 133, 254, 0.02) 50%, transparent 70%);
  opacity: 0.8;
  filter: blur(40px);
}

/* SVG Animation */
.vision-svg {
  position: relative;
  z-index: 1;
}

/* Central node */
.central-node {
  fill: rgba(88, 66, 255, 0.9);
  filter: drop-shadow(0 0 8px rgba(88, 66, 255, 0.5));
  animation: pulseNode 3s ease-in-out infinite;
}

@keyframes pulseNode {
  0%, 100% {
    r: 18;
    filter: drop-shadow(0 0 8px rgba(88, 66, 255, 0.5));
  }
  50% {
    r: 20;
    filter: drop-shadow(0 0 12px rgba(88, 66, 255, 0.7));
  }
}

/* Nodes and connectors */
.node {
  fill: #6585FE;
  opacity: 0;
  animation: fadeInNodes 0.5s ease-out forwards;
}

.node-1 .node { animation-delay: 0.5s; }
.node-2 .node { animation-delay: 1s; }
.node-3 .node { animation-delay: 1.5s; }
.node-4 .node { animation-delay: 2s; }

@keyframes fadeInNodes {
  to {
    opacity: 1;
  }
}

.connector {
  animation: drawConnector 1s ease-out forwards;
}

.node-1 .connector { animation-delay: 0.6s; }
.node-2 .connector { animation-delay: 1.1s; }
.node-3 .connector { animation-delay: 1.6s; }
.node-4 .connector { animation-delay: 2.1s; }

@keyframes drawConnector {
  to {
    stroke-dashoffset: 0;
  }
}

/* Node labels */
.node-label {
  font-size: 14px;
  fill: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  opacity: 0;
  animation: fadeInLabels 0.5s ease-out forwards;
}

.node-1 .node-label { animation-delay: 0.8s; }
.node-2 .node-label { animation-delay: 1.3s; }
.node-3 .node-label { animation-delay: 1.8s; }
.node-4 .node-label { animation-delay: 2.3s; }

@keyframes fadeInLabels {
  to {
    opacity: 1;
  }
}

/* Pulse dots */
.pulse-dot {
  fill: #6585FE;
  opacity: 0.8;
  animation: pulseDot 3s ease-in-out infinite;
}

.pulse-1 { animation-delay: 0s; }
.pulse-2 { animation-delay: 0.75s; }
.pulse-3 { animation-delay: 1.5s; }
.pulse-4 { animation-delay: 2.25s; }

@keyframes pulseDot {
  0%, 100% {
    r: 3;
    opacity: 0.8;
  }
  50% {
    r: 4;
    opacity: 1;
  }
}

/* Orbit particle */
.orbit-particle {
  fill: #5842FF;
  filter: drop-shadow(0 0 3px rgba(88, 66, 255, 0.5));
}

/* Central message */
.central-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  z-index: 2;
}

.message {
  position: absolute;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  text-align: center;
}

.message.active {
  opacity: 1;
  transform: translateY(0);
}

/* Theme adjustments */
[data-theme="light"] .node-label {
  fill: rgba(0, 0, 0, 0.7);
}

[data-theme="dark"] .node-label {
  fill: rgba(255, 255, 255, 0.8);
}

[data-theme="dark"] .message {
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .node-label {
    font-size: 12px;
  }
  
  .message {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .node-label {
    display: none;
  }
  
  .central-node {
    r: 16;
  }
  
  @keyframes pulseNode {
    0%, 100% {
      r: 16;
    }
    50% {
      r: 18;
    }
  }
}
</style>