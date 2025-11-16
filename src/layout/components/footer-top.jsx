import React from 'react';
import subscribe from '../../assets/images-png/FootBan.png';
import { BoottomFull } from '../../components/BoottoomFull';

export const FooterTop = () => {
  return (
    <section
      className="relative w-full max-w-[1400px] h-[320px] mx-auto my-20 rounded-[30px] overflow-hidden"
      style={{
        backgroundImage: `url(${subscribe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay (agar kerak bo'lsa) */}
      <div className="absolute inset-0 bg-[#68caf1]/10"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-16 max-w-[1300px] mx-auto">
        {/* Chap tomon - Matn */}
        <div className="max-w-[450px]">
          <h2
            className="text-white text-5xl md:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: 'var(--font-family)' }}
          >
            Subscribe to our Newsletter
          </h2>
        </div>

        {/* O'ng tomon - Form */}
        <div className="flex items-center gap-3">
          {/* Input */}
          <input
            type="email"
            placeholder="Your Email Address"
            className="
              w-[450px] h-[80px] 
              bg-white 
              rounded-2xl 
              px-6 
              text-lg
              text-[#525c60]
              placeholder:text-[#ababab] 
              placeholder:italic
              outline-none
              focus:ring-2 
              focus:ring-[#274c5b]
              transition-all
            "
            style={{ fontFamily: 'var(--second-family)' }}
          />

          {/* Subscribe Button */}
          <BoottomFull size="xl" variant="primary">
            Subscribe
          </BoottomFull>
        </div>
      </div>
    </section>
  );
};
