<template>
  <div class="data-visualization-container">
    <div class="dashboard-frame">
      <div class="dashboard-header">
        <div class="dashboard-title">AI PERFORMANCE METRICS</div>
        <div class="dashboard-controls">
          <div class="control-dot"></div>
          <div class="control-dot"></div>
          <div class="control-dot"></div>
        </div>
      </div>
      <div class="dashboard-content">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="card-content">
              <div class="metric-header">
                <div class="metric-icon accuracy-icon"></div>
                <div class="metric-label">Accuracy</div>
              </div>
              <div class="metric-value">97.8<span class="metric-unit">%</span></div>
              <div class="metric-trend positive">+2.4%</div>
              <div class="metric-graph accuracy-graph">
                <div class="bar-container">
                  <div class="bar bar1"></div>
                  <div class="bar bar2"></div>
                  <div class="bar bar3"></div>
                  <div class="bar bar4"></div>
                  <div class="bar bar5"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="card-content">
              <div class="metric-header">
                <div class="metric-icon efficiency-icon"></div>
                <div class="metric-label">Efficiency</div>
              </div>
              <div class="metric-value">32<span class="metric-unit">x</span></div>
              <div class="metric-trend positive">+8.1%</div>
              <div class="metric-graph efficiency-graph">
                <div class="line-graph">
                  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,25 C20,22 25,12 40,10 S60,5 75,8 S90,15 100,5" fill="none" stroke="url(#efficiency-gradient)" stroke-width="2"></path>
                    <linearGradient id="efficiency-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#5842FF" />
                      <stop offset="100%" stop-color="#6585FE" />
                    </linearGradient>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="card-content">
              <div class="metric-header">
                <div class="metric-icon roi-icon"></div>
                <div class="metric-label">ROI</div>
              </div>
              <div class="metric-value">340<span class="metric-unit">%</span></div>
              <div class="metric-trend positive">+12.5%</div>
              <div class="metric-graph roi-graph">
                <div class="circle-container">
                  <div class="circle-progress">
                    <div class="circle circle-bg"></div>
                    <div class="circle circle-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="card-content">
              <div class="metric-header">
                <div class="metric-icon time-icon"></div>
                <div class="metric-label">Time Saved</div>
              </div>
              <div class="metric-value">68<span class="metric-unit">%</span></div>
              <div class="metric-trend positive">+5.3%</div>
              <div class="metric-graph time-graph">
                <div class="bar-container horizontal">
                  <div class="h-bar h-bar1"></div>
                  <div class="h-bar h-bar2"></div>
                  <div class="h-bar h-bar3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="data-flow-container">
          <div class="data-flow-visualization">
            <div class="flow-node node1">
              <div class="node-pulse"></div>
            </div>
            <div class="flow-connection conn1"></div>
            <div class="flow-node node2">
              <div class="node-pulse"></div>
            </div>
            <div class="flow-connection conn2"></div>
            <div class="flow-node node3">
              <div class="node-pulse"></div>
            </div>
            <div class="flow-connection conn3"></div>
            <div class="flow-node node4">
              <div class="node-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-visualization-container {
  width: 100%;
  height: 100%;
  padding-top: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-frame {
  width: 360px;
  height: 480px;
  background: #1A1F35;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  animation: floatDashboard 8s ease-in-out infinite;
}

@keyframes floatDashboard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.dashboard-header {
  height: 56px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dashboard-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}

.dashboard-controls {
  display: flex;
  gap: 6px;
}

.control-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.dashboard-content {
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
}

.metric-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 170px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: fadeInUp 0.5s ease-out both;
}

.card-content {
  padding: 16px 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
}

.metric-card:nth-child(1) { animation-delay: 0.1s; }
.metric-card:nth-child(2) { animation-delay: 0.2s; }
.metric-card:nth-child(3) { animation-delay: 0.3s; }
.metric-card:nth-child(4) { animation-delay: 0.4s; }

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

.metric-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.metric-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: linear-gradient(135deg, rgba(88, 66, 255, 0.2), rgba(101, 133, 254, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 8px;
}

.metric-icon::before,
.metric-icon::after {
  content: '';
  position: absolute;
  background: #6585FE;
}

.accuracy-icon::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5842FF;
}

.accuracy-icon::after {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #6585FE;
  left: 15px;
  top: 15px;
}

.efficiency-icon::before {
  width: 12px;
  height: 2px;
  top: 11px;
  left: 6px;
}

.efficiency-icon::after {
  width: 7px;
  height: 7px;
  border-radius: 1px;
  transform: rotate(45deg);
  right: 6px;
  top: 8px;
}

.roi-icon::before {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #6585FE;
  background: transparent;
  top: 5px;
  left: 5px;
}

.time-icon::before {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #5842FF;
  background: transparent;
}

.time-icon::after {
  width: 5px;
  height: 2px;
  top: 11px;
  left: 12px;
  transform-origin: left center;
  transform: rotate(45deg);
}

.metric-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.metric-value {
  font-size: 26px;
  font-weight: 700;
  margin: 2px 0 5px;
  color: white;
  display: flex;
  align-items: flex-end;
}

.metric-unit {
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  opacity: 0.7;
}

.metric-trend {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
}

.metric-trend.positive {
  color: #4cd964;
}

.metric-trend.negative {
  color: #ff3b30;
}

.metric-graph {
  flex-grow: 1;
  padding: 0;
  margin-top: auto;
  height: 45px;
}

/* Bar graphs */
.bar-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}

.bar {
  width: 3px;
  border-radius: 1.5px;
  background: linear-gradient(to top, #5842FF, #6585FE);
  animation: barAnimation 4s infinite alternate;
}

.bar1 { height: 60%; animation-delay: 0.0s; }
.bar2 { height: 80%; animation-delay: 0.1s; }
.bar3 { height: 65%; animation-delay: 0.2s; }
.bar4 { height: 90%; animation-delay: 0.3s; }
.bar5 { height: 75%; animation-delay: 0.4s; }

@keyframes barAnimation {
  0% {
    height: var(--initial-height, 60%);
  }
  50% {
    height: calc(var(--initial-height, 60%) + 10%);
  }
  100% {
    height: var(--initial-height, 60%);
  }
}

/* Horizontal bars */
.bar-container.horizontal {
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 6px;
}

.h-bar {
  height: 3px;
  border-radius: 1.5px;
  background: linear-gradient(to right, #5842FF, #6585FE);
  animation: hBarAnimation 4s infinite alternate;
}

.h-bar1 { width: 90%; animation-delay: 0.0s; }
.h-bar2 { width: 65%; animation-delay: 0.2s; }
.h-bar3 { width: 75%; animation-delay: 0.4s; }

@keyframes hBarAnimation {
  0% {
    width: var(--initial-width, 75%);
  }
  50% {
    width: calc(var(--initial-width, 75%) + 10%);
  }
  100% {
    width: var(--initial-width, 75%);
  }
}

/* Line graph */
.line-graph {
  height: 100%;
  width: 100%;
  position: relative;
}

.line-graph svg path {
  animation: drawLine 3s ease-out forwards;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Circle progress */
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.circle-progress {
  position: relative;
  width: 30px;
  height: 30px;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.circle-bg {
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.circle-fill {
  border: 2px solid transparent;
  border-top-color: #5842FF;
  border-right-color: #6585FE;
  border-bottom-color: #6585FE;
  animation: circleFill 2s ease-out forwards;
}

@keyframes circleFill {
  from {
    transform: rotate(-45deg);
  }
  to {
    transform: rotate(315deg);
  }
}

/* Data flow visualization */
.data-flow-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}

.data-flow-visualization {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.flow-node {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5842FF, #6585FE);
  position: relative;
  z-index: 2;
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

.flow-connection {
  height: 2px;
  background: linear-gradient(to right, rgba(88, 66, 255, 0.5), rgba(101, 133, 254, 0.5));
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}

.flow-connection::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(88, 66, 255, 0), #6585FE, rgba(101, 133, 254, 0));
  animation: flow 2s infinite;
}

.conn1::after { animation-delay: 0.0s; }
.conn2::after { animation-delay: 0.3s; }
.conn3::after { animation-delay: 0.6s; }

@keyframes flow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .dashboard-frame {
    width: 320px;
    height: 480px;
  }
  
  .metrics-grid {
    grid-gap: 12px;
  }
  
  .metric-card {
    height: 150px;
  }
  
  .metric-value {
    font-size: 22px;
  }
}

/* Restart animations */
@keyframes restart {
  0% { opacity: 1; }
  97% { opacity: 1; }
  98% { opacity: 0; }
  100% { opacity: 1; }
}

.dashboard-content {
  animation: restart 15s infinite;
}
</style>