import React from 'react';
import JuiceBanner from '../../../assets/images-png/OrganicJuiceBanner.png';
import FoodBanner from '../../../assets/images-png/OrganicFoodBanner.png';
import CookisBanner from '../../../assets/images-png/NutsCookisBanner.png';

// Ma'lumotlar massivi
const categories = [
  { img: JuiceBanner, title: 'Organic Juice' },
  { img: FoodBanner, title: 'Organic Food' },
  { img: CookisBanner, title: 'Nuts Cookis'},
];

const CategoryCard = ({ img, title }) => (
  <a
    className="relative block w-full h-[300px] md:h-[400px] overflow-hidden 
               rounded-[30px] shadow-lg group"
  >
    {/* Fon rasmi */}
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 
                 group-hover:scale-105"
    />

    {/* Matn/Sarlavha qismi (rasmning o'rtasida) */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-[#274C5B] text-xl md:text-2xl font-extrabold 
                   bg-white py-3 px-6 rounded-xl shadow-md 
                   transition-opacity duration-300"
      >
        {title}
      </span>
    </div>
  </a>
);

export const HomeCategories = () => {
  return (
    <section className="bg-white w-full py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* 3 ustunli grid: Kichik ekranlarda 1 ustun, o'rta (md) ekranlarda 3 ustun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              img={category.img}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
