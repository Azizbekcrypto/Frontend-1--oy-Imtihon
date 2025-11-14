import React from "react";
import { useParams } from "react-router-dom";
import { ProductShop } from "../../data/shop-product";
import { ShopSingleInfo } from "./components/shop-single-info";
import { RelatedProducts } from "./components/related-products";

export const ShopSingle = () => {
  const { id } = useParams();
  const product = ProductShop.find((item) => item.id === Number(id));

  if (!product) return <h1 className="text-center mt-20">Product Not Found</h1>;

  const related = ProductShop.slice(0, 4);

  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.img}
          className="w-[400px] h-[400px] object-contain rounded-3xl shadow"
        />

        <ShopSingleInfo product={product} />
      </div>

      <RelatedProducts products={related} />
    </div>
  );
};
