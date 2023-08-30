<template>
  <div class="h-full" v-loading="loading">
    <iframe :src="src" class="wh-full" ref="iframeRef"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const src = ref('');
const iframeRef = ref<HTMLIFrameElement>();
const loading = ref(false);

const init = () => {
  loading.value = true;
  if (unref(route.meta)?.iframeLink) {
    src.value = unref(route.meta).iframeLink!;
  }
  const iframe = unref(iframeRef);
  if (!iframe) return;
  iframe.addEventListener('load', () => {
    loading.value = false;
  });
};

onMounted(init);
</script>

<style lang="scss" scoped></style>
