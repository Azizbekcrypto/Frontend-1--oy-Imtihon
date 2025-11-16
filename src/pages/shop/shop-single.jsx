import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductShop } from '../../data/shop-product';
import { ShopSingleInfo } from './components/shop-single-info';
import { RelatedProducts } from './components/related-products';
import { ShopSingleHero } from './components/ShopSingleHero';
// import { Button } from '../../components/button';
import { TabButton } from '../../components/TabButton';
export const ShopSingle = () => {
  const { id } = useParams();
  const product = ProductShop.find((item) => item.id === Number(id));
  const [activeTab, setActiveTab] = useState('description');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h1 className="text-center mt-20">Product Not Found</h1>;

  const related = ProductShop.slice(0, 4);

  return (
    <>
      <ShopSingleHero />

      <div className="max-w-[1200px] mx-auto mt-10 px-4 pb-20">
        {/* Product Main Section */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Product Image with Sale Badge */}
          <div className="relative w-full md:w-[500px]">
            {product.tag && (
              <span className="absolute top-4 left-4 bg-[#274C5B] text-white px-4 py-2 rounded-lg text-sm font-semibold z-10">
                {product.tag}
              </span>
            )}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[500px] object-contain rounded-3xl bg-[#F9F8F8] shadow-lg"
            />
          </div>

          <ShopSingleInfo product={product} />
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          {/* Tab Buttons */}
          <div className="flex justify-start gap-4 mb-8">
            <TabButton
              label="Product Description"
              tabName="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <TabButton
              label="Additional Info"
              tabName="additional"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8">
            {activeTab === 'description' ? (
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Welcome to the world of natural and organic. Here you can
                  discover the bounty of nature. We have grown on the principles
                  of health, ecology, and care. We aim to give our customers a
                  healthy chemical-free meal for perfect nutrition.
                </p>
                <p>
                  It aids in mental & physical development, boosts immunity,
                  sharpens the brain, & keeps diseases at bay.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold text-[#274C5B]">
                      Weight:
                    </span>
                    <span className="text-gray-600">0.5 kg</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold text-[#274C5B]">Color:</span>
                    <span className="text-gray-600">Natural</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold text-[#274C5B]">Type:</span>
                    <span className="text-gray-600">Organic</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold text-[#274C5B]">
                      Category:
                    </span>
                    <span className="text-gray-600">Vegetables</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[#274C5B] mb-10 text-center">
            Related Products
          </h2>
          <div>
            <RelatedProducts products={related} />
          </div>
        </div>
      </div>
    </>
  );
};
