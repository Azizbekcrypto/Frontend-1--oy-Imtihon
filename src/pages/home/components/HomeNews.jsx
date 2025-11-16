import React from 'react';
import { Button } from '../../../components/button';
import { NewsPersonIcon } from '../../../assets/icons/NewsPersonIcon';
import newsBanner from '../../../assets/images-png/newsBanner.png';
import newsBanner2 from '../../../assets/images-png/newsBanner2.png';
import { NovemberIcon25 } from '../../../assets/icons/25';

// Arrow icon
const ArrowIcon = () => (
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
);

// NEWS CARD
const NewsCard = ({ img, title, author, DateIcon }) => {
  return (
    <div className="relative w-[600px]">
      {/* IMAGE */}
      <div className="relative h-[350px]">
        <img
          src={img}
          alt="news"
          className="w-full h-full rounded-[30px] object-cover"
        />

        {/* DATE ICON */}
        <div className="absolute top-6 left-6">
          <DateIcon />
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[95px] w-[550px] bg-white rounded-[30px] shadow-xl">
        <div className="px-10 py-8">
          {/* AUTHOR */}
          <div className="flex items-center gap-2 mb-3">
            <NewsPersonIcon />
            <p className="text-[#525c60] text-[16px]">
              By <span className="font-semibold text-[#274c5b]">{author}</span>
            </p>
          </div>

          {/* TITLE */}
          <h3 className="text-[#274c5b] font-extrabold text-[26px] leading-tight mb-3">
            {title}
          </h3>

          {/* DESC */}
          <p className="text-[#525c60] text-[16px] mb-6 leading-relaxed">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>

          {/* BUTTON */}
          <Button
            text="Read More"
            bgcolor="bg-[#efd372]"
            textcolor="text-[#274c5b]"
            classname="hover:bg-[#e5c560] inline-flex px-6"
            icon={<ArrowIcon />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT
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
    <section className="w-full py-40 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 mb-25">
          <div>
            <p
              className="text-[#7eb693] text-[40px]"
              style={{ fontFamily: 'var(--third-family)' }}
            >
              News
            </p>
            <h2
              className="text-[#274c5b] font-extrabold text-[56px] max-w-[650px] leading-[1.2]"
              style={{ fontFamily: 'var(--font-family)' }}
            >
              Discover weekly content about organic food, & more
            </h2>
          </div>

          <Button
            text="More News"
            bgcolor="bg-[#274c5b]"
            textcolor="text-white"
            classname="hover:bg-[#1f3a47] shadow-md"
            icon={
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                <ArrowIcon />
              </div>
            }
            iconPosition="right"
          />
        </div>

        {/* CARDS */}
        <div className="flex gap-16 justify-center">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
