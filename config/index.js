const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')

const config = {
  projectName: 'app',
  date: '2022-6-24',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html',
    'taro-plugin-pinia',
    [
      '@tarojs/plugin-framework-vue3',
      {
        vueLoaderOption: {
          // 添加 vue-macros 支持
          reactivityTransform: true // 开启vue3响应性语法糖
        }
      }
    ],
    ['@dcasia/mini-program-tailwind-webpack-plugin/dist/taro']
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/styles/nut/theme.scss')]
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/types': path.resolve(__dirname, '..', 'src/types')
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-auto-import').use(
        AutoImport({
          imports: ['vue'],
          dts: 'src/types/auto-imports.d.ts',
          vueTemplate: true,
          eslintrc: {
            enabled: true,
            filepath: 'src/types/.eslintrc-auto-import.json',
            globalsPropValue: true
          }
        })
      )

      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader')
                }
              }
            }
          }
        }
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nut'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
