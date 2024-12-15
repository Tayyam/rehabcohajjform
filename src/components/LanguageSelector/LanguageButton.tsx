import React from 'react';
import { cn } from '../../lib/utils';

interface LanguageButtonProps {
  code: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  code,
  name,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all duration-200',
        isActive
          ? 'bg-teal-50 text-teal-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
      )}
      lang={code}
    >
      {name}
    </button>
  );
};