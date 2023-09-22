<template>
  <div class="h-full flex-col">
    <SearchForm @handle-reset="resetParams" @handle-search="getList">
      <template #header>
        <el-button>新增</el-button>
        <el-button>导入</el-button>
        <el-button>打印</el-button>
      </template>
      <el-form :model="searchForm" inline>
        <el-form-item>
          <el-input v-model="searchForm.phone" class="w-220px" placeholder="手机号搜索" />
        </el-form-item>
        <el-form-item>
          <el-select v-model="searchForm.status" placeholder="状态" clearable class="w-220px">
            <el-option label="启用" :value="1" />
            <el-option label="禁用" :value="0" />
          </el-select>
        </el-form-item>
      </el-form>
    </SearchForm>
    <div class="page-card h-full" v-loading="loading">
      <el-table :data="tableData">
        <el-table-column label="ID" type="index" align="center" />
        <el-table-column label="名称" prop="name" align="center" />
        <el-table-column label="手机号" prop="phone" align="center" />
        <el-table-column label="角色" align="center">
          <template #default="{ row }">
            <el-tag>
              {{ row.role === 1 ? '超级管理员' : '普通用户' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'info'">
              {{ row.status === 1 ? '正常' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="creat_at" align="center" />
        <el-table-column label="操作" width="160" align="center">
          <template #default="scope">
            <el-button type="primary" link @click="onAddOrUpdate(scope.row)">编辑</el-button>
            <el-button type="danger" link @click="onDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :pageable="page"
        :handleSizeChange="handleSizeChange"
        :handleCurrentChange="handleCurrentChange"
      />
      <AddOrUpdate ref="addOrUpdateRef" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useTable } from '@/hooks/useTable';
import { userList } from '@/api/user';
import { AddOrUpdate } from './components';
import type { IUserItem } from '@/api/user/type';

const addOrUpdateRef = ref();
const searchForm = reactive({
  phone: '',
  status: ''
});
const { tableData, page, loading, resetParams, getList, handleCurrentChange, handleSizeChange } =
  useTable({
    apiFn: userList,
    params: searchForm
  });

const onAddOrUpdate = (data?: IUserItem) => {
  addOrUpdateRef.value.init(data);
};

const onDelete = () => {
  ElMessageBox.confirm('您确认要删除当前项吗？', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '只是个demo！'
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消操作'
      });
    });
};
</script>

<style lang="scss" scoped></style>
