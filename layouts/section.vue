<template>
  <div class="slidev-layout section-layout">
    <div class="section-content">
      <div class="section-number" v-if="$slidev.nav.currentSlide?.frontmatter?.section">
        {{ $slidev.nav.currentSlide.frontmatter.section }}
      </div>
      <slot />
    </div>
    <div class="section-background"></div>
  </div>
</template>

<style scoped>
.section-layout {
  @apply h-full flex flex-col justify-center items-center text-center relative overflow-hidden;
  background: linear-gradient(135deg, #0071e3 0%, #34aadc 100%);
}

.section-content {
  @apply z-10 px-16 py-12 text-white;
}

.section-number {
  @apply text-6xl font-bold opacity-30 mb-4;
}

.section-layout :deep(h1) {
  @apply text-5xl font-bold mb-6 text-white;
}

.section-layout :deep(p) {
  @apply text-xl opacity-90 leading-relaxed;
}

.section-background {
  @apply absolute inset-0 z-0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}
</style>
