import React from 'react';
// Rasmni import qilish (siz uni qayerga joylaganingizga qarab yo'lni to'g'rilang)
import OrganicStoreImage from '../../../assets/images-png/FriendlyOrganicStoreImage.png';
// Agar jpg papkasiga joylagan bo'lsangiz, yo'lni shunga moslang

const features = [
  {
    title: 'Start with Our Company First',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Learn How to Grow Yourself',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Farming Strategies of Today',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
];

export const HomeAboutUs = () => {
  return (
    <section className="bg-white w-full py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Chap tomon: Rasm */}
          <div className="order-2 lg:order-1">
            <img
              src={OrganicStoreImage}
              alt="Econis Organic Store Landscape"
              // Rasmga to'liq kenglik berib, burchaklarini yumaloqlashtiramiz
              className="w-full h-auto object-cover rounded-[30px] shadow-lg"
            />
          </div>

          {/* O'ng tomon: Ma'lumot bloki */}
          <div className="order-1 lg:order-2">
            {/* Sarlavha Qismi */}
            <p className="font-serif italic text-[#7EB693] text-xl mb-2">
              Eco Friendly
            </p>
            <h2 className="text-5xl font-extrabold text-[#274C5B] mb-8">
              Econis is a Friendly Organic Store
            </h2>

            {/* Xususiyatlar/Bloklar */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-[#274C5B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
