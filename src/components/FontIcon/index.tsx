import { Icon } from '@nutui/nutui-taro'

export const FontIcon = defineComponent({
  name: 'FontIcon',
  props: {
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 30
    }
  },
  setup(props) {
    return () => (
      <Icon
        classPrefix="icon"
        fontClassName="iconfont"
        size={props.size}
        name={props.name}
      />
    )
  }
})
