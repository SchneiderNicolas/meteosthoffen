import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.language ? localStorage.language : 'fr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
