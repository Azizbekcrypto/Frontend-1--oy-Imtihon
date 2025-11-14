import React from "react";
import { Link } from "react-router-dom";

export const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-[#274C5B] mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link
            to={`/shop/${item.id}`}
            key={item.id}
            className="bg-white shadow rounded-xl p-4 hover:scale-105 transition block"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[150px] mx-auto object-contain"
            />
            <p className="text-center mt-2 text-[#274C5B] font-semibold">
              {item.title}
            </p>
            <p className="text-center text-sm text-gray-500">
              ${item.newPrice}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
