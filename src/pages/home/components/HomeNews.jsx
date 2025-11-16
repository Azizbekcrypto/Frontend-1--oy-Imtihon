import React from 'react';
import { Button } from '../../../components/button';
import { NewsPersonIcon } from '../../../assets/icons/NewsPersonIcon';
import newsBanner from '../../../assets/images-png/newsBanner.png';
import newsBanner2 from '../../../assets/images-png/newsBanner2.png';
import { NovemberIcon25 } from '../../../assets/icons/25';

const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const NewsCard = ({ img, title, author, DateIcon }) => {
  return (
    <div className="relative w-[650px]">
      <div className="relative h-[450px] rounded-[30px] overflow-hidden">
        <img src={img} alt="news" className="w-full h-full object-cover" />
        <div className="absolute top-6 left-6">
          <DateIcon />
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[70px] w-[600px] bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="px-8 py-7">
          <div className="flex items-center gap-2 mb-3">
            <NewsPersonIcon />
            <p className="text-[#525c60] text-[15px]">
              By <span className="font-semibold text-[#274c5b]">{author}</span>
            </p>
          </div>

          <h3 className="text-[#274c5b] font-extrabold text-[22px] leading-[1.3] mb-3">
            {title}
          </h3>

          <p className="text-[#525c60] text-[15px] mb-5 leading-relaxed">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>

          <Button
            text="Read More"
            bgcolor="bg-[#EFD372]"
            textcolor="text-[#274c5b]"
            classname="hover:bg-[#e5c560] inline-flex text-[16px] font-bold"
            icon={<ArrowIcon />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export const HomeNews = () => {
  const newsData = [
    {
      id: 1,
      img: newsBanner,
      title: 'The Benefits of Vitamin D & How to Get It',
      author: 'Rachi Card',
      DateIcon: NovemberIcon25,
    },
    {
      id: 2,
      img: newsBanner2,
      title: 'Our Favourite Summertime Tommeto',
      author: 'Rachi Card',
      DateIcon: NovemberIcon25,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <p
              className="text-[#7EB693] text-[36px] mb-1"
              style={{ fontFamily: 'var(--third-family)' }}
            >
              News
            </p>
            <h2
              className="text-[#274c5b] font-extrabold text-[48px] max-w-[702px] leading-[1.15]"
              style={{ fontFamily: 'var(--font-family)' }}
            >
              Discover weekly content about organic food, & more
            </h2>
          </div>

          <Button
            text="Load More"
            bgcolor="bg-white"
            textcolor="text-[#274c5b]"
            classname="border border-[#274c5b] hover:bg-[#274c5b] hover:text-white"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
            iconPosition="right"
          />
        </div>

        {/* CARDS */}
        <div className="flex gap-8 justify-between pb-28 ">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
