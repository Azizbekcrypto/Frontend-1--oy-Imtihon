import React from 'react';
import { ProductAbout } from '../../../data/about-product';
import { AboutProductCard } from '../../../components/about-productCard';

const categoriesWithTitles = ProductAbout.map((product, index) => {
  const titles = ['Spicy', 'Nuts & Feesd', 'Fruits', 'Vegetable'];
  return {
    ...product,
    title: titles[index] || `Category ${index + 1}`,
  };
});

export const AboutOfferSection = () => {
  return (
    <section className="bg-[#274C5B] w-full py-16 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        <p className="font-serif italic text-[#7EB693] text-xl mb-2">
          About Us
        </p>
        <h2 className="text-5xl font-extrabold text-white mb-16">
          What We Offer for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesWithTitles.map((item) => (
            <AboutProductCard key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
