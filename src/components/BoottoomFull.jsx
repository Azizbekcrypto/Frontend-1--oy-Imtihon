import React from 'react';

export const BoottomFull = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  ...props
}) => {
  const variants = {
    primary: 'text-white bg-[#274c5b] hover:bg-[#1a3540]',
    outline: 'border-2 border-[#274c5b] text-[#274c5b] hover:bg-[#274c5b] hover:text-white',
    yellow: 'bg-[#efd372] text-[#274c5b] hover:bg-[#e5c560]',
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm h-[48px]',
    md: 'px-10 py-4 text-base h-[60px]',
    lg: 'px-12 py-5 text-lg h-[70px]',
    xl: 'px-14 py-6 text-xl h-[80px]', // Input bilan bir xil balandlik!
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-bold
    rounded-2xl
    transition-all duration-300
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    whitespace-nowrap
    ${variants[variant]}
    ${sizes[size]}
    ${className}`;

  return (
    <button 
      type={type} 
      className={baseStyles} 
      onClick={onClick} 
      style={{ fontFamily: 'var(--font-family)' }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};