import React from 'react';
import BigHero from '../../../assets/images-png/ShopHero.png';

export const ShopHero = () => {
  return (
    <section className="relative w-full h-[450px] overflow-hidden bg-[#F9F8F8]">
      {/* Asosiy rasm (pastda) */}
      <div
        className="absolute inset-0 w-full h-full "
        style={{
          backgroundImage: `url(${BigHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* About Us yozuvi */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#274c5b] px-8 py-4 rounded-lg"
          style={{ fontFamily: 'var(--font-family)' }}
        >
          Shop
        </h1>
      </div>
    </section>
  );
};
