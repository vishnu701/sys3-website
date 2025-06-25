<template>
  <div class="chat-animation-container">
    <div class="chat-frame">
      <div class="chat-container">
        <div class="chat-header">
          <div class="chat-header-logo">
            <div class="system3-logo">
              <img src="/src/assets/logos/compact/logo.png" alt="System3" class="logo-img" />
            </div>
            <span>System3</span>
          </div>
        </div>
        <div class="chat-messages">
          <!-- User Message -->
          <div class="message user-message">
            <div class="avatar user-avatar">
              <div class="avatar-placeholder">U</div>
            </div>
            <div class="message-bubble">
              <div class="message-text">What makes System3's AI education unique?</div>
              <div class="message-time">10:24 AM</div>
            </div>
          </div>
          
          <!-- System3 Response -->
          <div class="message system-message">
            <div class="avatar system-avatar">
              <div class="system-logo">
                <img src="/src/assets/logos/compact/logo.png" alt="System3" class="logo-img-small" />
              </div>
            </div>
            <div class="message-bubble">
              <div class="message-text">Our education is led by Harvard faculty and combines academic rigor with practical AI applications</div>
              <div class="message-time">10:25 AM</div>
            </div>
          </div>
          
          <!-- Second User Message -->
          <div class="message user-message">
            <div class="avatar user-avatar">
              <div class="avatar-placeholder">U</div>
            </div>
            <div class="message-bubble">
              <div class="message-text">Do you offer courses for high school students?</div>
              <div class="message-time">10:26 AM</div>
            </div>
          </div>
          
          <!-- Second System3 Response -->
          <div class="message system-message">
            <div class="avatar system-avatar">
              <div class="system-logo">
                <img src="/src/assets/logos/compact/logo.png" alt="System3" class="logo-img-small" />
              </div>
            </div>
            <div class="message-bubble">
              <div class="message-text">Yes! We have specialized AI courses designed specifically for exceptional high school students</div>
              <div class="message-time">10:27 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-animation-container {
  width: 100%;
  height: 100%;
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-frame {
  width: 320px;
  height: 460px;
  background: #f8f8fb;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(0, 0, 0, 0.03);
  animation: floatChat 6s ease-in-out infinite;
}

@keyframes floatChat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.chat-container {
  height: 100%;
  overflow: hidden;
  background-color: #f8f8fb;
  display: flex;
  flex-direction: column;
}

.chat-header {
  height: 60px;
  background: linear-gradient(135deg, #000000, #5e5e5e);
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.chat-header-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 16px;
}

.system3-logo {
  height: 28px;
  width: 28px;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #5842FF;
  font-size: 13px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.chat-messages {
  padding: 20px;
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message {
  display: flex;
  align-items: flex-start;
  opacity: 0;
  animation: messageAppear 0.5s ease forwards;
}

.user-message {
  justify-content: flex-end;
  flex-direction: row-reverse;
  animation-delay: 0.3s;
}

.system-message {
  justify-content: flex-start;
  animation-delay: 0.6s;
}

.message:nth-child(1) {
  animation-delay: 0.3s;
}

.message:nth-child(2) {
  animation-delay: 0.6s;
}

.message:nth-child(3) {
  animation-delay: 0.9s;
}

.message:nth-child(4) {
  animation-delay: 1.2s;
}

@keyframes messageAppear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.user-avatar {
  background: linear-gradient(135deg, #5eaeed, #3498db);
  color: white;
  font-weight: bold;
}

.avatar-placeholder {
  font-size: 14px;
}

.system-avatar {
  background-color: transparent;
}

.system-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #5842FF;
  font-size: 13px;
}

.logo-img-small {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 8px;
}

.message-bubble {
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 16px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.user-message .message-bubble {
  background: linear-gradient(135deg, #000000, #4e4e4e);
  color: white;
  border-top-right-radius: 4px;
}

.system-message .message-bubble {
  background-color: white;
  color: #1e1e1e;
  border-top-left-radius: 4px;
}

.message-text {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 4px;
  font-weight: 400;
}

.message-time {
  font-size: 10px;
  opacity: 0.7;
  text-align: right;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .chat-frame {
    width: 280px;
    height: 400px;
  }
  
  .message-bubble {
    max-width: 80%;
  }
}

/* Restart animations every 5 seconds */
@keyframes restart {
  0% { opacity: 1; }
  95% { opacity: 1; }
  96% { opacity: 0; }
  100% { opacity: 1; }
}

.chat-messages {
  animation: restart 10s infinite;
}
</style>