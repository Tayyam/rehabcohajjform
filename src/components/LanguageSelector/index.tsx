import React, { useState, useRef, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../../lib/constants/languages';
import { Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from '../../hooks/useTranslation';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const currentLang = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    setIsOpen(false);
    onLanguageChange(code);
  };

  return (
    <div className="fixed top-24 sm:top-6 left-6 z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-md border",
          "hover:bg-gray-50 transition-all duration-200",
          isOpen && "ring-2 ring-teal-500"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5 text-teal-600" />
        <span className="font-medium text-gray-700">{currentLang?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-1 min-w-[160px]">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium",
                "transition-colors duration-200",
                currentLanguage === lang.code
                  ? "bg-teal-50 text-teal-700"
                  : "text-gray-700 hover:bg-gray-50"
              )}
              lang={lang.code}
            >
              <span className="w-6 text-center">{lang.code.toUpperCase()}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};