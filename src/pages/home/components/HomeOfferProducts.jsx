import React from 'react';
// Siz bergan statik ma'lumotlarni import qilish
import { ProductHome } from '../../../data/home-product';
// Siz bergan mahsulot kartochkasi komponentini import qilish
import { HomeProductCard } from '../../../components/home-productCard';
// Eslatma: Agar ShopProductCard global komponentlar papkasida bo'lsa, yo'lni shunga moslang

export const HomeOfferProducts = () => {
  return (
    // To'q yashil fon rangini beramiz
    <section className="bg-[#274C5B] w-full py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Sarlavha Qismi */}
        <div className="text-center md:text-left mb-12">
          <p className="font-serif italic text-[#7EB693] text-xl mb-2">Offer</p>
          <h2 className="text-5xl font-extrabold text-white">
            We Offer Organic For You
          </h2>
        </div>

        {/* Mahsulotlar Ro'yxati */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProductHome.map((item) => (
            <HomeProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              tag={item.tag}
              // Agar ShopProductCard ichida Link ishlatilmasa, uni shu yerda o'rab qo'yishingiz mumkin, 
              // lekin siz uni comment qilib qo'ygansiz, shuning uchun Linksiz qoldiramiz.
            />
          ))}
        </div>
      </div>
    </section>
  );
};