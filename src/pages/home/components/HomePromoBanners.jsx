import React from 'react';
import FruitsBanner from '../../../assets/images-png/GardenFreshFruits.png';
import VeggiesBanner from '../../../assets/images-png/VegetableOffer.png';

export const HomePromoBanners = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CHAP BANNER - Natural Fresh Fruits */}
        <a
          href="#"
          className="relative block overflow-hidden rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          {/* Rasm */}
          <img
            src={FruitsBanner}
            alt="Natural!! Get Garden Fresh Fruits"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Matn ustida */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-12">
            {/* Natural!! - Yellowtail */}
            <p
              className="text-white text-3xl md:text-4xl mb-2"
              style={{ fontFamily: 'var(--third-family)' }}
            >
              Natural!!
            </p>

            {/* Get Garden Fresh Fruits - Roboto Bold */}
            <h3
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-family)' }}
            >
              Get Garden
              <br />
              Fresh Fruits
            </h3>
          </div>
        </a>

        {/* O'NG BANNER - 10% off Vegetables */}
        <a
          href="#"
          className="relative block overflow-hidden rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          {/* Rasm */}
          <img
            src={VeggiesBanner}
            alt="Offer!! Get 10% off on Vegetables"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Matn ustida */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-12">
            {/* Offer!! - Yellowtail */}
            <p
              className="text-[#7eb693] text-3xl md:text-4xl mb-2"
              style={{ fontFamily: 'var(--third-family)' }}
            >
              Offer!!
            </p>

            {/* Get 10% off on Vegetables - Roboto Bold */}
            <h3
              className="text-[#274c5b] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-family)' }}
            >
              Get 10% off
              <br />
              on Vegetables
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
};
