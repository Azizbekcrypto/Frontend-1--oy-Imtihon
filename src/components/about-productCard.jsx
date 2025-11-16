import React from 'react';

export const AboutProductCard = ({ img, title }) => {
  return (
    // Umumiy blokni alohida ramka sifatida joylashtiramiz
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      {/* 1. Rasm qismi - Oq ichki ramka ichida, yupqa oq border bilan */}
      <div
        className="rounded-[25px] flex justify-center items-center h-[280px] w-[280px] p-6"
        // Figma dizaynidagi kabi ramka hosil qilish uchun oq fon va oq border qo'shamiz
        style={{ backgroundColor: 'white', border: '3px solid white' }}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-[20px]"
        />
      </div>

      {/* 2. Title qismi - Asosiy bo'lim foniga qo'shiladi (bg-white ni olib tashladik) */}
      <div className="mt-4 px-4">
        <h3
          // Matn rangini oq rangga o'zgartiramiz, chunki tagida to'q ko'k fon bor
          className="text-white text-xl font-bold text-center"
          style={{ fontFamily: 'var(--font-family)' }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
