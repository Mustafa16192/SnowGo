import { ReactNode, HTMLAttributes } from 'react';

interface InteractiveCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  clickable?: boolean;
  selected?: boolean;
}

export function InteractiveCard({ 
  children, 
  clickable = false,
  selected = false,
  className = '',
  ...props 
}: InteractiveCardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-100 p-4';
  const interactiveClasses = clickable 
    ? 'cursor-pointer transition-all duration-150 active:scale-[0.98] active:shadow-none hover:shadow-md' 
    : '';
  const selectedClasses = selected ? 'border-2 border-teal-600 bg-teal-50' : '';
  
  return (
    <div 
      className={`${baseClasses} ${interactiveClasses} ${selectedClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
