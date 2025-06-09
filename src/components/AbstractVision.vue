<template>
  <div class="abstract-vision-container">
    <div class="abstract-canvas">
      <!-- Floating Elements -->
      <div class="floating-elements">
        <div class="float-element e1"></div>
        <div class="float-element e2"></div>
        <div class="float-element e3"></div>
        <div class="float-element e4"></div>
        <div class="float-element e5"></div>
        <div class="float-element e6"></div>
        <div class="float-element e7"></div>
      </div>
      
      <!-- Geometric Shapes -->
      <div class="geometric-shapes">
        <div class="shape circle"></div>
        <div class="shape square"></div>
        <div class="shape triangle"></div>
        <div class="shape hexagon"></div>
      </div>
      
      <!-- Gradient Waves -->
      <div class="gradient-waves">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
      
      <!-- Orbital Rings -->
      <div class="orbital-system">
        <div class="orbital-ring ring1">
          <div class="orbiting-dot"></div>
        </div>
        <div class="orbital-ring ring2">
          <div class="orbiting-dot"></div>
        </div>
        <div class="orbital-ring ring3">
          <div class="orbiting-dot"></div>
        </div>
      </div>
      
      <!-- Pulsing Core -->
      <div class="core-element">
        <div class="core-pulse"></div>
        <div class="core-inner"></div>
      </div>
      
      <!-- Light Beams -->
      <div class="light-beams">
        <div class="beam beam1"></div>
        <div class="beam beam2"></div>
        <div class="beam beam3"></div>
        <div class="beam beam4"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.abstract-vision-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.abstract-canvas {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, rgba(10, 15, 31, 0), rgba(10, 15, 31, 0.4));
  border-radius: 16px;
  overflow: hidden;
}

[data-theme="light"] .abstract-canvas {
  background: radial-gradient(circle at center, rgba(245, 247, 250, 0), rgba(245, 247, 250, 0.8));
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.float-element {
  position: absolute;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  opacity: 0.3;
  border-radius: 50%;
  filter: blur(10px);
  animation: float 15s infinite ease-in-out;
}

.e1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.e2 {
  width: 40px;
  height: 40px;
  top: 60%;
  left: 25%;
  background: linear-gradient(135deg, #6585FE, #5842FF);
  animation-delay: 2s;
}

.e3 {
  width: 60px;
  height: 60px;
  top: 75%;
  left: 70%;
  opacity: 0.2;
  animation-delay: 4s;
}

.e4 {
  width: 30px;
  height: 30px;
  top: 35%;
  left: 80%;
  background: linear-gradient(135deg, #A39AF5, #6585FE);
  animation-delay: 6s;
}

.e5 {
  width: 50px;
  height: 50px;
  top: 15%;
  left: 60%;
  opacity: 0.15;
  animation-delay: 8s;
}

.e6 {
  width: 20px;
  height: 20px;
  top: 50%;
  left: 40%;
  background: linear-gradient(135deg, #5842FF, #A39AF5);
  opacity: 0.2;
  animation-delay: 10s;
}

.e7 {
  width: 35px;
  height: 35px;
  top: 25%;
  left: 30%;
  opacity: 0.25;
  animation-delay: 12s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(10px);
  }
  50% {
    transform: translateY(10px) translateX(15px);
  }
  75% {
    transform: translateY(15px) translateX(-10px);
  }
}

/* Geometric Shapes */
.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.shape {
  position: absolute;
  border: 1px solid rgba(88, 66, 255, 0.4);
  animation: rotate 20s infinite linear;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 30%;
  left: 20%;
  border-width: 2px;
  border-style: dashed;
  animation-duration: 60s;
}

.square {
  width: 60px;
  height: 60px;
  bottom: 25%;
  right: 20%;
  transform: rotate(45deg);
  border-width: 1px;
  animation-duration: 40s;
  animation-direction: reverse;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid rgba(88, 66, 255, 0.1);
  top: 20%;
  right: 30%;
  animation-duration: 30s;
}

.hexagon {
  width: 40px;
  height: 23px;
  background: rgba(101, 133, 254, 0.1);
  position: absolute;
  bottom: 35%;
  left: 25%;
  animation-duration: 50s;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 11.5px solid rgba(101, 133, 254, 0.1);
}

.hexagon:after {
  top: 100%;
  border-top: 11.5px solid rgba(101, 133, 254, 0.1);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Gradient Waves */
.gradient-waves {
  position: absolute;
  width: 80%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  border-radius: 40%;
  animation: wave 12s infinite linear;
}

.wave1 {
  border: 2px solid #5842FF;
  animation-duration: 10s;
}

.wave2 {
  border: 3px solid #6585FE;
  animation-duration: 15s;
  transform: rotate(20deg);
}

.wave3 {
  border: 1px solid #A39AF5;
  animation-duration: 20s;
  transform: rotate(-15deg);
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
    border-radius: 40%;
  }
  50% {
    border-radius: 45%;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 40%;
  }
}

/* Orbital System */
.orbital-system {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbital-ring {
  position: absolute;
  border: 1px dashed rgba(88, 66, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring1 {
  width: 80px;
  height: 80px;
  animation: spin 15s linear infinite;
}

.ring2 {
  width: 140px;
  height: 140px;
  transform: translate(-50%, -50%) rotate(45deg);
  animation: spin 20s linear infinite reverse;
}

.ring3 {
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%) rotate(-30deg);
  animation: spin 25s linear infinite;
}

.orbiting-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #6585FE;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px rgba(101, 133, 254, 0.8);
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Pulsing Core */
.core-element {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.core-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  box-shadow: 0 0 15px rgba(88, 66, 255, 0.8);
}

.core-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* Light Beams */
.light-beams {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.beam {
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to top, rgba(88, 66, 255, 0.5), rgba(88, 66, 255, 0));
  top: 50%;
  left: 50%;
  transform-origin: bottom center;
}

.beam1 {
  transform: translateX(-50%) rotate(30deg);
  animation: beam-fade 4s infinite alternate ease-in-out;
}

.beam2 {
  transform: translateX(-50%) rotate(120deg);
  animation: beam-fade 4s infinite alternate-reverse ease-in-out;
  animation-delay: 1s;
}

.beam3 {
  transform: translateX(-50%) rotate(210deg);
  animation: beam-fade 4s infinite alternate ease-in-out;
  animation-delay: 2s;
}

.beam4 {
  transform: translateX(-50%) rotate(300deg);
  animation: beam-fade 4s infinite alternate-reverse ease-in-out;
  animation-delay: 3s;
}

@keyframes beam-fade {
  0% {
    opacity: 0.2;
    height: 80px;
  }
  100% {
    opacity: 0.6;
    height: 120px;
  }
}

/* Media Queries */
@media (max-width: 992px) {
  .orbital-system {
    width: 180px;
    height: 180px;
  }
  
  .ring3 {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .orbital-system {
    width: 150px;
    height: 150px;
  }
  
  .ring2 {
    width: 100px;
    height: 100px;
  }
  
  .ring3 {
    width: 150px;
    height: 150px;
  }
  
  .float-element {
    transform: scale(0.8);
  }
}

@media (max-width: 480px) {
  .orbital-system {
    width: 120px;
    height: 120px;
  }
  
  .ring1 {
    width: 60px;
    height: 60px;
  }
  
  .ring2 {
    width: 90px;
    height: 90px;
  }
  
  .ring3 {
    width: 120px;
    height: 120px;
  }
  
  .float-element {
    transform: scale(0.6);
  }
}

/* Dark/Light Theme Adjustments */
[data-theme="light"] .shape {
  border-color: rgba(88, 66, 255, 0.2);
}

[data-theme="light"] .wave {
  opacity: 0.15;
}

[data-theme="light"] .orbital-ring {
  border-color: rgba(88, 66, 255, 0.2);
}

[data-theme="light"] .beam {
  background: linear-gradient(to top, rgba(88, 66, 255, 0.3), rgba(88, 66, 255, 0));
}

[data-theme="light"] .triangle {
  border-bottom-color: rgba(88, 66, 255, 0.08);
}

[data-theme="light"] .hexagon,
[data-theme="light"] .hexagon:before,
[data-theme="light"] .hexagon:after {
  background-color: rgba(101, 133, 254, 0.08);
}
</style>