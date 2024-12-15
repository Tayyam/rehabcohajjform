import { ar } from './translations/ar';
import { en } from './translations/en';
import { fr } from './translations/fr';
import { it } from './translations/it';
import type { LanguageCode } from '../constants/languages';

const translations = {
  ar,
  en,
  fr,
  it,
} as const;

export type TranslationKey = keyof typeof translations.ar;

export function getTranslation(lang: LanguageCode) {
  return translations[lang];
}