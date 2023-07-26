<script lang="ts">
import { createVNode, defineComponent, resolveComponent } from 'vue'
import { ElIcon } from 'element-plus'
import svgIcon from './src/svgIcon.vue'
import { VITE_EL_ICON_PREFIX, VITE_LOCAL_ICON_PREFIX } from './src/util'

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
        createVNode(
          ElIcon,
          {
            size: props.size,
            color: props.color
          },
          [createVNode(resolveComponent(props.name.replace(`${VITE_EL_ICON_PREFIX}-`, '')))]
        )
    }
    // 本地icon
    if (props.name.indexOf(VITE_LOCAL_ICON_PREFIX) === 0) {
      return () => createVNode('i', { class: 'local-icon' }, [createVNode(svgIcon, { ...props })])
    }
  }
})
</script>
