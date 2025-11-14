import React from 'react';
import FruitsBanner from "../../../assets/images-png/GardenFreshFruits.png";
import VeggiesBanner from "../../../assets/images-png/VegetableOffer.png";


export const HomePromoBanners = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-6 py-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <a href="#" className="block overflow-hidden rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src={FruitsBanner} 
            alt="Natural!! Get Garden Fresh Fruits" 
            className="w-full h-auto object-cover" 
          />
        </a>

        <a href="#" className="block overflow-hidden rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src={VeggiesBanner} 
            alt="Offer!! Get 10% off on Vegetables" 
            className="w-full h-auto object-cover" 
          />
        </a>
        
      </div>
    </section>
  );
};