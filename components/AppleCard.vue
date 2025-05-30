<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  image?: string
}>()
</script>

<template>
  <div class="apple-card">
    <img v-if="image" :src="image" :alt="title" class="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 v-if="title" class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p v-if="description" class="text-gray-600 dark:text-gray-300">{{ description }}</p>
    <slot />
  </div>
</template>
