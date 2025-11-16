import React from 'react';
import { ProductAbout } from '../../../data/about-product';
import { AboutProductCard } from '../../../components/about-productCard';

const categoriesWithTitles = ProductAbout.map((product, index) => {
  const titles = ['Spicy', 'Nuts & Feeed', 'Fruits', 'Vegetable'];
  return {
    ...product,
    title: titles[index] || `Category ${index + 1}`,
  };
});

export const AboutOfferSection = () => {
  return (
    <section className="bg-[#274c5b] w-full py-20 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Sarlavhalar - Markazga joylashtirilgan */}
        <div className="text-center mb-16">
          {/* About Us - Yellowtail font, yashil rang */}
          <h3
            className="text-[#7eb693] text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'var(--third-family)' }}
          >
            About Us
          </h3>

          {/* What We Offer for You - Roboto Bold, oq rang */}
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-family)' }}
          >
            What We Offer for You
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {categoriesWithTitles.map((item) => (
            <AboutProductCard key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
