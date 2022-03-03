// @see https://react.i18next.com/latest/typescript#create-a-declaration-file
import 'react-i18next';
import en from './locales/en.json';
import ja from './locales/ja.json';

declare module 'react-i18next' {
  interface Resources {
    en: typeof en;
    ja: typeof ja;
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ja';
    resources: {
      en: typeof en;
      ja: typeof ja;
    };
  }
}
