<template>
  <div class="slidev-layout intro apple-intro-bg">
    <div class="intro-content">
      <slot />
    </div>
    <div class="intro-pattern"></div>
  </div>
</template>

<style scoped>
.apple-intro-bg {
  position: relative;
  background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
  color: white;
  overflow: hidden;
}

.intro-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

.intro-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  z-index: 1;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(20px, -20px) rotate(120deg); }
  66% { transform: translate(-15px, 15px) rotate(240deg); }
}

/* 确保文字在暗背景上可读 */
.intro-content :deep(h1) {
  color: white !important;
  background: none !important;
  -webkit-text-fill-color: white !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.intro-content :deep(p) {
  color: rgba(255, 255, 255, 0.9) !important;
}

.intro-content :deep(div) {
  color: rgba(255, 255, 255, 0.9) !important;
}
</style>
