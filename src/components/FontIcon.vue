<template>
  <nut-icon
    classPrefix="icon"
    fontClassName="iconfont"
    :size="size"
    :name="name"
  />
</template>

<script lang="ts">
import { Icon } from '@nutui/nutui-taro'

export default defineComponent({
  name: 'FontIcon',
  components: {
    [Icon.name]: Icon
  },
  props: {
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 30
    }
  }
})
</script>
