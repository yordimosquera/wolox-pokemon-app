import i18n from 'i18n-js';

const translationGetters = {
  en: () => require('./translations/en.json'),
  es: () => require('./translations/es.json')
};

export const setI18nConfig = (languageTag = 'en') => {
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
