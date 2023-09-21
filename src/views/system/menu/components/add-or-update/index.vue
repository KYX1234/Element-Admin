<template>
  <el-dialog v-model="visible" :title="form.id ? '编辑' : '添加'" width="550px" @closed="onReset">
    <el-form :model="form" label-width="100" ref="formRef" :rules="formRules">
      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio-button :label="0">目录</el-radio-button>
          <el-radio-button :label="1">菜单</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="父级菜单" prop="pid">
        <el-tree-select
          class="w-full"
          v-model="form.pid"
          :data="menuTree"
          node-key="id"
          check-strictly
          placeholder="请选择父级菜单"
          :render-after-expand="false"
          :default-expanded-keys="[0]"
          :props="{ label: 'title' }"
        />
      </el-form-item>
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入菜单名称" clearable />
      </el-form-item>
      <el-form-item label="菜单图标" prop="icon">
        <select-icon v-model="form.icon" style="width: 100%" />
      </el-form-item>
      <el-form-item label="路由路径" prop="path">
        <el-input v-model="form.path" placeholder="请输入路由路径" clearable />
        <div class="text-neutral text-xs">如为外链访问则以`http(s)://`开头</div>
      </el-form-item>
      <el-form-item label="组件路径" prop="component" v-if="form.type">
        <el-input v-model="form.component" placeholder="请输入组件路径" clearable />
        <div class="text-neutral text-xs">如：`system/menu/index`，默认在`views`目录下</div>
      </el-form-item>
      <el-form-item label="按钮权限" prop="permission" v-if="form.type">
        <el-input v-model="form.permission" placeholder="请输入组件路径" clearable />
        <div class="text-neutral text-xs">如有多个权限，请以`,`分割</div>
      </el-form-item>
      <el-form-item label="内链地址" prop="iframeLink" v-if="form.type">
        <el-input v-model="form.iframeLink" placeholder="请输入内链地址" clearable />
      </el-form-item>
      <el-form-item label="是否显示">
        <el-radio-group v-model="form.isHide" class="w-full">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">隐藏</el-radio>
        </el-radio-group>
        <div class="text-neutral text-xs">选择隐藏则侧边栏不会显示，但仍可以访问</div>
      </el-form-item>
      <el-form-item label="是否缓存">
        <el-radio-group v-model="form.isKeep" class="w-full">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
        <div class="text-neutral text-xs">选择启用则会被`keep-alive`缓存</div>
      </el-form-item>
      <el-form-item label="是否固定">
        <el-radio-group v-model="form.affix" class="w-full">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
        <div class="text-neutral text-xs">选择启用则多页签会一直保留</div>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="form.sort" placeholder="请输入排序序号" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, computed } from 'vue';
import type { IMenuItem } from '@/api/auth/type';
import { formRules } from '../helpers/rule';

interface Props {
  treeData: IMenuItem[];
}

const props = defineProps<Props>();
const visible = ref(false);
const formRef = ref();

const form = reactive({
  id: 0,
  pid: 0,
  title: '',
  icon: '',
  path: '',
  component: '',
  iframeLink: '',
  permission: '',
  affix: 0,
  isHide: 0,
  isKeep: 0,
  sort: 0,
  type: 0
});

const menuTree = computed(() => {
  const menu: any = [{ id: 0, title: '顶级', children: [] }];
  menu[0].children = props.treeData;
  return menu;
});

const init = async (data?: IMenuItem) => {
  visible.value = true;
  if (data) {
    await nextTick();
    Object.assign(form, data);
  }
};

const onReset = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};

defineExpose({ init });
</script>

<style lang="scss" scoped></style>
