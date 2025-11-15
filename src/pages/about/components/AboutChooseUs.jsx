import React from 'react';
// Rasmlarni import qilish (Siz o'zingizning rasm yo'llaringizni to'g'irlashingiz kerak)
import AboutUsImage from '../../../assets/images-png/AboutChooseUs.png'; // Yuqori qismdagi katta rasm
import PolicyIcon from '../../../assets/images-png/policy.png'; // Return Policy icon
import FreshIcon from '../../../assets/images-png/Fresh.png'; // 100% Fresh icon
import SupportIcon from '../../../assets/images-png/support.png'; // Support 24/7 icon
import PaymentIcon from '../../../assets/images-png/payment.png'; // Secured Payment icon

// 4 ta xususiyat kartasi uchun ma'lumotlar massivi
const features = [
  {
    icon: PolicyIcon,
    title: 'Return Policy',
    description: 'Simply dummy text of the printing typesetting industry.',
  },
  {
    icon: FreshIcon,
    title: '100% Fresh',
    description: 'Simply dummy text of the printing typesetting industry.',
  },
  {
    icon: SupportIcon,
    title: 'Support 24/7',
    description: 'Simply dummy text of the printing typesetting industry.',
  },
  {
    icon: PaymentIcon,
    title: 'Secured Payment',
    description: 'Simply dummy text of the printing typesetting industry.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg transition duration-300 hover:shadow-xl border-2 border-[var(--white-cream)]">
    <div className="flex justify-center mb-6">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)] text-center font-[var(--font3)]">
      {title}
    </h3>
    <p className="text-[var(--dark-gray)] text-center text-sm font-[var(--second-family)] leading-6">
      {description}
    </p>
  </div>
);

const AboutChooseUs = () => {
  return (
    <section className="py-16 md:py-32 bg-[var(--white-cream)] ">
      <div className="container ">
        {/* === 1. Yuqori Bo'lim: Kontent va Katta Rasm === */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 md:mb-24">
          {/* Chap Tomon: Kontent */}
          <div className="w-full lg:w-1/2">
            <p className="text-[var(--primary-green)] text-3xl font-[var(--third-family)] mb-3">
              Why Choose us?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-dark)] mb-6 leading-tight font-[var(--font3)]">
              We do not buy from the open market & traders.
            </h2>
            <p className="text-[var(--dark-gray)] mb-8 font-[var(--second-family)] leading-7">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>

            {/* Xususiyatlar Ro'yxati */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[var(--white-soft)] rounded-full flex items-center justify-center mr-4 mt-1 border-2 border-[var(--primary-green)]">
                  <span className="w-3 h-3 bg-[var(--primary-green)] rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--primary-dark)] mb-1 font-[var(--font3)]">
                    100% Natural Product
                  </h4>
                  <p className="text-[var(--dark-gray)] text-sm font-[var(--second-family)]">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[var(--white-soft)] rounded-full flex items-center justify-center mr-4 mt-1 border-2 border-[var(--primary-green)]">
                  <span className="w-3 h-3 bg-[var(--primary-green)] rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--primary-dark)] mb-1 font-[var(--font3)]">
                    Increases resistance
                  </h4>
                  <p className="text-[var(--dark-gray)] text-sm font-[var(--second-family)]">
                    Filling, and temptingly healthy, our Solana Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng Tomon: Katta Rasm */}
          <div className="w-full lg:w-1/2">
            <img
              src={AboutUsImage}
              alt="Assorted fresh produce"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* --- 2. Pastki Bo'lim: 4 ta Xususiyat Karta --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutChooseUs;
