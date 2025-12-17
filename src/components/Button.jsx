// src/components/Button.jsx

import React from 'react';
import { BRAND_COLORS } from '../utils/constants';

const Button = ({ children, onClick, disabled, variant = 'primary', className = '', ariaLabel }) => {
  const baseStyles = "px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `hover:bg-opacity-90 text-white focus:ring-pink-300`, 
    secondary: `bg-[${BRAND_COLORS.secondary}] hover:bg-opacity-90 text-gray-900 focus:ring-teal-300`,
    outline: "border-2 border-gray-300 hover:border-gray-400 text-gray-700 focus:ring-gray-300"
  };

  const style = variant === 'primary' ? { backgroundColor: BRAND_COLORS.primary } :
              variant === 'secondary' ? { backgroundColor: BRAND_COLORS.secondary } : {};

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;