<template>
  <div class="page-card h-full" v-loading="loading">
    <el-form inline>
      <el-form-item>
        <el-button type="default" @click="onAddOrUpdate()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column label="ID" type="index" align="center" />
      <el-table-column label="名称" prop="name" align="center" />
      <el-table-column label="标识" prop="role_name" align="center" />
      <el-table-column label="创建时间" prop="creat_at" align="center" />
      <el-table-column label="操作" width="260" align="center">
        <template #default="scope">
          <el-button type="primary" link @click="onAddOrUpdate(scope.row)">编辑</el-button>
          <el-button type="primary" link @click="onPermisson(scope.row)">菜单权限</el-button>
          <el-button type="danger" link @click="onDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AddOrUpdate ref="addOrUpdateRef" />
    <Permisson ref="permissonRef" :all-menu-list="allMenuList" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { roleList } from '@/api/role';
import { getMenuList } from '@/api/auth';
import { useTable } from '@/hooks/useTable';
import { AddOrUpdate, Permisson } from './components';

const addOrUpdateRef = ref();
const permissonRef = ref();
const allMenuList = ref([]);

const { tableData, loading } = useTable({
  apiFn: roleList,
  isPageable: false
});

const onAddOrUpdate = (data?: Recordable) => {
  addOrUpdateRef.value.init(data);
};

const getAllMenuList = async () => {
  const { data } = await getMenuList();
  allMenuList.value = data;
};
getAllMenuList();

const onPermisson = async (data: Recordable) => {
  permissonRef.value.init(data.menu_id);
};

const onDelete = () => {};
</script>

<style lang="scss" scoped></style>
