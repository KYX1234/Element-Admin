<template>
  <div>
    <el-button type="primary" class="m-4" @click="test">123</el-button>
    <Icon name="local-icon-user" />
    <!-- <svg-icon name="local-icon-user" /> -->
  </div>
</template>

<script lang="ts" setup>
const test = () => {
  ElMessage.success('hahhasd')
}
</script>

<style lang="scss" scoped></style>
