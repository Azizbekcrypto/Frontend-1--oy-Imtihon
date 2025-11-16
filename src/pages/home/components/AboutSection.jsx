import React from 'react';
import CitrusFruits from '../../../assets/images-png/about-fruits.png';
import LeafIcon from '../../../assets/images-png/leaf-icon.png';
import QualityIcon from '../../../assets/images-png/quality-icon.png';
import { Button } from '../../../components/button';

export const AboutSection = () => {
  return (
    <section className="w-full bg-[#F9F8F8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start ">
            <img
              src={CitrusFruits}
              alt="Fresh Citrus Fruits"
              className="w-full max-w-[867px] h-auto object-contain "
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-[#7eb693] text-4xl mb-2"
                style={{ fontFamily: 'var(--third-family)' }}
              >
                About Us
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#274C5B] leading-tight">
                We Believe in Working
                <br />
                Accredited Farmers
              </h2>
            </div>

            <p className="text-[#525C60] leading-relaxed text-base md:text-lg">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className="space-y-4 mt-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 p-6 border-2 border-[#8BC34A] border-dashed rounded-lg bg-white">
                <img
                  src={LeafIcon}
                  alt="Organic"
                  className="w-16 h-16 flex-shrink-0 object-contain"
                />
                <div>
                  <h3 className="font-bold text-[#274C5B] text-xl mb-2">
                    Organic Foods Only
                  </h3>
                  <p className="text-[#525C60] text-sm">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem ipsum
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4">
                <img
                  src={QualityIcon}
                  alt="Quality"
                  className="w-16 h-16 flex-shrink-0 object-contain"
                />
                <div>
                  <h3 className="font-bold text-[#274C5B] text-xl mb-2">
                    Quality Standards
                  </h3>
                  <p className="text-[#525C60] text-sm">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem ipsum
                  </p>
                </div>
              </div>
              {/* Explore More tugmasi */}
              <div className="mt-10">
                <Button
                  text="Shop Now"
                  bgcolor="bg-[#274c5b]"
                  textcolor="text-white"
                  icon={<span className="text-xl">→</span>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
