<template>
  <div class="page-card h-full" v-loading="loading">
    <el-form inline>
      <el-form-item>
        <el-button type="default" @click="onAddOrUpdate()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" row-key="id">
      <el-table-column label="菜单名称" prop="title" min-width="150" show-overflow-tooltip />
      <el-table-column label="类型" prop="name" align="center">
        <template #default="scope">
          <div>{{ menuType(scope.row) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="图标" align="center">
        <template #default="scope">
          <Icon :name="scope.row.icon" />
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="scope">
          <el-tag type="">{{ scope.row.hidden ? '隐藏' : '启用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="sort" align="center" />
      <el-table-column label="操作" width="260" align="center">
        <template #default="scope">
          <el-button type="primary" link @click="onAddOrUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" link @click="onDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AddOrUpdate ref="addOrUpdateRef" :tree-data="tableData" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { getMenuList } from '@/api/auth';
import { useTable } from '@/hooks/useTable';
import { AddOrUpdate } from './components';

const addOrUpdateRef = ref();

const menuType = computed(() => (row: any) => {
  if (row.pid === 0 || (row.pid !== 0 && row.childen && row.childen.length)) {
    return '目录';
  } else {
    return '菜单';
  }
});

const { tableData, loading } = useTable({
  apiFn: getMenuList,
  isPageable: false
});

const onAddOrUpdate = (data?: Recordable) => {
  addOrUpdateRef.value.init(data);
};

const onDelete = () => {};
</script>
