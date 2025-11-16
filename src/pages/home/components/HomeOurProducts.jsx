import React from 'react';
import { ProductShop } from '../../../data/shop-product';
import { ShopProductCard } from '../../../components/shop-productCard';
import { Button } from '../../../components/button';

export const HomeOurProducts = () => {
  const limitedProducts = ProductShop.slice(0, 8);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className="text-[#7eb693] text-3xl md:text-4xl mb-2"
            style={{ fontFamily: 'var(--third-family)' }}
          >
            Categories
          </p>

          <h2
            className="text-[#274c5b] text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-family)' }}
          >
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        <div className="mt-16 flex justify-center">
          <Button
            text="Load More"
            bgcolor="bg-[#274c5b]"
            textcolor="text-white"
            classname="hover:bg-[#af9a61]"
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
    </section>
  );
};
