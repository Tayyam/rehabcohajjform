import React, { createContext, useContext, useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '../lib/constants/languages';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  changeLanguage: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectUserLanguage(): LanguageCode {
  // Get saved language preference first
  const savedLanguage = localStorage.getItem('preferred-language') as LanguageCode;
  if (savedLanguage && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLanguage)) {
    return savedLanguage;
  }

  // Try to detect from browser languages
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const browserLang of browserLanguages) {
    // Get the primary language code (e.g., 'en-US' -> 'en')
    const primaryLang = browserLang.split('-')[0].toLowerCase();
    
    // Check if we support this language
    const supportedLang = SUPPORTED_LANGUAGES.find(lang => lang.code === primaryLang);
    if (supportedLang) {
      return supportedLang.code;
    }
  }

  // Default to Arabic if no match found
  return 'ar';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => detectUserLanguage());

  const changeLanguage = (code: LanguageCode) => {
    setCurrentLanguage(code);
    localStorage.setItem('preferred-language', code);
    document.documentElement.lang = code;
    document.documentElement.dir = SUPPORTED_LANGUAGES.find(lang => lang.code === code)?.dir || 'rtl';
    window.location.reload(); // Force reload to ensure all components update properly
  };

  useEffect(() => {
    // Set initial language direction and attributes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage)?.dir || 'rtl';

    // Listen for system language changes
    const handleLanguageChange = () => {
      const newLang = detectUserLanguage();
      if (newLang !== currentLanguage && !localStorage.getItem('preferred-language')) {
        changeLanguage(newLang);
      }
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}