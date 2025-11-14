import React from "react";

export const ShopSingleInfo = ({ product }) => {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold text-[#274C5B]">{product.title}</h1>

      <div className="flex gap-4 mt-3 items-center">
        <span className="line-through text-gray-400 text-lg">
          ${product.oldPrice}
        </span>
        <span className="text-[#274C5B] text-3xl font-bold">
          ${product.newPrice}
        </span>
      </div>

      <p className="mt-6 text-gray-600 leading-7 max-w-[500px]">
        This organic product is naturally grown with the highest quality
        standards. A perfect choice for a healthy lifestyle.
      </p>

      <button className="mt-6 bg-[#274C5B] hover:bg-[#1f3b46] transition text-white py-3 px-8 rounded-xl">
        Add to Cart
      </button>
    </div>
  );
};
