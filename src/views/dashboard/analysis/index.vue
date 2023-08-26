<template>
  <div>
    <TopCard />
    <MidCard />
    <BotCard />
  </div>
</template>

<script lang="ts" setup>
import { TopCard, MidCard, BotCard } from './components';
defineOptions({ name: 'Analysis' });
</script>

<style lang="scss" scoped></style>
