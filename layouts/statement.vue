<template>
  <div class="slidev-layout statement apple-statement-bg">
    <div class="statement-content">
      <slot />
    </div>
    <div class="statement-glow"></div>
  </div>
</template>

<style scoped>
.apple-statement-bg {
  position: relative;
  background: linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.statement-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 3rem;
}

.statement-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(0, 122, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(88, 86, 214, 0.05) 0%, transparent 50%);
  z-index: 1;
}

/* 确保引用文字样式正确 */
.statement-content :deep(h1) {
  color: #1d1d1f !important;
  background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

.statement-content :deep(div) {
  color: #86868b !important;
}

/* 暗色模式适配 */
html.dark .apple-statement-bg {
  background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%);
}

html.dark .statement-content :deep(h1) {
  background: linear-gradient(135deg, #5AC8FA 0%, #AF52DE 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

html.dark .statement-content :deep(div) {
  color: #ebebf5 !important;
}
</style>
