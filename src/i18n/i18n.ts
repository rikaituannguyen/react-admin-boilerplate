import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getPreferredLanguage } from '../utils/common';

import en from './locales/en.json';
import ja from './locales/ja.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: getPreferredLanguage(),
  keySeparator: '.',
  fallbackLng: 'ja',
});

export { i18n };
export const tFunction = i18n.t;
