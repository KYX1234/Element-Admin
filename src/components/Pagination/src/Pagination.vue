<template>
  <el-pagination
    class="mt-2"
    :background="true"
    :current-page="pageable.page"
    :page-size="pageable.pageSize"
    :page-sizes="pageable.pageSizes"
    :total="pageable.total"
    :layout="layout"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import { computed } from 'vue';

interface Pageable {
  page: number;
  pageSizes: number[];
  pageSize: number;
  total: number;
}

interface PaginationProps {
  pageable: Pageable;
  handleSizeChange: (size: number) => void;
  handleCurrentChange: (currentPage: number) => void;
}

defineProps<PaginationProps>();

const appStore = useAppStore();
const layout = computed(() =>
  appStore.isMobile ? '->,prev, pager, next' : '->,total, sizes, prev, pager, next, jumper'
);
</script>
