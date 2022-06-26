import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Button, Cell, Icon } from '@nutui/nutui-taro'

// import '@nutui/nutui-taro/dist/styles/themes/default.scss'
// import 'windi.css'
import './app.less'
import './assets/font/iconfont.css'
import locale from './locales'
import { Button } from 'vant'
// import 'vant/lib/index.less'
// import 'vant/lib/index.css';
// import 'vant/es/button/style/index';
const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

locale(App)
App.use(createPinia())
App.use(Button)
export default App
