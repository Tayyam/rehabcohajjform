import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-lg font-semibold transition-all duration-200',
        {
          'bg-[#2B3E89] text-white hover:bg-[#212C6C]': variant === 'primary', // Primary button
          'bg-[#C62F3C] text-white hover:bg-[#A22731]': variant === 'secondary', // Secondary button
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
