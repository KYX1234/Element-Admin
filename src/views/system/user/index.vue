<template>
  <el-card shadow="never">
    <el-table :data="tableData" v-loading="loading">
      <el-table-column label="ID" type="index" />
      <el-table-column label="名称" prop="name" />
      <el-table-column label="手机号" prop="phone" />
      <el-table-column label="角色">
        <template #default="{ row }">
          <el-tag>
            {{ row.role === 1 ? '超级管理员' : '普通用户' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template #default="{ row }">
          <el-tag :type="row.status === 1 ? 'success' : 'info'">
            {{ row.status === 1 ? '正常' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="creat_at" />
      <el-table-column label="操作" width="160">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      :pageable="page"
      :handleSizeChange="handleSizeChange"
      :handleCurrentChange="handleCurrentChange"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { useTable } from '@/hooks/useTable';
import { userList } from '@/api/user';

const { tableData, page, loading, handleCurrentChange, handleSizeChange } = useTable({
  apiFn: userList
});
</script>

<style lang="scss" scoped></style>
@/api/user/user
