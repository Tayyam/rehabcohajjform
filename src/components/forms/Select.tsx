import React from 'react';
import { cn } from '../../lib/utils';
import { useTranslation } from '../../hooks/useTranslation';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <select
        className={cn(
          "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      >
        <option value="">{t.select.placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
