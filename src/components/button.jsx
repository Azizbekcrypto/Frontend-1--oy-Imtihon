import React from 'react';

export const Button = ({
  text = 'Click',
  bgcolor = 'bg-[#274c5b]',
  textcolor = 'text-white',
  classname = '',
  icon,
  iconPosition = 'right',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-3 
        px-10 py-5 
        rounded-2xl 
        font-bold text-lg 
        transition-all duration-300 
        ${bgcolor} 
        ${textcolor} 
        ${classname}
      `}
      style={{ fontFamily: 'var(--font-family)' }}
    >
      {iconPosition === 'left' && icon}
      <span>{text}</span>
      {iconPosition === 'right' && icon}
    </button>
  );
};
