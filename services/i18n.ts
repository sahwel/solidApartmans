import 'react-i18next'
// import all namespaces (for the default language, only)
import { hu } from '../locales/hu'
import { en } from '../locales/en'
import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

export interface ResoureDefiniton {
  readonly hu: typeof hu
  readonly en: typeof en
}

export const resources: ResoureDefiniton = {
  en,
  hu,
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['hu', 'en'],
  resources: resources as unknown as Resource,
})
