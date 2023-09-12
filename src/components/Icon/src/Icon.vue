<script lang="ts">
import { h, defineComponent, resolveComponent } from 'vue';
import { ElIcon } from 'element-plus';
import SvgIcon from './svgIcon.vue';
import { VITE_EL_ICON_PREFIX, VITE_LOCAL_ICON_PREFIX } from './util';

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    // el-icon
    if (props.name.indexOf(VITE_EL_ICON_PREFIX) === 0) {
      return () =>
        h(
          ElIcon,
          {
            size: props.size || '16px',
            color: props.color
          },
          () => h(resolveComponent(props.name.replace(`${VITE_EL_ICON_PREFIX}-`, '')))
        );
    }
    // 本地icon
    if (props.name.indexOf(VITE_LOCAL_ICON_PREFIX) === 0) {
      return () =>
        h(
          ElIcon,
          {
            size: props.size || '16px',
            color: props.color
          },
          () => h(SvgIcon, { ...props })
        );
    }
  }
});
</script>
