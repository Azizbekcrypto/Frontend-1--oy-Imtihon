import React from 'react';
import { Link } from 'react-router-dom';
import PagesSvg from '../../assets/pages-right.svg';


export const Navbar = () => {
  return (
    <nav className="flex items-center gap-10 flex-1 justify-center">
      <Link
        to={'/'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group"
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to={'/about'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group"
      >
        About
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to={'/pages'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group flex items-center gap-2"
      >
        Pages
        <img src={PagesSvg} alt="PageIcon" className="w-2.5 h-2.5" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to={'/shop'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group"
      >
        Shop
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to={'/projects'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group"
      >
        Projects
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to={'/news'}
        className="text-[#274C5B] font-semibold text-base hover:text-[#7EB693] transition-colors duration-300 relative group"
      >
        News
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7EB693] group-hover:w-full transition-all duration-300"></span>
      </Link>
    </nav>
  );
};
