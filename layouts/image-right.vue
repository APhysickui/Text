<template>
  <div class="slidev-layout image-right grid grid-cols-2 gap-x-4">
    <div class="my-auto">
      <slot />
    </div>
    <div class="my-auto">
      <img v-if="$slidev.nav.currentSlide?.frontmatter?.image" 
           :src="$slidev.nav.currentSlide.frontmatter.image" 
           class="w-full h-auto rounded-xl shadow-lg" />
    </div>
  </div>
</template>
