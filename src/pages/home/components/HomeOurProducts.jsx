import React from 'react';
import { ProductShop } from '../../../data/shop-product';
import { ShopProductCard } from '../../../components/shop-productCard';

export const HomeOurProducts = () => {
  const limitedProducts = ProductShop.slice(0, 8); // 4 qilmoqchi bo‘lsang 4 yozasan

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {limitedProducts.map((item) => (
          <ShopProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            tag={item.tag}
          />
        ))}
      </div>
    </section>
  );
};
