import { useLanguage } from './useLanguage';
import { getTranslation } from '../lib/i18n';
import { useEffect, useState } from 'react';
import type { LanguageCode } from '../lib/constants/languages';

export function useTranslation() {
  const { currentLanguage } = useLanguage();
  const [translations, setTranslations] = useState(getTranslation(currentLanguage));

  useEffect(() => {
    const handleLanguageChange = () => {
      setTranslations(getTranslation(currentLanguage));
    };

    window.addEventListener('languagechange', handleLanguageChange);
    setTranslations(getTranslation(currentLanguage));

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, [currentLanguage]);

  return { t: translations };
}