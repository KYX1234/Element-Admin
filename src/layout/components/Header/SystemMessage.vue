<template>
  <el-popover ref="popover" placement="bottom-end" width="250" trigger="click">
    <template #reference>
      <div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill">
        <el-badge :value="3" :max="99">
          <Icon name="local-icon-bell" size="20" />
        </el-badge>
      </div>
    </template>
    <el-tabs model-value="1">
      <el-tab-pane label="通知(1)" name="1" />
      <el-tab-pane label="关注(1)" name="2" />
      <el-tab-pane label="代办(1)" name="3" />
    </el-tabs>
    <section>
      <div v-for="(item, index) in list" :key="index" class="flex mb-5">
        <el-avatar class="w-10 h-10 rounded-full mr-4 shrink-0" :src="item.avatar" />
        <div class="flex-1 w-0">
          <div>
            <span class="mr-4 text-14px">{{ item.name }}</span>
            <span class="time text-12px text-gray">{{ item.datetime }}</span>
          </div>
          <div class="truncate">{{ item.content }}</div>
        </div>
      </div>
    </section>
  </el-popover>
</template>

<script lang="ts" setup>
const list = [
  {
    name: '青鸟',
    datetime: '1小时之前',
    content: '自行实现跳转到消息页面',
    avatar: 'https://i02piccdn.sogoucdn.com/bf0bd2fe74335857'
  },
  {
    name: '原神怎么你了',
    datetime: '2小时之前',
    content: '关注了你',
    avatar: 'https://i04piccdn.sogoucdn.com/17d017c1d7478379'
  },
  {
    name: '我可莉害了',
    datetime: '2个半小时之前',
    content: '收藏了你的文章',
    avatar: 'https://i02piccdn.sogoucdn.com/3511ebcfa16882d6'
  }
];
</script>

<style lang="scss" scoped></style>
