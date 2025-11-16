import React from 'react';
import Tarelka from '../../../assets/images-png/AboutTovoq.png';
import Traktor from '../../../assets/images-png/TraktorchaAbout.png';
import Shakl from '../../../assets/images-png/ShaklchaAboutUs.png';
import { Button } from '../../../components/button';

export const AboutContent = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CHAP TOMON - Rasmlar qismi */}
          <div className="relative w-full h-[600px]">
            {/* Asosiy doira rasm - Tarelka */}
            <div className="absolute top-3/6 left-3/6 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px]">
              <img
                src={Tarelka}
                alt="Organic Food"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Orqa fon shakl (agar kerak bo'lsa) */}
            <div className="absolute inset-0 -z-10">
              <img
                src={Shakl}
                alt=""
                className="w-full h-full object-contain opacity-5"
              />
            </div>
          </div>

          {/* O'NG TOMON - Matn qismi */}
          <div className="space-y-6">
            {/* About Us yozuvi (Yellowtail font) */}
            <h3
              className="text-[#7eb693] text-4xl mb-2"
              style={{ fontFamily: 'var(--third-family)' }}
            >
              About Us
            </h3>

            {/* Asosiy sarlavha */}
            <h2
              className="text-[#274c5b] text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-family)' }}
            >
              We do Creative Things for Success
            </h2>

            {/* Birinchi paragraf */}
            <p
              className="text-[#525c60] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--second-family)' }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            {/* Ikkinchi paragraf */}
            <p
              className="text-[#525c60] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--second-family)' }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            {/* Ikki xil xususiyat (grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Modern Agriculture Equipment */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex-shrink-0 bg-[#f9f8f8] rounded-2xl flex items-center justify-center">
                  <img
                    src={Traktor}
                    alt="Tractor"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h4
                    className="text-[#274c5b] font-bold text-xl"
                    style={{ fontFamily: 'var(--font-family)' }}
                  >
                    Modern Agriculture Equipment
                  </h4>
                </div>
              </div>

              {/* No growth hormones */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex-shrink-0 bg-[#f9f8f8] rounded-2xl flex items-center justify-center">
                  <img
                    src={Shakl}
                    alt="Organic"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h4
                    className="text-[#274c5b] font-bold text-xl"
                    style={{ fontFamily: 'var(--font-family)' }}
                  >
                    No growth hormones are used
                  </h4>
                </div>
              </div>
            </div>

            {/* Explore More tugmasi */}
            <div className="mt-10">
              <Button
                text="Explore More"
                bgcolor="bg-[#274c5b]"
                textcolor="text-white"
                icon={<span className="text-xl">→</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
