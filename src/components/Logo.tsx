import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 hover:opacity-90 transition-opacity"
    >
      <img 
        src="https://i.ibb.co/xX6Xz6V/rehab.png"
        alt={t.logo.alt}
        className="h-10 sm:h-14 w-auto"
      />
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold text-gray-900">{t.logo.title}</span>
        <span className="text-xs sm:text-sm text-gray-500">{t.logo.subtitle}</span>
      </div>
    </Link>
  );
};