import React from 'react';

export const TabButton = ({
  label,
  tabName,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === tabName;

  return (
    <button
      onClick={() => setActiveTab(tabName)}
      style={{
        backgroundColor: isActive ? 'var(--primary-dark)' : 'white',
        color: isActive ? 'white' : 'var(--primary-dark)',
        borderColor: 'var(--primary-dark)',
      }}
      className={`
        px-8 py-4 text-xl font-bold transition-all duration-300 
        rounded-xl cursor-pointer shadow-md whitespace-nowrap
        border-2 hover:shadow-lg
        ${isActive ? 'hover:bg-[#1e3a4a]' : 'hover:bg-gray-50'}
      `}
    >
      {label}
    </button>
  );
};