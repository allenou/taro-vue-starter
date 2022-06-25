import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Cell, Icon } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/styles/themes/default.scss'
import './app.scss'

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia()).use(Button).use(Cell).use(Icon)
export default App
