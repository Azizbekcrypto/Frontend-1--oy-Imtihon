import React from 'react';
import AboutUsImage from '../../../assets/images-png/AboutChooseUs.png';
import PolicyIcon from '../../../assets/images-png/policy.png';
import FreshIcon from '../../../assets/images-png/Fresh.png';
import SupportIcon from '../../../assets/images-png/support.png';
import PaymentIcon from '../../../assets/images-png/payment.png';

// 4 ta xususiyat kartasi uchun ma'lumotlar
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

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
    <h3 
      className="text-xl font-bold mb-3 text-[#274c5b] text-center"
      style={{ fontFamily: 'var(--font-family)' }}
    >
      {title}
    </h3>
    <p 
      className="text-[#525c60] text-center text-sm leading-relaxed"
      style={{ fontFamily: 'var(--second-family)' }}
    >
      {description}
    </p>
  </div>
);

const AboutChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f9f8f8]">
      <div className="container">
        
        {/* YUQORI BO'LIM: Matn va Rasm */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* CHAP TOMON: Matn va Features */}
          <div className="space-y-8">
            
            {/* Sarlavhalar */}
            <div>
              {/* Why Choose us? - Yellowtail */}
              <p 
                className="text-[#7eb693] text-3xl md:text-4xl mb-3"
                style={{ fontFamily: 'var(--third-family)' }}
              >
                Why Choose us?
              </p>
              
              {/* Asosiy sarlavha - Roboto Bold */}
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#274c5b] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-family)' }}
              >
                We do not buy from the open market & traders.
              </h2>
              
              {/* Tavsif */}
              <p 
                className="text-[#525c60] text-lg leading-relaxed"
                style={{ fontFamily: 'var(--second-family)' }}
              >
                Simply dummy text of the printing and typesetting industry. Lorem
                had ceased to been the industry's standard the 1500s, when an
                unknown
              </p>
            </div>

            {/* Xususiyatlar Ro'yxati */}
            <div className="space-y-6">
              
              {/* 100% Natural Product */}
              <div className="flex items-start gap-4 bg-[#eff6f1] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#7eb693] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 
                    className="text-xl font-bold text-[#274c5b] mb-2"
                    style={{ fontFamily: 'var(--font-family)' }}
                  >
                    100% Natural Product
                  </h4>
                  <p 
                    className="text-[#525c60] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--second-family)' }}
                  >
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
              </div>

              {/* Increases resistance */}
              <div className="flex items-start gap-4 bg-[#eff6f1] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#7eb693] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 
                    className="text-xl font-bold text-[#274c5b] mb-2"
                    style={{ fontFamily: 'var(--font-family)' }}
                  >
                    Increases resistance
                  </h4>
                  <p 
                    className="text-[#525c60] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--second-family)' }}
                  >
                    Filling, and temptingly healthy, our Solana Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Rasm */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={AboutUsImage}
              alt="Fresh Organic Products"
              className="w-full max-w-[600px] h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* PASTKI BO'LIM: 4 ta Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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