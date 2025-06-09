<template>
  <div class="premium-abstract-container">
    <!-- Glass morphism backdrop -->
    <div class="glass-panel"></div>
    
    <!-- Floating gradient planes -->
    <div class="floating-planes">
      <div class="plane p1"></div>
      <div class="plane p2"></div>
      <div class="plane p3"></div>
    </div>
    
    <!-- Animated gradient blob -->
    <div class="gradient-blob"></div>
    
    <!-- Liquid mesh lines -->
    <div class="mesh-container">
      <div class="mesh-line" v-for="n in 12" :key="`line-${n}`" :style="`--delay: ${n * 0.3}s`"></div>
    </div>
    
    <!-- Gold accent particles -->
    <div class="gold-particles">
      <div class="particle" v-for="n in 20" :key="`particle-${n}`" 
           :style="`--size: ${3 + Math.random() * 5}px; --speed: ${10 + Math.random() * 20}s; --delay: -${Math.random() * 10}s; --x: ${Math.random() * 100}%; --y: ${Math.random() * 100}%;`">
      </div>
    </div>
    
    <!-- Depth pillars -->
    <div class="depth-pillars">
      <div class="pillar" v-for="n in 5" :key="`pillar-${n}`" 
           :style="`--height: ${20 + Math.random() * 60}%; --x: ${Math.random() * 100}%; --delay: ${n * 0.5}s`">
      </div>
    </div>
    
    <!-- Central focus element -->
    <div class="focus-element">
      <div class="inner-circle"></div>
      <div class="outer-ring"></div>
      <div class="accent-dots">
        <div class="accent-dot" v-for="n in 6" :key="`dot-${n}`" 
             :style="`--angle: ${n * 60}deg; --delay: ${n * 0.4}s`">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.premium-abstract-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background-color: rgba(15, 20, 35, 0.02);
}

[data-theme="dark"] .premium-abstract-container {
  background-color: rgba(15, 20, 35, 0.5);
}

/* Glass panel backdrop */
.glass-panel {
  position: absolute;
  inset: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 20px 80px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  z-index: 1;
}

[data-theme="light"] .glass-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 20px 80px rgba(88, 66, 255, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.7);
}

/* Floating gradient planes */
.floating-planes {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.plane {
  position: absolute;
  border-radius: 60% 70% 50% 80%;
  opacity: 0.05;
  transform-origin: center center;
  mix-blend-mode: plus-lighter;
  filter: blur(40px);
  transition: all 0.5s ease;
}

[data-theme="light"] .plane {
  opacity: 0.06;
  filter: blur(50px);
}

.p1 {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  width: 60%;
  height: 60%;
  top: 25%;
  left: 20%;
  animation: floating 20s infinite alternate ease-in-out;
}

.p2 {
  background: linear-gradient(135deg, #6585FE, #A39AF5);
  width: 50%;
  height: 50%;
  top: 5%;
  right: 15%;
  animation: floating 25s infinite alternate-reverse ease-in-out;
}

.p3 {
  background: linear-gradient(135deg, #5842FF, #3b2db9);
  width: 40%;
  height: 40%;
  bottom: 10%;
  right: 10%;
  animation: floating 18s infinite alternate ease-in-out;
  animation-delay: 5s;
}

@keyframes floating {
  0% {
    transform: translateY(0) translateX(0) scale(1) rotate(0deg);
  }
  33% {
    transform: translateY(-5%) translateX(3%) scale(1.02) rotate(1deg);
  }
  66% {
    transform: translateY(5%) translateX(-2%) scale(0.98) rotate(-1deg);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1) rotate(0deg);
  }
}

/* Animated gradient blob */
.gradient-blob {
  position: absolute;
  width: 40%;
  height: 40%;
  left: 30%;
  top: 30%;
  background: radial-gradient(
    circle at center,
    rgba(88, 66, 255, 0.2) 0%,
    rgba(101, 133, 254, 0.1) 40%,
    rgba(163, 154, 245, 0) 70%
  );
  border-radius: 60% 40% 50% 70%/60% 30% 70% 40%;
  filter: blur(20px);
  opacity: 0.6;
  animation: morphBlob 15s infinite alternate ease-in-out;
  z-index: 2;
}

@keyframes morphBlob {
  0% {
    border-radius: 60% 40% 50% 70%/60% 30% 70% 40%;
    transform: scale(1) rotate(0deg);
  }
  25% {
    border-radius: 40% 60% 70% 30%/30% 40% 50% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 70%/70% 50% 60% 30%;
    transform: scale(1.1) rotate(5deg);
  }
  75% {
    border-radius: 70% 30% 50% 40%/30% 60% 40% 70%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/50% 60% 30% 60%;
    transform: scale(0.9) rotate(-5deg);
  }
}

/* Liquid mesh lines */
.mesh-container {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.mesh-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(88, 66, 255, 0.05) 20%,
    rgba(101, 133, 254, 0.08) 50%,
    rgba(88, 66, 255, 0.05) 80%,
    transparent 100%
  );
  transform-origin: center;
  animation: waveLine 10s infinite ease-in-out;
  animation-delay: var(--delay, 0s);
}

@keyframes waveLine {
  0%, 100% {
    transform: translateY(0) scaleY(1);
    opacity: 0.05;
  }
  50% {
    transform: translateY(calc(var(--index, 0) * 5px)) scaleY(1.2);
    opacity: 0.1;
  }
}

/* Distribute lines evenly */
.mesh-line:nth-child(1) { top: 8.33%; --index: -5; }
.mesh-line:nth-child(2) { top: 16.66%; --index: -4; }
.mesh-line:nth-child(3) { top: 25%; --index: -3; }
.mesh-line:nth-child(4) { top: 33.33%; --index: -2; }
.mesh-line:nth-child(5) { top: 41.66%; --index: -1; }
.mesh-line:nth-child(6) { top: 50%; --index: 0; }
.mesh-line:nth-child(7) { top: 58.33%; --index: 1; }
.mesh-line:nth-child(8) { top: 66.66%; --index: 2; }
.mesh-line:nth-child(9) { top: 75%; --index: 3; }
.mesh-line:nth-child(10) { top: 83.33%; --index: 4; }
.mesh-line:nth-child(11) { top: 91.66%; --index: 5; }
.mesh-line:nth-child(12) { top: 100%; --index: 6; }

/* Gold accent particles */
.gold-particles {
  position: absolute;
  inset: 0;
  z-index: 3;
}

.particle {
  position: absolute;
  width: var(--size, 3px);
  height: var(--size, 3px);
  background: radial-gradient(
    circle at center,
    rgba(255, 223, 145, 0.8),
    rgba(255, 214, 117, 0.3) 70%,
    rgba(255, 203, 82, 0) 100%
  );
  border-radius: 50%;
  left: var(--x, 50%);
  top: var(--y, 50%);
  animation: float var(--speed, 15s) infinite ease-in-out;
  animation-delay: var(--delay, 0s);
  filter: blur(1px);
  box-shadow: 0 0 6px rgba(255, 223, 145, 0.4);
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.8;
  }
  25% {
    transform: translate(30px, -20px);
    opacity: 0.6;
  }
  50% {
    transform: translate(10px, 15px);
    opacity: 1;
  }
  75% {
    transform: translate(-20px, -10px);
    opacity: 0.7;
  }
}

/* Depth pillars */
.depth-pillars {
  position: absolute;
  inset: 0;
  z-index: 1;
  perspective: 1000px;
}

.pillar {
  position: absolute;
  bottom: 0;
  width: 1px;
  height: var(--height, 40%);
  left: var(--x, 50%);
  background: linear-gradient(
    to top,
    rgba(88, 66, 255, 0.15),
    rgba(101, 133, 254, 0.1) 50%,
    rgba(88, 66, 255, 0) 100%
  );
  transform-origin: bottom center;
  animation: pillarRise 10s infinite ease-in-out;
  animation-delay: var(--delay, 0s);
}

@keyframes pillarRise {
  0%, 100% {
    transform: scaleY(1) translateZ(0);
    opacity: 0.05;
  }
  50% {
    transform: scaleY(1.1) translateZ(20px);
    opacity: 0.15;
  }
}

/* Central focus element */
.focus-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  z-index: 4;
}

.inner-circle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #5842FF, #6585FE);
  border-radius: 50%;
  box-shadow: 
    0 0 20px rgba(88, 66, 255, 0.5),
    0 0 40px rgba(88, 66, 255, 0.2);
  animation: pulseGlow 4s infinite alternate ease-in-out;
  filter: drop-shadow(0 0 8px rgba(88, 66, 255, 0.8));
}

.outer-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(88, 66, 255, 0.3);
  border-radius: 50%;
  animation: rotateRing 20s infinite linear;
}

.outer-ring::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #6585FE;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #6585FE;
}

.accent-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: rotateRing 40s infinite linear reverse;
}

.accent-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 223, 145, 0.8);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: rotate(var(--angle, 0deg)) translateX(40px) translateY(-50%);
  box-shadow: 0 0 5px rgba(255, 223, 145, 0.7);
  animation: pulseDot 3s infinite alternate ease-in-out;
  animation-delay: var(--delay, 0s);
}

@keyframes pulseGlow {
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
}

@keyframes rotateRing {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulseDot {
  0% {
    opacity: 0.5;
    transform: rotate(var(--angle, 0deg)) translateX(40px) translateY(-50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: rotate(var(--angle, 0deg)) translateX(35px) translateY(-50%) scale(1.5);
  }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .pillar {
    opacity: 0.05;
  }
  
  .plane {
    opacity: 0.04;
  }
  
  .focus-element {
    transform: translate(-50%, -50%) scale(0.9);
  }
}

@media (max-width: 768px) {
  .gradient-blob {
    opacity: 0.4;
  }
  
  .mesh-line {
    opacity: 0.03;
  }
  
  .focus-element {
    transform: translate(-50%, -50%) scale(0.8);
  }
}

@media (max-width: 576px) {
  .pillar {
    display: none;
  }
  
  .particle {
    opacity: 0.6;
  }
  
  .focus-element {
    transform: translate(-50%, -50%) scale(0.7);
  }
}

/* Theme specific adjustments */
[data-theme="light"] .inner-circle {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  box-shadow: 
    0 0 20px rgba(88, 66, 255, 0.4),
    0 0 40px rgba(88, 66, 255, 0.1);
}

[data-theme="light"] .mesh-line {
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(88, 66, 255, 0.03) 20%,
    rgba(101, 133, 254, 0.05) 50%,
    rgba(88, 66, 255, 0.03) 80%,
    transparent 100%
  );
}

[data-theme="light"] .outer-ring {
  border-color: rgba(88, 66, 255, 0.15);
}

[data-theme="light"] .pillar {
  background: linear-gradient(
    to top,
    rgba(88, 66, 255, 0.1),
    rgba(101, 133, 254, 0.05) 50%,
    rgba(88, 66, 255, 0) 100%
  );
}
</style>