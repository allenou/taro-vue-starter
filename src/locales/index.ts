import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en'
import zh from './zh'

i18next.use(LanguageDetector).init({
  lng: 'zh',
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
})

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
