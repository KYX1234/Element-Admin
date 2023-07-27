<template>
  <div class="absolute-lt z-1 wh-full overflow-hidden">
    <div class="squares square1"></div>
    <div class="squares square2"></div>
    <div class="squares square3"></div>
    <div class="squares square4"></div>
    <div class="squares square5"></div>
    <div class="squares square6"></div>
    <div class="squares square7"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.squares {
  @apply absolute rounded-20% bg-gradient-to-r from-primary to-primary_dark;
}

.square1 {
  @apply h-75 w-75 op70 left-3% -top-21% animate-wiggle animate-duration-4s animate-count-infinite;
}

.square2 {
  @apply h-100 w-100 op40 -right-5% -top-12% animate-wiggle animate-duration-6s animate-count-infinite;
}

.square3 {
  @apply h-50 w-50 op10 -left-5% bottom-0 animate-wiggle animate-duration-5s animate-count-infinite;
}

.square4 {
  @apply h-25 w-25 op90 right-27% top-70% animate-wiggle animate-duration-10s animate-count-infinite;
}

.square5 {
  @apply h-65 w-65 op20 left-32% bottom-29% animate-wiggle animate-duration-6s animate-count-infinite;
}

.square6 {
  @apply h-20 w-20 op80 left-10% top-35% animate-wiggle animate-duration-9s animate-count-infinite;
}

.square7 {
  @apply h-75 w-75 op10 -right-5% bottom-0 animate-wiggle animate-duration-3s animate-count-infinite;
}
</style>
