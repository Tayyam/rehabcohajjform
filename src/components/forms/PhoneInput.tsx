import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { cn } from '../../lib/utils';
import { useTranslation } from '../../hooks/useTranslation';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
  required?: boolean;
}

export const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  label,
  error,
  required = false
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 mr-1">{t.phoneNumberInput.requiredIndicator}</span>}
      </label>
      <div className={cn(
        "relative rounded-lg focus-within:ring-2 focus-within:ring-teal-500",
        error ? "ring-2 ring-red-500" : ""
      )}>
        <PhoneInput
          international
          defaultCountry="SA"
          value={value}
          onChange={onChange}
          className={cn(
            "w-full px-3 py-2 border rounded-lg transition-colors",
            error ? "border-red-500" : "border-gray-300 focus:border-teal-500",
            "[&_.PhoneInputCountry]:mr-2",
            "[&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent",
            "[&_.PhoneInputCountrySelect]:outline-none"
          )}
          placeholder={t.phoneNumberInput.placeholder}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
