import React from "react";
import BigHero from "../../../assets/images-png/HomeBigHero.png";
import Naqsh from "../../../assets/images-png/HomeHeroNaqsh.png";

export const HomeHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[898px] overflow-hidden bg-[#F9F8F8]">
      {/* Asosiy rasm (pastda) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${BigHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Naqsh (ustida) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Naqsh})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />
    </section>
  );
};