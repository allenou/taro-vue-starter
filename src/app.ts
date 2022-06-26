import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from '@nutui/nutui-taro'

import '@nutui/nutui-taro/dist/styles/themes/default.scss'
import 'windi.css'
import './assets/font/iconfont.css'
import locale from './locales'

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

locale(App)
App.use(createPinia())
App.use(Button)
export default App
