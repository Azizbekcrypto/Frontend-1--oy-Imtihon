import React from 'react';
import { Star } from '../assets/icons/star';
import { Link } from 'react-router-dom';

export const ShopProductCard = ({
  id,
  img,
  title,
  oldPrice,
  newPrice,
  tag,
}) => {
  return (
    <Link to={`/shop/${id}`}>
      <article
        className="
        bg-white 
        rounded-[30px] 
        shadow-[0px_8px_24px_rgba(0,0,0,0.08)]
        hover:shadow-[0px_12px_30px_rgba(0,0,0,0.12)]
        transition-all 
        duration-300 
        p-5
      "
      >
        <div className="flex justify-start">
          <span
            className="
            bg-[#F2F6F4] 
            text-[#274C5B] 
            text-xs 
            font-semibold 
            py-1 px-3 
            rounded-full
          "
          >
            {tag}
          </span>
        </div>

        <div className="flex justify-center items-center mt-4 h-[180px]">
          <img src={img} className="h-full object-contain" />
        </div>

        <h3 className="text-[#274C5B] text-lg font-semibold mt-4">{title}</h3>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through text-sm">
              ${oldPrice}
            </span>
            <span className="text-[#274C5B] font-semibold text-lg">
              ${newPrice}
            </span>
          </div>

          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} />
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
