import React from 'react';
// Agar sizda maxsus ikonka kutubxonasi bo'lmasa, oddiy yulduzchadan foydalanamiz
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? 'text-[#FFC700]' : 'text-gray-300'} // To'q sariq yulduzchalar uchun rang
      >
        ★
      </span>,
    );
  }
  return <div className="flex gap-1">{stars}</div>;
};

// =========================================================================

export const ShopSingleInfo = ({ product }) => {
  // Miqdor (Quantity) holatini boshqarish
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event) => {
    // Faqat musbat butun sonlarni qabul qilish
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div className="flex-1 p-8 rounded-3xl bg-white">
      {/* Mahsulot Nomini */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-dark, #274C5B)] font-['Inter']">
        {product.title}
      </h1>

      {/* Reyting */}
      <div className="mt-2">
        <StarRating rating={product.rating || 5} />
      </div>

      {/* Narx */}
      <div className="flex gap-4 mt-3 items-center">
        <span className="line-through text-gray-400 text-xl font-semibold">
          ${product.oldPrice}
        </span>
        <span className="text-[var(--primary-dark, #274C5B)] text-4xl font-bold font-['Roboto']">
          ${product.newPrice}
        </span>
      </div>

      {/* Tavsif */}
      <p className="mt-6 text-[var(--dark-gray, #525c60)] leading-7 max-w-[550px] font-['Open Sans']">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>

      {/* Savatga Qo'shish Bo'limi */}
      <div className="mt-8 flex items-center gap-4">
        <label
          htmlFor="quantity"
          className="text-xl font-semibold text-[var(--primary-dark, #274C5B)] hidden"
        >
          Quantity:
        </label>

        {/* Miqdor Kiritish Maydoni */}
        <div className="relative">
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-24 h-16 text-center border-2 border-[var(--primary-dark, #274C5B)] rounded-xl text-xl font-bold text-[var(--primary-dark, #274C5B)] focus:outline-none focus:border-[var(--primary-green, #7eb693)] transition p-2"
          />
        </div>

        {/* Add to Cart Tugmachasi */}
        <button className="h-16 flex items-center bg-[var(--primary-dark, #274C5B)] hover:bg-[var(--primary-green, #7eb693)] transition text-white text-xl font-bold py-3 px-10 rounded-xl">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
