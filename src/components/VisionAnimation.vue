<template>
  <div class="vision-animation-container">
    <div class="neural-network">
      <div class="node-layer input-layer">
        <div class="node" v-for="i in 4" :key="`input-${i}`">
          <div class="node-pulse"></div>
        </div>
      </div>
      
      <div class="connections layer1-connections">
        <div class="connection" v-for="i in 16" :key="`conn1-${i}`"></div>
      </div>
      
      <div class="node-layer hidden-layer">
        <div class="node" v-for="i in 6" :key="`hidden-${i}`">
          <div class="node-pulse"></div>
        </div>
      </div>
      
      <div class="connections layer2-connections">
        <div class="connection" v-for="i in 12" :key="`conn2-${i}`"></div>
      </div>
      
      <div class="node-layer output-layer">
        <div class="node" v-for="i in 3" :key="`output-${i}`">
          <div class="node-pulse"></div>
        </div>
      </div>
    </div>
    
    <div class="metrics-panel">
      <div class="metrics-header">
        <div class="metrics-title">VISION METRICS</div>
        <div class="metrics-controls">
          <div class="control-dot"></div>
          <div class="control-dot"></div>
          <div class="control-dot"></div>
        </div>
      </div>
      
      <div class="metrics-items">
        <div class="metric-item">
          <div class="metric-label">Innovation</div>
          <div class="metric-bar">
            <div class="metric-fill innovation-fill"></div>
          </div>
          <div class="metric-value">94%</div>
        </div>
        
        <div class="metric-item">
          <div class="metric-label">Excellence</div>
          <div class="metric-bar">
            <div class="metric-fill excellence-fill"></div>
          </div>
          <div class="metric-value">98%</div>
        </div>
        
        <div class="metric-item">
          <div class="metric-label">Impact</div>
          <div class="metric-bar">
            <div class="metric-fill impact-fill"></div>
          </div>
          <div class="metric-value">92%</div>
        </div>
      </div>
      
      <div class="vision-insights">
        <div class="insight-item" v-for="(insight, index) in insights" :key="index">
          <div class="insight-icon"></div>
          <div class="insight-text">{{ insight }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Static data - no need for reactivity
const insights = [
  "Pioneering AI education methodologies",
  "World-class academic excellence",
  "Real-world skill application"
];
</script>

<style scoped>
.vision-animation-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Neural Network Visualization */
.neural-network {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.7;
  z-index: 1;
}

.node-layer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  z-index: 2;
}

.input-layer {
  margin-left: 10px;
}

.output-layer {
  margin-right: 10px;
}

.node {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  box-shadow: 0 0 8px rgba(88, 66, 255, 0.4);
  position: relative;
}

.node-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(88, 66, 255, 0.5);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.connections {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.connection {
  position: absolute;
  height: 1px;
  background: linear-gradient(to right, rgba(88, 66, 255, 0.2), rgba(101, 133, 254, 0.2));
  transform-origin: 0 0;
  overflow: hidden;
}

.connection::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(88, 66, 255, 0), #6585FE, rgba(101, 133, 254, 0));
  animation: flow 2s infinite;
}

.layer1-connections .connection:nth-child(1) { top: 20%; left: 5%; width: 30%; transform: rotate(18deg); animation-delay: 0s; }
.layer1-connections .connection:nth-child(2) { top: 20%; left: 5%; width: 30%; transform: rotate(10deg); animation-delay: 0.1s; }
.layer1-connections .connection:nth-child(3) { top: 20%; left: 5%; width: 30%; transform: rotate(2deg); animation-delay: 0.2s; }
.layer1-connections .connection:nth-child(4) { top: 20%; left: 5%; width: 30%; transform: rotate(-5deg); animation-delay: 0.3s; }
.layer1-connections .connection:nth-child(5) { top: 20%; left: 5%; width: 30%; transform: rotate(-12deg); animation-delay: 0.4s; }
.layer1-connections .connection:nth-child(6) { top: 40%; left: 5%; width: 30%; transform: rotate(12deg); animation-delay: 0.5s; }
.layer1-connections .connection:nth-child(7) { top: 40%; left: 5%; width: 30%; transform: rotate(5deg); animation-delay: 0.6s; }
.layer1-connections .connection:nth-child(8) { top: 40%; left: 5%; width: 30%; transform: rotate(-2deg); animation-delay: 0.7s; }
.layer1-connections .connection:nth-child(9) { top: 40%; left: 5%; width: 30%; transform: rotate(-8deg); animation-delay: 0.8s; }
.layer1-connections .connection:nth-child(10) { top: 60%; left: 5%; width: 30%; transform: rotate(8deg); animation-delay: 0.9s; }
.layer1-connections .connection:nth-child(11) { top: 60%; left: 5%; width: 30%; transform: rotate(0deg); animation-delay: 1.0s; }
.layer1-connections .connection:nth-child(12) { top: 60%; left: 5%; width: 30%; transform: rotate(-8deg); animation-delay: 1.1s; }
.layer1-connections .connection:nth-child(13) { top: 80%; left: 5%; width: 30%; transform: rotate(12deg); animation-delay: 1.2s; }
.layer1-connections .connection:nth-child(14) { top: 80%; left: 5%; width: 30%; transform: rotate(5deg); animation-delay: 1.3s; }
.layer1-connections .connection:nth-child(15) { top: 80%; left: 5%; width: 30%; transform: rotate(-2deg); animation-delay: 1.4s; }
.layer1-connections .connection:nth-child(16) { top: 80%; left: 5%; width: 30%; transform: rotate(-10deg); animation-delay: 1.5s; }

.layer2-connections .connection:nth-child(1) { top: 16.6%; left: 35%; width: 30%; transform: rotate(10deg); animation-delay: 0.2s; }
.layer2-connections .connection:nth-child(2) { top: 16.6%; left: 35%; width: 30%; transform: rotate(0deg); animation-delay: 0.3s; }
.layer2-connections .connection:nth-child(3) { top: 16.6%; left: 35%; width: 30%; transform: rotate(-10deg); animation-delay: 0.4s; }
.layer2-connections .connection:nth-child(4) { top: 33.2%; left: 35%; width: 30%; transform: rotate(10deg); animation-delay: 0.5s; }
.layer2-connections .connection:nth-child(5) { top: 33.2%; left: 35%; width: 30%; transform: rotate(0deg); animation-delay: 0.6s; }
.layer2-connections .connection:nth-child(6) { top: 33.2%; left: 35%; width: 30%; transform: rotate(-10deg); animation-delay: 0.7s; }
.layer2-connections .connection:nth-child(7) { top: 49.8%; left: 35%; width: 30%; transform: rotate(10deg); animation-delay: 0.8s; }
.layer2-connections .connection:nth-child(8) { top: 49.8%; left: 35%; width: 30%; transform: rotate(0deg); animation-delay: 0.9s; }
.layer2-connections .connection:nth-child(9) { top: 49.8%; left: 35%; width: 30%; transform: rotate(-10deg); animation-delay: 1.0s; }
.layer2-connections .connection:nth-child(10) { top: 66.4%; left: 35%; width: 30%; transform: rotate(8deg); animation-delay: 1.1s; }
.layer2-connections .connection:nth-child(11) { top: 66.4%; left: 35%; width: 30%; transform: rotate(-5deg); animation-delay: 1.2s; }
.layer2-connections .connection:nth-child(12) { top: 83%; left: 35%; width: 30%; transform: rotate(0deg); animation-delay: 1.3s; }

@keyframes flow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Metrics Panel */
.metrics-panel {
  width: 300px;
  height: 380px;
  background: #1A1F35;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  z-index: 10;
  animation: floatPanel 8s ease-in-out infinite;
}

@keyframes floatPanel {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.metrics-header {
  height: 50px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.metrics-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}

.metrics-controls {
  display: flex;
  gap: 6px;
}

.control-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.metrics-items {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 12px;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.metric-item:nth-child(1) { animation-delay: 0.2s; }
.metric-item:nth-child(2) { animation-delay: 0.4s; }
.metric-item:nth-child(3) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.metric-label {
  width: 80px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.metric-bar {
  flex-grow: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.metric-fill {
  height: 100%;
  width: 0%;
  border-radius: 3px;
  animation: fillBar 2s ease-out forwards;
}

.innovation-fill {
  background: linear-gradient(to right, #5842FF, #6585FE);
  width: 94%;
}

.excellence-fill {
  background: linear-gradient(to right, #5842FF, #6585FE);
  width: 98%;
}

.impact-fill {
  background: linear-gradient(to right, #5842FF, #6585FE);
  width: 92%;
}

@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--fill-width, 90%);
  }
}

.metric-value {
  width: 40px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

.vision-insights {
  margin-top: 20px;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.insight-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  opacity: 0;
  animation: fadeInRight 0.6s ease forwards;
}

.insight-item:nth-child(1) { animation-delay: 0.8s; }
.insight-item:nth-child(2) { animation-delay: 1.0s; }
.insight-item:nth-child(3) { animation-delay: 1.2s; }

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.insight-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.2), rgba(101, 133, 254, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}

.insight-icon::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5842FF, #6585FE);
}

.insight-text {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .metrics-panel {
    width: 280px;
    height: 350px;
  }
  
  .metrics-items {
    padding: 15px;
    gap: 12px;
  }
  
  .vision-insights {
    margin-top: 15px;
    padding: 0 15px 15px;
  }
  
  .insight-text {
    font-size: 13px;
  }
}

@media (max-width: 576px) {
  .metrics-panel {
    width: 240px;
    height: 320px;
  }
  
  .metrics-items {
    padding: 10px;
    gap: 10px;
  }
  
  .metric-label {
    width: 70px;
    font-size: 12px;
  }
  
  .vision-insights {
    gap: 12px;
  }
  
  .insight-text {
    font-size: 12px;
  }
}

/* Animation restart to keep things fresh */
@keyframes restart {
  0% { opacity: 1; }
  97% { opacity: 1; }
  98% { opacity: 0; }
  100% { opacity: 1; }
}

.metrics-items, .vision-insights {
  animation: restart 15s infinite;
}
</style>