import type { FormRules } from 'element-plus';

export const formRules: FormRules = {
  pid: { required: true, message: '不能为空', trigger: 'blur' },
  title: { required: true, message: '不能为空', trigger: 'blur' },
  path: { required: true, message: '不能为空', trigger: 'blur' },
  component: { required: true, message: '不能为空', trigger: 'blur' },
  type: { required: true, message: '不能为空', trigger: 'blur' },
  hidden: { required: true, message: '不能为空', trigger: 'blur' }
};
