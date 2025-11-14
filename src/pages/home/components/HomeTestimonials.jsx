import React from 'react';
// Rasmlarni import qilish
import Background from '../../../assets/images-png/TestimonialBackground.png'; 
import Avatar from '../../../assets/images-png/SaraTaylorProfile.png'; 
// Yulduzcha ikonasini import qilish (agar sizda mavjud bo'lmasa, uni yaratishingiz kerak)
import { Star } from '../../../assets/icons/star'; // Sizning loyihangizdagi Star komponentini chaqirdik

// Statistika ma'lumotlari
const statistics = [
  { count: '100%', label: 'Organic' },
  { count: '285', label: 'Active Product' },
  { count: '350+', label: 'Organic Orchads' },
  { count: '25+', label: 'Years of Farming' },
];

export const HomeTestimonials = () => {
  return (
    // Background rasm, ichki kontentni markazlashtirish va padding
    <section 
      className="relative w-full py-20 md:py-32 bg-[#F9F8F8] overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover', // Rasmni seksiyani to'ldirishga moslashtiramiz
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 text-center z-10 relative">
        
        {/* Sarlavha qismi */}
        <p className="font-serif italic text-[#68A47F] text-xl mb-2">Testimonial</p>
        <h2 className="text-5xl font-extrabold text-[#274C5B] mb-10">
          What Our Customer Saying?
        </h2>

        {/* Mijoz Fikri */}
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <img 
              src={Avatar} 
              alt="Sara Taylor Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
          
          {/* Yulduzlar */}
          <div className="flex justify-center gap-1 mb-4">
            {Array(5).fill(0).map((_, i) => (
              // Star komponentingiz rangini moslang, masalan sariq rangga
              <Star key={i} className="text-yellow-400 w-5 h-5" /> 
            ))}
          </div>

          <p className="text-[#525252] italic mb-6">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
          
          <h4 className="text-[#274C5B] font-semibold text-lg">Sara Taylor</h4>
          <p className="text-[#525252] text-sm mb-12">Consumer</p>
          
          {/* Slider navigatsiya nuqtalari */}
          <div className="flex justify-center gap-2 mb-16">
            <span className="w-2 h-2 bg-[#7EB693] rounded-full"></span>
            <span className="w-2 h-2 bg-[#D4D4D4] rounded-full"></span>
            <span className="w-2 h-2 bg-[#D4D4D4] rounded-full"></span>
          </div>
        </div>

        {/* Statistika/Counter Qismi */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
          {statistics.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Sanagich qutisi */}
              <div 
                className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center 
                         rounded-full border-4 border-[#7EB693] 
                         bg-white shadow-xl mb-3"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-[#274C5B]">
                  {item.count}
                </span>
              </div>
              <p className="text-[#274C5B] font-medium text-lg">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};