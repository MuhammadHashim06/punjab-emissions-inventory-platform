import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => (
  <div id={id} className={cn("bg-white rounded-xl border border-gray-100 card-shadow overflow-hidden", className)}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'; className?: string }> = ({ children, variant = 'neutral', className }) => {
  const variants = {
    success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    warning: 'bg-orange-100 text-orange-800 border-orange-200',
    error: 'bg-rose-100 text-rose-800 border-rose-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    neutral: 'bg-gray-100 text-gray-600 border-gray-200',
  };
  return (
    <span className={cn("status-badge px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider", variants[variant], className)}>
      {children}
    </span>
  );
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' }> = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm',
    secondary: 'bg-forest text-white hover:opacity-90 shadow-sm',
    ghost: 'bg-transparent text-gray-500 hover:bg-gray-100',
    outline: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm',
    danger: 'bg-rose-600 text-white hover:bg-rose-700',
  };
  return (
    <button className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed", variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
