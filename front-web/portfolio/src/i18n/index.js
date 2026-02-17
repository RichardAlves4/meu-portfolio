import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonPt from './locales/pt/common.json'
import pagesPt from './locales/pt/pages.json'

import commonEn from './locales/en/common.json'
import pagesEn from './locales/en/pages.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        common: commonPt,
        pages: pagesPt
      },
      en: {
        common: commonEn,
        pages: pagesEn
      },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
});

export default i18n;
