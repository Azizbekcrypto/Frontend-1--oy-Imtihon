import React from 'react';

export const AboutProductCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div
        className="rounded-[25px] flex justify-center items-center h-[280px] w-[280px] p-6"
        style={{ backgroundColor: 'white', border: '3px solid white' }}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-[20px]"
        />
      </div>

      <div className="mt-4 px-4">
        <h3
          className="text-white text-xl font-bold text-center"
          style={{ fontFamily: 'var(--font-family)' }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
