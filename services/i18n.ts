import i18n, { Resource } from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import 'react-i18next'
import { initReactI18next } from 'react-i18next'
import { en } from '../locales/en'
// import all namespaces (for the default language, only)
import { hu } from '../locales/hu'
import { cookieManager } from './cookieManager'

export interface ResoureDefiniton {
  readonly hu: typeof hu
  readonly en: typeof en
}

const cultures: { [key: string]: string } = {
  en: 'en-US',
  hu: 'hu-HU',
}
export const resources: ResoureDefiniton = {
  en,
  hu,
}

const detector = new I18nextBrowserLanguageDetector()

detector.addDetector({
  name: 'customCookie',
  lookup(options) {
    let cn = options.lookupCookie || ''
    const value = decodeURIComponent(cookieManager.read(cn))
    if (!value) return undefined

    const regex = /(?<=c=)(.*)(?=\|)/gm
    const found = value.match(regex)
    if (found) {
      const culture = found[0]
      const lng = culture.split('-')[0]
      return lng
    }
  },
  cacheUserLanguage(lng, options) {
    const culture = cultures[lng]
    const value = `c=${culture}|uic=${culture}`
    if (options.lookupCookie && document !== undefined)
      cookieManager.create(options.lookupCookie, encodeURIComponent(value), 365)
  },
})

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['hu', 'en'],
    resources: resources as unknown as Resource,
  })
