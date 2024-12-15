import { useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../lib/constants/languages';
import type { LanguageCode } from '../lib/constants/languages';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('ar');

  const changeLanguage = (code: LanguageCode) => {
    setCurrentLanguage(code);
    document.documentElement.lang = code;
    document.documentElement.dir = SUPPORTED_LANGUAGES.find(lang => lang.code === code)?.dir || 'rtl';
    localStorage.setItem('preferred-language', code);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as LanguageCode;
    if (savedLanguage && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLanguage)) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return {
    currentLanguage,
    changeLanguage,
  };
}