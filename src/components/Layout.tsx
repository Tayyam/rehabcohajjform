import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { TawkToChat } from './TawkToChat';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    // Update document direction when language changes
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {children}
      </main>
      <Footer />
      <TawkToChat />
    </div>
  );
};