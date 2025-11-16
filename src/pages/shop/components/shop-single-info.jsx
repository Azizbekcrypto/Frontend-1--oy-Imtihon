import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'text-[#FFC700]' : 'text-gray-300'}>
        ★
      </span>,
    );
  }
  return <div className="flex gap-1 text-2xl">{stars}</div>;
};

export const ShopSingleInfo = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex-1 rounded-3xl bg-[#F9F8F8] p-10">
      <h1 className="text-4xl font-extrabold text-[#274C5B] font-['Roboto'] mb-3">
        {product.title}
      </h1>

      <div className="mb-4">
        <StarRating rating={product.rating || 5} />
      </div>

      <div className="flex gap-4 items-center mb-6">
        <span className="line-through text-gray-400 text-xl font-semibold">
          ${product.oldPrice}
        </span>
        <span className="text-[#274C5B] text-5xl font-bold font-['Roboto']">
          ${product.newPrice}
        </span>
      </div>

      <p className="text-gray-600 leading-7 font-['Open_Sans'] text-base mb-8">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold text-[#274C5B]">Quantity:</label>

          <div className="flex items-center border-2 border-[#274C5B] rounded-xl overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-3 bg-white hover:bg-gray-100 text-[#274C5B] font-bold text-xl transition"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center py-3 text-xl font-bold text-[#274C5B] bg-white focus:outline-none"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-3 bg-white hover:bg-gray-100 text-[#274C5B] font-bold text-xl transition"
            >
              +
            </button>
          </div>
        </div>

        <button className="flex-1 h-[60px] bg-[#274C5B] hover:bg-[#7EB693] transition text-white text-xl font-bold rounded-xl">
          Add To Cart
        </button>
      </div>

      <div className="border-t border-gray-300 my-6"></div>

      <div className="space-y-3 text-base">
        <p className="text-gray-600">
          <span className="font-semibold text-[#274C5B]">Category:</span>{' '}
          Vegetables
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-[#274C5B]">Tags:</span>{' '}
          Vegetables, Healthy, Chinese, Cabbage, Green Cabbage
        </p>
      </div>
    </div>
  );
};
