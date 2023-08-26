<template>
  <svg aria-hidden="true" :style="styles">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 16
  }
});
const symbolId = computed(() => `#${props.name}`);
const styles = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px',
    color: props.color
  };
});
</script>
