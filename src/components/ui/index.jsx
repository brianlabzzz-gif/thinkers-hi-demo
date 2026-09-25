import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const LiquidGlass = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("glass-panel rounded-2xl p-6", className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export const Button = ({ children, className, variant = 'primary', ...props }) => {
  const base = "relative overflow-hidden transition-all duration-300 font-medium px-6 py-3 rounded-2xl active:scale-[0.98]";
  const variants = {
    primary: "bg-thinkers-orange text-white shadow-glass-orange hover:shadow-lg hover:brightness-110",
    glass: "glass-panel text-ink hover:bg-white/40",
  };
  
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
