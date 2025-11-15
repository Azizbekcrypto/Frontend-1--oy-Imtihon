import React from 'react';
import { ProductShop } from '../../data/shop-product';
import { ShopProductCard } from '../../components/shop-productCard';
import { ShopHero } from './components/ShopHero';

export const Shop = () => {
  return (
    <>
      <ShopHero />

      <div
        className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  gap-10 
  w-full 
  max-w-[1300px] 
  mx-auto 
  mt-10
  px-4
"
      >
        {ProductShop.map((item) => (
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
    </>
  );
};
