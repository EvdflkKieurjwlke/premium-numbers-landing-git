import 'server-only';
import { Locale } from '../i18n-config';

const dictionaries = {
  ru: () => import('../dictionaries/ru.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default),
  ar: () => import('../dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();