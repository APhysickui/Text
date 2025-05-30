<template>
  <div class="slidev-layout statement">
    <div class="statement-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.statement {
  position: relative;
  background: var(--apple-background);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.statement-content {
  max-width: 900px;
  padding: var(--apple-spacing-2xl);
}

.statement::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(88, 86, 214, 0.1) 0%, transparent 50%);
  pointer-events: none;
}
</style>
