<template>
  <div class="slidev-layout intro-layout">
    <div class="intro-content">
      <div class="intro-main">
        <slot />
      </div>
      <div class="intro-sidebar">
        <slot name="sidebar" />
      </div>
    </div>
    <div class="intro-background"></div>
  </div>
</template>

<style scoped>
.intro-layout {
  @apply h-full relative overflow-hidden;
}

.intro-content {
  @apply h-full flex items-center z-10 relative px-16 py-12;
}

.intro-main {
  @apply flex-1 pr-8;
}

.intro-sidebar {
  @apply w-80 flex flex-col justify-center;
}

.intro-layout :deep(h1) {
  @apply text-5xl font-bold mb-6;
  background: linear-gradient(135deg, #0071e3 0%, #34aadc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-layout :deep(p) {
  @apply text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6;
}

.intro-background {
  @apply absolute inset-0 z-0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 113, 227, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(52, 170, 220, 0.1) 0%, transparent 50%);
}
</style>
