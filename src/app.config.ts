export default {
  pages: ['pages/index/index', 'pages/profile/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#367cff',
    navigationBarTitleText: 'Taro Vue Starter',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: '#367cff',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',

        iconPath: './assets/icons/home.png',
        selectedIconPath: './assets/icons/home_active.png'
      },

      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: './assets/icons/user.png',
        selectedIconPath: './assets/icons/user_active.png'
      }
    ]
  }
}
