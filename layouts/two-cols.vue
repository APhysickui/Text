<template>
  <div class="slidev-layout two-cols grid grid-cols-2 gap-x-4">
    <div class="my-auto">
      <slot />
    </div>
    <div class="my-auto">
      <slot name="right" />
    </div>
  </div>
</template>
