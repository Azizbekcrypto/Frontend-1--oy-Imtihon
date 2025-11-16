import React from 'react';
// Sizning rasm manzil yo'lingiz
import OrganicStoreImage from '../../../assets/images-png/FriendlyOrganicStoreImage.png';

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
    // 'white-soft' fon rangini saqlab qolamiz
    <section className="bg-[var(--white-soft)] w-full py-20 overflow-hidden">
      <div className="container">
        <div className="relative flex items-center justify-end min-h-[600px] lg:min-h-[700px]">
          {/* Chap tomon: Rasm */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[55%] h-full max-h-[931px] z-0 hidden lg:block">
            <img
              src={OrganicStoreImage}
              alt="Econis Organic Store Landscape"
              className="w-full h-full object-cover rounded-[20px] shadow-xl"
            />
          </div>

          {/* O'ng tomon: Ma'lumot bloki (Figma rasmiga mos bo'shliqlar) */}
          <div className="w-full lg:w-[65%] xl:w-[55%] z-10 lg:ml-auto">
            {/* Ichki paddingni kattaroq qildik: p-16 */}
            <div className="bg-white rounded-[30px] shadow-2xl p-8 md:p-12 lg:p-16 border-[3px] border-[var(--primary-green)]">
              <h3
                className="text-[#7eb693] text-4xl mb-2"
                style={{ fontFamily: 'var(--third-family)' }}
              >
                Eco Friendly
              </h3>

              {/* Asosiy sarlavha - mb-8 ni saqlab qoldik, chunki bu bloklar orasidagi katta bo'shliqni beradi */}
              <h2 className="text-4xl md:text-[42px] font-extrabold text-[var(--primary-dark)] mb-10 leading-tight font-[var(--font-family)]">
                Econis is a Friendly
                <br className="hidden sm:block" />
                Organic Store
              </h2>

              {/* === Xususiyatlar/Bloklar === */}
              {/* Bloklarning o'zaro orasidagi bo'shliqni kuchaytirdik: space-y-8 */}
              <div className="space-y-8">
                {features.map((item, index) => (
                  <div key={index}>
                    {/* Kichik sarlavha: mb-2 ni saqlab qoldik */}
                    <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2 font-[var(--font-family)]">
                      {item.title}
                    </h3>

                    {/* Tavsif: text-sm yoki text-[15px] rasmga mos keladi */}
                    <p className="text-[var(--dark-gray)] leading-relaxed text-sm md:text-[15px] font-[var(--second-family)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
