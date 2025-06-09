<template>
  <div class="neural-network-visual">
    <!-- Central orb -->
    <div class="central-orb">
      <div class="orb-inner"></div>
      <div class="orb-glow"></div>
    </div>

    <!-- Floating planes -->
    <div class="floating-plane plane-1"></div>
    <div class="floating-plane plane-2"></div>
    <div class="floating-plane plane-3"></div>

    <!-- Neural network nodes -->
    <div class="network-node node-1"></div>
    <div class="network-node node-2"></div>
    <div class="network-node node-3"></div>
    <div class="network-node node-4"></div>
    <div class="network-node node-5"></div>
    <div class="network-node node-6"></div>
    
    <!-- Connection lines -->
    <div class="connection-line line-1"></div>
    <div class="connection-line line-2"></div>
    <div class="connection-line line-3"></div>
    <div class="connection-line line-4"></div>
    <div class="connection-line line-5"></div>
    <div class="connection-line line-6"></div>
    
    <!-- Data pulse animation -->
    <div class="data-pulse pulse-1"></div>
    <div class="data-pulse pulse-2"></div>
    <div class="data-pulse pulse-3"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

let animations = [];

onMounted(() => {
  initializeAnimation();
});

onBeforeUnmount(() => {
  // Clean up animations
  animations.forEach(animation => {
    if (animation && animation.kill) {
      animation.kill();
    }
  });
  animations = [];
});

const initializeAnimation = () => {
  // Animate central orb with subtle pulsing
  animations.push(
    gsap.to('.orb-inner', {
      scale: 1.1,
      opacity: 0.8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  );
  
  animations.push(
    gsap.to('.orb-glow', {
      scale: 1.2,
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  );
  
  // Animate floating planes
  animations.push(
    gsap.to('.plane-1', {
      rotateX: '+=5deg',
      rotateY: '+=8deg',
      y: -10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  );
  
  animations.push(
    gsap.to('.plane-2', {
      rotateX: '-=7deg',
      rotateY: '-=5deg',
      y: 15,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  );
  
  animations.push(
    gsap.to('.plane-3', {
      rotateX: '+=3deg',
      rotateY: '-=10deg',
      y: -5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  );
  
  // Animate network nodes with floating effect
  const nodes = document.querySelectorAll('.network-node');
  nodes.forEach((node, index) => {
    animations.push(
      gsap.to(node, {
        y: gsap.utils.random(-10, 10),
        x: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      })
    );
  });
  
  // Animate data pulses
  const pulses = document.querySelectorAll('.data-pulse');
  pulses.forEach((pulse, index) => {
    animations.push(
      gsap.fromTo(pulse, 
        { 
          scale: 0, 
          opacity: 0.8,
          x: 0,
          y: 0
        },
        {
          scale: 1,
          opacity: 0,
          x: gsap.utils.random(-50, 50),
          y: gsap.utils.random(-50, 50),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          ease: 'power2.out',
          delay: index * 1.5
        }
      )
    );
  });
};
</script>

<style scoped>
.neural-network-visual {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  perspective: 1000px;
  transform-style: preserve-3d;
  overflow: hidden;
}

/* Central orb - core of the neural network */
.central-orb {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  z-index: 5;
}

.orb-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.8), rgba(101, 133, 254, 0.7));
  box-shadow: 0 0 30px rgba(88, 66, 255, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.4);
  transform-style: preserve-3d;
}

.orb-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 20%,
    transparent 60%
  );
  border-radius: 50%;
}

.orb-glow {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(88, 66, 255, 0.15) 0%,
    rgba(101, 133, 254, 0.08) 40%,
    transparent 70%
  );
  opacity: 0.7;
}

/* Floating planes to represent data layers */
.floating-plane {
  position: absolute;
  border-radius: 2px;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.07), rgba(255, 255, 255, 0.03));
  transform-style: preserve-3d;
  box-shadow: 0 0 20px rgba(88, 66, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.plane-1 {
  width: 140px;
  height: 100px;
  top: 35%;
  left: 30%;
  transform: rotateX(60deg) rotateZ(15deg) translateZ(20px);
}

.plane-2 {
  width: 120px;
  height: 90px;
  bottom: 35%;
  right: 30%;
  transform: rotateX(-50deg) rotateZ(-10deg) translateZ(30px);
}

.plane-3 {
  width: 100px;
  height: 70px;
  bottom: 40%;
  left: 35%;
  transform: rotateX(40deg) rotateY(15deg) rotateZ(5deg) translateZ(15px);
}

/* Neural network nodes */
.network-node {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(88, 66, 255, 0.8);
  border-radius: 50%;
  z-index: 4;
  box-shadow: 0 0 15px rgba(88, 66, 255, 0.4);
}

.network-node::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.node-1 {
  top: 25%;
  left: 30%;
}

.node-2 {
  top: 25%;
  right: 30%;
}

.node-3 {
  bottom: 25%;
  left: 30%;
}

.node-4 {
  bottom: 25%;
  right: 30%;
}

.node-5 {
  top: 50%;
  right: 20%;
}

.node-6 {
  bottom: 40%;
  left: 20%;
}

/* Connection lines */
.connection-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.5), rgba(88, 66, 255, 0.1));
  transform-origin: center center;
  z-index: 3;
  opacity: 0.7;
}

/* Direct connections from central node to each network node */
.line-1 {
  width: 90px;
  top: 28%;
  left: 38%;
  transform: rotate(-15deg) translateY(-50%);
}

.line-2 {
  width: 90px;
  top: 28%;
  right: 38%;
  transform: rotate(15deg) translateY(-50%);
}

.line-3 {
  width: 90px;
  bottom: 28%;
  left: 38%;
  transform: rotate(15deg) translateY(50%);
}

.line-4 {
  width: 90px;
  bottom: 28%;
  right: 38%;
  transform: rotate(-15deg) translateY(50%);
}

.line-5 {
  width: 70px;
  top: 50%;
  right: 30%;
  transform: rotate(0deg) translateY(-50%);
}

.line-6 {
  width: 80px;
  bottom: 42%;
  left: 34%;
  transform: rotate(8deg) translateY(50%);
}

/* Data pulse animation elements */
.data-pulse {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.pulse-1 {
  background: rgba(88, 66, 255, 0.3);
}

.pulse-2 {
  background: rgba(101, 133, 254, 0.3);
}

.pulse-3 {
  background: rgba(195, 137, 197, 0.3);
}

/* Dark theme adjustments */
:deep(.dark-theme) .orb-inner {
  box-shadow: 0 0 30px rgba(88, 66, 255, 0.4),
              inset 0 0 20px rgba(255, 255, 255, 0.5);
}

:deep(.dark-theme) .floating-plane {
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.15);
}

:deep(.dark-theme) .network-node {
  background: rgba(88, 66, 255, 0.9);
  box-shadow: 0 0 18px rgba(88, 66, 255, 0.5);
}

:deep(.dark-theme) .connection-line {
  background: linear-gradient(90deg, rgba(88, 66, 255, 0.6), rgba(88, 66, 255, 0.2));
}
</style>