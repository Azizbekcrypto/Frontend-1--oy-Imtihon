import React from 'react';
import BigHero from '../../../assets/images-png/HomeBigHero.png';
import Naqsh from '../../../assets/images-png/HomeHeroNaqsh.png';
import { Button } from '../../../components/button';

export const HomeHero = () => {
  return (
    <section className="relative w-full h-[898px] overflow-hidden bg-[#f9f8f8]">
      {/* Orqa fon rasmi (BigHero) - O'ng tomonda */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${BigHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Naqsh rasmi - Chap tomonda */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${Naqsh})`,
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />

      {/* Kontent Bloki */}
      <div className="container relative h-full z-10">
        <div className="flex flex-col justify-center h-full max-w-[600px]">
          
          {/* "100% Natural Food" - Yellowtail font */}
          <p 
            className="text-[#7eb693] text-4xl mb-2"
            style={{ fontFamily: 'var(--third-family)' }}
          >
            100% Natural Food
          </p>

          {/* Asosiy sarlavha - Roboto font */}
          <h1 
            className="text-7xl font-extrabold text-[#274c5b] mb-6 leading-[1.2]"
            style={{ fontFamily: 'var(--font-family)' }}
          >
            Choose the best healthier way of life
          </h1>

          {/* Explore Now tugmasi */}
          <div className="mt-4">
            <Button
              text="Explore Now"
              bgcolor="bg-[#efd372]"
              textcolor="text-[#274c5b]"
              classname="hover:bg-[#e5c560] inline-flex"
              icon={
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              }
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};