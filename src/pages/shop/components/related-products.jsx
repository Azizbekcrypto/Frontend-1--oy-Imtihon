import React from "react";
import { Link } from "react-router-dom";

export const RelatedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((item) => (
        <Link
          to={`/shop/${item.id}`}
          key={item.id}
          className="group relative bg-[#F9F8F8] rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 block"
        >
          {item.tag && (
            <span className="absolute top-4 left-4 bg-[#274C5B] text-white px-3 py-1 rounded-lg text-xs font-bold z-10">
              {item.tag}
            </span>
          )}
          
          <div className="h-[200px] flex items-center justify-center mb-4 overflow-hidden rounded-xl">
            <img
              src={item.img}
              alt={item.title}
              className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <h3 className="text-center text-[#274C5B] font-semibold text-lg mb-2 group-hover:text-[#7EB693] transition">
            {item.title}
          </h3>
          
          <div className="flex items-center justify-center gap-3">
            <span className="line-through text-gray-400 text-sm">
              ${item.oldPrice}
            </span>
            <span className="text-[#274C5B] font-bold text-xl">
              ${item.newPrice}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};