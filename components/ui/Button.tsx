import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Base styles: Pill shape (rounded-full), transitions, focus states
  const baseStyles = "inline-flex items-center justify-center rounded-full font-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary (UPDATED): White background, Purple Text, Thinner Purple Border (1px).
    // Changed 'border-2' to 'border' for a more refined look.
    primary: "bg-white border border-brand-600 text-brand-600 hover:bg-brand-50 shadow-lg shadow-brand-600/10 focus:ring-brand-500 transform hover:-translate-y-0.5",
    
    // Secondary: Light purple bg.
    secondary: "bg-brand-100 text-brand-700 hover:bg-brand-200 focus:ring-brand-500",
    
    // Outline: Similar to primary but usually less shadow/emphasis.
    outline: "bg-white border border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-500 shadow-sm",
    
    // White: Solid white (for dark backgrounds)
    white: "bg-white text-brand-700 hover:bg-gray-50 shadow-lg focus:ring-white"
  };

  // Horizontal padding logic
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};