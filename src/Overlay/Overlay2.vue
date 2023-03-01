<script lang="ts">
import {
  type CSSProperties,
  defineComponent,
  h,
  type PropType,
} from 'vue'

export default defineComponent({
  name: 'Overlay',
  props: {
    /**
     * 是否展示遮罩层
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * z-index 层级
     */
    zIndex: {
      type: Number
    },
    /**
     * 动画时长，单位秒，设置为 0 可以禁用动画
     */
    duration: {
      type: Number
    },
    /**
     * 自定义类名
     */
    className: {
      default: null
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  render() {
    return h('div', 'Overlay')
  }
})
</script>

<style lang="scss" src="./Overlay.scss"></style>
