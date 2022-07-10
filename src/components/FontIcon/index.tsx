import { computed } from 'vue'
import { defineComponent } from 'vue'

export const FontIcon = defineComponent({
  name: 'FontIcon',
  props: {
    prefix: {
      type: String,
      default: 'iconfont'
    },
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 30
    }
  },
  setup(props) {
    const styles = computed(() => {
      return {
        width: props.size,
        height: props.size
      }
    })
    return () => (
      <view class={[props.prefix, props.name]} style={styles.value}></view>
    )
  }
})
