import type { FormRules } from 'element-plus';
import { t } from '@/hooks/useI18n';

export const formRules: FormRules = {
  username: { required: true, message: t('login.usernamePlaceholder'), trigger: 'blur' },
  password: { required: true, message: t('login.passwordPlaceholder'), trigger: 'blur' }
};
