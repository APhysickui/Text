<template>
  <div class="slidev-layout statement-layout">
    <div class="statement-content">
      <div class="quote-mark quote-mark-open">"</div>
      <slot />
      <div class="quote-mark quote-mark-close">"</div>
    </div>
    <div class="statement-background"></div>
  </div>
</template>

<style scoped>
.statement-layout {
  @apply h-full flex flex-col justify-center items-center text-center relative overflow-hidden px-16 py-12;
}

.statement-content {
  @apply z-10 max-w-5xl relative;
}

.statement-layout :deep(h1) {
  @apply text-4xl md:text-5xl font-bold leading-tight mb-8;
  background: linear-gradient(135deg, #0071e3 0%, #34aadc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.statement-layout :deep(p) {
  @apply text-lg text-gray-500 dark:text-gray-400 mt-6;
}

.quote-mark {
  @apply absolute text-8xl font-bold text-blue-200 dark:text-blue-800 select-none;
}

.quote-mark-open {
  @apply -top-4 -left-8;
}

.quote-mark-close {
  @apply -bottom-8 -right-8;
}

.statement-background {
  @apply absolute inset-0 z-0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(0, 113, 227, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(52, 170, 220, 0.05) 0%, transparent 50%);
}
</style>
