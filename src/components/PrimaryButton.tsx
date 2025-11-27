import { ReactNode, ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  fullWidth?: boolean;
}

export function PrimaryButton({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: PrimaryButtonProps) {
  const baseClasses = 'py-3 px-6 rounded-xl transition-all duration-150 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-teal-600 text-white active:bg-teal-700 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-600 text-white active:bg-gray-700 shadow-sm hover:shadow-md',
    outline: 'border-2 border-gray-300 text-gray-700 active:bg-gray-100 active:border-gray-400',
    danger: 'bg-red-600 text-white active:bg-red-700 shadow-sm hover:shadow-md',
    ghost: 'text-gray-700 active:bg-gray-100',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
