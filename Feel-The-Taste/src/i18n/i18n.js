import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationNL from '../locales/nl/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      nl: { translation: translationNL },
    },
    lng: 'nl',
    fallbackLng: 'nl',
    interpolation: { escapeValue: false },
  });

export default i18n;
